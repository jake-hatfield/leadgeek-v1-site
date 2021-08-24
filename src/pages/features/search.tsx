import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-search.jpg"

interface SearchPageProps {
  location: Location
}

const SearchPage: React.FC<SearchPageProps> = ({ location }) => {
  const title = "Keyword Central | Leadgeek"
  const description =
    "Powerful search lets you find what you’re interested in without hunting through thousands of leads. Input keywords to search by the source store, title, or ASIN."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/search/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Keyword central",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"search"} />
    </Layout>
  )
}

export default SearchPage
