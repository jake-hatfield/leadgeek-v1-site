import React from "react"
import { Link, navigate } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "../components/checkoutForm"
import SignupFeatures from "../components/signupFeatures"

const signupPage = ({ price, featureList, plan, discount }) => {
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  return (
    <section className="text-gray-700">
      <div className="h-6 absolute inset-x-0 top-0 background-repeat border-b-2 border-purple-400"></div>
      <div className="py-16 lg:py-24 h-100 lg:h-screen bg-gray-100">
        <article className="mx-auto container">
          <header className="text-center">
            <Link
              to={`/`}
              className="font-bold text-2xl lg:text-3xl text-gray-900"
            >
              Lead<span className="text-purple-500">Geek</span>
            </Link>
            <h1 className="mt-6 text-4xl lg:text-5xl font-black text-gray-900">
              Start sourcing with LeadGeek
            </h1>
            <p className="pt-4 text-base md:text-lg lg:text-xl leading-relaxed">
              Sign up takes less than 2 minutes.
            </p>
          </header>
          <div className="mt-10 md:mt-12 lg:mt-16 lg:flex lg:justify-center">
            <div className="h-full w-full lg:w-2/3 max-w-sm">
              <div className="mx-auto pt-1 pb-2 lg:pt-2 lg:pb-3 px-6 lg:px-10 bg-white rounded-md shadow-lg">
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    price={price}
                    onSuccessfulCheckout={() =>
                      navigate("/order-confirmation/")
                    }
                  />
                </Elements>
              </div>
              <aside className="mt-5 py-2 px-3 bg-purple-100 rounded-md text-purple-500">
                Hello
              </aside>
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
    </section>
  )
}

export default signupPage
