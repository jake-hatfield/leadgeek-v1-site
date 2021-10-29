import React, { useState } from "react"
import { graphql, Link, navigate, StaticQuery } from "gatsby"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "@components/CheckoutForm"
import Logo from "@assets/svgs/logo.svg"

import { formatActiveSubscriptions } from "@components/utils/utils"

interface SignupPageProps {
  discount: number | null
  featureList: { description: JSX.Element }[]
  location: any
  plan: string
  productSelected: string | undefined
  price: number
}

const SignupPage: React.FC<SignupPageProps> = ({
  discount,
  featureList,
  location,
  plan,
  productSelected,
  price,
}) => {
  return (
    <StaticQuery
      query={graphql`
        query SignupQuery {
          allStripeSubscription {
            nodes {
              status
              plan {
                active
                product
              }
            }
          }
        }
      `}
      render={data => (
        <SignupComponent
          data={data}
          discount={discount}
          featureList={featureList}
          location={location}
          plan={plan}
          productSelected={productSelected}
          price={price}
        />
      )}
    />
  )
}

interface SignupComponentProps extends SignupPageProps {
  data: any
}

const SignupComponent: React.FC<SignupComponentProps> = ({
  data,
  discount,
  featureList,
  location,
  plan,
  productSelected,
  price,
}) => {
  //   check active subscriptions
  const subscriptions = formatActiveSubscriptions(
    data.allStripeSubscription.nodes
  )

  console.log(location)
  console.log(subscriptions)

  //   TODO: Fn that checks if there's space on plan_1 and returns product_1 if so, if not, checks plan_2 and returns product_2, if not returns false
  //   TODO: Fn that returns price by title in query params

  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY!)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const { email, firstName } = formData
  const onSuccessfulCheckout = () => {
    return navigate("/order-confirmation/", {
      state: { email, firstName },
    })
  }
  return (
    <section className="relative text-gray-700">
      <div className="absolute inset-x-0 top-0 border-b-8 border-purple-500 z-10"></div>
      <div className="relative min-h-screen py-6 h-100 md:min-h-screen bg-splatter">
        <section className="mx-auto container">
          <header>
            <h1 className="pt-4 lg:pt-6 font-bold text-xl lg:text-2xl group">
              <Link
                to={`/pricing/`}
                className="all-center text-gray-900 rounded-lg"
              >
                <Logo className="w-8 lg:w-12 mr-4 text-purple-500" />
                lead<span className="text-purple-500">geek</span>
              </Link>
            </h1>
          </header>
          <div className="md:absolute w-full max-w-md md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2 mt-6 md:mt-0">
            <div className="mt-12 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main ring-4 md:ring-6 lg:ring-8 ring-purple-500 ring-opacity-50">
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
        </section>
      </div>
    </section>
  )
}

export default SignupPage
