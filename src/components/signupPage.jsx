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
  }
  return (
    <section className="relative text-gray-700">
      <div className="absolute inset-x-0 top-0 border-b-8 border-purple-500 z-10"></div>
      <div className="relative min-h-screen py-6 h-100 md:min-h-screen bg-splatter">
        <article className="mx-auto container">
          <header>
            <h1 className="pt-4 lg:pt-6 font-bold text-xl lg:text-2xl group">
              <Link
                to={`/pricing/`}
                className="all-center text-gray-900 rounded-lg"
              >
                <Logo className="w-8 lg:w-10 mr-4" />
                lead<span className="text-purple-500">geek</span>
              </Link>
            </h1>
          </header>
          <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2 mt-6 xl:mt-10">
            <div className="mx-auto h-full w-full max-w-md">
              <div className="py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main ring-4 md:ring-6 lg:ring-8 ring-purple-500 ring-opacity-50">
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
          </div>
        </article>
      </div>
    </section>
  )
}

export default SignupPage
