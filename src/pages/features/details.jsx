import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="View Details on the Fly | Leadgeek"
        description="See primary metrics, historical data, and helpful notes all in one place. Also included are helpful links to the source retailer, Amazon listing, and Seller Central to see if the product is ungated for you."
      />
      <Features feature={"details"} />
    </Layout>
  )
}

export default LeadCriteriaPage
