import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Source Comprehensive Categories | Leadgeek"
        description="Building a diversified inventory has never been easier. Choose items sourced from 25+ top-selling Amazon categories to create your ideal product portfolio."
      />
      <Features feature={"categories"} />
    </Layout>
  )
}

export default CalculationPage
