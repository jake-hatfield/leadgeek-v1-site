import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Leads Belong to You | Leadgeek"
        description="Leadgeek puts you in control - and that means that you should be able to download your product leads if you want to. It's easy to export the items you want into a spreadsheet to do whatever you want with."
      />
      <Features feature={"lead-ownership"} />
    </Layout>
  )
}

export default LeadCriteriaPage
