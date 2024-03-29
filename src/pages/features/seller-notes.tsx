import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-seller-notes.jpg"

interface SellerNotesPageProps {
  location: Location
}

const SellerNotesPage: React.FC<SellerNotesPageProps> = ({ location }) => {
  const title = "Variation Suggestions Out of the Box"
  const description =
    "With Leadgeek, variation research is done for you. These suggestions and seller-to-seller notes give you clarity on how to order your inventory."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/seller-notes/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Variation suggestions out of the box",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"seller-notes"} />
    </Layout>
  )
}

export default SellerNotesPage
