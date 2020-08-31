import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"
import CTA from "../../components/cta"

const supportPage = () => {
  const leadReliability = [
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
  return (
    <Layout>
      <SEO title="Member Support" description="" />
      <AltHeader
        title={`Seller education`}
        header={`Comprehensive online arbitrage training.`}
        subHeader={`Knowledge is power, so be empowered. Members enjoy several different types of training material to sharpen their selling knowledge, including e-books, video courses, and templates.`}
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
        title={`Exclusive member training`}
        mainHeader={`Complete educational resources.`}
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

export default supportPage
