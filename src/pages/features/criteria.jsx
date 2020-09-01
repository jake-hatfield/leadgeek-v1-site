import React from "react"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"
import LargeDescription from "../../components/largeDescription"
import BulletedList from "../../components/bulletedList"
import OtherFeatures from "../../components/otherFeatures"
import CTA from "../../components/cta"

const LeadCriteriaPage = ({ data }) => {
  const criteriaItems = [
    {
      id: 1,
      title: "Net Profit",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: 2,
      title: "Net ROI",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: 3,
      title: "Sales Velocity",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: 4,
      title: "Seller Insight Test",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
  ]
  const productCategories = [
    {
      id: 1,
      dataPoint: "Baby",
    },
    {
      id: 2,
      dataPoint: "Beauty & personal care",
    },
    {
      id: 3,
      dataPoint: "Books",
    },
    {
      id: 4,
      dataPoint: "Clothing, shoes, & jewelry",
    },
    {
      id: 5,
      dataPoint: "Electronics",
    },
    {
      id: 6,
      dataPoint: "Garden & outdoor",
    },
    {
      id: 7,
      dataPoint: "Grocery & gourmet food",
    },
    {
      id: 9,
      dataPoint: "Home & kitchen",
    },
    {
      id: 10,
      dataPoint: "Industrial & scientific",
    },
    {
      id: 11,
      dataPoint: "Office products",
    },
    {
      id: 12,
      dataPoint: "Pet supplies",
    },
    {
      id: 13,
      dataPoint: "Sports & outdoors",
    },
    {
      id: 14,
      dataPoint: "Toys & games",
    },
  ]
  const categoryCount = productCategories.length
  const criteriaTopics = [
    {
      id: 1,
      iconPath:
        "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      header: "High standards",
      content:
        "Don't spend any time sourcing products yourself. Our strict criteria allow you to receive the top 1% of products immediately.",
    },
    {
      id: 2,
      iconPath:
        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      header: "Low competition",
      content:
        "We keep seller competition in check with extremely tight member cutoffs and advanced capacity balancing methods.",
    },
    {
      id: 3,
      iconPath:
        "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      header: "Comprehensive categories",
      content: `We source products from over ${categoryCount} categories to keep the daily leads fresh and give our members a variety of choices.`,
    },
  ]
  return (
    <Layout>
      <SEO title="Strict Criteria" description="" />
      <AltHeader
        title={`Strict Criteria`}
        header={`Get premium leads that align with your selling standards.`}
        subHeader={`LeadGeek helps you scale your business without sacrificing quality. Our team sorts through thousands of arbitrage leads every day to bring you the best opportunities so you don't have to spend hours sourcing yourself.`}
        nav
        linkOne={`signup`}
        linkOneText={`Join now`}
        linkTwo={`demo`}
        linkTwoText={`Watch demo`}
      />
      <ThreeIconList
        items={criteriaTopics}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        iconColor={`bg-purple-100 text-purple-600`}
        margin={`mt-20`}
        title={`How it works`}
        mainHeader={`Give your sourcing a competitive edge.`}
      />
      <LargeDescription
        title={`High standards`}
        mainHeader={`Enjoy strict standards that yield superior products.`}
        mainSubheader={
          <span>
            Our carefully-tailored requirements and vetting methods allow you to
            get professional-grade arbitrage sourcing at a fraction of the
            price. Though we use many metrics to determine product quality, four
            are most important: <strong>net profit</strong>,{" "}
            <strong>net ROI</strong>, <strong>sales velocity</strong>, and the{" "}
            <strong>seller insight test</strong>.
          </span>
        }
        items={criteriaItems}
        bgColor={`bg-gray-200`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
      />
      <section className="pt-12 lg:pt-24 container text-gray-700">
        <div className="md:flex md:justify-between">
          <article className="md:w-3/4">
            <header className="max-w-4xl">
              <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
                Low competition
              </span>
              <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                Strategies that reduce lead exposure.
              </h2>
            </header>
            <div className="mt-8 md:flex md:justify-between">
              <div className="md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="p-2 h-10 w-10 rounded-md bg-teal-200 text-teal-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                  Seat limiting
                </h3>
                <p className={`mt-2`}>
                  Intra-list seller competition is something we take very
                  seriously, which is why we cut down on lead exposure by
                  setting no-budge caps on the number of members allowed on a
                  list at any given time.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="p-2 h-10 w-10 rounded-md bg-teal-200 text-teal-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                  List splitting
                </h3>
                <p className={`mt-2`}>
                  If one of our lists has hit maximum capacity, we'll halve the
                  current competition when we open a new one. For instance, if
                  30 sellers are on the Grow plan, we'll open a new list and
                  balance the members 15/15.
                </p>
              </div>
            </div>
          </article>
          <div className="mt-8 md:mt-0 md:ml-6 py-4 hidden md:block md:w-1/4">
            <div className="border-l-2 border-gray-200">
              <h4 className="pl-2 font-semibold text-lg text-gray-700">
                Bundle cap
              </h4>
              <div className="p-2">
                <span className="text-xl font-semibold text-purple-600">
                  15
                </span>
                <p className="text-sm text-gray-600">max members per list</p>
              </div>
            </div>
            <div className="mt-6 border-l-2 border-gray-200">
              <h4 className="pl-2 font-semibold text-lg text-gray-700">
                Pro plan cap
              </h4>
              <div className="p-2">
                <span className="text-xl font-semibold text-purple-600">
                  15
                </span>
                <p className="text-sm text-gray-600">max members per list</p>
              </div>
            </div>
            <div className="mt-6 border-l-2 border-gray-200">
              <h4 className="pl-2 font-semibold text-lg text-gray-700">
                Grow plan cap
              </h4>
              <div className="p-2">
                <span className="text-xl font-semibold text-purple-600">
                  30
                </span>
                <p className="text-sm text-gray-600">max members per list</p>
              </div>
            </div>
            <div className="mt-6 border-l-2 border-gray-200">
              <h4 className="pl-2 font-semibold text-lg text-gray-700">
                List splitting
              </h4>
              <div className="p-2">
                <span className="text-xl font-semibold text-purple-600">
                  Active
                </span>
                <p className="text-sm text-gray-600">for all plans</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:hidden flex justify-between">
            <div className="w-1/3">
              <h4 className="font-semibold">Bundle</h4>
              <p className="mt-2 text-gray-700 text-sm">
                Max{" "}
                <span className="text-purple-600 text-base font-semibold">
                  15
                </span>{" "}
                members
              </p>
            </div>
            <div className="w-1/3">
              <h4 className="font-semibold">Pro Plan</h4>
              <p className="mt-2 text-gray-700 text-sm">
                Max{" "}
                <span className="text-purple-600 text-base font-semibold">
                  15
                </span>{" "}
                members
              </p>
            </div>
            <div className="w-1/3">
              <h4 className="font-semibold">Grow Plan</h4>
              <p className="mt-2 text-gray-700 text-sm">
                Max{" "}
                <span className="text-purple-600 text-base font-semibold">
                  30
                </span>{" "}
                members
              </p>
            </div>
          </div>
          <div className="mt-8 md:hidden">
            <h4 className="font-semibold">List splitting</h4>
            <p className="mt-2 text-gray-700 text-sm">
              <span className="text-purple-600 text-base font-semibold">
                Active
              </span>{" "}
              for all plans
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Img
            fluid={data.astronaut.childImageSharp.fluid}
            className="h-64 w-full shadow-lg"
          />
        </div>
      </section>
      <section className="-mt-48 md:-mt-40 pt-56 pb-12 lg:pb-24 bg-gray-100 text-gray-700">
        <div className="container md:flex md:flex-row md:justify-between">
          <header className="md:w-3/4">
            <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
              Comprehensive categories
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              Access profitable leads from {categoryCount}+ proven categories
            </h2>
            <p className="mt-4 max-w-2xl lg:text-lg">
              Experience a wide variety of arbitrage leads from the best-selling
              categories on Amazon. Whether you're just starting out or you've
              been selling for a while, these are the most profitable types of
              products to flip.
            </p>
            <BulletedList
              items={productCategories}
              margin={`mt-8`}
              gridLayout="md:grid-flow-col md:grid-cols-3 md:grid-rows-5"
            />
          </header>
          <div className="mt-8 md:mt-0 md:ml-6 md:py-4 md:w-1/4 md:flex md:flex-col md:justify-end">
            <div className="md:border-l-2 border-gray-200 text-sm text-gray-700">
              <h4 className="md:pl-2 flex items-center font-semibold md:text-lg">
                Grow plan priority
              </h4>
              <p className="mt-2 md:pl-2 text-base md:text-xl font-semibold text-purple-600">
                Ungated categories
              </p>
              <p className="mt-1 md:pl-2">
                Both lists have a mix of gated and ungated products, but the
                Grow plan is weighted slightly more to ungated products.
              </p>
            </div>
            <div className="mt-6 md:border-l-2 border-gray-200 text-sm text-gray-700">
              <h4 className="md:pl-2 flex items-center font-semibold md:text-lg">
                Pro plan priority
              </h4>
              <p className="mt-2 md:pl-2 text-base md:text-xl font-semibold text-purple-600">
                Gated categories
              </p>
              <p className="mt-1 md:pl-2">
                The Pro plan includes all categories, but prioritizes products
                from the beauty, clothing, grocery, and toys categories.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OtherFeatures
        primaryTextColor="text-gray-900"
        secondaryTextColor="text-gray-700"
        iconColor="bg-purple-100 text-purple-600"
        reliability
        education
        support
      />
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
