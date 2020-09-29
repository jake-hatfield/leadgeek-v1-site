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
  const [checkedTOS, setCheckedTOS] = useState(false)
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

    if (!checkedTOS) {
      setCheckoutError("Please accept the terms of service.")
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
    <form onSubmit={handleFormSubmit} className="my-3 max-w-xs">
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
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="ml-2 text-xs">{checkoutError}</p>
          </div>
        </aside>
      )}
      {/* TIP always disable your submit button while processing payments */}
      <div className="mt-4 md:flex md:items-center">
        <label className="flex items-center text-xs text-gray-500">
          <input
            className="mr-2 h-4 w-4 leading-tight form-checkbox text-purple-600"
            type="checkbox"
            checked={checkedTOS}
            onChange={() => setCheckedTOS(!checkedTOS)}
          />
          <span className="text-xs md:text-sm">
            I agree to the{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-700 transition-colors duration-200"
            >
              terms of service
            </a>
          </span>
        </label>
      </div>
      <button
        disabled={isProcessing || !stripe}
        type="submit"
        className={`${
          isProcessing ? `bg-purple-200` : `bg-purple-600`
        } mt-4 py-2 w-full rounded-md text-white shadow-md hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline`}
      >
        {isProcessing ? "Processing..." : `Subscribe for $${price}`}
      </button>
      <div className="mt-4 flex items-start md:items-center justify-center text-xs text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 w-4 h-4 flex-none"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span>Your transaction is secured with SSL encryption</span>
      </div>
    </form>
  )
}

export default CheckoutForm
