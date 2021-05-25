import React, { useState } from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const FeeCalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Strict Criteria"
        description="Strict vetting criteria ensure that only the best online arbitrage products are sent to you, without having to source anything yourself."
      />
      <Features feature={"fee-calculation"} />
    </Layout>
  )
}

export default FeeCalculationPage
