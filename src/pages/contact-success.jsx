import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"

import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

const ContactSuccess = () => {
  const title = "Contact Success | Leadgeek"
  const desc =
    "Leadgeek support has received your message and will get to you as soon as possible."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title: { title },
          description: { desc },
          type: "website",
        }}
        language="en"
      />
      <section className="relative bg-splatter">
        <HeaderWrapper>
          <PrimaryHeader
            title={"Message received."}
            desc={
              <p>
                Thanks for reaching out, we'll be in touch soon. Our usual
                response time is within 24 hours. In the meantime, feel free to
                learn more about how we can help your Amazon business.
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

export default ContactSuccess
