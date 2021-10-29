import React, { Fragment, useState } from "react"
import { graphql, Link, navigate } from "gatsby"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "@components/CheckoutForm"
import Logo from "@assets/svgs/logo.svg"

import { capitalize, formatActiveSubscriptions } from "@components/utils/utils"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import OgImage from "@assets/images/og/og-bundle.jpg"

interface SubscriptionItem {
  status: string
  plan: {
    id: string
    product: string
  }
}

const BundleSignupPage: React.FC<{
  data: {
    allStripeSubscription: {
      nodes: SubscriptionItem[]
    }
  }
}> = ({ data }) => {
  // plan details
  const plan = "Bundle"
  const productSelected = process.env.GATSBY_BUNDLE_PRICE_ID
  const growPrice = 129
  const proPrice = 189
  const bundlePrice = 263
  const discount = Math.trunc((1 - bundlePrice / (proPrice + growPrice)) * 100)

  const featureList = [
    {
      description: (
        <p>
          <strong>100+</strong> products per week
        </p>
      ),
    },
    {
      description: <p>All Grow plan leads</p>,
    },
    {
      description: <p>All Pro plan leads</p>,
    },
    {
      description: <p>Full software access</p>,
    },
    {
      description: <p>Early access/discounts on new tools</p>,
    },
  ]

  const subscriptions = formatActiveSubscriptions(
    data.allStripeSubscription.nodes
  )

  const query = location.search && location.search.replace(/\?/g, "")

  //   TODO: Fn that checks if there's space on plan_1 and returns product_1 if so, if not, checks plan_2 and returns product_2, if not returns false
  //   TODO: Fn that returns price by title in query params
  //   TODO: Check if query param is available and have a select list of plans if not

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

  const validPlanChecker = (plan: string) => {
    if (plan === "bundle" || plan === "pro" || plan === "grow") {
      return plan
    } else {
      return ""
    }
  }

  const planType = validPlanChecker(query)

  //   seo
  const title = `${planType && capitalize(planType)} Plan Signup | Leadgeek`
  const description =
    "Leadgeek's Bundle is a heavily-discounted combination of the Grow plan and Pro plan. It's the perfect mix of quality and volume for arbitrage sourcing."

  return (
    <Fragment>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/signup/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Grab the Bundle plan & save",
            },
          ],
        }}
        language="en"
      />
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
                {planType ? (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      plan={plan}
                      price={bundlePrice}
                      productSelected={productSelected}
                      featureList={featureList}
                      discount={discount}
                      formData={formData}
                      setFormData={setFormData}
                      onSuccessfulCheckout={() => onSuccessfulCheckout()}
                    />
                  </Elements>
                ) : (
                  <div>Hello</div>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  )
}

export const query = graphql`
  query {
    allStripeSubscription {
      nodes {
        status
        plan {
          id
          product
        }
      }
    }
  }
`

export default BundleSignupPage
