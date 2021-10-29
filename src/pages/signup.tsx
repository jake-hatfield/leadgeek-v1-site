import React, { Fragment, useState, useEffect } from "react"
import { graphql, Link, navigate } from "gatsby"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "@components/CheckoutForm"
import Logo from "@assets/svgs/logo.svg"

import {
  capitalize,
  formatActiveSubscriptions,
  stringBeforeAt,
} from "@components/utils/utils"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import OgImage from "@assets/images/og/og-bundle.jpg"

interface SubscriptionItem {
  status: string
  plan: {
    id: string
    product: string
  }
}

const SignupPage: React.FC<{
  data: {
    allStripeSubscription: {
      nodes: SubscriptionItem[]
    }
  }
}> = ({ data }) => {
  // local state
  const [planDetails, setPlanDetails] = useState<{
    productId: string | null
    price: number | null
    discount: number | null
    features: { description: JSX.Element }[]
  }>({
    productId: "",
    price: null,
    discount: null,
    features: [],
  })

  // plan details
  const bundlePlanSeats = 15
  const proPlanSeats = 15
  const growPlanSeats = 30
  const bundlePlanPrice = 263
  const proPlanPrice = 189
  const growPlanPrice = 129
  const discount = Math.trunc(
    (1 - bundlePlanPrice / (proPlanPrice + growPlanPrice)) * 100
  )

  const subscriptions = formatActiveSubscriptions(
    data.allStripeSubscription.nodes
  )

  //   plan details

  const query = location.search && location.search.replace(/\?/g, "")

  const validatePlanFromQueryParam = (plan: string) => {
    if (plan === "bundle" || plan === "pro" || plan === "grow") {
      return plan
    } else {
      return ""
    }
  }

  const planType = validatePlanFromQueryParam(query)

  const getPlanDetails = (plan: "bundle" | "pro" | "grow") => {
    let totalSeats: number, price: number, discount: number | null
    const getSubscriptionCount = (
      subscription: {
        status: string
        plan: {
          id: string
          product: string
        }
      }[]
    ) => {
      return subscription.length
    }

    console.log(subscriptions)

    switch (plan) {
      case "bundle":
        totalSeats = bundlePlanSeats
        price = bundlePlanPrice
        discount = Math.trunc((1 - 263 / (189 + 129)) * 100)
        const bundlePlanCount =
          getSubscriptionCount(subscriptions.bundleSubscriptions) +
          getSubscriptionCount(subscriptions.proSubscriptions) +
          getSubscriptionCount(subscriptions.growSubscriptions)
        if (bundlePlanCount < totalSeats) {
          return {
            productId: process.env.GATSBY_BUNDLE_PRICE_ID!,
            price,
            discount,
            features: featureList[0],
          }
        } else {
          const bundlePlanTwoCount =
            getSubscriptionCount(subscriptions.bundleSubscriptions_2) +
            getSubscriptionCount(subscriptions.proSubscriptions_2) +
            getSubscriptionCount(subscriptions.growSubscriptions_2)

          if (bundlePlanTwoCount < totalSeats) {
            return {
              productId: process.env.GATSBY_BUNDLE_PRICE_ID_2!,
              price,
              discount,
              features: featureList[0],
            }
          } else {
            return {
              productId: null,
              price: null,
              discount: null,
              features: [],
            }
          }
        }

      case "pro":
        totalSeats = proPlanSeats
        price = proPlanPrice
        discount = null
        const proPlanCount = getSubscriptionCount(
          subscriptions.proSubscriptions
        )

        if (proPlanCount < totalSeats) {
          return {
            productId: process.env.GATSBY_PRO_PRICE_ID!,
            price,
            discount: null,
            features: featureList[1],
          }
        } else {
          const proPlanTwoCount = getSubscriptionCount(
            subscriptions.proSubscriptions_2
          )

          if (proPlanTwoCount < totalSeats) {
            return {
              productId: process.env.GATSBY_PRO_PRICE_ID_2!,
              price,
              discount: null,
              features: featureList[1],
            }
          } else {
            return {
              productId: null,
              price: null,
              discount: null,
              features: [],
            }
          }
        }

      case "grow":
        totalSeats = growPlanSeats
        price = growPlanPrice
        discount = null
        const growPlanCount = getSubscriptionCount(
          subscriptions.growSubscriptions
        )

        if (growPlanCount < totalSeats) {
          return {
            productId: process.env.GATSBY_GROW_PRICE_ID!,
            price,
            discount: null,
            features: featureList[2],
          }
        } else {
          const growPlanTwoCount = getSubscriptionCount(
            subscriptions.growSubscriptions_2
          )

          if (growPlanTwoCount < totalSeats) {
            return {
              productId: process.env.GATSBY_GROW_PRICE_ID_2!,
              price,
              discount: null,
              features: featureList[2],
            }
          } else {
            return {
              productId: null,
              price: null,
              discount: null,
              features: [],
            }
          }
        }

      default:
        return {
          productId: null,
          price: null,
          discount: null,
          features: [],
        }
    }
  }

  const featureList = [
    [
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
    ],
    [
      {
        description: (
          <p>
            Limited to <strong className="font-semibold">{proPlanSeats}</strong>{" "}
            members
          </p>
        ),
      },
      {
        description: <p>50+ products per week</p>,
      },
      {
        description: (
          <p>
            $<strong className="font-semibold">7</strong>-50+ profit per unit
          </p>
        ),
      },
      {
        description: (
          <p>
            <strong className="font-semibold">50</strong>%+ ROI per unit
          </p>
        ),
      },
      {
        description: <p>Full software access</p>,
      },
    ],
    [
      {
        description: (
          <p>
            Limited to{" "}
            <strong className="font-semibold">{growPlanSeats}</strong> members
          </p>
        ),
      },
      {
        description: <p>50+ products per week</p>,
      },
      {
        description: (
          <p>
            $<strong className="font-semibold">4</strong>-30+ profit per unit
          </p>
        ),
      },
      {
        description: (
          <p>
            <strong className="font-semibold">40</strong>%+ ROI per unit
          </p>
        ),
      },
      {
        description: <p>Full software access</p>,
      },
    ],
  ]

  useEffect(() => {
    planType && setPlanDetails(getPlanDetails(planType))
  }, [planType])

  //   TODO: Check if query param is available and have a select list of plans if not || list of plans are a link that change the query params in the url

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
                {planType && planDetails ? (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      plan={capitalize(planType)}
                      price={planDetails.price}
                      productSelected={planDetails.productId}
                      featureList={planDetails.features}
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

export default SignupPage
