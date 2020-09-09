import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"
import AlternatingDescription from "../../components/alternatingDescription"
import OtherFeatures from "../../components/otherFeatures"
import CTA from "../../components/cta"

import Dotted from "../../assets/dotted.svg"
import Squiggles from "../../assets/squiggles.svg"

const supportPage = ({ data }) => {
  const educationSummary = [
    {
      id: 1,
      iconPath:
        "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      header: "Practical e-books & guides",
      content:
        "Learn from in-depth guides to develop and mature your Amazon selling knowledge.",
    },
    {
      id: 2,
      iconPath:
        "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
      header: "8-Part OA training course",
      content:
        "Train under experienced sellers in our 8-part video course all about online arbitrage.",
    },
    {
      id: 3,
      iconPath:
        "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
      header: "Helpful tracking templates",
      content:
        "Hit all your selling metrics with complete templates to track sales progress.",
    },
  ]
  const educationPoints = [
    {
      id: 1,
      image: data.ebooks.childImageSharp.fluid,
      span: "E-books & guides",
      header: "Consult the seller's handbook.",
      content:
        "Reference full-length e-books that include time-tested selling techniques. These guides cover material like product selection, account ungating, and more.",
    },
    {
      id: 2,
      image: data.arbitrageCourse.childImageSharp.fluid,
      span: "Arbitrage course",
      header: "Share a screen with the experts.",
      content:
        "Learn at your own pace when you go through our 8-part arbitrage video course. Detailed walkthroughs will help you gain a better grasp over topics like data analysis, product prep, and other foundational concepts.",
    },
    {
      id: 3,
      image: data.templates.childImageSharp.fluid,
      span: "Tracking templates",
      header: "Keep track of performance.",
      content:
        "Measure and improve your selling metrics with powerful templates. Evaluate sales trends to identify the top-performing products and replenish inventory for easy profit.",
    },
  ]

  return (
    <Layout>
      <SEO
        title="Seller Education"
        description="Join LeadGeek and receive in-depth e-books, video lessons, and templates to help you learn the ins and outs of online arbitrage."
      />
      <AltHeader
        title={`Seller education`}
        header={`Train like an online arbitrage pro.`}
        subHeader={`Several different types of comprehensive training materials are made available to LeadGeek members in order to help sharpen their selling knowledge. Learn the ins and outs of online arbitrage directly from experienced Amazon sellers.`}
        nav
        linkOne={`signup`}
        linkOneText={`Join now`}
        linkTwo={`demo`}
        linkTwoText={`Watch demo`}
        svgOne={
          <div className="absolute bottom-0 right-0 z-0 transform rotate-90 -translate-y-12 -translate-x-48">
            <Dotted className="hidden md:inline-block w-24 text-gray-100" />
          </div>
        }
      />
      <ThreeIconList
        items={educationSummary}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        iconColor={`bg-purple-100 text-purple-600`}
        margin={`mt-20`}
        title={`Exclusive member training`}
        mainHeader={`Complete educational resources.`}
      />
      <AlternatingDescription
        items={educationPoints}
        bgColor="bg-gray-200"
        primaryTextColor="text-gray-900"
        secondaryTextColor="text-gray-700"
        tertiaryColor="text-purple-600"
      />
      <OtherFeatures
        primaryTextColor="text-gray-900"
        secondaryTextColor="text-gray-700"
        iconColor="bg-purple-100 text-purple-600"
        criteria
        reliability
        support
        svgOne={
          <div className="absolute top-0 left-0 z-0 transform lg:translate-y-4 translate-x-8">
            <Squiggles className="hidden md:inline-block w-48 lg:w-64 text-gray-200" />
          </div>
        }
      />
      <CTA
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="See pricing"
        link="demo"
        linkText="Watch demo"
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
    ebooks: file(relativePath: { eq: "ebooks.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    arbitrageCourse: file(relativePath: { eq: "arbitrage-course.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    templates: file(relativePath: { eq: "templates.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default supportPage
