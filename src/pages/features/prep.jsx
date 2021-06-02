import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const PrepPage = () => {
  const title = "Account for Prep Costs Automatically | Leadgeek"
  const desc =
    "Built-in tools allow you to easily estimate product prep fees. Whether you need to calculate a fee based on quantity or weight, you'll see real-world profitability for each item."
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
      <Features feature={"prep"} />
    </Layout>
  )
}

export default PrepPage
