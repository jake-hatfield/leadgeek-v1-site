require("dotenv").config()
const MongoClient = require("mongodb").MongoClient
const MONGODB_URI = process.env.GATSBY_MONGODB_URI
const DB_NAME = process.env.GATSBY_DB_NAME
const CO_NAME = process.env.GATSBY_CO_NAME

const bcrypt = require("bcryptjs")
const crypto = require("crypto")
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
  const { name, email, password } = data

  // Ensure we have the required data before proceeding
  if (!name || !email || !password) {
    const message = "Required information is missing."
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

    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: "success",
        message,
      }),
    }
  } catch (error) {
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

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  //   Ensure we're making a POST request
  if (event.httpMethod !== "POST") {
    return {
      statusCode,
      headers,
      body: "This was not a POST request.",
    }
  }
  // Parse the body into an object
  const data = JSON.parse(event.body)
  const db = await connectToDatabase(MONGODB_URI)
  try {
    return pushToDatabase(db, data)
  } catch (error) {
    console.log(error.message)
  }
}
