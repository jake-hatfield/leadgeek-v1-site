import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const SellerInsightPage = () => {
  const title = "Professional Experience in Your Corner | Leadgeek"
  const desc =
    "The Leadgeek sourcing process includes review by a seasoned US Amazon seller for each and every lead. That way, the only products you see are ones that have been approved by years of FBA know-how."
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
      <Features feature={"seller-insight"} />
    </Layout>
  )
}

export default SellerInsightPage
