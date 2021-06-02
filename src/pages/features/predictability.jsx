import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

import OgImage from "assets/images/og/og-predictability.jpg"

const PredictabilityPage = () => {
  const title = "Hot Off the Press | Leadgeek"
  const desc =
    "Leadgeek helps you make sourcing a system by releasing fresh leads every morning by 9 am CST. These guaranteed arbitrage opportunties let you be the first one to order - and the first one to sell."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
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
