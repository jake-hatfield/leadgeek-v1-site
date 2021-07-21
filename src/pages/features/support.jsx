import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

import OgImage from "assets/images/og/og-support.jpg"

const SupportPage = ({ location }) => {
  const title = "A+ Member Support | Leadgeek"
  const desc =
    "LeadGeek members get dedicated guidance from an experienced arbitrage seller to prevent pitfalls and solve issues. Sell with confidence, not confusion."
  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/support/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "A+ member support",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"support"} />
    </Layout>
  )
}

export default SupportPage
