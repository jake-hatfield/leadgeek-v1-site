import React from "react"
import { Link } from "gatsby"

import Bullet from "assets/svgs/bullet.svg"

const PricingCards = ({ margin, negativeMarginCards }) => {
  return (
    <div
      className={`${margin} flex flex-col lg:flex-row items-center lg:justify-center`}
    >
      {pricingCards.map((plan, i) => (
        <article
          key={i}
          className={`mt-12 lg:mx-2 xl:mx-8 ${
            negativeMarginCards ? "lg:-mt-64" : ""
          } `}
          data-sal="fade"
          data-sal-delay={plan.delay}
          data-sal-duration="500"
          data-sal-easing="ease in out"
        >
          <div
            className={`relative py-4 lg:py-6 px-6 ${
              plan.title === "Bundle"
                ? "bg-purple-500 text-white shadow-tealSm"
                : "bg-white shadow-graySm"
            } rounded-lg border border-gray-900 w-80 transition-main`}
          >
            {plan.title === "Bundle" && (
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-gray-900 px-4 py-1 text-xs leading-5 font-semibold tracking-wider uppercase text-teal-300">
                    Get both plans & save {discount}%
                  </span>
                </div>
              </div>
            )}
            {plan.limited && (
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-gray-900 px-4 py-1 text-xs leading-5 font-semibold tracking-wider uppercase text-teal-300">
                    Only a few spots left<span className="inter">!</span>
                  </span>
                </div>
              </div>
            )}
            <header className="mt-2 text-center">
              <h2 className="text-4xl inter font-black">{`${plan.title}`}</h2>
              <p className="mt-2 text-center text-sm">{plan.desc}</p>
              <div
                className={`mt-4 lg:mt-6 py-4 border-t border-b ${
                  plan.title === "Bundle"
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
                  <Link
                    to={`/signup/${plan.title.toLowerCase()}/`}
                    className={`${
                      plan.title === "Bundle"
                        ? "py-3 px-4 rounded-lg border border-gray-900 bg-gray-900 font-semibold text-sm hover:bg-gray-800 text-teal-300 transition-main ring-teal"
                        : "cta-link"
                    } inter block`}
                  >
                    Get the {plan.title} plan
                  </Link>
                </div>
              </div>
            </header>
            <ul className="mt-4 leading-relaxed">
              {plan.features.map((feature, i) => (
                <li key={i} className="mt-2 flex">
                  <Bullet className="mt-1 svg-sm text-teal-300 flex-none" />
                  <p className="ml-4">{feature.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}

const growPrice = 129
const proPrice = 189
const bundlePrice = 263
const discount = Math.trunc((1 - bundlePrice / (proPrice + growPrice)) * 100)
const growPlanSeats = 30
const proPlanSeats = 15

const pricingCards = [
  {
    title: "Grow",
    desc: "For people who are new to arbitrage and ready to jump in.",
    price: growPrice,
    features: [
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
            <strong className="font-semibold">50+</strong> products per week
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
            <strong className="font-semibold">Ungated</strong> product priority
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
    limited: true,
    delay: "500",
  },
  {
    title: "Pro",
    desc: "For intermediate sellers looking for premium criteria.",
    price: proPrice,
    features: [
      {
        title: (
          <span>
            Limited to <strong className="font-semibold">{proPlanSeats}</strong>{" "}
            members
          </span>
        ),
      },
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
    limited: true,
    delay: "700",
  },
  {
    title: "Bundle",
    desc: `For experienced sellers who are ready to ramp up sourcing.`,
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
    limited: false,
    delay: "900",
  },
]

export default PricingCards
