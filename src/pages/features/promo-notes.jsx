import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const PromoNotesPage = () => {
  const title = "Your Very Own Research Assistant | Leadgeek"
  const desc =
    "Are you ever curious if there’s a promo or some discount you’re missing before you order? Now you don’t have to wonder. Any available promotional code, free shipping minimum, and cashback is automatically noted."
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
      <Features feature={"promo-notes"} />
    </Layout>
  )
}

export default PromoNotesPage
