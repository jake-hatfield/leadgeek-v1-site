import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="A+ Member Support | Leadgeek"
        description="LeadGeek members get dedicated guidance from an experienced arbitrage seller to prevent pitfalls and solve issues. Sell with confidence, not confusion."
      />
      <Features feature={"support"} />
    </Layout>
  )
}

export default LeadCriteriaPage
