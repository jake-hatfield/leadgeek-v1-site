import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Leave Your Mark | Leadgeek"
        description="Personalize each product by writing a comment that only you can see. Interested in a few variations or plan to re-order an item? Write it down so you don’t forget!"
      />
      <Features feature={"comments"} />
    </Layout>
  )
}

export default LeadCriteriaPage
