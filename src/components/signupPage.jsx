import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "components/CheckoutForm"

import Logo from "assets/svgs/leadgeek-logo-light.svg"

const SignupPage = ({
  price,
  featureList,
  plan,
  productSelected,
  discount,
}) => {
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })
  const { email, firstName } = formData
  const onSuccessfulCheckout = () => {
    navigate("/order-confirmation/", {
      state: { email, firstName },
    })
    console.log(email, firstName)
  }
  return (
    <section className="text-gray-700">
      <div className="absolute inset-x-0 top-0 border-b-8 border-purple-400"></div>
      <div className="py-6 h-100 md:min-h-screen bg-gray-100">
        <div className="pb-8 md:pb-12 lg:pb-24 ">
          <article className="mx-auto relative container">
            <header className="relative z-20">
              <div className="font-bold text-xl lg:text-2xl group">
                <Link
                  to={`/signup/`}
                  className="all-center text-gray-900 rounded-lg"
                >
                  <Logo className="w-8 lg:w-10 mr-4" />
                  lead<span className="text-purple-500">geek</span>
                </Link>
              </div>
            </header>
            <div className="mt-10 md:mt-12 lg:mt-16">
              <div className="mx-auto h-full w-full lg:w-2/3 max-w-md">
                <div className="mt-12 md:mt-0 mx-auto py-4 lg:py-6 px-6 md:px-8 lg:px-12 relative z-10 w-full max-w-md bg-white rounded-md shadow-lg">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      plan={plan}
                      price={price}
                      productSelected={productSelected}
                      featureList={featureList}
                      discount={discount}
                      formData={formData}
                      setFormData={setFormData}
                      onSuccessfulCheckout={() => onSuccessfulCheckout()}
                    />
                  </Elements>
                </div>
              </div>
              <aside className="mt-8 mx-auto py-2 px-4 max-w-md border-l-8 border-purple-400 bg-purple-100 text-purple-600">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-1 h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-2 text-sm">
                    <strong>Don't worry:</strong> Your Leadgeek subscription
                    will renew automatically, but you'll be able to adjust your
                    subscription status at any time by contacting support. We'll
                    happily refund you if you forget to cancel.
                  </p>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SignupPage
