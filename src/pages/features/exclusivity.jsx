import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

import OgImage from "assets/images/og/og-exclusivity.jpg"

const ExclusivityPage = ({ location }) => {
  const title = "The Inner Circle | Leadgeek"
  const desc =
    "Leadgeek takes seller exclusivity seriously, which is why there are no-budge caps on the number of people allowed on a list at any given time: 30 members for the Grow plan and 15 for the Pro plan - cutting competition significantly."
  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/exclusivity/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "The inner circle",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"exclusivity"} />
    </Layout>
  )
}

export default ExclusivityPage
