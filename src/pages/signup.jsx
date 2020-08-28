import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PrimaryHeader from "../components/primaryHeader"
import CTA from "../components/cta"

import Check from "../assets/check.svg"
import ArrowRight from "../assets/arrow-right.svg"

const signupPage = () => {
  const growPrice = 129
  const proPrice = 189
  const bundlePrice = 263
  const discount = Math.trunc((1 - bundlePrice / (proPrice + growPrice)) * 100)
  const plans = [
    {
      id: 1,
      plan: "Grow+Pro Bundle",
      description:
        "The perfect plan for an intermediate seller who wants to have totally hands-off arbitrage sourcing. With over 100 leads every week, there's plenty of opportunities to choose from.",
      bullets: [
        <p>
          Limited to <strong className="font-semibold">15</strong> members
        </p>,
        <p>
          <strong className="font-semibold">100+</strong> products per week
        </p>,
        "All Grow & Pro leads",
        "Support & training",
      ],
      price: bundlePrice,
      shortName: "Bundle",
      link: "bundle",
    },
    {
      id: 2,
      plan: "Pro Plan",
      description:
        "The ideal plan for Amazon sellers who want a high level of lead exclusivity and are ready to scale their product sourcing abilities. These leads must meet high standards to be approved by our team.",
      bullets: [
        <p>
          Limited to <strong className="font-semibold">15</strong> members
        </p>,
        <p>
          <strong className="font-semibold">50+</strong> products per week
        </p>,
        "Pro lead standards",
        "Support & training",
      ],
      price: proPrice,
      link: "pro",
    },
    {
      id: 3,
      plan: "Grow Plan",
      description:
        "The best plan for sellers who might just be starting out. There's plenty of high-quality arbitrage leads to flip, great member support, and educational selling resources.",
      bullets: [
        <p>
          Limited to <strong className="font-semibold">30</strong> members
        </p>,
        <p>
          <strong className="font-semibold">50+</strong> products per week
        </p>,
        "Grow plan criteria",
        "Support & training",
      ],
      price: growPrice,
      link: "grow",
    },
  ]
  return (
    <Layout>
      <section className="-mt-40 bg-teal-200 inset-0 text-gray-900">
        <PrimaryHeader
          header={`Choose the sourcing plan that fits your needs.`}
          subHeader={`Are you just getting started selling? Have some experience under your belt? Join our premium sourcing service and start flipping arbitrage products hassle-free.`}
          negativeMargin
          bottomPadding={`pb-40 md:pb-48`}
        />
      </section>
      <section className="-mt-32 container">
        {plans.map(item => (
          <article
            key={item.id}
            className={`${
              item.id === 1 ? `border-2 border-purple-400` : `border-none`
            } first:mt-0 mt-8 md:mt-12 md:flex md:justify-between relative z-10 rounded-md bg-gray-100 shadow-lg text-gray-700`}
          >
            <header
              className={`${
                item.id === 1
                  ? `md:border-r-2 border-purple-400`
                  : `md:border-r-2 border-gray-200`
              } pt-6 pb-2 px-4 md:px-8 md:w-2/3 rounded-t-md md:rounded-t-none md:rounded-tl-md md:rounded-bl-md bg-white border-b-2 md:border-b-0 `}
            >
              <div className="md:flex md:items-center">
                <h2
                  className={`${
                    item.id === 1 && "mb-2 md:mb-0"
                  } font-bold text-2xl lg:text-3xl text-gray-900`}
                >
                  {item.plan}
                </h2>
                {item.id === 1 && (
                  <span className="md:ml-2 py-1 px-2 bg-teal-200 rounded-full text-teal-500">{`Save ${discount}%`}</span>
                )}
              </div>
              <p className="mt-4 max-w-lg text-sm lg:text-basetext-gray-500">
                {item.description}
              </p>
              <div className="mt-4 lg:mt-8 flex items-center">
                <div className="uppercase whitespace-no-wrap text-sm md:text-base text-purple-600 font-bold">
                  What's included
                </div>
                <span className="ml-2 w-full border border-gray-200" />
              </div>
              <ul className="mt-4 grid grid-cols-2 col-gap-1">
                {item.bullets.map(bullet => (
                  <li
                    key={bullet}
                    className="flex items-start md:items-center text-xs lg:text-sm"
                  >
                    <Check className="h-3 w-3 md:h-4 md:w-4 flex-none text-teal-500 bg-teal-200 rounded-full" />
                    {(typeof bullet == "string" && bullet.includes("Grow")) ||
                    (typeof bullet == "string" && bullet.includes("Pro")) ? (
                      <span className="ml-2 lg:ml-4">
                        <Link
                          to={`/pricing#lead-standards`}
                          className="underline"
                        >
                          {bullet}
                        </Link>
                      </span>
                    ) : (
                      <span className="ml-2 lg:ml-4">{bullet}</span>
                    )}
                  </li>
                ))}
              </ul>
            </header>
            <div className="py-6 md:py-0 px-4 lg:px-8 md:w-1/3 flex flex-col items-center justify-center relative">
              {item.id === 1 && (
                <div className="hidden md:block absolute inset-x-0 top-0 transform translate-y-px">
                  <div className="flex justify-center transform -translate-y-1/2">
                    <span className="inline-flex rounded-full bg-purple-500 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                      Get both plans
                    </span>
                  </div>
                </div>
              )}
              <p className="font-semibold text-base lg:text-lg">
                Subscribe today for:
              </p>
              <div className="mt-1 flex items-center justify-center text-4xl lg:text-5xl font-bold">
                <span className="text-gray-900">${item.price}</span>
                <span className="ml-1 inline-block text-gray-600 text-xl lg:text-2xl">
                  /mo
                </span>
              </div>
              <div className="inline-block text-sm lg:text-base">
                <Link
                  to={`/pricing#features`}
                  className="flex items-center text-gray-500 group hover:text-gray-700 focus:outline-none focus:shadow-outline"
                >
                  Compare all features
                  <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
                </Link>
              </div>
              <div className="w-full">
                <Link
                  to={`/signup/${item.link}`}
                  className="mt-6 py-3 block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 text-center font-bold transition-colors duration-200 focus:outline-none focus:shadow-outline"
                >
                  Get the {item.shortName || item.plan}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="-mt-40 bg-purple-600 text-white">
        <div className="mt-12 lg:mt-16 pt-24 container">
          <CTA
            padding={`py-12 lg:py-24`}
            bgColor="bg-purple-600"
            textColor="text-white"
            mainHeader="Need help with anything?"
            subHeader="No question is too small."
            buttonStyles="bg-white text-purple-600 hover:text-purple-800"
            buttonText="Contact us"
            buttonLink="contact"
            link="demo"
            linkText="Watch demo"
            linkStyles="text-purple-100 hover:text-purple-200"
          />
        </div>
      </section>
    </Layout>
  )
}

export default signupPage
