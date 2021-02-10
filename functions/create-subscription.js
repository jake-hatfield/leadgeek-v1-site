require("dotenv").config()

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)
const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

exports.handler = async function (event, context, callback) {
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
  if (!data.customerId || !data.paymentMethod.id || !data.priceId) {
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
  // payment method handling
  try {
    //   get all payment methods on file
    const { data: customerPaymentMethods } = await stripe.paymentMethods.list({
      customer: data.customerId,
      type: "card",
    })
    // see if any match the last 4 of the card being tried now
    const checkPaymentMethodMatch = customerPaymentMethods.some(
      method => method.card.last4 === data.paymentMethod.card.last4
    )
    // if there's a match, just use the one being tried rather than creating a duplicate
    if (checkPaymentMethodMatch) {
      const paymentMethodMatch = customerPaymentMethods.find(
        method => method.card.last4 === data.paymentMethod.card.last4
      )
      const matchedID = paymentMethodMatch.id
      await stripe.paymentMethods.attach(matchedID, {
        customer: data.customerId,
      })
    } else {
      // attach the new form of payment
      await stripe.paymentMethods.attach(data.paymentMethod.id, {
        customer: data.customerId,
      })
      // Update the payment method/customer in Stripe
      await stripe.customers.update(data.customerId, {
        invoice_settings: {
          default_payment_method: data.paymentMethod.id,
        },
      })
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode,
      headers,
      body: error.raw.message,
    }
  }

  //   proceed with the subscription in Stripe
  try {
    //   check if already subscribed
    const { data: customerSubscriptions } = await stripe.subscriptions.list({
      customer: data.customerId,
      limit: 8,
    })
    const checkSubscriptionMatch = customerSubscriptions.some(
      subscription => subscription.plan.id === data.priceId
    )
    if (checkSubscriptionMatch) {
      console.log("teste")
      return {
        statusCode,
        headers,
        body: JSON.stringify({
          msg: "You've already subscribed to this plan.",
        }),
      }
    } else {
      // subscription for this plan doesn't yet exist, so create it
      const subscription = await stripe.subscriptions.create({
        customer: data.customerId,
        items: [{ price: data.priceId }],
      })
      return {
        statusCode,
        headers,
        body: JSON.stringify(subscription),
      }
      //   callback(null, JSON.stringify(response))
    }
  } catch (error) {
    console.log(error)
  }
}
