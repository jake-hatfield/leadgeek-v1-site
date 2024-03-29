import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-criteria.jpg"

interface LeadCriteriaPageProps {
  location: Location
}

const LeadCriteriaPage: React.FC<LeadCriteriaPageProps> = ({ location }) => {
  const title = "Top-Shelf Leads Come Standard"
  const description =
    "Scale your business without sacrificing quality in your inventory Carefully-tailored criteria and vetting methods allow you to get professional-grade arbitrage sourcing at a fraction of the price."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/criteria/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Top-shelf leads come standard",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"criteria"} />
    </Layout>
  )
}

export default LeadCriteriaPage
