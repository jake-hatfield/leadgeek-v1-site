import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const CalculationPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={`Stay Organized with "Like" & "Archive" | Leadgeek`}
        description="Things are right where you expect to find them with Leadgeek's simple but powerful like and archive system. Like the
        leads you want to order soon and archive the ones that deserve a second look at some point in the future."
      />
      <Features feature={"like-and-archive"} />
    </Layout>
  )
}

export default CalculationPage
