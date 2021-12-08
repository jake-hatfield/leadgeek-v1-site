import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"

interface NotFoundPageProps {
  location: Location
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ location }) => (
  <Layout location={location}>
    <GatsbySeo title="404: Page Not Found" language="en" noindex={true} />
    <section className="relative overflow-hidden bg-splatter">
      <HeaderWrapper bottomPadding={"pb-24 lg:pb-80"} styles={null}>
        <PrimaryHeader
          title={`404... Uh-oh, this page doesn't exist`}
          description={
            <p>
              Check out our plans or shoot us a message if you think something
              should be here. Have a rad day!
            </p>
          }
          nav={true}
          goHome={false}
          linkOne={`pricing`}
          linkOneText={`See plans`}
          linkTwo={`contact`}
          linkTwoText={`Contact support`}
          outsideLink={null}
          svgOne={null}
          svgTwo={null}
        />
      </HeaderWrapper>
    </section>
  </Layout>
)

export default NotFoundPage
