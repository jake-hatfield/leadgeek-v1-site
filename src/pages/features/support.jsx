import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"
import OtherFeatures from "../../components/otherFeatures"
import CTA from "../../components/cta"

import Dotted from "../../assets/dotted.svg"

const supportPage = () => {
  const leadReliability = [
    {
      id: 1,
      iconPath:
        "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      header: "100% Issue solve rate",
      content:
        "Get every problem resolved, whether you have a question with our leads or an issue with Amazon itself.",
    },
    {
      id: 2,
      iconPath:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      header: "Seller account protection",
      content:
        "Receive help appealling a wrongful Amazon account suspension as a result of one of our leads.",
    },
    {
      id: 3,
      iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      header: "Accessible communication",
      content:
        "Readily communicate with our team through several methods, so you can have your problems solved quickly and easily.",
    },
  ]
  return (
    <Layout>
      <SEO title="Member Support" description="" />
      <AltHeader
        title={`Member support`}
        header={`We go above and beyond to help you succeed.`}
        subHeader={`Our team is not only capable, but eager, to help you in your Amazon selling journey. LeadGeek members get access to our friendly, experienced support to resolve issues right the first time.`}
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
        title={`Why we're different`}
        mainHeader={`Receive world-class seller support.`}
      />
      <OtherFeatures
        primaryTextColor="text-gray-900"
        secondaryTextColor="text-gray-700"
        iconColor="bg-purple-100 text-purple-600"
        criteria
        reliability
        education
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
        svgOne={
          <div className="absolute top-0 left-0 z-0 transform -translate-y-40 -translate-x-24">
            <Dotted className="hidden lg:inline-block w-24 text-purple-400" />
          </div>
        }
      />
    </Layout>
  )
}

export default supportPage
