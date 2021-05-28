import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "../components/PrimaryHeader"
import PricingTable from "../components/PricingTable"
import Faq from "../components/Faq"

import Loopy from "assets/svgs/loopy-dashed.svg"
import Bullet from "assets/svgs/bullet.svg"
import DividerTop from "assets/svgs/section-divider-top.svg"
import DividerBottom from "assets/svgs/section-divider-bottom.svg"

const PricingPage = () => {
  return (
    <Layout>
      <SEO
        title="Leadgeek Pricing and Plans - Monthly Membership Costs"
        description="Find out all the details of Leadgeek pricing so you can choose the plan that's best for your arbitrage business."
      />
      <section className="relative overflow-x-hidden bg-splatter">
        <HeaderWrapper bottomPadding={"pb-80"}>
          <PrimaryHeader
            title={`Leadgeek pricing`}
            desc={
              "From starting out to scaling up - here are your monthly membership options."
            }
            svgOne={
              <div
                className={`hidden lg:block absolute bottom-0 left-0 py-1 px-2 handwritten text-lg xl:text-xl rounded-lg bg-gray-900 text-teal-300 transform translate-x-12 translate-y-40 shadow-tealMd text-center transition-main w-56 -rotate-6 hover:-rotate-3`}
              >
                <blockquote>
                  "Would definitely... if you want to take the guess work out of
                  sourcing for FBA" - <cite>William</cite>
                </blockquote>
              </div>
            }
            svgTwo={
              <div
                className={`hidden lg:block absolute bottom-0 right-0 py-1 px-2 handwritten text-lg xl:text-xl rounded-lg bg-gray-900 text-teal-300 transform -translate-x-12 translate-y-32 shadow-tealMd text-center transition-main w-56 rotate-3 hover:rotate-6`}
              >
                <blockquote>
                  "Leadgeek will pay off in a week" - <cite>Kevin</cite>
                </blockquote>
              </div>
            }
          />
        </HeaderWrapper>
      </section>
      <section className="relative text-gray-900 bg-gray-900">
        <DividerTop className="divider-top text-gray-900" />
        <Loopy className="absolute top-0 right-1/2 h-32 lg:h-40 text-purple-500 transform -translate-y-80" />
        <div className="mt-8 pt-20 lg:pt-32 pb-12 px-8 max-w-7xl mx-auto">
          <div className="-mt-64 lg:mt-0 flex flex-col lg:flex-row items-center lg:justify-center">
            {pricingCards.map((plan, i) => (
              <article
                key={i}
                className="relative mt-8 lg:-mt-64 first:ml-0 lg:ml-8 py-4 lg:py-6 px-6 bg-white last:bg-purple-500 last:text-white rounded-lg border border-gray-900 w-80 transition-main shadow-dark transform hover:-rotate-2"
              >
                {plan.title === "Bundle" && (
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-gray-900 px-4 py-1 text-xs leading-5 font-semibold tracking-wider uppercase text-teal-300 shadow-tealSm">
                        Get both plans & save {discount}%
                      </span>
                    </div>
                  </div>
                )}
                <header className="mt-2 text-center">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl inter font-black">
                    {`${plan.title}`}
                  </h3>
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
                            ? "py-3 px-4 rounded-lg shadow-tealSm hover:shadow-tealMd border border-gray-900 bg-gray-900 font-semibold text-sm hover:bg-gray-800 text-teal-300 transition-main ring-teal"
                            : "cta-link"
                        } inter block`}
                      >
                        Get the {plan.title} plan
                      </Link>
                    </div>
                  </div>
                </header>
                <div className="mt-4 leading-relaxed">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mt-2 flex">
                      <Bullet className="mt-1 svg-sm text-teal-300 flex-none" />
                      <p className="ml-4">{feature.title}</p>
                    </li>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="features" className="relative py-12 text-white bg-gray-900">
        <DividerBottom className="divider-bottom text-gray-900" />
        <header className="container text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold inter">
            Compare plans
          </h2>
        </header>
        <PricingTable
          tableHeader={`Plan features`}
          featureRows={coreFeatureRows}
          id={`plan-features`}
        />
        <PricingTable
          tableHeader={`Lead standards`}
          featureRows={criteriaFeatureRows}
          id={`lead-standards`}
        />
        <PricingTable
          tableHeader={`Software features`}
          featureRows={softwareFeatureRows}
          id={`software-features`}
        />
      </section>
      <Faq growPlanSeats={growPlanSeats} proPlanSeats={proPlanSeats} />
    </Layout>
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
    desc: "For people who are brand-spankin' new to arbitrage.",
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
            $<strong className="font-semibold">4-30+</strong> profit per unit
          </span>
        ),
      },
      {
        title: (
          <span>
            <strong className="font-semibold">40</strong>%+ ROI per unit
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
        title: "Seller support",
      },
      {
        title: "Full software access",
      },
    ],
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
            $<strong className="font-semibold">7-50+</strong> profit per unit
          </span>
        ),
      },
      {
        title: (
          <span>
            <strong className="font-semibold">50</strong>%+ ROI per unit
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
        title: "Seller support",
      },
      {
        title: "Full software access",
      },
    ],
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
        title: "Seller support",
      },
      {
        title: "Full software access",
      },
      {
        title: "Early access and discounts on new tools",
      },
    ],
  },
]

const coreFeatureRows = [
  {
    cells: [
      {
        description: true,
        value: "Member limit",
      },
      { description: false, value: growPlanSeats },
      { description: false, value: proPlanSeats },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Weekly # of products",
      },
      { description: false, value: "50+" },
      { description: false, value: "50+" },
      { description: false, value: "100+" },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Price per lead",
      },
      { description: false, value: "$0.64" },
      { description: false, value: "$0.94" },
      { description: false, value: "$0.66" },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "500+ Retail sources",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Full software access",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Seller support",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Early access/discounts on new tools",
      },
      { description: false, value: false },
      { description: false, value: false },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Free updates forever",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
]
const criteriaFeatureRows = [
  {
    cells: [
      {
        description: true,
        value: "Minimum profit",
      },
      { description: false, value: "$4+" },
      { description: false, value: "$7+" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Minimum ROI",
      },
      { description: false, value: "40%+" },
      { description: false, value: "50%+" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Minimum monthly sales",
      },
      { description: false, value: "10+" },
      { description: false, value: "15+" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Minimum BSR",
      },
      { description: false, value: "<2%" },
      { description: false, value: "<1.5%" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "US seller approval",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "No hazmat status",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
]

const softwareFeatureRows = [
  {
    cells: [
      {
        description: true,
        value: "The Feed",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Filters",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Detailed view",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Like & Archive",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Prep estimator",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Comments",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Lead search",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Variation notes",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Promo code notes",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Cashback offers",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
]

export default PricingPage
