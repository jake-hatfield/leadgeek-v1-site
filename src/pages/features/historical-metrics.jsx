import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Check Out Historical Metrics | Leadgeek"
        description="Leadgeek includes 30 & 90 day metrics and current competition for the
        buy box. While the price right now is important too, use historical data to see trends like seasonality, out of stock spikes, and more."
      />
      <Features feature={"historical-metrics"} />
    </Layout>
  )
}

export default CalculationPage
