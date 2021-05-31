import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Top-Shelf Leads Come Standard | Leadgeek"
        description="Scale your business without sacrificing quality in your inventory.
        Carefully-tailored criteria and vetting methods allow you to get
        professional-grade arbitrage sourcing at a fraction of the price."
      />
      <Features feature={"criteria"} />
    </Layout>
  )
}

export default LeadCriteriaPage
