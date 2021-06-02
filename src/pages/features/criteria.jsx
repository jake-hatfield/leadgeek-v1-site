import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const LeadCriteriaPage = () => {
  const title = "Top-Shelf Leads Come Standard | Leadgeek"
  const desc =
    "Scale your business without sacrificing quality in your inventory Carefully-tailored criteria and vetting methods allow you to get professional-grade arbitrage sourcing at a fraction of the price."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/criteria/",
          type: "website",
        }}
        language="en"
      />
      <Features feature={"criteria"} />
    </Layout>
  )
}

export default LeadCriteriaPage
