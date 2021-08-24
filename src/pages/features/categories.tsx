import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-categories.jpg"

interface CategoriesPageProps {
  location: Location
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ location }) => {
  const title = "Source Comprehensive Categories | Leadgeek"
  const description =
    "Building a diversified inventory has never been easier. Choose items sourced from 25+ top-selling Amazon categories to create your ideal product portfolio."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/categories/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Source comprehensive categories",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"categories"} />
    </Layout>
  )
}

export default CategoriesPage
