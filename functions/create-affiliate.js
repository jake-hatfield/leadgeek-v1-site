const bcrypt = require("bcryptjs")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const User = require("../models/User")

require("dotenv").config()
const MongoClient = require("mongodb").MongoClient
const MONGODB_URI = process.env.GATSBY_MONGODB_URI
const DB_NAME = process.env.GATSBY_DB_NAME
const CO_NAME = process.env.GATSBY_CO_NAME

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
  const { name, email, password, platform } = data

  // Ensure we have the required data before proceeding
  if (!name || !email || !password || !platform) {
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
    const encryptedPassword = await bcrypt.hash(password, salt)

    // create LGID
    const lgid = await crypto.randomBytes(8).toString("hex")

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

const sendEmail = async data => {
  //   destructure necessary items
  const { name, email, audience, platform } = data

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

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
  }
}

exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "This was not a POST request.",
    }
  }
  // Parse the body into an object
  const data = JSON.parse(event.body)

  const db = await connectToDatabase(MONGODB_URI)

  await pushToDatabase(db, data)

  try {
    console.log("Sending email...")
    await sendEmail(data)

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        message: "Affiliate submission successful.",
      }),
    }
  } catch (error) {
    console.log(error)
  }
}
