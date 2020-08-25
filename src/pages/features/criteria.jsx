import React from "react"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"
import LargeDescription from "../../components/largeDescription"
import BulletedList from "../../components/bulletedList"
import CTA from "../../components/cta"

import Check from "../../assets/check.svg"

const LeadCriteriaPage = ({ data }) => {
  const criteriaTopics = [
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
  const criteriaItems = [
    {
      id: "1",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: "2",
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
      proPriority: true,
      dataPoint: "Beauty & personal care",
    },
    {
      id: 3,
      dataPoint: "Books",
    },
    {
      id: 4,
      proPriority: true,
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
      proPriority: true,
      dataPoint: "Grocery & gourmet food",
    },
    {
      id: 9,
      proPriority: true,
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
      proPriority: true,
      dataPoint: "Toys & games",
    },
  ]

  const categoryCount = productCategories.length
  return (
    <Layout>
      <SEO title="Member Support" description="" />
      <AltHeader
        title={`Strict Criteria`}
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
        items={criteriaTopics}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        iconColor={`bg-purple-100 text-purple-600`}
        margin={`mt-20`}
        title={`How it works`}
        mainHeader={`Lorem ipsum dolor sit`}
      />
      <LargeDescription
        mainHeader={`Lorem ipsum dolor sit amet consur`}
        mainSubheader={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.`}
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
                We send proven-selling products directly to your inbox every
                weekday.
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
                  Limited seats
                </h3>
                <p className={`mt-4`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  sequi soluta accusantium en
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 md:w-1/2">
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
                <p className={`mt-4`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  sequi soluta accusantium en
                </p>
              </div>
            </div>
          </article>
          <div className="mt-8 md:mt-0 py-4 hidden md:block md:w-1/4">
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
      <section className="-mt-40 pt-56 pb-12 lg:pb-24 bg-gray-100 text-gray-700">
        <div className="container">
          <header>
            <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
              Comprehensive categories
            </span>
            <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              We source from {categoryCount}+ categories to find you something
              new every day.
            </h2>
            <p className="mt-4 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sequi soluta accusantium enim officia atque nam repudiandae ipsam
              vero nesciunt!
            </p>
          </header>
          <article className="mt-8 flex flex-col-reverse md:flex-row md:justify-between">
            <header className="md:w-3/4">
              <BulletedList
                items={productCategories}
                margin={`mt-4`}
                gridLayout="md:grid-flow-col md:grid-cols-3 md:grid-rows-5"
              />
            </header>
            <div className="py-4 md:w-1/4">
              <div className="border-l-2 border-gray-200">
                <h4 className="pl-2 flex items-center font-semibold text-lg text-gray-700">
                  Pro plan priority
                </h4>
                <p className="mt-2 pl-2 text-sm text-gray-700">
                  The Pro plan includes all categories, but prioritizes products
                  from the beauty, clothing, grocery, and toys categories.
                </p>
                <div className="pl-2 pt-"></div>
              </div>
            </div>
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
