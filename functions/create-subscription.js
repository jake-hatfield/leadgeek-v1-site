require("dotenv").config()

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)
// const stripe = require("stripe")(
//   "sk_test_51HF2gpDdWoP4Ck9RQjCKZsDrvydigroixaCEfwsARdYmqr7RYWUJObpoLwQjWNwYel1wSqWrkXugIzaNe9xpwAXl00y3LfKcRI"
// )

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
  if (!data.customerId || !data.paymentMethodId || !data.priceId) {
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
    await stripe.paymentMethods.attach(data.paymentMethodId, {
      customer: data.customerId,
    })
  } catch (error) {
    console.log(error)
  }

  await stripe.customers.update(data.customerId, {
    invoice_settings: {
      default_payment_method: data.paymentMethodId,
    },
  })
  const subscription = await stripe.subscriptions.create({
    customer: data.customerId,
    items: [{ price: data.priceId }],
  })

  return {
    statusCode,
    headers,
    body: subscription.status,
  }
}
//   catch (err) {
//     console.error(err.message)

//     return {
//       statusCode: 424,
//       headers,
//       body: JSON.stringify({
//         status: "failed",
//         message: err.message,
//       }),
//     }
//   }
// }
