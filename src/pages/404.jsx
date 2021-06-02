import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

const NotFoundPage = () => (
  <Layout>
    <GatsbySeo title="404: Page Not Found | Leadgeek" language="en" />
    <section className="relative overflow-hidden bg-splatter">
      <HeaderWrapper bottomPadding={"pb-24 lg:pb-80"}>
        <PrimaryHeader
          title={`404... Uh-oh, this page doesn't exist`}
          desc={
            <p>
              Check out our plans or shoot us a message if you think something
              should be here. Have a rad day!
            </p>
          }
          nav
          linkOne={`pricing`}
          linkOneText={`See plans`}
          linkTwo={`contact`}
          linkTwoText={`Contact support`}
        />
      </HeaderWrapper>
    </section>
  </Layout>
)

export default NotFoundPage
