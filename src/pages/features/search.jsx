import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const SearchPage = () => {
  const title = "Keyword Central | Leadgeek"
  const desc =
    "Powerful search lets you find what you’re interested in without hunting through thousands of leads. Input keywords to search by the source store, title, or ASIN."
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
      <Features feature={"search"} />
    </Layout>
  )
}

export default SearchPage
