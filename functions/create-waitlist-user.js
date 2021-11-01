const axios = require("axios")

const WaitlistUser = require("../models/WaitlistUser")

require("dotenv").config()

const { ObjectId } = require("mongodb")
const MongoClient = require("mongodb").MongoClient
const MONGODB_URI = process.env.GATSBY_MONGODB_URI
const DB_NAME = process.env.GATSBY_DB_NAME
const CO_NAME = process.env.GATSBY_CO_NAME_2

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
  const { name, email, plan } = data

  //   Ensure we have the required data before proceeding
  if (!name || !email || !plan) {
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
    const user = await db.collection(CO_NAME).findOne({ email })

    if (user) {
      console.log("Waitlist user found")

      const planExists = (plans, planType) => {
        return plans.some(plan => {
          return plan.type === planType
        })
      }

      //   check if user is already on the waitlist for this plan
      if (planExists(user.plans, plan)) {
        return {
          statusCode,
          headers,
          body: JSON.stringify({
            status: "success",
            message: "Waitlist user found, plan already exists",
          }),
        }
      }

      db.collection(CO_NAME).updateOne(
        { email },
        {
          $push: {
            plans: {
              _id: new ObjectId(),
              type: plan,
              active: true,
            },
          },
        }
      )
      user.plans.push({ type: plan, active: true })

      if (process.env.NODE_ENV === "production") {
        await axios.post(
          "https://api.netlify.com/build_hooks/617853f27edc3d00a7908dc1"
        )
      }

      return {
        statusCode,
        headers,
        body: JSON.stringify({
          status: "success",
          message: "Waitlist user found, plan added",
        }),
      }
    }

    // create user
    const newUser = await new WaitlistUser({
      name,
      email,
      plans: [{ type: plan, active: true }],
    })

    await db.collection(CO_NAME).insertOne(newUser)
    const message = "User successfully added."

    await axios.post(
      "https://api.netlify.com/build_hooks/617853f27edc3d00a7908dc1"
    )

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
