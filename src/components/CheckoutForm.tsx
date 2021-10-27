import React, { useState, useEffect } from "react"

import axios from "axios"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import {
  getCookie,
  stringBeforeAt,
  capitalize,
  addToMailchimp,
} from "@components/utils/utils"
import FormField from "@components/utils/FormField"
import PasswordFormField from "@components/utils/PasswordFormField"
import Spinner from "@components/utils/Spinner"

import StripeLogo from "@assets/svgs/stripe-logo.svg"
import Bullet from "@assets/svgs/bullet.svg"

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface CheckoutFormProps {
  plan: string
  productSelected: string | undefined
  featureList: { description: JSX.Element }[]
  price: number
  discount: number | null
  formData: FormData
  setFormData: React.Dispatch<FormData>
  onSuccessfulCheckout: () => void
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  plan,
  productSelected,
  featureList,
  price,
  discount,
  formData,
  setFormData,
  onSuccessfulCheckout,
}) => {
  const { firstName, lastName, email, password } = formData

  const [count, setCount] = useState(1)
  const [isProcessing, setProcessing] = useState(false)
  const [checkoutError, setCheckoutError] = useState("")
  const [checkedTOS, setCheckedTOS] = useState(false)
  const [lgid, setLgid] = useState<string | null>(null)

  //   set LGID for affiliate tracking
  useEffect(() => {
    setLgid(getCookie("lgid"))
  }, [])

  //   initialize stripe
  const stripe = useStripe()
  const elements = useElements()

  //   set checkout error if stripe catches one
  const handleCardDetailsChange = (e: any) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError("")
  }

  //   set form data to state from input and trim excess spacing
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  //   clear checkout error when TOS check status changes
  useEffect(() => {
    if (checkedTOS) {
    }
  }, [checkedTOS])

  //   toggle password visibility in the input
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility = () => {
    return setPasswordShown(passwordShown ? false : true)
  }

  //   password validation
  const [lengthValidated, setLengthValidated] = useState(false)
  const [emailValidated, setEmailValidated] = useState(false)
  const [passwordEmailValidated, setPasswordEmailValidated] = useState(false)
  const [commonPasswordValidated, setCommonPasswordValidated] = useState(false)

  //   validate email and return checkout errors
  const emailValidator = (email: string): void => {
    //   if email exists, test against regex for a valid format
    if (email) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setEmailValidated(false)
        return setCheckoutError("Please enter a valid email address.")
      } else {
        return setEmailValidated(true)
      }
    } else {
      // email hasn't been entered
      setEmailValidated(false)
      return setCheckoutError("Please enter an email address.")
    }
  }

  //   validate password and return checkout errors
  const passwordValidator = (emailBeforeAt: string, password: string): void => {
    if (!password) {
      return setCheckoutError("Please enter a password")
    }
    if (password.length >= 7) {
      setLengthValidated(true)
      if (password.includes(emailBeforeAt)) {
        setPasswordEmailValidated(false)
        return setCheckoutError(
          "The password is too similar to your email. Please choose another password."
        )
      } else {
        setPasswordEmailValidated(true)
        if (terriblePasswords.includes(password)) {
          setCommonPasswordValidated(false)
          return setCheckoutError(
            "The password is too common. Please choose a more unique password."
          )
        } else {
          return setCommonPasswordValidated(true)
        }
      }
    } else {
      setLengthValidated(false)
      return setCheckoutError("The password must be at least 7 characters.")
    }
  }

  //   clear checkout errors and validate password on input change
  useEffect(() => {
    const fullName = firstName && lastName
    if (fullName) {
      setCheckoutError("")
      if ((!email || !emailValidated) && password) {
        emailValidator(email)
      }
    }

    if (emailValidated) {
      const emailBeforeAt = stringBeforeAt(email)
      passwordValidator(emailBeforeAt, password)
    }
  }, [firstName, lastName, email, emailValidated, password])

  // handle next page click
  const handleNextPage = (
    firstName: string,
    lastName: string,
    email: string,
    checkedTOS: boolean
  ) => {
    //   test for first and last name
    if (!firstName || !lastName) {
      return setCheckoutError("Please enter your full name.")
    } else {
      emailValidator(email)
      if (emailValidated) {
        const emailBeforeAt = stringBeforeAt(email)
        // test if password contains elements from email
        passwordValidator(emailBeforeAt, password)
        const passwordIsValid =
          lengthValidated && passwordEmailValidated && commonPasswordValidated
        if (passwordIsValid) {
          if (!checkedTOS) {
            setCheckoutError("Please accept the terms of service.")
          } else {
            addToMailchimp({
              email: email.toLowerCase(),
              FNAME: capitalize(firstName),
              LNAME: capitalize(lastName),
              LEAD: `${plan} Plan Lead`,
              PLAN: "",
              tags: [
                { name: `${plan} Plan Lead`, status: "active" },
                { name: `Abandoned Cart`, status: "active" },
              ],
            })
            return setCount(count + 1)
          }
        }
      }
    }
  }

  //   state for disabled "next page" button
  const [disabled, setDisabled] = useState(true)
  //   enable next step button if all the fields are filled out (but not validated)
  useEffect(() => {
    if (firstName && lastName && email && password && checkedTOS) {
      setDisabled(false)
      setCheckoutError("")
    } else {
      setDisabled(true)
    }
  }, [firstName, lastName, email, password, checkedTOS])

  //   handle form submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCheckoutError("")
    const firstNameCapitalized = capitalize(firstName)
    const lastNameCapitalized = capitalize(lastName)
    const name = `${firstNameCapitalized} ${lastNameCapitalized}`
    // check for default error states
    if (!stripe || !elements) {
      return
    }
    // create customer
    try {
      setProcessing(true)
      const lowerCaseEmail = email.toLowerCase()
      const { data: customer } = await axios.post(
        "/.netlify/functions/create-customer",
        {
          name: name,
          email: lowerCaseEmail,
        }
      )
      const cardElement = elements.getElement("card")!
      const priceId = productSelected
      //  create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      })
      if (error) {
        console.log("Create payment method error:", error)
        setProcessing(false)
        setCheckoutError(error.message || "")
        return
      }
      const { data: subscriptionRes } = await axios.post(
        "/.netlify/functions/create-subscription",
        {
          customerId: customer,
          paymentMethod,
          priceId,
        }
      )
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
            lgid,
          }
        )
        if (userRes.message === "User successfully added.") {
          addToMailchimp({
            email: lowerCaseEmail,
            FNAME: firstNameCapitalized,
            LNAME: lastNameCapitalized,
            LEAD: "",
            PLAN: `${plan} Plan Subscriber`,
            tags: [
              { name: `${plan} Plan Subscriber`, status: "active" },
              { name: "Active Subscriber", status: "active" },
              { name: `${plan} Plan Lead`, status: "inactive" },
              { name: `Abandoned Cart`, status: "inactive" },
            ],
          })

          await axios.post(
            "https://api.netlify.com/build_hooks/611fd7ae85726687cf7baf51"
          )
          onSuccessfulCheckout()
        } else {
          setCheckoutError(
            "Your payment method was processed, but there was an additional error. Please contact support to finish creating your Leadgeek account."
          )
          setProcessing(false)
        }
      } else if (subscriptionRes.msg) {
        setCheckoutError(subscriptionRes.msg)
      } else {
        setCheckoutError(
          "Your payment may have been processed, but there was an error. Please make sure your information is correct or contact support to complete your purchase."
        )
      }
      return setProcessing(false)
    } catch (error) {
      setCheckoutError(
        "Your payment may have been processed, but there was an error. Please make sure your information is correct or contact support to complete your purchase."
      )
    }
    setProcessing(false)
  }

  // style form heading
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

  //   set list size for the plan bullets
  let listSize = 5

  return (
    <form onSubmit={onSubmit}>
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
          <div className="md:flex justify-between">
            <FormField
              name={"firstName"}
              label={"First name *"}
              type={"text"}
              placeholder={"Dave"}
              value={firstName}
              onChange={onChange}
              required
              styles={null}
            />
            <FormField
              name={"lastName"}
              label={"Last name *"}
              type={"text"}
              placeholder={"Saunders"}
              value={lastName}
              onChange={onChange}
              required
              styles="md:ml-4"
            />
          </div>
          <FormField
            name={"email"}
            label={"Email *"}
            type={"email"}
            placeholder={"dsaunders@gmail.com"}
            value={email}
            onChange={onChange}
            required
            styles={null}
          />
          <PasswordFormField
            label="Password *"
            placeholder={"Create a new password"}
            value={password}
            onChange={onChange}
            passwordShown={passwordShown}
            toggle={togglePasswordVisibility}
            required
            styles={null}
          />
          {checkoutError && (
            <aside className="mt-4 py-2 px-4 bg-gray-900 text-teal-300 rounded-lg">
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
                  href="/terms/"
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
              handleNextPage(firstName, lastName, email, checkedTOS)
            }
            className={`${
              disabled
                ? "py-3 px-4 bg-gray-200 text-gray-500 ring-gray font-semibold text-sm rounded-lg cursor-default"
                : "cta-link"
            } mt-4 lg:mt-6 w-full inter`}
          >
            Next step
          </button>
        </aside>
      ) : null}
      {count === 2 ? (
        <aside>
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
              <aside className="mt-4 py-2 px-4 bg-gray-900 text-teal-300 rounded-lg">
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
          <div className="mt-6 text-xs md:text-sm text-gray-700">
            <h2 className="mt-4 text-lg lg:text-xl font-bold inter text-gray-900">
              {plan} plan
            </h2>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                {plan === "Bundle" ? (
                  <div className="inline-block">
                    <span className="line-through font-medium text-gray-600">
                      $318
                    </span>
                    <span className="ml-2 text-xl font-bold text-gray-900">
                      ${price}
                    </span>
                    <span className="inline-block text-gray-500 text-base">
                      /mo
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ${price}
                    </span>
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
            <aside className="mt-4 text-sm">
              <ul>
                {featureList.slice(0, listSize).map((feature, i) => (
                  <li key={i} className="mt-2 last:mb-0 flex">
                    <Bullet className="mt-1 h-4 w-4 text-teal-400 flex-none" />
                    <div className="ml-4">{feature.description}</div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <button
            disabled={count > 2}
            type="button"
            onClick={() => {
              setCheckoutError("")
              setCount(count - 1)
            }}
            className={`mt-4 text-sm text-gray-700 secondary-link rounded-md ring-gray`}
          >
            Back
          </button>
          {isProcessing ? (
            <div className="mt-4">
              <Spinner
                divWidth={null}
                spinnerWidth={"md"}
                margin={false}
                search={false}
                text={null}
              />
            </div>
          ) : (
            <button
              disabled={isProcessing || !stripe}
              type="submit"
              className={`${
                isProcessing
                  ? `bg-gray-200 text-gray-500 ring-gray cursor-not-allowed`
                  : `bg-purple-500 shadow-purpleSm hover:shadow-purpleMd border-purple-500 hover:border-purple-600 hover:bg-purple-600 ring-purple`
              } w-full mt-4 lg:mt-8 py-3 px-4 rounded-lg border font-semibold text-sm text-white transition-main inter`}
            >
              Subscribe for ${price}
            </button>
          )}
        </aside>
      )}
      <div className="mt-4 flex items-center justify-center text-gray-600 font-bold text-sm inter">
        Powered by
        <StripeLogo className="h-8" />
      </div>
    </form>
  )
}

//   stripe element input styles
const cardElementOpts = {
  style: {
    base: {
      fontSize: "15.75px",
      fontFamily: "Space Mono",
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
    iconStyle: "solid",
  },
}

// list to check for unsecure passwords in input
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

export default CheckoutForm
