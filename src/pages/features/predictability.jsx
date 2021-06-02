import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

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
          title: { title },
          description: { desc },
          type: "website",
        }}
      />
      <Features feature={"predictability"} />
    </Layout>
  )
}

export default PredictabilityPage
