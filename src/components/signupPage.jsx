import React from "react"
import { navigate } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "../components/checkoutForm"
import SignupFeatures from "../components/signupFeatures"

import HalfDotted from "../assets/svgs/half-dotted.svg"
import Visa from "../assets/svgs/visa-logo.svg"
import Mastercard from "../assets/svgs/mastercard-logo.svg"
import Discover from "../assets/svgs/discover-logo.svg"
import AmericanExpress from "../assets/svgs/american-express-logo.svg"

const signupPage = ({
  price,
  featureList,
  plan,
  productSelected,
  discount,
}) => {
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  const onSuccessfulCheckout = () => {
    navigate("/order-confirmation/")
  }
  return (
    <section className="text-gray-700">
      <div className="h-6 absolute inset-x-0 top-0 background-repeat border-b-2 border-purple-400"></div>
      <div className="py-16 lg:py-24 h-100 lg:min-h-screen bg-gray-100">
        <div className="pb-8 md:pb-12 lg:pb-24 ">
          <article className="mx-auto relative container">
            <div className="absolute top-0 right-0 z-0 transform">
              <HalfDotted className="hidden md:inline-block w-48 text-gray-200" />
            </div>
            <header className="relative z-20 text-center">
              <div className="font-bold text-2xl lg:text-3xl text-gray-900">
                Lead<span className="text-purple-500">Geek</span>
              </div>
              <h1 className="mt-6 text-4xl lg:text-5xl font-black text-gray-900">
                Start sourcing with LeadGeek
              </h1>
              <p className="pt-4 text-base md:text-lg lg:text-xl leading-relaxed">
                Sign up takes less than 1 minute.
              </p>
            </header>
            <div className="mt-10 md:mt-12 lg:mt-16 lg:flex lg:justify-center">
              <div className="mx-auto h-full w-full lg:w-2/3 max-w-sm">
                <div className="pt-1 pb-2 lg:pt-2 lg:pb-3 px-4 md:px-6 lg:px-10 bg-white rounded-md shadow-lg">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      plan={plan}
                      price={price}
                      productSelected={productSelected}
                      onSuccessfulCheckout={() => onSuccessfulCheckout()}
                    />
                  </Elements>
                </div>
                {/* <div className="mt-8 lg:mt-16 flex flex-wrap justify-between items-center">
                  <Visa className="inline-block h-12 w-12 md:h-12 md:w-16 text-gray-400" />
                  <Discover className="inline-block h-12 w-12 md:h-12 md:w-16 text-gray-400" />
                  <Mastercard className="inline-block h-12 w-12 md:h-12 md:w-16 text-gray-400" />
                  <AmericanExpress className="inline-block h-12 w-12 md:h-12 md:w-16 text-gray-400" />
                </div> */}
              </div>
              <SignupFeatures
                featureList={featureList}
                price={price}
                plan={plan}
                discount={discount}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default signupPage
