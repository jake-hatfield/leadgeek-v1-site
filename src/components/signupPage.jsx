import React from "react"
import { Link, navigate } from "gatsby"

import CheckoutForm from "../components/checkoutForm"
import SignupFeatures from "../components/signupFeatures"

const signupPage = ({ price, featureList, plan }) => {
  return (
    <section className="text-gray-700">
      <div className="h-6 absolute inset-x-0 top-0 background-repeat border-b-2 border-purple-300"></div>
      <div className="py-16 lg:py-24 h-100 lg:h-screen bg-gray-100">
        <article className="mx-auto container">
          <header className="text-center">
            <Link to={`/`} className="font-bold text-2xl text-gray-900">
              Lead<span className="text-purple-500">Geek</span>
            </Link>
            <h1 className="mt-6 text-2xl lg:text-3xl font-black text-gray-900">
              Start sourcing with LeadGeek
            </h1>
            <p className="pt-4">Sign up takes less than 2 minutes.</p>
          </header>
          <div className="mt-8 lg:flex lg:justify-center">
            <div className="mx-auto pt-1 pb-2 lg:pt-2 lg:pb-3 px-6 lg:px-10 w-full lg:w-2/3 max-w-sm bg-white rounded-md shadow-lg">
              <CheckoutForm
                price={price}
                onSuccessfulCheckout={() => navigate("/order-confirmation/")}
              />
            </div>
            <SignupFeatures
              featureList={featureList}
              price={price}
              plan={plan}
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default signupPage
