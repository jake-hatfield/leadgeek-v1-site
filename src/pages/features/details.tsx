import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-details.jpg"

const DetailsPage = ({ location }) => {
  const title = "View Details on the Fly | Leadgeek"
  const desc =
    "See primary metrics, historical data, and helpful notes all in one place. Also included are helpful links to the source retailer, Amazon listing, and Seller Central to see if the product is ungated for you."
  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/details/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "View details on the fly",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"details"} />
    </Layout>
  )
}

export default DetailsPage
