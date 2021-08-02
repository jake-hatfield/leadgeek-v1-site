require("dotenv").config()
const MongoClient = require("mongodb").MongoClient
const MONGODB_URI = process.env.GATSBY_MONGODB_URI
const DB_NAME = process.env.GATSBY_DB_NAME
const CO_NAME = process.env.GATSBY_CO_NAME

const bcrypt = require("bcryptjs")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const User = require("../models/User")

const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

let cachedDb = null
const connectToDatabase = async uri => {
  if (cachedDb) return cachedDb
  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  })
  cachedDb = client.db(DB_NAME)
  return cachedDb
}

const pushToDatabase = async (db, data) => {
  const { name, email, password, audience, platform } = data

  // Ensure we have the required data before proceeding
  if (!name || !email || !password) {
    const message = "Required information is missing."
    console.log(message)
    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: "failed",
        message,
      }),
    }
  }

  try {
    let user = await db.collection(CO_NAME).findOne({ email })
    if (user) {
      return {
        statusCode,
        headers,
        body: JSON.stringify({
          status: "success",
          message: "User found",
        }),
      }
    }
    // encrypt password
    const salt = await bcrypt.genSalt(10)
    encryptedPassword = await bcrypt.hash(password, salt)

    // create LGID
    const lgid = await crypto.randomBytes(4).toString("hex")

    // create user
    user = await new User({
      name,
      email,
      password: encryptedPassword,
      role: "affiliate",
      referrals: {
        referrer: {
          isReferrer: false,
          lgid,
          dateCreated: Date.now(),
        },
      },
      resetPasswordToken: null,
      resetPasswordExpires: null,
    })

    await db.collection(CO_NAME).insertMany([user])
    const message = "User successfully added."
    console.log(message)

    // send email
    const transporter = nodemailer.createTransport({
      name: "improvmx",
      host: "smtp.improvmx.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GATSBY_EMAIL_ADDRESS,
        pass: process.env.GATSBY_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: true,
    })

    const mailOptions = {
      from: '"Leadgeek Support" <support@leadgeek.io>',
      to: `"Leadgeek Affiliates" <affiliates@leadgeek.io`,
      subject: "New Affiliate Submission",
      text:
        `${name} (${email}) has submitted an affiliate application.\n\n` +
        "Details:\n\n" +
        `Audience size: ${audience}\n` +
        `Method(s) of promotion: ${platform}\n\n` +
        "Please reply in the next 24 hours with your approval decision and adjust their affiliate status accordingly.",
    }

    console.log("Sending email...")
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
      } else {
        console.log("Server is ready to take our messages")
        transporter.sendMail(mailOptions, (err, res) => {
          if (err) {
            console.error("There was an error sending the email: ", err)
            return {
              statusCode,
              headers,
              body: JSON.stringify({
                status: "failure",
                message: "There was an error. Please contact support",
              }),
            }
          } else {
            console.log("Email sent successfully. Here are the details:", res)
            return {
              statusCode,
              headers,
              body: JSON.stringify({
                status: "success",
                message,
              }),
            }
          }
        })
      }
    })
  } catch (error) {
    console.log("There was an error.")
    console.log(error.message)
    return {
      statusCode: 424,
      headers,
      body: JSON.stringify({
        status: "failed",
        message: error.message,
      }),
    }
  }
}

exports.handler = (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode,
      headers,
      body: "This was not a POST request.",
    }
  }
  // Parse the body into an object
  const data = JSON.parse(event.body)
  connectToDatabase(MONGODB_URI).then(db => pushToDatabase(db, data))
}
