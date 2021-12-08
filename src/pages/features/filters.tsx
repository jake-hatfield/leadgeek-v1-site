import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-filters.jpg"

interface FiltersPageProps {
  location: Location
}

const FiltersPage: React.FC<FiltersPageProps> = ({ location }) => {
  const title = "Surface Data, Don't Dig for It"
  const description =
    "Leadgeek allows you to combine simple filters in a powerful way to only show the information that’s important to you."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/filters/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Surface data, don't dig for it",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"filters"} />
    </Layout>
  )
}

export default FiltersPage
