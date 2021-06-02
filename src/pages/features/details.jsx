import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const DetailsPage = () => {
  const title = "View Details on the Fly | Leadgeek"
  const desc =
    "See primary metrics, historical data, and helpful notes all in one place. Also included are helpful links to the source retailer, Amazon listing, and Seller Central to see if the product is ungated for you."
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
      <Features feature={"details"} />
    </Layout>
  )
}

export default DetailsPage
