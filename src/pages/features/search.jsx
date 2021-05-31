import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Keyword Central | Leadgeek"
        description="Powerful search lets you find what you’re interested in without hunting through thousands of leads. Input keywords to search by the source store, title, or ASIN."
      />
      <Features feature={"search"} />
    </Layout>
  )
}

export default LeadCriteriaPage
