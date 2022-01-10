import React, { useState } from "react"
import { Link } from "gatsby"

// assets
import Bullet from "@assets/svgs/bullet.svg"
import WaitlistPopup from "./utils/WaitlistPopup"

interface SubscriptionItem {
  status: string
  plan: {
    id: string
    product: string
  }
}

interface PricingCardsProps {
  margin: string
  negativeMarginCards: boolean
  subscriptions: {
    bundleSubscriptions: SubscriptionItem[]
    proSubscriptions: SubscriptionItem[]
    growSubscriptions: SubscriptionItem[]
    bundleSubscriptions_2: SubscriptionItem[]
    proSubscriptions_2: SubscriptionItem[]
    growSubscriptions_2: SubscriptionItem[]
  }
  waitlist: {
    bundle: number
    pro: number
    grow: number
  }
  showWaitlistPopup: boolean
  setShowWaitlistPopup: React.Dispatch<boolean>
}

interface PricingCard {
  title: "Bundle" | "Pro" | "Grow"
  description: string
  price: number
  features: { title: JSX.Element | string }[]
  seatsLeft: number
  available: boolean
  forceSoldOut: boolean
}

const PricingCards: React.FC<PricingCardsProps> = ({
  margin,
  negativeMarginCards,
  subscriptions,
  waitlist,
  showWaitlistPopup,
  setShowWaitlistPopup,
}) => {
  // destructure necessary items
  const {
    bundleSubscriptions,
    proSubscriptions,
    growSubscriptions,
    bundleSubscriptions_2,
    proSubscriptions_2,
    growSubscriptions_2,
  } = subscriptions

  // calculate remaining seats
  const proPlanSeats = 15
  const growPlanSeats = 30

  //   subtract possible available seats from the total # of relevant subscriptions + bundle subscriptions
  const proSeatsLeft =
    proPlanSeats - (proSubscriptions.length + bundleSubscriptions.length)
  const proSeatsLeft_2 =
    proPlanSeats - (proSubscriptions_2.length + bundleSubscriptions_2.length)
  const growSeatsLeft =
    growPlanSeats - (growSubscriptions.length + bundleSubscriptions.length)
  const growSeatsLeft_2 =
    growPlanSeats - (growSubscriptions_2.length + bundleSubscriptions_2.length)
  const bundleSeatsLeft =
    proSeatsLeft <= growSeatsLeft ? proSeatsLeft : growSeatsLeft
  //   const bundleSeatsLeft_2 =
  //     proSeatsLeft_2 <= growSeatsLeft_2 ? proSeatsLeft_2 : growSeatsLeft_2

  //   pricing
  const bundlePrice = 263
  const proPrice = 189
  const growPrice = 129
  const discount: number = Math.trunc(
    (1 - bundlePrice / (proPrice + growPrice)) * 100
  )

  //   pricing card data/features
  const pricingCards: PricingCard[] = [
    {
      title: "Grow",
      description: "For people who are new to arbitrage and ready to jump in.",
      price: growPrice,
      features: [
        {
          title: (
            <span>
              <strong className="font-semibold">50+</strong> products per week
            </span>
          ),
        },
        {
          title: (
            <span>
              Limited to{" "}
              <strong className="font-semibold">{growPlanSeats}</strong> members
            </span>
          ),
        },
        {
          title: (
            <span>
              Minimum $<strong className="font-semibold">4-30+</strong> profit
            </span>
          ),
        },
        {
          title: (
            <span>
              Minimum <strong className="font-semibold">40</strong>%+ ROI
            </span>
          ),
        },
        {
          title: (
            <span>
              <strong className="font-semibold">Ungated</strong> product
              priority
            </span>
          ),
        },
        {
          title: "US seller lead review",
        },
        {
          title: "Seller support",
        },
        {
          title: "Full software access",
        },
      ],
      //   second list not open yet
      seatsLeft: growSeatsLeft,
      available:
        (growSeatsLeft <= 0 && growSeatsLeft_2 <= 0) || waitlist.grow > 0
          ? false
          : true,
      forceSoldOut: false,
    },
    {
      title: "Pro",
      description: "For intermediate sellers looking for premium criteria.",
      price: proPrice,
      features: [
        {
          title: (
            <span>
              <strong className="font-semibold">50+</strong> products per week
            </span>
          ),
        },
        {
          title: (
            <span>
              Limited to{" "}
              <strong className="font-semibold">{proPlanSeats}</strong> members
            </span>
          ),
        },
        {
          title: (
            <span>
              Minimum $<strong className="font-semibold">7-50+</strong> profit
            </span>
          ),
        },
        {
          title: (
            <span>
              Minimum <strong className="font-semibold">50</strong>%+ ROI
            </span>
          ),
        },
        {
          title: (
            <span>
              <strong className="font-semibold">Gated</strong> product priority
            </span>
          ),
        },
        {
          title: "US seller lead review",
        },
        {
          title: "Seller support",
        },
        {
          title: "Full software access",
        },
      ],
      seatsLeft: proSeatsLeft + proSeatsLeft_2,
      available:
        (proSeatsLeft <= 0 && proSeatsLeft_2 <= 0) || waitlist.pro > 0
          ? false
          : true,
      forceSoldOut: false,
    },
    {
      title: "Bundle",
      description: `For experienced sellers who are ready to ramp up sourcing.`,
      price: bundlePrice,
      features: [
        {
          title: (
            <span>
              <strong className="font-semibold">100+</strong> products per week
            </span>
          ),
        },
        {
          title: "All Grow Plan leads",
        },
        {
          title: "All Pro Plan leads",
        },
        {
          title: "US seller lead review",
        },
        {
          title: "Seller support",
        },
        {
          title: "Full software access",
        },
        {
          title: "Early access and discounts on new tools",
        },
      ],
      //   second list not open yet
      seatsLeft: bundleSeatsLeft,
      available:
        bundleSeatsLeft &&
        waitlist.grow === 0 &&
        waitlist.pro === 0 &&
        waitlist.bundle === 0
          ? true
          : false,
      forceSoldOut: true,
    },
  ]

  const [selectedPlan, setSelectedPlan] = useState<
    "Bundle" | "Pro" | "Grow" | ""
  >("")

  return (
    <div
      className={`${margin} flex flex-col lg:flex-row items-center lg:justify-center`}
    >
      {pricingCards.map((plan, i) => (
        <article
          key={i}
          className={`mt-12 lg:mx-2 xl:mx-8 ${
            negativeMarginCards ? "lg:-mt-64" : ""
          }`}
        >
          <div
            className={`relative py-4 lg:py-6 px-6 ${
              !plan.available
                ? "bg-gray-200 shadow-graySm"
                : plan.title === "Bundle"
                ? "bg-purple-500 text-white shadow-tealSm"
                : "bg-white shadow-graySm"
            } rounded-lg border border-gray-900 w-72 md:w-80 transition-main`}
          >
            {(!plan.available ||
              plan.seatsLeft <= 6 ||
              plan.title === "Bundle") && (
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-gray-900 px-4 py-1 text-xs leading-5 font-semibold tracking-wider uppercase text-teal-300 shadow-tealSm">
                    {!plan.available || plan.seatsLeft < 0
                      ? "Sold out"
                      : plan.seatsLeft === 1
                      ? "1 seat left"
                      : plan.seatsLeft <= 6
                      ? `${plan.seatsLeft} seats left`
                      : plan.title === "Bundle" &&
                        `Get both plans & save ${discount}%`}
                  </span>
                </div>
              </div>
            )}
            <header className="mt-2 text-center">
              <h2 className="text-4xl inter font-black">{`${plan.title}`}</h2>
              <p className="mt-2 text-center text-sm">{plan.description}</p>
              <div
                className={`mt-4 lg:mt-6 py-4 border-t border-b ${
                  !plan.available
                    ? "border-gray-900"
                    : plan.title === "Bundle"
                    ? "border-teal-300"
                    : "border-gray-900"
                }`}
              >
                <div className="all-center">
                  <p className="text-3xl lg:text-4xl xl:text-5xl font-black">
                    {`$${plan.price}`}
                  </p>
                  <span className="ml-2">/mo</span>
                </div>
                <div className="mt-4 lg:mt-6">
                  {plan.forceSoldOut && plan.title ? (
                    <button
                      disabled={true}
                      className="block w-full py-2 px-4 rounded-lg border border-gray-900 bg-gray-900 font-semibold text-sm md:text-base cursor-not-allowed text-teal-300 ring-gray inter"
                    >
                      Sold out
                    </button>
                  ) : !plan.available && plan.title ? (
                    <button
                      onClick={() => {
                        setSelectedPlan(plan.title)
                        setShowWaitlistPopup(!showWaitlistPopup)
                      }}
                      className="block w-full py-2 px-4 rounded-lg border border-gray-900 bg-gray-900 font-semibold text-sm md:text-base hover:bg-gray-800 text-teal-300 transition-main ring-gray inter"
                    >
                      Join the waitlist
                    </button>
                  ) : (
                    <Link
                      to={`/signup/?${plan.title.toLowerCase()}`}
                      className={`${
                        plan.title === "Bundle"
                          ? "py-3 px-4 rounded-lg border border-gray-900 bg-gray-900 font-semibold text-sm md:text-base hover:bg-gray-800 text-teal-300 transition-main ring-teal"
                          : "cta-link"
                      } inter block`}
                    >
                      Get the {plan.title} plan
                    </Link>
                  )}
                </div>
              </div>
            </header>
            <ul className="mt-4 leading-relaxed">
              {plan.features.map((feature, i) => (
                <li key={i} className="mt-2 flex">
                  <Bullet
                    className={`mt-1 svg-sm ${
                      !plan.available ? "text-gray-400" : "text-teal-300"
                    } flex-none`}
                  />
                  <p className="ml-4">{feature.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
      {showWaitlistPopup && selectedPlan && (
        <WaitlistPopup
          showWaitlistPopup={showWaitlistPopup}
          setShowWaitlistPopup={setShowWaitlistPopup}
          selectedPlan={selectedPlan}
        />
      )}
    </div>
  )
}

export default PricingCards
