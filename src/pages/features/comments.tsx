import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-comments.jpg"

interface CommentsPageProps {
  location: Location
}

const CommentsPage: React.FC<CommentsPageProps> = ({ location }) => {
  const title = "Leave Your Mark"
  const description =
    "Personalize each product by writing a comment that only you can see. Interested in a few variations or plan to re-order an item? Write it down so you don’t forget!"

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/comments/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Leave your mark",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"comments"} />
    </Layout>
  )
}

export default CommentsPage
