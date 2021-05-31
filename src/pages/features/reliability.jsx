import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Keep 'Em Coming | Leadgeek"
        description=" Leadgeek is all about predictability, especially when it comes to the quantity of leads you can expect. Gone are the days of striking out when sourcing - the Feed delivers a guaranteed number of leads each and every weekday."
      />
      <Features feature={"reliability"} />
    </Layout>
  )
}

export default CalculationPage
