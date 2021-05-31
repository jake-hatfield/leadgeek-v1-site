import React from "react"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not Found | Leadgeek" />
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
