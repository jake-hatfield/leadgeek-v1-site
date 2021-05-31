import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Hot Off the Press | Leadgeek"
        description="Leadgeek helps you make sourcing a system by releasing fresh leads every morning by 9 am CST. These guaranteed arbitrage opportunties let you be the first one to order - and the first one to sell."
      />
      <Features feature={"predictability"} />
    </Layout>
  )
}

export default CalculationPage
