import React, { useState } from "react"
import axios from "axios"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import addToMailchimp from "gatsby-plugin-mailchimp"
import FormField from "../components/formField"

const CheckoutForm = ({
  plan,
  productSelected,
  price,
  onSuccessfulCheckout,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })
  const { email, password, firstName, lastName } = formData
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkedTOS, setCheckedTOS] = useState(false)
  const [count, setCount] = useState(1)
  const [checkoutError, setCheckoutError] = useState()
  const stripe = useStripe()
  const elements = useElements()
  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  }
  const formPagniationTitles = [
    {
      title: "Account",
      numberClasses: `${
        count < 2 ? "bg-purple-600 text-white" : "bg-teal-200 text-teal-600"
      }`,
      titleClasses: `${count < 2 ? "text-gray-900" : "text-gray-500"}`,
    },
    {
      title: "Billing",
      numberClasses: `${
        count === 2 ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
      }`,
      titleClasses: `${count === 2 ? "text-gray-900" : "text-gray-500"}`,
    },
  ]
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const onSubmit = async e => {
    e.preventDefault()
    const firstName = e.target.firstname.value.trim()
    const firstNameCapitalized =
      firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase()
    const lastName = e.target.lastname.value.trim()
    const lastNameCapitalized =
      lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase()
    const name = `${firstNameCapitalized} ${lastNameCapitalized}`
    const email = e.target.email.value.trim()
    // check for default error states
    if (!stripe || !elements) {
      return
    }
    if (!checkedTOS) {
      setCheckoutError("Please accept the terms of service.")
      return
    }
    // create customer
    try {
      setProcessingTo(true)
      const lowerCaseEmail = email.toLowerCase()
      const { data: customer } = await axios.post(
        "/.netlify/functions/create-customer",
        {
          name: name,
          email: lowerCaseEmail,
        }
      )
      const cardElement = elements.getElement("card")
      const priceId = productSelected
      //  create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      })
      if (error) {
        console.log("Create payment method error:", error)
        setProcessingTo(false)
        setCheckoutError(error.message)
        return
      }
      const { data: subscriptionRes } = await axios.post(
        "/.netlify/functions/create-subscription",
        {
          customerId: customer,
          paymentMethod: paymentMethod,
          priceId: priceId,
        }
      )
      if (subscriptionRes === "active") {
        const { data: userRes } = await axios.post(
          "/.netlify/functions/create-user",
          {
            name,
            email: lowerCaseEmail,
            customerId: customer,
            paymentMethod,
            subId: priceId,
          }
        )
        console.log(userRes.message)
        if (userRes.message === "User successfully added.") {
          addToMailchimp(lowerCaseEmail, {
            FNAME: firstNameCapitalized,
            LNAME: lastNameCapitalized,
            PLAN: `${plan} subscriber`,
          })
          onSuccessfulCheckout()
        } else {
          setCheckoutError(
            "Your payment method was processed, but there was an additional error. Please contact support to finish creating your LeadGeek account."
          )
          setProcessingTo(false)
        }
      } else if (
        subscriptionRes === "You've already subscribed to this plan."
      ) {
        setCheckoutError(subscriptionRes)
        setProcessingTo(false)
        return
      } else {
        setCheckoutError(subscriptionRes)
        setProcessingTo(false)
        return
      }
    } catch (error) {
      console.log(error.message)
      setCheckoutError(
        "Your payment could not be processed. Please make sure your information is correct or contact support to complete your purchase."
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
    <form onSubmit={e => onSubmit(e)} className="my-3 mx-auto max-w-xs">
      <aside className="pb-3 border-b-2 border-gray-100">
        <h3 className="mt-3 mb-5 text-lg text-gray-900 font-bold">
          {count === 1
            ? "Create a LeadGeek account"
            : "Enter your billing information"}
        </h3>
        <div className="flex">
          {formPagniationTitles.map((option, i) => (
            <div key={i} className="even:ml-8 flex items-center">
              <span
                className={`py-1 px-3 rounded-md text-white text-xs font-bold ${option.numberClasses}`}
              >
                {i + 1}
              </span>
              <span
                className={`ml-2 text-sm font-semibold ${option.titleClasses}`}
              >
                {option.title}
              </span>
            </div>
          ))}
        </div>
      </aside>
      {count === 1 ? (
        <aside>
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder={"dsaunders@gmail.com"}
            value={email}
            onChange={onChange}
            required
          />
          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder={"Create a new password"}
            value={password}
            onChange={onChange}
            required
          />
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
            disabled={!email || !password || !checkedTOS}
            type="button"
            onClick={() => setCount(count + 1)}
            className={`mt-4 py-2 w-full rounded-md text-white font-semibold shadow-md bg-purple-600 hover:bg-purple-500 disabled:bg-gray-200 disabled:text-gray-500 transition-colors duration-200 focus:outline-none focus:shadow-outline`}
          >
            Next step
          </button>
        </aside>
      ) : null}
      {count === 2 ? (
        <aside>
          <div className="md:flex justify-between">
            <FormField
              name="firstname"
              label="First name"
              type="text"
              placeholder="Dave"
              value={firstName}
              onChange={onChange}
              required
            />
            <FormField
              name="lastname"
              label="Last name"
              type="text"
              placeholder="Saunders"
              value={lastName}
              width="md:ml-4"
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="card-element"
              className="block text-xs font-medium text-gray-500"
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
        </aside>
      ) : null}
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
      {count === 2 && (
        <aside>
          <button
            disabled={count > 2}
            type="button"
            onClick={() => setCount(count - 1)}
            className={`mt-4 text-sm text-gray-400 link rounded-md focus:outline-none focus:shadow-outline`}
          >
            Back
          </button>
          <button
            disabled={isProcessing || !stripe}
            type="submit"
            className={`${
              isProcessing ? `bg-gray-200` : `bg-purple-600`
            } mt-4 py-2 w-full rounded-md text-white font-semibold shadow-md hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline`}
          >
            {isProcessing ? "Processing..." : `Subscribe for $${price}`}
          </button>
        </aside>
      )}
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
        <span>Your transaction is powered by Stripe</span>
      </div>
    </form>
  )
}

export default CheckoutForm
