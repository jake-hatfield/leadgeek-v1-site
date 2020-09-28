import React, { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import addToMailchimp from "gatsby-plugin-mailchimp"
import axios from "axios"

import BillingDetailsFields from "../components/billingDetailsFields"

const CheckoutForm = ({
  plan,
  productSelected,
  price,
  onSuccessfulCheckout,
}) => {
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkoutError, setCheckoutError] = useState()

  const stripe = useStripe()
  const elements = useElements()
  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  }
  const handleFormSubmit = async ev => {
    ev.preventDefault()
    const name = ev.target.name.value
    const email = ev.target.email.value

    if (!stripe || !elements) {
      return
    }

    setProcessingTo(true)
    const { data: customer } = await axios.post(
      "/.netlify/functions/create-customer",
      {
        name: name,
        email: email,
      }
    )

    const cardElement = elements.getElement("card")

    try {
      const priceId = productSelected
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      })
      if (error) {
        console.log("[createPaymentMethod error]", error)
        setProcessingTo(false)
        setCheckoutError(error.message)
        return
      } else {
        const paymentMethodId = paymentMethod.id
        await axios.post("/.netlify/functions/create-subscription", {
          customerId: customer,
          paymentMethodId: paymentMethodId,
          priceId: priceId,
        })
      }
      if (error) {
        setCheckoutError(error.message)
        setProcessingTo(false)
        return
      }
      addToMailchimp(email, {
        FNAME: name,
        PLAN: `${plan} subscriber`,
      })
      onSuccessfulCheckout()
    } catch (error) {
      console.log(error)
      setCheckoutError(
        "Your card was declined, please contact support to complete your purchase."
      )
      setProcessingTo(false)
    }
  }

  const iframeStyles = {
    base: {
      fontSize: "15.75px",
      color: "#486581",
      iconColor: "#BCCCDC",
      "::placeholder": {
        color: "#D9E2EC",
      },
    },
    invalid: {
      iconColor: "#fc8181",
      color: "#fc8181",
    },
    complete: {
      iconColor: "#65D6AD",
    },
  }

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
  }

  return (
    <form onSubmit={handleFormSubmit} className="mt-3 max-w-xs">
      <BillingDetailsFields />
      <div className="mt-4">
        <label
          htmlFor="card-element"
          className="block text-xs font-medium text-gray-700"
        >
          Payment information
        </label>
        <CardElement
          onChange={handleCardDetailsChange}
          id="card-element"
          className="mt-1 p-2 rounded-md text-sm border border-gray-200 shadow-xs focus:outline-none focus:shadow-outline"
          options={cardElementOpts}
        />
      </div>
      {checkoutError && (
        <aside className="mt-4 py-2 px-4 border-l-8 border-red-400 bg-red-200 text-red-500">
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <p className="ml-2 text-xs">{checkoutError}</p>
          </div>
        </aside>
      )}
      {/* TIP always disable your submit button while processing payments */}
      <button
        disabled={isProcessing || !stripe}
        type="submit"
        className={`${
          isProcessing ? `bg-purple-200` : `bg-purple-600`
        } mt-4 py-2 w-full rounded-md text-white shadow-sm hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline`}
      >
        {isProcessing ? "Processing..." : `Pay $${price}`}
      </button>
    </form>
  )
}

export default CheckoutForm
