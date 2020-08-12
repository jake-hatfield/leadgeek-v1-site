import React from "react"
import { loadStripe } from "@stripe/stripe-js"

import Layout from "../components/layout"

const stripePromise = loadStripe(
  "pk_test_51HF2gpDdWoP4Ck9RZqPhljVm5WMH4cwsMNSeMuevI8lWugnJQryfuvzx6aExHTTVBGU8woKxosaCzH4VXsKAgfsQ00Y7QBWKlc"
)

const PricingPage = () => {
  const handleBundleClick = async event => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1HF3YTDdWoP4Ck9RztBRWzsp", // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "http://localhost:8000/order-confirmation",
      cancelUrl: "http://localhost:8000/pricing",
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  const handleGrowClick = async event => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1HF3JwDdWoP4Ck9RmZZ3IDEs", // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "http://localhost:8000/order-confirmation",
      cancelUrl: "http://localhost:8000/pricing",
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  const handleProClick = async event => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1HF3JwDdWoP4Ck9RmZZ3IDEs", // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "http://localhost:8000/order-confirmation",
      cancelUrl: "http://localhost:8000/pricing",
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  return (
    <Layout>
      <section className="container">
        <button role="link" onClick={handleGrowClick}>
          Checkout
        </button>
        <button role="link" onClick={handleBundleClick}>
          Checkout
        </button>
        <button role="link" onClick={handleProClick}>
          Checkout
        </button>
      </section>
    </Layout>
  )
}

export default PricingPage
