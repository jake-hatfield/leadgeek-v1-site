import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Laser-Accurate Number Crunching | Leadgeek"
        description="With Leadgeek, all Amazon fees are accounted for with the official calculator so you see numbers that can be relied on."
      />
      <Features feature={"calculations"} />
    </Layout>
  )
}

export default CalculationPage
