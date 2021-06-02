import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const SellerNotesPage = () => {
  const title = "Variation Suggestions Out of the Box | Leadgeek"
  const desc =
    "With Leadgeek, variation research is done for you. These suggestions and seller-to-seller notes give you clarity on how to order your inventory."
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
      <Features feature={"seller-notes"} />
    </Layout>
  )
}

export default SellerNotesPage
