require("dotenv").config()

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
  if (!data.name) {
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

  // Create a customer in stripe
  try {
    const createCustomer = await stripe.customers.create({
      name: data.name,
      email: data.email,
    })

    return {
      statusCode,
      headers,
      body: createCustomer.id,
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
