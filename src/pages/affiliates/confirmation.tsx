import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"

import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"

interface AffiliateConfirmationPageProps {
  location: Location
}

const AffiliateConfirmationPage: React.FC<AffiliateConfirmationPageProps> = ({
  location,
}) => {
  const title = "Affiliate Application Submitted"
  const description =
    "Leadgeek support has received your message and will get to you as soon as possible."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        language="en"
        noindex={true}
      />
      <section className="relative bg-splatter">
        <HeaderWrapper bottomPadding={null} styles={null}>
          <PrimaryHeader
            title={"Application received!"}
            description={
              <p>
                Thanks for applying to the Leadgeek affiliate program. Most
                submissions are reviewed within 24 hours. In the meantime, learn
                more about why promoting Leadgeek is the most modern way to
                source for new arbitrage products.
              </p>
            }
            nav={true}
            goHome={false}
            linkOne={`features`}
            linkOneText={"See all features"}
            linkTwo={null}
            linkTwoText={null}
            outsideLink={null}
            svgOne={null}
            svgTwo={null}
          />
        </HeaderWrapper>
      </section>
    </Layout>
  )
}

export default AffiliateConfirmationPage
