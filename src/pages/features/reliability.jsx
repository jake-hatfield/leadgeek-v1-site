import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const ReliabilityPage = () => {
  const title = "Keep 'Em Coming | Leadgeek"
  const desc =
    "Leadgeek is all about predictability, especially when it comes to the quantity of leads you can expect. Gone are the days of striking out when sourcing - the Feed delivers a guaranteed number of leads each and every weekday."
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
      <Features feature={"reliability"} />
    </Layout>
  )
}

export default ReliabilityPage
