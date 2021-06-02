import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const RetailersPage = () => {
  const title = "Solid sources by default | Leadgeek"
  const desc =
    "Over 500 trusted US-based retailers are used to source products. This not only gives you variety, but a peace of mind that your items are authentic brands to arbitrage, not some knock-off crap that will get your Seller Central account suspended."
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
      <Features feature={"retailers"} />
    </Layout>
  )
}

export default RetailersPage
