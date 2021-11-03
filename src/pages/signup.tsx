import React, { Fragment, useState, useEffect } from "react"
import { graphql, Link, navigate } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "@components/CheckoutForm"
import WaitlistPopup from "@components/utils/WaitlistPopup"
import Logo from "@assets/svgs/logo.svg"

import {
  capitalize,
  formatActiveSubscriptions,
  getWaitlistPlanCount,
} from "@components/utils/utils"
import { MongoDBWaitlistItem } from "./pricing"

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
    allMongodbLeadGeekWaitlist: {
      nodes: MongoDBWaitlistItem[]
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
  const [selectedPlan, setSelectedPlan] = useState<
    "Bundle" | "Pro" | "Grow" | ""
  >("")
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false)

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

  // destructure necessary items
  const {
    bundleSubscriptions,
    proSubscriptions,
    growSubscriptions,
    bundleSubscriptions_2,
    proSubscriptions_2,
    growSubscriptions_2,
  } = subscriptions

  const rawWaitlist = data.allMongodbLeadGeekWaitlist.nodes

  const waitlist = {
    bundle: getWaitlistPlanCount(rawWaitlist, "bundle"),
    pro: getWaitlistPlanCount(rawWaitlist, "pro"),
    grow: getWaitlistPlanCount(rawWaitlist, "grow"),
  }

  //   plan details
  let query = ""
  if (typeof window !== "undefined") {
    query = location.search && location.search.replace(/\?/g, "")
  }

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

    switch (plan) {
      case "bundle":
        totalSeats = bundlePlanSeats
        price = bundlePlanPrice
        discount = Math.trunc((1 - 263 / (189 + 129)) * 100)
        const bundlePlanCount =
          getSubscriptionCount(bundleSubscriptions) +
          getSubscriptionCount(proSubscriptions) +
          getSubscriptionCount(growSubscriptions)
        if (bundlePlanCount < totalSeats) {
          return {
            productId: process.env.GATSBY_BUNDLE_PRICE_ID!,
            price,
            discount,
            features: featureList[0],
          }
        } else {
          const bundlePlanTwoCount =
            getSubscriptionCount(bundleSubscriptions_2) +
            getSubscriptionCount(proSubscriptions_2) +
            getSubscriptionCount(growSubscriptions_2)

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
        const proPlanCount = getSubscriptionCount(proSubscriptions)

        if (proPlanCount < totalSeats) {
          return {
            productId: process.env.GATSBY_PRO_PRICE_ID!,
            price,
            discount: null,
            features: featureList[1],
          }
        } else {
          const proPlanTwoCount = getSubscriptionCount(proSubscriptions_2)

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
        const growPlanCount = getSubscriptionCount(growSubscriptions)

        if (growPlanCount < totalSeats) {
          return {
            productId: process.env.GATSBY_GROW_PRICE_ID!,
            price,
            discount: null,
            features: featureList[2],
          }
        } else {
          const growPlanTwoCount = getSubscriptionCount(growSubscriptions_2)

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

  const growSeatsLeft =
    growPlanSeats -
    (growSubscriptions.length +
      growSubscriptions_2.length +
      bundleSubscriptions.length +
      bundleSubscriptions_2.length)
  const proSeatsLeft =
    proPlanSeats -
    (proSubscriptions.length +
      proSubscriptions_2.length +
      bundleSubscriptions.length +
      bundleSubscriptions_2.length)
  const bundleSeatsLeft: number =
    proSeatsLeft <= growSeatsLeft ? proSeatsLeft : growSeatsLeft

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

  //   TODO: set availability dynamically
  const planList: {
    title: "Bundle" | "Pro" | "Grow"
    description: string
    price: number
    available: boolean
  }[] = [
    {
      title: "Grow",
      description: "New FBA sellers",
      price: growPlanPrice,
      available: growSeatsLeft <= 0 || waitlist.grow > 0 ? false : true,
    },
    {
      title: "Pro",
      description: "Intermediate FBA sellers",
      price: proPlanPrice,
      available: proSeatsLeft <= 0 || waitlist.pro > 0 ? false : true,
    },
    {
      title: "Bundle",
      description: "Advanced FBA sellers",
      price: bundlePlanPrice,
      available:
        bundleSeatsLeft && waitlist.grow === 0 && waitlist.pro === 0
          ? true
          : false,
    },
  ]

  useEffect(() => {
    planType && setPlanDetails(getPlanDetails(planType))
  }, [planType])

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
              <div className="mt-12 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main ring-4 md:ring-6 lg:ring-8 ring-gray-400 ring-opacity-50">
                {planType && planDetails.price && planDetails.productId ? (
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
                  <ul>
                    <h3 className="mt-3 mb-8 text-xl md:text-2xl lg:text-3xl font-black text-gray-900 inter">
                      Choose a plan
                    </h3>

                    {planList.map((plan, i) => (
                      <li
                        key={i}
                        className={`relative mt-6 py-2 px-4 ${
                          plan.available ? "bg-white" : "bg-gray-200"
                        } rounded-lg border border-gray-900 shadow-md`}
                      >
                        <div className="flex items-center justify-between pb-4 border-b border-gray-900">
                          <div>
                            <h4 className="inter font-black text-gray-900">
                              {plan.title}
                            </h4>
                            <p className="text-xs md:text-sm">
                              {plan.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold text-xl text-gray-900">
                              ${plan.price}
                            </span>
                            <span className="block">/mo</span>
                          </div>
                        </div>
                        {plan.available ? (
                          <Link
                            to={`?${plan.title.toLowerCase()}`}
                            className="block w-full mt-4 py-3 rounded-lg
                          border border-purple-500 bg-purple-500 font-semibold
                          text-center text-xs md:text-sm hover:bg-purple-600 text-white
                          transition-main ring-gray inter"
                          >
                            Sign up
                          </Link>
                        ) : (
                          <button
                            onClick={() => {
                              setSelectedPlan(plan.title)
                              setShowWaitlistPopup(!showWaitlistPopup)
                            }}
                            className="block w-full mt-4 py-3 rounded-lg
                          border border-gray-900 bg-gray-900 font-semibold
                          text-center text-xs md:text-sm hover:bg-gray-800 text-teal-300
                          transition-main ring-gray inter"
                          >
                            Join the waitlist
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        </div>
        {showWaitlistPopup && selectedPlan && (
          <WaitlistPopup
            showWaitlistPopup={showWaitlistPopup}
            setShowWaitlistPopup={setShowWaitlistPopup}
            selectedPlan={selectedPlan}
          />
        )}
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
    allMongodbLeadGeekWaitlist(
      filter: { plans: { elemMatch: { active: { eq: true } } } }
    ) {
      nodes {
        mongodb_id
        plans {
          type
        }
      }
    }
  }
`

export default SignupPage
