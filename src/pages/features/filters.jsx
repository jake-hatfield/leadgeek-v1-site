import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const FiltersPage = () => {
  const title = "Surface Data, Don't Dig for It | Leadgeek"
  const desc =
    "Leadgeek allows you to combine simple filters in a powerful way to only show the information that’s important to you."
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
      <Features feature={"filters"} />
    </Layout>
  )
}

export default FiltersPage
