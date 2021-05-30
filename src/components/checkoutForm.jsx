import React, { useState, useEffect } from "react"

import axios from "axios"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import addToMailchimp from "gatsby-plugin-mailchimp"

import FormField from "components/utils/FormField"
import PasswordFormField from "components/utils/PasswordFormField"

import Bullet from "assets/svgs/bullet.svg"

const CheckoutForm = ({
  plan,
  productSelected,
  featureList,
  price,
  discount,
  formData,
  setFormData,
  onSuccessfulCheckout,
}) => {
  const { email, password, firstName, lastName } = formData
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkedTOS, setCheckedTOS] = useState(false)
  const [count, setCount] = useState(1)

  useEffect(() => {
    if (checkedTOS) {
      setCheckoutError("")
    }
  }, [checkedTOS])

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true)
  }
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
        count < 2 ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-500"
      } inter`,
      titleClasses: `${count < 2 ? "text-gray-900" : "text-gray-500"} inter`,
    },
    {
      title: "Billing",
      numberClasses: `${
        count === 2 ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-500"
      } inter`,
      titleClasses: `${count === 2 ? "text-gray-900" : "text-gray-500"} inter`,
    },
  ]
  let listSize = 4
  //   password validation
  const [lengthValidated, setLengthValidated] = useState(false)
  const [emailValidated, setEmailValidated] = useState(false)
  const [pwEmailValidated, setpwEmailValidated] = useState(false)
  const [commonPasswordValidated, setCommonPasswordValidated] = useState(false)
  const notValidPassword =
    !lengthValidated || !pwEmailValidated || !commonPasswordValidated
  const handleNextPage = (email, notValidPassword, checkedTOS) => {
    console.log(notValidPassword)
    if (!email) {
      return setCheckoutError("A valid email is required.")
    } else if (notValidPassword) {
      return setCheckoutError("A valid password is required.")
    } else if (!checkedTOS) {
      setCheckoutError("Please accept the terms of service.")
    } else {
      setCount(count + 1)
      setCheckoutError("")
    }
  }
  const successStyles = "inline-block h-4 w-4 text-teal-400"
  const errorStyles = "inline-block h-4 w-4 text-red-400"
  const securityMeasureBullets = [
    {
      svg: (
        <span>
          {lengthValidated ? (
            <Bullet className={successStyles} />
          ) : (
            <Bullet className={errorStyles} />
          )}
        </span>
      ),
      content: "Is 7 characters or longer",
    },
    {
      svg: (
        <span>
          {pwEmailValidated ? (
            <Bullet className={successStyles} />
          ) : (
            <Bullet className={errorStyles} />
          )}
        </span>
      ),
      content: `Does not match or significantly contain your email, e.g. don't use "email123"`,
    },
    {
      svg: (
        <span>
          {commonPasswordValidated ? (
            <Bullet className={successStyles} />
          ) : (
            <Bullet className={errorStyles} />
          )}
        </span>
      ),
      content: (
        <span>
          Is not a member of this list of{" "}
          <a
            href="https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-100.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-link"
          >
            truly terrible passwords
          </a>
        </span>
      ),
    },
  ]
  const terriblePasswords = [
    "123456",
    "password",
    "12345678",
    "qwerty",
    "123456789",
    "12345",
    "1234",
    "111111",
    "1234567",
    "dragon",
    "123123",
    "baseball",
    "abc123",
    "football",
    "monkey",
    "letmein",
    "696969",
    "shadow",
    "master",
    "666666",
    "qwertyuiop",
    "123321",
    "mustang",
    "1234567890",
    "michael",
    "654321",
    "pussy",
    "superman",
    "1qaz2wsx",
    "7777777",
    "fuckyou",
    "121212",
    "000000",
    "qazwsx",
    "123qwe",
    "killer",
    "trustno1",
    "jordan",
    "jennifer",
    "zxcvbnm",
    "asdfgh",
    "hunter",
    "buster",
    "soccer",
    "harley",
    "batman",
    "andrew",
    "tigger",
    "sunshine",
    "iloveyou",
    "fuckme",
    "2000",
    "charlie",
    "robert",
    "thomas",
    "hockey",
    "ranger",
    "daniel",
    "starwars",
    "klaster",
    "112233",
    "george",
    "asshole",
    "computer",
    "michelle",
    "jessica",
    "pepper",
    "1111",
    "zxcvbn",
    "555555",
    "11111111",
    "131313",
    "freedom",
    "777777",
    "pass",
    "fuck",
    "maggie",
    "159753",
    "aaaaaa",
    "ginger",
    "princess",
    "joshua",
    "cheese",
    "amanda",
    "summer",
    "love",
    "ashley",
    "6969",
    "nicole",
    "chelsea",
    "biteme",
    "matthew",
    "access",
    "yankees",
    "987654321",
    "dallas",
    "austin",
    "thunder",
    "taylor",
    "matrix",
    "minecraft",
  ]
  useEffect(() => {
    if (email) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setCheckoutError("Invalid email address.")
        setEmailValidated(false)
      } else {
        setCheckoutError("")
        setEmailValidated(true)
      }
    }
    if (password) {
      setCommonPasswordValidated(false)
      const stringBeforeAt = string => {
        let splitString = string.split("@")
        return splitString[0]
      }
      if (email) {
        let emailBeforeAt = stringBeforeAt(email)
        if (password.length >= 7) {
          setLengthValidated(true)
          if (password.includes(emailBeforeAt)) {
            setpwEmailValidated(false)
            setCheckoutError(
              "The password is too similar to your email. Please choose another password."
            )
          } else if (!terriblePasswords.includes(password)) {
            setCheckoutError("")
            setCommonPasswordValidated(true)
          } else {
            setCommonPasswordValidated(false)
            setCheckoutError(
              "The provided password is too common. Please pick a more unique password."
            )
          }
        } else {
          setCheckoutError("")
          setpwEmailValidated(true)
        }
        if (password.length < 7) {
          setLengthValidated(false)
          return
        }
      } else {
        setCheckoutError("Please enter your email first")
      }
    } else {
      setpwEmailValidated(false)
      setLengthValidated(false)
      setCommonPasswordValidated(false)
      setCheckoutError("")
    }
  }, [password, email])
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }
  const onSubmit = async e => {
    e.preventDefault()
    const firstNameCapitalized =
      firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase()
    const lastNameCapitalized =
      lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase()
    const name = `${firstNameCapitalized} ${lastNameCapitalized}`
    // check for default error states
    if (!stripe || !elements) {
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
      // const parsedSubscriptionRes = JSON.parse(subscriptionRes)
      if (subscriptionRes.status === "active") {
        const { data: userRes } = await axios.post(
          "/.netlify/functions/create-user",
          {
            name,
            email: lowerCaseEmail,
            password,
            customerId: customer,
            paymentMethod,
            subId: subscriptionRes,
            planId: priceId,
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
            "Your payment method was processed, but there was an additional error. Please contact support to finish creating your Leadgeek account."
          )
          setProcessingTo(false)
        }
      } else {
        setCheckoutError(subscriptionRes.msg)
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

  const disabled = !emailValidated || notValidPassword || !checkedTOS

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
    <form onSubmit={onSubmit} className="mx-auto">
      <aside className="pb-3 border-b-2 border-gray-100">
        <h3 className="mt-3 mb-5 text-xl md:text-2xl lg:text-3xl font-black text-gray-900 inter">
          {count === 1 ? "Create an account" : "Billing information"}
        </h3>
        <div className="flex">
          {formPagniationTitles.map((option, i) => (
            <div key={i} className="even:ml-6 flex items-center">
              <span
                className={`py-1 px-3 rounded-md text-white text-xs font-bold ${option.numberClasses}`}
              >
                {i + 1}
              </span>
              <span
                className={`ml-2 text-xs md:text-sm font-semibold ${option.titleClasses}`}
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
          <PasswordFormField
            name="password"
            label="Password"
            placeholder={"Create a new password"}
            value={password}
            onChange={onChange}
            passwordShown={passwordShown}
            toggle={togglePasswordVisibility}
            required
          />
          {checkoutError && (
            <aside className="mt-4 py-2 px-4 bg-gray-900 text-teal-300 shadow-tealSm rounded-lg">
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="svg-sm"
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
          <div className="mt-6 text-xs md:text-sm">
            In order to protect your account, please make sure your password:
            <ul className="mt-4">
              {securityMeasureBullets.map((bullet, i) => (
                <li key={i} className="mt-2 flex">
                  <span>{bullet.svg}</span>
                  <span className="ml-2">{bullet.content}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 md:flex md:items-center">
            <label className="flex items-center text-xs">
              <input
                className="mr-2 h-4 w-4 leading-tight rounded-sm text-purple-500 ring-purple transition-main"
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
                  className="secondary-link"
                >
                  terms of service
                </a>
              </span>
            </label>
          </div>
          <button
            type="button"
            onClick={() =>
              handleNextPage(emailValidated, notValidPassword, checkedTOS)
            }
            className={`${
              disabled
                ? "py-3 px-4 bg-gray-200 text-gray-500 shadow-md ring-gray font-semibold text-sm rounded-lg"
                : "cta-link"
            } mt-4 lg:mt-6 w-full inter`}
          >
            Next step
          </button>
        </aside>
      ) : null}
      {count === 2 ? (
        <aside>
          <div className="md:flex justify-between">
            <FormField
              name="firstName"
              label="First name"
              type="text"
              placeholder="Dave"
              value={firstName}
              onChange={onChange}
              required
            />
            <FormField
              name="lastName"
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
            <label htmlFor="card-element" className="form-field-label">
              Payment information
            </label>
            <CardElement
              onChange={handleCardDetailsChange}
              id="card-element"
              className="form-field"
              options={cardElementOpts}
            />
            {checkoutError && (
              <aside className="mt-4 py-2 px-4 bg-gray-900 text-teal-300 shadow-tealSm rounded-lg">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="svg-sm"
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
          </div>
        </aside>
      ) : null}
      {count === 2 && (
        <aside>
          <div className="mt-6 text-xs md:text-sm">
            <h2 className="mt-4 text-lg lg:text-xl text-purple-600 font-bold">
              {plan}
            </h2>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                {plan === "Bundle" ? (
                  <div className="inline-block">
                    <span className="line-through font-medium text-gray-600">
                      $318
                    </span>
                    <span className="ml-2 text-xl font-bold">${price}</span>
                    <span className="inline-block text-gray-500 text-base">
                      /mo
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-2xl font-bold">${price}</span>
                    <span className="inline-block text-gray-500 text-base">
                      /mo
                    </span>
                  </div>
                )}
                {plan === "Bundle" && (
                  <span className="py-1 px-2 inline-block bg-teal-200 rounded-full text-xs text-teal-600 focus:outline-none focus:shadow-outline">
                    {`${discount}% discount`}
                  </span>
                )}
              </div>
            </div>
            <aside className="mt-4 text-sm text-gray-500">
              <ul>
                {featureList.slice(0, listSize).map(feature => (
                  <li key={feature.id} className="last:mb-0 flex items-center">
                    <Bullet className="h-4 w-4 text-teal-400" />
                    <span className="ml-4">{feature.body}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <button
            disabled={count > 2}
            type="button"
            onClick={() => setCount(count - 1)}
            className={`mt-4 text-sm text-gray-700 secondary-link rounded-md ring-gray`}
          >
            Back
          </button>
          <button
            disabled={isProcessing || !stripe}
            type="submit"
            className={`${
              isProcessing
                ? `bg-gray-200 text-gray-500 shadow-md ring-gray cursor-wait`
                : `bg-purple-500 shadow-purpleSm hover:shadow-purpleMd border-purple-500 hover:border-purple-600 hover:bg-purple-600 ring-purple`
            } w-full mt-4 lg:mt-8 py-3 px-4 rounded-lg border font-semibold text-sm text-white transition-main inter`}
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
