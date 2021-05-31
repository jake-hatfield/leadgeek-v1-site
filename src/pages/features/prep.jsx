import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Account for Prep Costs Automatically | Leadgeek"
        description="Built-in tools allow you to easily estimate product prep fees. Whether you need to calculate a fee based on quantity or weight, you'll see real-world profitability for each item."
      />
      <Features feature={"prep"} />
    </Layout>
  )
}

export default LeadCriteriaPage
