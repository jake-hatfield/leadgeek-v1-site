import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const FeedPage = () => {
  const title = "Skim Info in the Feed | Leadgeek"
  const desc =
    "The Feed shows the most important product metrics by design, making it easy to see the leads you’re interested in and breeze through the ones you aren’t. You won’t be bombarded by info, but instead feel informed to make the right decisions for you."
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
      <Features feature={"feed"} />
    </Layout>
  )
}

export default FeedPage
