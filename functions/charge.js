require("dotenv").config()
const axios = require("axios")

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

exports.handler = async function (event) {
  // Ensure we're making a POST request
  if (event.httpMethod !== "POST") {
    return {
      statusCode,
      headers,
      body: "This was not a POST request.",
    }
  }

  // Parse the body into an object
  const data = JSON.parse(event.body)

  // Ensure we have the required data before proceeding
  if (!data.amount) {
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

  // Attempt a paymentIntent to Stripe and return the client_secret if successful
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: "usd",
    })

    return {
      statusCode,
      headers,
      body: paymentIntent.client_secret,
    }
  } catch (err) {
    console.error(err.message)

    return {
      statusCode: 424,
      headers,
      body: JSON.stringify({
        status: "failed",
        message: err.message,
      }),
    }
  }
}
