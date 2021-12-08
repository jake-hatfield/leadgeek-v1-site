import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-predictability.jpg"

interface PredictabilityPageProps {
  location: Location
}

const PredictabilityPage: React.FC<PredictabilityPageProps> = ({
  location,
}) => {
  const title = "Hot Off the Press"
  const description =
    "Leadgeek helps you make sourcing a system by releasing fresh leads every morning by 9 am CST. These guaranteed arbitrage opportunities let you be the first one to order - and the first one to sell."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/predictability/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Hot off the press",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"predictability"} />
    </Layout>
  )
}

export default PredictabilityPage
