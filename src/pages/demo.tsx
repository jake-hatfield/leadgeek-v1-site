import React from "react"
import { Link, graphql } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"
import { DateTime } from "luxon-business-days"

import Layout from "@components/layout/Layout"
import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"
import LeadSample from "@components/LeadSample"

import ArrowShortFat from "@assets/svgs/arrow-short-fat.svg"
import OgImage from "@assets/images/og/og-demo.jpg"

interface Lead {
  node: {
    id: string
    data: {
      date: string
      monthlySales: number
      netProfit: number
      roi: number
      sellPrice: number
    }
  }
}

interface DemoPageProps {
  data: {
    allMongodbLeadGeekLeads: {
      edges: Lead[]
    }
  }
  location: Location
}

const DemoPage: React.FC<DemoPageProps> = ({ data, location }) => {
  const title = "See How Leadgeek Works"
  const description =
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
  const mostRecentlyUpdatedDay: string = DateTime.fromISO(
    mostRecentlyUpdatedRaw
  ).toFormat("LLL dd @ t")

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/demo/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "See Leadgeek in action",
            },
          ],
        }}
        language="en"
      />
      <section className="relative overflow-hidden bg-splatter">
        <HeaderWrapper
          bottomPadding={"pb-28 lg:pb-48"}
          styles={"flex flex-col-reverse md:flex-col"}
        >
          <PrimaryHeader
            title={`Don't dig through information, surface it.`}
            description={
              <h2>
                Sourcing workarounds are over with, sourcing workflows are
                taking over. Leadgeek feels familiar to how you find products
                now, but it's a much more efficient experience.{" "}
                <span className="emphasized-text">
                  Watch a full walkthrough to see our product in action
                </span>
                .
              </h2>
            }
            nav={false}
            goHome={false}
            linkOne={null}
            linkOneText={null}
            linkTwo={null}
            linkTwoText={null}
            outsideLink={null}
            svgOne={null}
            svgTwo={null}
          />
        </HeaderWrapper>
      </section>
      <section
        id="demo"
        className="block relative px-4 pt-4 pb-48 md:pb-56 bg-splatter"
      >
        <div className="relative max-w-7xl mx-auto video-responsive">
          <iframe
            src="https://player.vimeo.com/video/587929562"
            frameBorder="0"
            allow="fullscreen;"
            allowFullScreen
            title="Take a Tour of Leadgeek"
            className="video-responsive-item"
          />
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div>
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="500"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 bottom-0 left-1/2 w-4 lg:w-6 text-purple-500 transform -translate-x-20 lg:-translate-x-64 -rotate-12"
          />
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="700"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 bottom-0 left-1/2 w-4 lg:w-6 text-purple-500 transform"
          />
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="1000"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 bottom-0 left-1/2 w-4 lg:w-6 text-purple-500 transform translate-x-24 lg:translate-x-56 rotate-12"
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
              <span
                role="img"
                aria-label="Camera emoji"
                className="font-normal"
              >
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
          <div className="relative mt-16 w-full max-w-7xl mx-auto px-4">
            <div className="absolute top-0 right-0 p-2 rounded-lg transform lg:rotate-12 text-xs bg-gray-900 text-teal-300 shadow-tealSm -translate-y-10 translate-x-2 lg:translate-x-6 xl:translate-x-12">
              <span>
                <span
                  role="img"
                  aria-label="Clock emoji"
                  className="font-normal"
                >
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
        <div className="mt-4 lg:mt-6 flex items-center justify-center">
          <Link
            to={"/pricing/"}
            title="See Leadgeek plans"
            className="w-full md:w-auto block md:inline-block cta-link inter text-center text-base"
          >
            See Leadgeek plans
          </Link>
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
