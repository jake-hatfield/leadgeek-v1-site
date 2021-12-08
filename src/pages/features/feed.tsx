import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-feed.jpg"

interface FeedPageProps {
  location: Location
}

const FeedPage: React.FC<FeedPageProps> = ({ location }) => {
  const title = "Skim Info in the Feed"
  const description =
    "The Feed shows the most important product metrics by design, making it easy to see the leads you’re interested in and breeze through the ones you aren’t. You won’t be bombarded by info, but instead feel informed to make the right decisions for you."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/feed/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Skim info in the Feed",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"feed"} />
    </Layout>
  )
}

export default FeedPage
