import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-prep.jpg"

interface PrepPageProps {
  location: Location
}

const PrepPage: React.FC<PrepPageProps> = ({ location }) => {
  const title = "Account for Prep Costs Automatically | Leadgeek"
  const description =
    "Built-in tools allow you to easily estimate product prep fees. Whether you need to calculate a fee based on quantity or weight, you'll see real-world profitability for each item."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/prep/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Account for prep costs automatically",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"prep"} />
    </Layout>
  )
}

export default PrepPage
