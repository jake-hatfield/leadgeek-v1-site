import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const LikeAndArchivePage = () => {
  const title = `Stay Organized with "Like" & "Archive" | Leadgeek`
  const desc =
    "Things are right where you expect to find them with Leadgeek's simple but powerful like and archive system. Like the leads you want to order soon and archive the ones that deserve a second look at some point in the future."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/like-and-archive/",
          type: "website",
        }}
        language="en"
      />
      <Features feature={"like-and-archive"} />
    </Layout>
  )
}

export default LikeAndArchivePage
