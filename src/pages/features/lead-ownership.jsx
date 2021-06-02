import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import Features from "components/layout/Features"

const LeadOwnerShipPage = () => {
  const title = "Leads Belong to You | Leadgeek"
  const desc =
    "Leadgeek puts you in control - and that means that you should be able to download your product leads if you want to. It's easy to export the items you want into a spreadsheet to do whatever you want with."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/lead-ownership/",
          type: "website",
        }}
        language="en"
      />
      <Features feature={"lead-ownership"} />
    </Layout>
  )
}

export default LeadOwnerShipPage
