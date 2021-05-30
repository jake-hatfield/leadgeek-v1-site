import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Strict Criteria"
        description="Strict vetting criteria ensure that only the best online arbitrage products are sent to you, without having to source anything yourself."
      />
      <Features feature={"calculations"} />
    </Layout>
  )
}

export default CalculationPage
