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
    <section className="relative text-gray-700">
      <div className="absolute inset-x-0 top-0 border-b-8 border-purple-500 z-10"></div>
      <div className="min-h-screen py-6 h-100 md:min-h-screen bg-splatter">
        <article className="mx-auto relative container">
          <div
            className={`hidden lg:block absolute top-0 left-0 py-1 px-2 handwritten text-lg xl:text-xl rounded-lg bg-gray-900 text-teal-300 transform translate-x-12 translate-y-40 shadow-tealMd text-center transition-main w-56 -rotate-6 hover:-rotate-3`}
          >
            <blockquote>
              "Would definitely recommend if you want to take the guess work out
              of sourcing for FBA" - <cite>William</cite>
            </blockquote>
          </div>

          <header className="relative z-20">
            <h1 className="pt-4 lg:pt-6 font-bold text-xl lg:text-2xl group bg-white">
              <Link
                to={`/pricing/`}
                className="all-center text-gray-900 rounded-lg"
              >
                <Logo className="w-8 lg:w-10 mr-4" />
                lead<span className="text-purple-500">geek</span>
              </Link>
            </h1>
          </header>
          <div className="mt-10">
            <div className="mx-auto h-full w-full max-w-md">
              <div className="mt-4 lg:mt-6 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-dark">
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
