import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-historical-metrics.jpg"

interface HistoricalMetricsPageProps {
  location: Location
}

const HistoricalMetricsPage: React.FC<HistoricalMetricsPageProps> = ({
  location,
}) => {
  const title = "Check Out Historical Metrics"
  const description =
    "Leadgeek includes 30 & 90 day metrics and current competition for the buy box. While the price right now is important too, use historical data to see trends like seasonality, out of stock spikes, and more."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/historical-metrics/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Check out historical metrics",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"historical-metrics"} />
    </Layout>
  )
}

export default HistoricalMetricsPage
