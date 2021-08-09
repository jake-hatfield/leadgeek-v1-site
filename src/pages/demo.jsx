import React from "react"
import { graphql } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"
import { DateTime } from "luxon"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"
import LeadSample from "components/LeadSample"

const DemoPage = ({ data, location }) => {
  const title = "See How Leadgeek Works"
  const desc =
    "Watch a demo and check out the metrics for every arbitrage lead the Leadgeek team has found in the past 2 weeks."

  const allLeads = data.allMongodbLeadGeekLeads.edges
  // calculate business days

  const dt = DateTime.now()
  const { availableHolidayMatchers } = dt
  const businessHolidays = [
    availableHolidayMatchers.isThanksgivingDay,
    availableHolidayMatchers.isChristmasDay,
  ]
  dt.setupBusiness({ holidayMatchers: businessHolidays })
  const prevTwoWeeks = dt.minusBusiness({ days: 10 }).startOf("day").toISO()
  const prevTwoWeekLeads = allLeads.filter(
    lead => lead.node.data.date >= prevTwoWeeks
  )
  // calculate last updated
  const mostRecentlyUpdatedRaw = allLeads.slice(-1)[0].node.data.date
  const mostRecentlyUpdatedDay = DateTime.fromISO(
    mostRecentlyUpdatedRaw
  ).toFormat("LLL dd @ t")

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/affliliates/",
          type: "website",
          //   images: [
          //     {
          //       url: OgImage,
          //       width: 1200,
          //       height: 630,
          //       alt: "Become a Leadgeek affiliate",
          //     },
          //   ],
        }}
        language="en"
      />
      <section className="relative overflow-hidden bg-splatter">
        <HeaderWrapper
          bottomPadding={"pb-28 lg:pb-80"}
          classes={"flex flex-col-reverse md:flex-col"}
        >
          <PrimaryHeader
            title={`Online arbitrage leads are now radically better.`}
            desc={
              <h2>
                Feel like your arbitrage sourcing is stuck in limbo?{" "}
                <span className="font-bold">
                  Turn "I don't know what to sell" into "I have too much to buy"
                </span>{" "}
                with a daily list of the best items to flip for profit on
                Amazon.
              </h2>
            }
            nav
            linkOne={`pricing`}
            linkOneText={`See Leadgeek plans`}
          />
        </HeaderWrapper>
      </section>
      <section className="-mt-20 md:-mt-16 relative container flex justify-center">
        <div className="video-responsive">
          <iframe
            className="video-responsive-item"
            title="Leadgeek Demo"
            src="https://player.vimeo.com/video/461992164"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </section>
      <section
        id="leads"
        className="block relative pb-24 md:pb-24 lg:pb-48 bg-splatter"
      >
        <div className="mt-8 md:mt-12 lg:mt-48 pb-16 md:mx-auto relative z-10">
          <header className="relative container md:text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              No BS. Here are the{" "}
              <span className="emphasized-text">exact leads</span> we find.
            </h2>
            <p className="max-w-2xl mt-4 lg:mt-6 mx-auto text-gray-900 text-lg bg-white">
              We get it, it's hard to trust screenshots.{" "}
              <span role="img" aria-label="Camera emoji">
                📷
              </span>{" "}
              Get the most representative idea of how Leadgeek can upgrade your
              FBA business with the{" "}
              <strong>
                exact{" "}
                <span className="text-pink-600">{prevTwoWeekLeads.length}</span>{" "}
                arbitrage leads
              </strong>{" "}
              members got over the last 2 weeks. And there's more where these
              came from.
            </p>
            <div
              className="mt-4 lg:mt-6 flex items-center"
              data-sal="slide-up"
              data-sal-delay="1000"
              data-sal-duration="1000"
              data-sal-easing="ease in out"
            ></div>
          </header>
          <div className="relative mt-16 w-full max-w-7xl mx-auto">
            <div className="absolute top-0 right-0 p-2 rounded-lg transform lg:rotate-12 text-xs bg-gray-900 text-teal-300 shadow-tealSm -translate-y-10 translate-x-2 lg:translate-x-6 xl:translate-x-12">
              <span>
                <span role="img" aria-label="Clock emoji">
                  🕒
                </span>{" "}
                Last updated:
              </span>
              <br />
              {mostRecentlyUpdatedDay || dt.toFormat("LLL dd t")}
            </div>
            <LeadSample />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMongodbLeadGeekLeads {
      edges {
        node {
          id
          data {
            netProfit
            monthlySales
            roi
            sellPrice
            date
          }
        }
      }
    }
  }
`

export default DemoPage
