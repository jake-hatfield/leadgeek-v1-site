import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Surface Data, Don't Dig for It | Leadgeek"
        description="Leadgeek allows you to combine simple filters in a powerful way to only show the information that’s important to you."
      />
      <Features feature={"filters"} />
    </Layout>
  )
}

export default CalculationPage
