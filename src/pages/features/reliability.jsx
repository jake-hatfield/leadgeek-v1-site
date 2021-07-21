import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

import OgImage from "assets/images/og/og-reliability.jpg"

const ReliabilityPage = ({ location }) => {
  const title = "Keep 'Em Coming | Leadgeek"
  const desc =
    "Leadgeek is all about predictability, especially when it comes to the quantity of leads you can expect. Gone are the days of striking out when sourcing - the Feed delivers a guaranteed number of leads each and every weekday."
  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/reliability/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Keep 'em coming",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"reliability"} />
    </Layout>
  )
}

export default ReliabilityPage
