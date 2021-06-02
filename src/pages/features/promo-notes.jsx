import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

import OgImage from "assets/images/og/og-promo-notes.jpg"

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
          title,
          description: desc,
          url: "https://leadgeek.io/features/promo-notes/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Your very own research assistant",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"promo-notes"} />
    </Layout>
  )
}

export default PromoNotesPage
