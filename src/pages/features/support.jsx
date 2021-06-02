import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const SupportPage = () => {
  const title = "A+ Member Support | Leadgeek"
  const desc =
    "LeadGeek members get dedicated guidance from an experienced arbitrage seller to prevent pitfalls and solve issues. Sell with confidence, not confusion."
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
      <Features feature={"support"} />
    </Layout>
  )
}

export default SupportPage
