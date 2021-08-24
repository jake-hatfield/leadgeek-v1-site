import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-seller-insight.jpg"

interface SellerInsightPageProps {
  location: Location
}

const SellerInsightPage: React.FC<SellerInsightPageProps> = ({ location }) => {
  const title = "Professional Experience in Your Corner | Leadgeek"
  const description =
    "The Leadgeek sourcing process includes review by a seasoned US Amazon seller for each and every lead. That way, the only products you see are ones that have been approved by years of FBA know-how."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/seller-insight/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Professional experience in your corner",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"seller-insight"} />
    </Layout>
  )
}

export default SellerInsightPage
