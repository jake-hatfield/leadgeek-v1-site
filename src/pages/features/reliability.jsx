import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"
import BulletedList from "../../components/bulletedList"
import CTA from "../../components/cta"

import Check from "../../assets/check.svg"

const LeadCriteriaPage = () => {
  const leadReliability = [
    {
      id: 1,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Save time sourcing",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide",
    },
    {
      id: 2,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Get informed research",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide",
    },
    {
      id: 3,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Count on consistency",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide",
    },
  ]
  const dataList = [
    {
      id: 1,
      dataPoint: "Retailer source",
    },
    {
      id: 2,
      dataPoint: "Product title",
    },
    {
      id: 3,
      dataPoint: "Product category",
    },
    {
      id: 4,
      dataPoint: "Retailer link",
    },
    {
      id: 5,
      dataPoint: "Amazon product link",
    },
    {
      id: 6,
      dataPoint: "Current buy price",
    },
    {
      id: 7,
      dataPoint: "Current sell price",
    },
    {
      id: 8,
      dataPoint: "Net profit",
    },
    {
      id: 9,
      dataPoint: "Net ROI",
    },
    {
      id: 10,
      dataPoint: "Current BSR",
    },
    {
      id: 11,
      dataPoint: "30 & 90 Day BSR",
    },
    {
      id: 12,
      dataPoint: "Average monthly sales",
    },
    {
      id: 13,
      dataPoint: "3rd party seller competition",
    },
    {
      id: 14,
      dataPoint: "Relevant promo codes",
    },
    {
      id: 15,
      dataPoint: "Cashback discounts",
    },
    {
      id: 16,
      dataPoint: "Sourcing notes",
    },
    {
      id: 17,
      dataPoint: "Variation recommendations",
    },
  ]
  const dataPoints = dataList.length
  return (
    <Layout>
      <SEO title="Member Support" description="" />
      <AltHeader
        title={`Proven reliability`}
        header={`Online Arbitrage Leads That Save You Time.`}
        subHeader={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo unde
        quibum optio distinctio vitae similique amet aut cumque reprehenderit
        doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Explicabo unde quibusdam optio distinctio vitae similique amet aut
        cumque reprehenderit doloremque!`}
        nav
        linkOne={`signup`}
        linkOneText={`Join now`}
        linkTwo={`demo`}
        linkTwoText={`Watch demo`}
      />
      <ThreeIconList
        items={leadReliability}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        iconColor={`bg-purple-100 text-purple-600`}
        margin={`mt-20`}
        title={`How it works`}
        mainHeader={`Lorem ipsum dolor sit`}
      />
      <section className="mt-8 md:mt-12 lg:mt-20 -mb-16 lg:-mb-24 pt-12 md:pt-0 md:mx-auto container-width text-gray-700">
        <header className="px-4 xl:px-0 max-w-3xl">
          <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
            Save time sourcing
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            We're the all-in-one toolkit for productive sourcing.
          </h2>
        </header>
        <div className="mt-8 md:px-4 xl:px-0 md:flex md:justify-between">
          <div className="md:mt-12 px-4 md:px-0 md:w-1/4">
            <h3 className="text-xl font-semibold text-gray-900">
              Automate the time-consuming work
            </h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sequi soluta accusantium enim officia atque nam repudiandae ipsam
              vero nesciunt!
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
                    LeadGeek
                  </td>
                </tr>
              </thead>
              <tbody className="leading-snug font-normal shadow-lg">
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Sourcing products</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
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
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Validating matches</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="font-medium border-0">Picking products</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-gray-900 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Checking in stock</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
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
                    <div className="flex items-center">
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
                    <div className="flex items-center">
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
      <section className="pt-24 lg:pt-40 pb-12 lg:pb-24 bg-gray-100">
        <article className="container">
          <header className="max-w-3xl">
            <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
              Get informed research
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              We check {dataPoints} different data points bring you the best
              leads.
            </h2>
          </header>
          <div className="mt-8 lg:mt-12 md:flex md:justify-between text-gray-700">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900">
                Detailed analysis for every product
              </h3>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                sequi soluta accusantium enim officia atque nam repudiandae
                ipsam vero nesciunt!
              </p>
              <h3 className="mt-6 font-medium text-gray-700">
                Our data points:
              </h3>
              <BulletedList
                items={dataList}
                margin={`mt-4`}
                gridLayout="md:grid-cols-2"
              />
            </div>
            <div className="md:ml-4 lg:ml-8 -md:w-1/2">Hello</div>
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
              We send proven-selling products directly to your inbox every
              weekday.
            </h2>
            <p className="mt-4 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sequi soluta accusantium enim officia atque nam repudiandae ipsam
              vero nesciunt!
            </p>
          </header>
          <article className="mt-8 lg:mt-12 md:flex md:justify-between">
            <header className="md:w-1/3">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="p-2 h-10 w-10 rounded-md bg-teal-300 text-teal-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                    500+ sources
                  </h3>
                  <p className={`mt-4`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae sequi soluta accusantium en
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="p-2 h-10 w-10 rounded-md bg-teal-300 text-teal-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                    Reliable leads
                  </h3>
                  <p className={`mt-4`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae sequi soluta accusantium en
                  </p>
                </div>
              </div>
            </header>
            <div className="md:w-2/3">hello</div>
          </article>
        </div>
      </section>
      <CTA
        padding={`py-12 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="Join now"
        link="demo"
        linkText="Watch demo"
        linkStyles="text-purple-100 hover:text-purple-200"
      />
    </Layout>
  )
}
export const query = graphql`
  query {
    astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default LeadCriteriaPage
