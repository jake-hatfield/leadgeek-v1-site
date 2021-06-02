import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const HistoricalMetricsPage = () => {
  const title = "Check Out Historical Metrics | Leadgeek"
  const desc =
    "Leadgeek includes 30 & 90 day metrics and current competition for the buy box. While the price right now is important too, use historical data to see trends like seasonality, out of stock spikes, and more."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title: { title },
          description: { desc },
          type: "website",
        }}
        language="en"
      />
      <Features feature={"historical-metrics"} />
    </Layout>
  )
}

export default HistoricalMetricsPage
