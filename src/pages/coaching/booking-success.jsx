import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"

import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

import OgImage from "assets/images/og/og-booking-success.jpg"

const BookingSuccessPage = () => {
  const title = "Booking Success | Leadgeek"
  const desc = "Thank you for booking a coaching call with Leadgeek."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/coaching/booking-success/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Thank you for booking a coaching call.",
            },
          ],
        }}
        language="en"
      />
      <section className="relative bg-splatter">
        <HeaderWrapper>
          <PrimaryHeader
            title={"Call. Booked."}
            desc={
              <p>
                HEYO. Thanks for booking a free coaching call with me. You
                should receive an automated confirmation shortly (check the spam
                folder if you don't see it in your inbox). I'll also send you a
                quick questionaire for you to fill out before our call so we can
                make the most of it together. Talk to ya soon!
              </p>
            }
            nav
            goHome={true}
            linkOneText={"Go home"}
          />
        </HeaderWrapper>
      </section>
    </Layout>
  )
}

export default BookingSuccessPage
