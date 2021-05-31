import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Your Very Own Research Assistant | Leadgeek"
        description="Are you ever curious if there’s a promo or some discount you’re missing before you order? Now you don’t have to wonder. Any available promotional code, free shipping minimum, and cashback is automatically noted."
      />
      <Features feature={"promo-notes"} />
    </Layout>
  )
}

export default LeadCriteriaPage
