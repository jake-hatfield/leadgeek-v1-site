import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const ExclusivityPage = () => {
  const title = "The Inner Circle | Leadgeek"
  const desc =
    "Leadgeek takes seller exclusivity seriously, which is why there are no-budge caps on the number of people allowed on a list at any given time: 30 members for the Grow plan and 15 for the Pro plan - cutting competition significantly."
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
      <Features feature={"exclusivity"} />
    </Layout>
  )
}

export default ExclusivityPage
