import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-retailers.jpg"

interface RetailersPageProps {
  location: Location
}

const RetailersPage: React.FC<RetailersPageProps> = ({ location }) => {
  const title = "Solid sources by default | Leadgeek"
  const description =
    "Over 500 trusted US-based retailers are used to source products. This not only gives you variety, but a peace of mind that your items are authentic brands to arbitrage, not some knock-off crap that will get your Seller Central account suspended."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/retailers/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Solid sources by default",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"retailers"} />
    </Layout>
  )
}

export default RetailersPage
