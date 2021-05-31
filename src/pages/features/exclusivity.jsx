import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="The Inner Circle | Leadgeek"
        description="Leadgeek takes seller exclusivity seriously, which is why there are no-budge caps on the number of people allowed on a list at any given time: 30 members for the Grow plan and 15 for the Pro plan - cutting competition significantly."
      />
      <Features feature={"exclusivity"} />
    </Layout>
  )
}

export default CalculationPage
