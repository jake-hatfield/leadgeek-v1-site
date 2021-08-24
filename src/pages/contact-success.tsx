import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"

import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"

import OgImage from "@assets/images/og/og-contact-success.jpg"

interface ContactSuccessPageProps {
  location: Location
}

const ContactSuccessPage: React.FC<ContactSuccessPageProps> = ({
  location,
}) => {
  const title = "Contact Success | Leadgeek"
  const description =
    "Leadgeek support has received your message and will get to you as soon as possible."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/contact-success/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Thank you for contacting us",
            },
          ],
        }}
        language="en"
      />
      <section className="relative bg-splatter">
        <HeaderWrapper bottomPadding={null} styles={null}>
          <PrimaryHeader
            title={"Message received."}
            description={
              <p>
                Thanks for reaching out, we'll be in touch soon. Our usual
                response time is within 24 hours. In the meantime, feel free to
                learn more about how we can help your Amazon business.
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

export default ContactSuccessPage
