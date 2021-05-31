import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Professional Experience in Your Corner | Leadgeek"
        description="The Leadgeek sourcing process includes review by a seasoned US Amazon seller for each and every lead. That way, the only products you see are ones that have been approved by years of FBA know-how."
      />
      <Features feature={"seller-insight"} />
    </Layout>
  )
}

export default LeadCriteriaPage
