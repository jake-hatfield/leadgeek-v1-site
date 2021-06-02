import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const CategoriesPage = () => {
  const title = "Source Comprehensive Categories | Leadgeek"
  const desc =
    "Building a diversified inventory has never been easier. Choose items sourced from 25+ top-selling Amazon categories to create your ideal product portfolio."
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
      <Features feature={"categories"} />
    </Layout>
  )
}

export default CategoriesPage
