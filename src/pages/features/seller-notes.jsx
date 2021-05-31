import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Variation Suggestions Out of the Box | Leadgeek"
        description="With Leadgeek, variation research is done for you. These suggestions and seller-to-seller notes give you clarity on how
        to order your inventory."
      />
      <Features feature={"seller-notes"} />
    </Layout>
  )
}

export default LeadCriteriaPage
