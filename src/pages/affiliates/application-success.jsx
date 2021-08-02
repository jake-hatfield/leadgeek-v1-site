import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"

import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

const AffApplicationSuccessPage = ({ location }) => {
  const title = "Affiliate Application Submitted | Leadgeek"
  const desc =
    "Leadgeek support has received your message and will get to you as soon as possible."
  return (
    <Layout location={location}>
      <GatsbySeo title={title} description={desc} language="en" />
      <section className="relative bg-splatter">
        <HeaderWrapper>
          <PrimaryHeader
            title={"Application received!"}
            desc={
              <p>
                Thanks for applying to the Leadgeek affiliate program. Most
                submissions are reviewed within 24 hours. In the meantime, learn
                more about why promoting Leadgeek is the most modern way to
                source for new arbitrage products.
              </p>
            }
            nav
            linkOne={`features`}
            linkOneText={"See all features"}
          />
        </HeaderWrapper>
      </section>
    </Layout>
  )
}

export default AffApplicationSuccessPage
