import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Skim Info in the Feed | Leadgeek"
        description="The Feed shows the most important product metrics by design, making it easy to see the leads you’re interested in and breeze through the ones you aren’t. You won’t be bombarded by info, but instead feel informed to make the right decisions for you."
      />
      <Features feature={"feed"} />
    </Layout>
  )
}

export default LeadCriteriaPage
