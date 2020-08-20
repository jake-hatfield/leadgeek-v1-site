import React, { useState } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios"

import BillingDetailsFields from "../components/billingDetailsFields"

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkoutError, setCheckoutError] = useState()

  const stripe = useStripe()
  const elements = useElements()

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  }

  const handleFormSubmit = async ev => {
    ev.preventDefault()

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
    }

    setProcessingTo(true)

    const cardElement = elements.getElement("card")

    try {
      const { data: clientSecret } = await axios.post(
        "/.netlify/functions/charge",
        {
          amount: price * 100,
        }
      )

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      })

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message)
        setProcessingTo(false)
        return
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      })

      if (error) {
        setCheckoutError(error.message)
        setProcessingTo(false)
        return
      }

      onSuccessfulCheckout()
    } catch (err) {
      console.log(err)
    }
  }

  const iframeStyles = {
    base: {
      fontSize: "15.75px",
      color: "#486581",
      iconColor: "#BCCCDC",
      ":focus": {
        outline: "0",
        boxShadow: "1px 3px 1px #4299e1",
      },
      "::placeholder": {
        color: "#BCCCDC",
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
      {/* {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>} */}
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
