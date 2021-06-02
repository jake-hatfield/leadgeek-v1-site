import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const CalculationPage = () => {
  const title = "Laser-Accurate Number Crunching | Leadgeek"
  const desc =
    "With Leadgeek, all Amazon fees are accounted for with the official calculator so you see numbers that can be relied on."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/calculations/",
          type: "website",
        }}
        language="en"
      />
      <Features feature={"calculations"} />
    </Layout>
  )
}

export default CalculationPage
