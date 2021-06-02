import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

import OgImage from "assets/images/og/og-comments.jpg"

const CommentsPage = () => {
  const title = "Leave Your Mark | Leadgeek"
  const desc =
    "Personalize each product by writing a comment that only you can see. Interested in a few variations or plan to re-order an item? Write it down so you don’t forget!"
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
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
