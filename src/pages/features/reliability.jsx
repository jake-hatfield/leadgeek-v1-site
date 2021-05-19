import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import AltHeader from "components/altHeader"
import ThreeIconList from "components/threeIconList"
import BulletedList from "components/bulletedList"
import OtherFeatures from "components/otherFeatures"
import CTA from "components/cta"

import Check from "assets/svgs/check.svg"
import Dotted from "assets/svgs/dotted.svg"
import RetailerSources from "assets/svgs/retailer-sources.svg"

const LeadCriteriaPage = ({ data }) => {
  const dataList = [
    {
      id: 1,
      delay: 0,
      dataPoint: "Retailer source",
    },
    {
      id: 2,
      delay: 0,
      dataPoint: "Product title",
    },
    {
      id: 3,
      delay: 1,
      dataPoint: "Product category",
    },
    {
      id: 4,
      delay: 1,
      dataPoint: "Retailer link",
    },
    {
      id: 5,
      delay: 2,
      dataPoint: "Amazon product link",
    },
    {
      id: 6,
      delay: 2,
      dataPoint: "Current buy price",
    },
    {
      id: 7,
      delay: 3,
      dataPoint: "Current sell price",
    },
    {
      id: 8,
      delay: 3,
      dataPoint: "Net profit",
    },
    {
      id: 9,
      delay: 4,
      dataPoint: "Net ROI",
    },
    {
      id: 10,
      delay: 4,
      dataPoint: "Current BSR + %",
    },
    {
      id: 11,
      delay: 5,
      dataPoint: "30 & 90 Day BSR",
    },
    {
      id: 12,
      delay: 5,
      dataPoint: "Average monthly sales",
    },
    {
      id: 13,
      delay: 6,
      dataPoint: "Seller competition",
    },
    {
      id: 14,
      delay: 6,
      dataPoint: "Item weight",
    },
    {
      id: 15,
      delay: 7,
      dataPoint: "ASIN",
    },
    {
      id: 16,
      delay: 7,
      dataPoint: "Relevant promo codes",
    },
    {
      id: 17,
      delay: 8,
      dataPoint: "Cashback discounts",
    },
    {
      id: 18,
      delay: 8,
      dataPoint: "Sourcing notes",
    },
    {
      id: 19,
      delay: 9,
      dataPoint: "Variation suggestions",
    },
  ]
  const dataPoints = dataList.length
  const leadReliability = [
    {
      id: 1,
      iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      header: "Save time sourcing",
      content:
        "Protect your time by completing monotonous product sourcing in an instant (and at a fraction of the price).",
    },
    {
      id: 2,
      iconPath:
        "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      header: "Get informed research",
      content: `We use ${dataPoints} data points in our product analysis to ensure you receive only the highest-quality leads every day.`,
    },
    {
      id: 3,
      iconPath:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      header: "Count on consistency",
      content:
        "Take advantage of sourcing stability with a guaranteed, fixed quantity of pre-vetted leads.",
    },
  ]

  return (
    <Layout>
      <SEO
        title="Proven Reliability"
        description="Remove any guesswork that surrounds daily arbitrage sourcing with leadgeek. We guarantee a consistent output of premium leads for you to choose from every weekday."
      />
      <AltHeader
        title={`Proven reliability`}
        header={`Take the guesswork out of everyday sourcing.`}
        subHeader={`leadgeek gives you a relief from the uncertainty of sourcing. Rather than hoping you'll have products to sell every day, get a guaranteed output to seamlessly grow your FBA business.`}
        nav
        linkOne={`signup`}
        linkOneText={`Join now`}
        linkTwo={`demo`}
        linkTwoText={`Watch a demo`}
      />
      <ThreeIconList
        items={leadReliability}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        iconColor={`bg-purple-100 text-purple-600`}
        margin={`mt-20`}
        title={`How it works`}
        mainHeader={`Grow your business systematically.`}
      />
      <section className="mt-8 md:mt-12 lg:mt-20 -mb-16 lg:-mb-24 pt-12 md:pt-0 md:mx-auto container-width text-gray-700">
        <header className="px-4 xl:px-0 max-w-3xl">
          <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
            Save time sourcing
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Focus on what matters most.
          </h2>
        </header>
        <div className="mt-8 md:px-4 xl:px-0 md:flex md:justify-between">
          <div className="md:mt-12 px-4 md:px-0 md:w-1/4">
            <h3 className="text-xl font-semibold text-gray-900">
              Automate the time-consuming work
            </h3>
            <p className="mt-4">
              leadgeek lets you transition from a sourcing grind into a
              concentrated FBA business owner. Let our expert team compress 8+
              hours of product analysis into a list that you can review in a few
              minutes each day.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-4 lg:ml-6 md:w-3/4">
            <table className="relative z-20 md:table-fixed bg-gray-900 text-xs lg:text-sm text-white border-0">
              <thead className="bg-white text-gray-700 font-bold border-0">
                <tr>
                  <td className="md:w-1/2 border-0"></td>
                  <td className="md:w-1/4 text-center md:text-left border-0 leading-tight">
                    Other Services
                  </td>
                  <td className="md:w-1/4 text-center md:text-left border-0 leading-tight">
                    leadgeek
                  </td>
                </tr>
              </thead>
              <tbody className="leading-snug font-normal shadow-lg">
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Sourcing products</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div
                      className="flex items-center"
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="ease"
                    >
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="font-medium border-0">
                    Sorting through leads
                  </th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div
                      className="flex items-center"
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="ease"
                    >
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Validating matches</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div
                      className="flex items-center"
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="ease"
                    >
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="font-medium border-0">Picking products</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div
                      className="flex items-center"
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="ease"
                    >
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Checking in stock</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div
                      className="flex items-center"
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="ease"
                    >
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="font-medium border-0">
                    Determining profitability
                  </th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div
                      className="flex items-center"
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="ease"
                    >
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">
                    Researching promo codes
                  </th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div
                      className="flex items-center"
                      data-sal="slide-up"
                      data-sal-duration="1000"
                      data-sal-easing="ease"
                    >
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="pt-24 lg:pt-40 pb-12 lg:pb-24 relative bg-gray-100">
        <article className="container">
          <header className="relative z-10 max-w-3xl">
            <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
              Get informed research
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              Dive deep into product information.
            </h2>
          </header>
          <div className="mt-8 lg:mt-12 flex flex-col-reverse lg:flex-row justify-between lg:items-center text-gray-700">
            <div className="mt-8 md:mt-12 xl:mt-0 lg:w-2/5">
              <h3 className="text-xl font-semibold text-gray-900">
                Detailed analysis for every product
              </h3>
              <p className="mt-4">
                Since we provide a thorough summary of a product's strengths
                using {dataPoints} real-time data points, you can be empowered
                to make informed purchasing decisions in a fraction of the time
                it would normally take.
              </p>
            </div>
            <div
              className="md:mx-auto xl:ml-8 lg:flex lg:justify-end md:w-2/3 lg:w-3/5"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <Img
                fluid={data.analysis.childImageSharp.fluid}
                className="w-full max-w-xs md:max-w-md lg:max-w-md"
              />
            </div>
          </div>
          <div className="lg:mt-12">
            <h3 className="mt-6 font-medium text-gray-700">
              Every product includes:
            </h3>
            <BulletedList
              items={dataList}
              margin={`mt-4`}
              gridLayout="md:grid-cols-4"
              maxWidth={`max-w-none`}
            />
          </div>
        </article>
      </section>
      <section className="py-12 lg:py-24 bg-gray-200">
        <div className="container text-gray-700">
          <header className="max-w-4xl">
            <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
              Count on consistency
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              Cut out volume volatility.
            </h2>
            <p className="mt-4 max-w-2xl">
              With leadgeek, you get a steady stream of proven-selling products
              directly to your inbox at 8 am CST every weekday. Gain peace of
              mind in knowing that you'll have guaranteed arbitrage
              opportunities without volume fluctuations.
            </p>
          </header>
          <article className="mt-8 lg:mt-12 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
            <header className="lg:w-1/3">
              <div className="mt-8 md:mt-12 lg:mt-0 md:flex md:justify-between lg:flex-col">
                <div className="md:w-1/2 lg:w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="p-2 h-10 w-10 rounded-md bg-purple-600 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                  <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                    500+ Retail sources
                  </h3>
                  <p className="mt-2">
                    Our team sources over 500 US e-retailers to give your
                    product portfolio variety and help diminish lead
                    over-exposure.
                  </p>
                </div>
                <div className="md:w-1/2 lg:w-full">
                  <div className="mt-8 md:mt-0 lg:mt-8 md:ml-8 lg:ml-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="p-2 h-10 w-10 rounded-md bg-purple-600 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                      Reliable output
                    </h3>
                    <p className={`mt-2`}>
                      We guarantee 10 product leads every day, Monday-Friday.
                      Our lists go out early in the morning so you can be first
                      to market with these deals.
                    </p>
                  </div>
                </div>
              </div>
            </header>
            <div
              className="mx-auto lg:ml-12 md:w-3/4 lg:w-2/3 lg:max-w-xl"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <RetailerSources className="w-full" />
            </div>
          </article>
        </div>
      </section>
      <OtherFeatures
        primaryTextColor="text-gray-900"
        secondaryTextColor="text-gray-700"
        iconColor="bg-purple-100 text-purple-600"
        criteria
        support
        // education
      />
      <CTA
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="See pricing"
        link="demo"
        linkText="Watch a demo"
        linkStyles="text-purple-100 hover:text-purple-200"
        svgOne={
          <div className="absolute top-0 left-0 z-0 transform -translate-y-32 xl:-translate-y-40 xl:-translate-x-24">
            <Dotted className="hidden md:inline-block w-24 text-purple-400" />
          </div>
        }
      />
    </Layout>
  )
}
export const query = graphql`
  query {
    analysis: file(relativePath: { eq: "analysis.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default LeadCriteriaPage
