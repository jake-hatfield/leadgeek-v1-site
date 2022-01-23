import React, { useState } from "react"
import { graphql } from "gatsby"

// packages
import { StaticImage } from "gatsby-plugin-image"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Marquee from "react-fast-marquee"
import { DateTime } from "luxon-business-days"

// components
import LPLayout from "@components/layout/LandingPage/LPLayout"
import LeadSample from "@components/LeadSample"
import PricingCards from "@components/PricingCards"
import TestimonialFull from "@components/utils/TestimonialFull"
import Faq from "@components/Faq"
import {
  formatActiveSubscriptions,
  getWaitlistPlanCount,
} from "@components/utils/utils"

// assets
import DividerTop from "@assets/svgs/section-divider-top.svg"
import DividerBottom from "@assets/svgs/section-divider-bottom.svg"
import LoopyDashed from "@assets/svgs/loopy-dashed.svg"
import WigglyDashed from "@assets/svgs/wiggly-2-dashed.svg"
import ArrowTurnyFat from "@assets/svgs/turny-fat.svg"
import ArrowShortFat from "@assets/svgs/arrow-short-fat.svg"
import FeedMp4 from "@assets/video/the-feed.mp4"
import FeedWebm from "@assets/video/the-feed.webm"
import FiltersMp4 from "@assets/video/filters.mp4"
import FiltersWebm from "@assets/video/filters.webm"
import Poster from "@assets/images/white-bg.png"
import OgImage from "@assets/images/og/og-online-arbitrage-sourcing-list.jpg"

// types
import { MongoDBWaitlistItem } from "../pricing"

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

interface SubscriptionItem {
  status: string
  plan: {
    id: string
    product: string
  }
}

interface OnlineArbitrageSourcingListPageProps {
  data: {
    allMongodbLeadGeekLeads: {
      edges: Lead[]
    }
    allMongodbLeadGeekWaitlist: {
      nodes: MongoDBWaitlistItem[]
    }
    allStripeSubscription: { nodes: SubscriptionItem[] }
  }
  location: Location
}

const OnlineArbitrageSourcingListPage: React.FC<
  OnlineArbitrageSourcingListPageProps
> = ({ data, location }) => {
  const title = "Online Arbitrage Sourcing List"
  const description =
    "Leadgeek's online arbitrage sourcing list takes a modern, seamless approach to help you easily find things to flip for profit on Amazon."
  const cta = `/product/online-arbitrage-sourcing-list#leads`

  const startDate = DateTime.fromISO("2020-10-12T12:00")
  const currentDate = DateTime.now()
  const difference = startDate.diff(currentDate, ["days"])
  const differenceInDays = Math.abs(difference.toObject().days).toFixed()

  // average lead metrics
  const allLeads = data.allMongodbLeadGeekLeads.edges
  const allTimeAverageProfit =
    allLeads.reduce((total, next) => total + next.node.data.netProfit, 0) /
    allLeads.length
  const allTimeAverageROI =
    (allLeads.reduce((total, next) => total + next.node.data.roi, 0) /
      allLeads.length) *
    100
  const allTimeAverageMonthlySales =
    allLeads.reduce((total, next) => total + next.node.data.monthlySales, 0) /
    allLeads.length
  const allTimeASP =
    allLeads.reduce((total, next) => total + next.node.data.sellPrice, 0) /
    allLeads.length

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

  const subscriptions = formatActiveSubscriptions(
    data.allStripeSubscription.nodes
  )

  const rawWaitlist = data.allMongodbLeadGeekWaitlist.nodes
  const waitlist = {
    bundle: getWaitlistPlanCount(rawWaitlist, "bundle"),
    pro: getWaitlistPlanCount(rawWaitlist, "pro"),
    grow: getWaitlistPlanCount(rawWaitlist, "grow"),
  }

  //   out-of-stock popup state
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false)

  return (
    <LPLayout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/product/online-arbitrage-sourcing-list/",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Online arbitrage sourcing list",
            },
          ],
          type: "website",
        }}
        language="en"
      />
      {/* section 0: Hero */}
      <section className="relative overflow-hidden bg-splatter">
        <div className="relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-48 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative z-30 lg:max-w-xl mx-auto lg:mx-0 md:text-center lg:text-left">
            <p className="uppercase font-bold text-sm md:text-base text-purple-500">
              To the modern Amazon FBA seller:
            </p>
            <h1 className="mt-2 text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              The <span className="emphasized-text">online arbitrage list</span>{" "}
              made for {new Date().getFullYear()}.
            </h1>
            <h2 className="lg:max-w-lg mt-4 lg:mt-6 mx-auto lg:mx-0 text-gray-900 text-lg bg-white">
              Online arbitrage sourcing just got a huge upgrade: Leadgeek is
              hands-down the <strong>latest</strong> and{" "}
              <strong>most reliable</strong> way to find new products to flip
              for profit on Amazon. Day in. Day out.
            </h2>
            <div className="lg:flex lg:items-center mt-8 lg:mt-6">
              <div
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <AnchorLink
                  to={cta}
                  title="See the latest arbitrage leads"
                  className="block md:inline-block cta-link inter text-center text-base"
                  gatsbyLinkProps={{ id: "cta" }}
                >
                  View the latest leads
                </AnchorLink>
              </div>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 lg:py-16 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto lg:pl-12 lg:-mr-64">
              <div className="w-full relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={Poster}
                  className="shadow-pinkMd rounded-lg"
                  title="Online arbitrage sourcing list Feed"
                >
                  <source src={FeedWebm} type="video/webm" />
                  <source src={FeedMp4} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <Marquee
          className="py-3 bg-gray-100 text-gray-900 font-semibold border-t border-b border-gray-500"
          gradient={false}
          speed={100}
          pauseOnHover={true}
        >
          <p className="pl-24">
            <span className="text-pink-600">1 thing you need to know</span>:
            Leadgeek is all the best parts of a traditional online arbitrage
            sourcing list amplified by software that's a piece of cake to use.{" "}
            <span role="img" aria-label="Rocket Emoji" className="font-normal">
              🚀
            </span>
          </p>
        </Marquee>
      </section>
      {/* section 1: Sourcing modernized */}
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 lg:mb-20 relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-48 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative md:text-center lg:text-left">
            <h2 className="lg:max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              <span className="emphasized-text">Online arbitrage sourcing</span>{" "}
              for the modern era.
            </h2>
            <p className="lg:max-w-lg mt-4 lg:mt-6 mx-auto lg:mx-0 text-gray-900 text-lg bg-white">
              It's {new Date().getFullYear()}: Upgrade your Amazon arbitrage
              sourcing setup from smoke signals, carrier pigeons, and clunky
              spreadsheets. <strong>Get more things done</strong> by viewing a
              daily online arbitrage list in an intuitive software.{" "}
              <span
                role="img"
                aria-label="Muscle Emoji"
                className="font-normal"
              >
                💪
              </span>
            </p>
            <div
              className="mt-8 lg:mt-6 flex items-center justify-center lg:justify-start"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <AnchorLink
                to={cta}
                title="See the latest arbitrage leads"
                className="w-full md:w-auto block md:inline-block cta-link inter text-center text-base"
                gatsbyLinkProps={{ id: "cta" }}
              >
                View the latest leads
              </AnchorLink>
            </div>
            <aside className="max-w-xl lg:max-w-lg mt-6 lg:mt-8 mx-auto lg:mx-0 bg-gray-100 shadow-lg rounded-lg border-main py-4 px-6 text-gray-700">
              <blockquote>
                "I want to thank you for the effort you make to find products
                with such good quality.{" "}
                <strong>
                  It has been the best decision I have made in acquiring your
                  list
                </strong>
                ."
                <div className="mt-4 flex items-center">
                  <StaticImage
                    src="../../assets/images/frank.png"
                    placeholder="tracedSVG"
                    alt="Frank's testimonial"
                    title="Frank's testimonial"
                    className="w-10 rounded-full border border-gray-900 bg-gray-900 transform -rotate-6"
                  />
                  <div className="md:flex items-center">
                    <cite className="ml-4 inter font-black">Frank</cite>
                    <span className="hidden md:block mx-2 font-semibold text-pink-600">
                      /
                    </span>
                    <p className="mt-1 md:mt-0 ml-4 md:ml-0 font-semibold text-xs lg:text-sm text-gray-600 inter">{`International FBA seller`}</p>
                  </div>
                </div>
              </blockquote>
            </aside>
            <LoopyDashed className="hidden lg:block absolute bottom-0 h-48 text-purple-500 transform translate-y-56 translate-x-24" />
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 lg:py-4 transform lg:translate-y-48 lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto lg:pl-12 lg:-mr-64">
              <StaticImage
                src="../../assets/images/feed.jpg"
                placeholder="tracedSVG"
                alt="Leadgeek app feed"
                title="Leadgeek app feed"
                className="w-full rounded-lg shadow-tealMd"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 2: Time saved */}
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 lg:mb-64 relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-0 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative md:text-center lg:text-left">
            <h2 className="lg:max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              Your <span className="emphasized-text">side-hustle</span> should
              stay on the side.
            </h2>
            <p className="lg:max-w-lg mt-4 lg:mt-6 mx-auto lg:mx-0 text-gray-900 text-lg bg-white">
              Let's face it - OA sourcing is a grind. Free up time, find
              profitable inventory, and{" "}
              <strong>blow up your Amazon sales</strong> by letting Leadgeek do
              the research for you every weekday morning.{" "}
              <span
                role="img"
                aria-label="Microscope Emoji"
                className="font-normal"
              >
                🔬
              </span>{" "}
              All you have to do is{" "}
              <strong>log in, pick your favorite products, and order</strong>.
            </p>
            <div
              className="mt-8 lg:mt-6 flex items-center justify-center lg:justify-start"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <AnchorLink
                to={cta}
                title="See the latest arbitrage leads"
                className="w-full md:w-auto block md:inline-block cta-link inter text-center text-base"
                gatsbyLinkProps={{ id: "cta" }}
              >
                View the latest leads
              </AnchorLink>
            </div>
            <aside className="max-w-xl lg:max-w-lg mt-6 lg:mt-8 mx-auto lg:mx-0 bg-gray-100 shadow-lg rounded-lg border-main py-4 px-6 text-gray-700">
              <blockquote>
                "I’ve been able to double my profits using this list.{" "}
                <strong>
                  So much better than hours of pouring over Tactical Arbitrage
                </strong>
                ."
                <div className="mt-4 flex items-center">
                  <StaticImage
                    src="../../assets/images/cris.png"
                    placeholder="tracedSVG"
                    alt="Cris's testimonial"
                    title="Cris's testimonial"
                    className="w-10 rounded-full border border-gray-900 bg-gray-900 transform -rotate-6"
                  />
                  <div className="md:flex items-center">
                    <cite className="ml-4 inter font-black">Cris</cite>
                    <span className="hidden md:block mx-2 font-semibold text-pink-600">
                      /
                    </span>
                    <p className="mt-1 md:mt-0 ml-4 md:ml-0 font-semibold text-xs lg:text-sm text-gray-600 inter">{`New FBA seller`}</p>
                  </div>
                </div>
              </blockquote>
            </aside>
            <WigglyDashed className="absolute bottom-0 h-36 lg:h-56 text-purple-500 transform translate-y-64 translate-x-32" />
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 lg:py-4 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto lg:pl-12 lg:-mr-64">
              <StaticImage
                src="../../assets/images/details.jpg"
                placeholder="tracedSVG"
                alt="Leadgeek detailed view"
                title="Leadgeek detailed view"
                className="w-full rounded-lg shadow-pinkMd"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 3: Criteria */}
      <section className="relative overflow-hidden lg:pb-48 bg-splatter">
        <div className="mt-8 md:mt-12 mb-12 relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-0 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative md:text-center lg:text-left">
            <h2 className="lg:max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              The <span className="emphasized-text">Amazon arbitrage list</span>{" "}
              that doesn't cut corners on criteria.
            </h2>
            <p className="lg:max-w-lg mt-4 lg:mt-6 mx-auto lg:mx-0 text-gray-900 text-lg bg-white">
              Since profitable leads are undeniably the most vital part of a
              successful arbitrage business,{" "}
              <strong>quality is at the core of Leadgeek</strong>. By sourcing
              500+ US retailers, you receive only the best of the best
              hand-selected products to choose from.{" "}
              <span
                role="img"
                aria-label="Trophy Emoji"
                className="font-normal"
              >
                🏆
              </span>
            </p>
            <div
              className="mt-8 lg:mt-6 flex items-center justify-center lg:justify-start"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <AnchorLink
                to={cta}
                title="See the latest arbitrage leads"
                className="w-full md:w-auto block md:inline-block cta-link inter text-center text-base"
                gatsbyLinkProps={{ id: "cta" }}
              >
                View the latest leads
              </AnchorLink>
            </div>
            <aside className="relative max-w-xl lg:max-w-lg mt-20 lg:mt-8 mx-auto lg:mx-0 bg-gray-100 border-main shadow-lg rounded-lg py-4 px-6 text-gray-700">
              <div className="block absolute top-0 right-0 p-2 rounded-lg transform lg:rotate-12 text-xs bg-gray-900 text-teal-300 -translate-y-10 md:translate-x-2 lg:translate-x-6 xl:translate-x-12">
                <span>
                  <span
                    role="img"
                    aria-label="Clock emoji"
                    className="font-normal"
                  >
                    🕒
                  </span>{" "}
                  <span className="handwritten text-base tracking-wider">
                    Last updated:
                  </span>
                </span>
                <br />
                {mostRecentlyUpdatedDay || currentDate.toFormat("LLL dd t")}
              </div>
              <p>
                Real-time lead averages over the past{" "}
                <span className="font-bold text-pink-600">
                  {differenceInDays} days
                </span>
              </p>
              <ol className="flex items-center md:justify-center lg:justify-start mt-4 text-left">
                <li>
                  <p className="font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap">
                    Profit
                  </p>
                  <div className="mt-2 text-xl lg:text-3xl font-black">
                    ${allTimeAverageProfit.toFixed()}
                  </div>
                </li>
                <span className="ml-3 lg:ml-6 font-semibold text-pink-600 text-3xl">
                  /
                </span>
                <li className="ml-3 lg:ml-6">
                  <p className="font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap">
                    ROI
                  </p>
                  <div className="mt-2 text-xl lg:text-3xl font-black">
                    {allTimeAverageROI.toFixed()}%
                  </div>
                </li>
                <span className="ml-3 lg:ml-6 font-semibold text-pink-600 text-3xl">
                  /
                </span>
                <li className="ml-3 lg:ml-6">
                  <p className="font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap">
                    Sales
                  </p>
                  <div className="mt-2 text-xl lg:text-3xl font-black">
                    {allTimeAverageMonthlySales.toFixed()}
                    <span className="text-base">/mo</span>
                  </div>
                </li>
                <span className="hidden md:block ml-3 lg:ml-6 font-semibold text-pink-600 text-3xl">
                  /
                </span>
                <li className="hidden md:block ml-3 lg:ml-6">
                  <p className="font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap">
                    Sale Price
                  </p>
                  <div className="mt-2 text-xl lg:text-3xl font-black">
                    ${allTimeASP.toFixed()}
                  </div>
                </li>
              </ol>
            </aside>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 lg:py-4 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto lg:pl-12 lg:-mr-64">
              <div className="w-full relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={Poster}
                  className="shadow-purpleMd rounded-lg"
                  title="Amazon online arbitrage list"
                >
                  <source src={FiltersWebm} type="video/webm" />
                  <source src={FiltersMp4} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 4: Real-time leads */}
      <section id="leads" className="block relative py-12 md:py-20 bg-gray-100">
        <DividerTop className="divider-top text-gray-100" />
        <DividerBottom className="divider-bottom text-gray-100" />
        <div className="md:mx-auto relative z-10">
          <header className="relative container md:text-center">
            <ArrowTurnyFat
              data-sal="fade"
              data-sal-delay="1000"
              data-sal-duration="1000"
              data-sal-easing="ease in out"
              className="hidden lg:block absolute z-40 top-0 w-16 lg:h-56 text-purple-500 transform -translate-y-32 -translate-x-12"
            />
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              No BS. Here are the{" "}
              <span className="emphasized-text">exact leads</span> we find.
            </h2>
            <p className="max-w-2xl mt-4 lg:mt-6 mx-auto text-gray-900 text-lg">
              We get it, it's hard to trust screenshots.{" "}
              <span
                role="img"
                aria-label="Camera emoji"
                className="font-normal"
              >
                📷
              </span>{" "}
              So here's full transparency: see the metrics of the{" "}
              <strong>
                exact{" "}
                <span className="text-pink-600">{prevTwoWeekLeads.length}</span>{" "}
                arbitrage leads
              </strong>{" "}
              members got over the last 2 weeks.
            </p>
          </header>
          <div className="relative mt-16 w-full max-w-7xl mx-auto px-4">
            <div className="absolute top-0 right-0 p-2 rounded-lg transform lg:rotate-12 text-xs bg-gray-900 text-teal-300 -translate-y-12 -translate-x-2 lg:-translate-x-2 xl:translate-x-12">
              <span>
                <span
                  role="img"
                  aria-label="Clock emoji"
                  className="font-normal"
                >
                  🕒
                </span>{" "}
                <span className="handwritten text-base tracking-wider">
                  Last updated:
                </span>
              </span>
              <br />
              {mostRecentlyUpdatedDay || currentDate.toFormat("LLL dd t")}
            </div>
            <LeadSample />
          </div>
        </div>
      </section>
      {/* section 5: Demo */}
      <section
        id="demo"
        className="block relative px-4 py-48 md:py-56 lg:py-96 bg-splatter"
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
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 top-0 left-1/2 w-4 lg:w-6 text-purple-500 transform translate-y-10 lg:translate-y-24 -translate-x-20 lg:-translate-x-64 -rotate-12"
          />
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="200"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 top-0 left-1/2 w-4 lg:w-6 text-purple-500 transform translate-y-12 lg:translate-y-16"
          />
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 top-0 left-1/2 w-4 lg:w-6 text-purple-500 transform translate-y-16 lg:translate-y-32 translate-x-24 lg:translate-x-56 rotate-12"
          />
        </div>
        <div className="transform rotate-180">
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 bottom-0 left-1/2 w-4 lg:w-6 text-purple-500 transform -translate-y-8 lg:-translate-y-16"
          />
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="200"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 bottom-0 left-1/2 w-4 lg:w-6 text-purple-500 transform -translate-y-12 lg:-translate-y-20 translate-x-24 lg:translate-x-56 rotate-12"
          />
          <ArrowShortFat
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="1000"
            data-sal-easing="ease in out"
            className="absolute z-40 bottom-0 left-1/2 w-4 lg:w-6 text-purple-500 transform -translate-y-10 lg:-translate-y-12 -translate-x-20 lg:-translate-x-64 -rotate-12"
          />
        </div>
      </section>
      {/* section 6: Pricing */}
      <section
        id="pricing"
        className="relative py-12 md:py-20 text-gray-900 bg-gray-100"
      >
        <DividerTop className="divider-top text-gray-100" />
        <DividerBottom className="divider-bottom text-gray-100" />
        <header className="relative max-w-7xl mx-auto md:text-center px-4">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
            <span className="emphasized-text">Fair, no-nonsense</span> pricing
            on every plan.
          </h2>
          <p className="max-w-2xl mt-4 lg:mt-6 mx-auto text-gray-900 text-lg">
            Whether you're just starting out or already an arbitrage pro,
            side-hustle or full time - there's a Leadgeek plan that fits your
            needs. Subscriptions are straightforward with{" "}
            <strong>no "gotchas," contracts, or hidden fees</strong>.
          </p>
          <span className="block md:inline-block xl:absolute xl:right-0 mt-4 p-2 rounded-lg transform xl:rotate-12 bg-pink-600 text-center text-white inter text-sm font-bold">
            Get 100% peace of mind - we{" "}
            <AnchorLink
              to={"/terms/#price-matching"}
              title="See Leadgeek's price matching policy"
              className="underline hover:text-gray-900"
            >
              price match
            </AnchorLink>
            !
          </span>
        </header>
        <div className="w-full mt-8 lg:mt-16 px-4 pb-4">
          <PricingCards
            margin={"lg:mt-0"}
            negativeMarginCards={false}
            subscriptions={subscriptions}
            waitlist={waitlist}
            showWaitlistPopup={showWaitlistPopup}
            setShowWaitlistPopup={setShowWaitlistPopup}
          />
        </div>
      </section>
      {/* section 7: Testimonials */}
      <section className="pt-12 md:pt-20 lg:pt-36 relative bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 pb-16 container md:mx-auto relative z-10">
          <header className="relative md:text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              <span className="emphasized-text">Amazon arbitrage sourcing</span>{" "}
              is simply better with Leadgeek.
            </h2>
            <p className="max-w-2xl mt-4 lg:mt-6 mx-auto text-gray-900 text-lg bg-white">
              All over the world, people like you improve their Amazon sourcing
              by using Leadgeek. Here's what they had to say.{" "}
              <span
                role="img"
                aria-label="Megaphone emoji"
                className="font-normal"
              >
                📣
              </span>
            </p>
          </header>
          <div className="relative md:flex md:flex-col xl:flex-row md:items-center mx-4">
            <TestimonialFull
              key={1}
              size={"sm"}
              margin={null}
              position={"lg:-translate-x-12 lg:-translate-y-12"}
              text={
                <p>
                  <span className="emphasized-text">
                    Would definitely recommend giving them a shot
                  </span>{" "}
                  if you want to take the guess work out of sourcing for FBA.
                </p>
              }
              image={null}
              source={"William"}
              description={"Intermediate"}
              rotate={"-rotate-2"}
            />
            <TestimonialFull
              key={2}
              size={"sm"}
              margin={null}
              position={null}
              text={
                <p>
                  I love the leads, they're very good.{" "}
                  <span className="emphasized-text">
                    Leadgeek will pay off in a week
                  </span>
                  ... definitely the best site I've found for leads.
                </p>
              }
              image={null}
              source={"Kevin"}
              description={"New"}
              rotate={"-rotate-1"}
            />
            <TestimonialFull
              key={3}
              size={"sm"}
              margin={null}
              position={"lg:translate-x-24 lg:translate-y-8"}
              text={
                <p>
                  <span className="emphasized-text">
                    It's my first $100 day
                  </span>
                  . Profit margin is roughly 25% and ROI more than 2x that.
                  Thank you for helping me get started.
                </p>
              }
              image={null}
              source={"Charles"}
              description={"New"}
              rotate={"rotate-2"}
            />
          </div>
          <div className="relative md:flex md:flex-col xl:flex-row md:items-center lg:mt-16 xl:mt-0 mx-4">
            <TestimonialFull
              key={4}
              size={"sm"}
              margin={null}
              position={"lg:-translate-x-12 lg:-translate-y-12"}
              text={
                <p>
                  The software is awesome...{" "}
                  <span className="emphasized-text">
                    It looks FANTASTIC on my first try
                  </span>
                  ! Great work.
                </p>
              }
              image={null}
              source={"Yucheng"}
              description={"Intl."}
              rotate={"-rotate-2 lg:-rotate-6"}
            />
            <TestimonialFull
              key={5}
              size={"sm"}
              margin={null}
              position={null}
              text={
                <p>
                  5 stars for you guys making this{" "}
                  <span className="emphasized-text">super simple</span>.
                </p>
              }
              image={null}
              source={"Austin"}
              description={"New"}
              rotate={"rotate-2"}
            />
            <TestimonialFull
              key={6}
              size={"sm"}
              margin={null}
              position={"lg:translate-x-16 lg:translate-y-8"}
              text={
                <p>
                  <span className="emphasized-text">
                    I really like the [software] setup
                  </span>
                  .
                </p>
              }
              image={null}
              source={"Dimitry"}
              description={"Intl."}
              rotate={"-rotate-2"}
            />
          </div>
        </div>
      </section>
      {/* section 8: FAQ */}
      <section id="faq" className="mb-24 mx-4">
        <Faq />
        <div className="mt-8 lg:mt-6 flex items-center justify-center">
          <AnchorLink
            to={cta}
            title="See the latest arbitrage leads"
            className="w-full md:w-auto block md:inline-block cta-link inter text-center text-base"
            gatsbyLinkProps={{ id: "cta" }}
          >
            View the latest leads
          </AnchorLink>
        </div>
      </section>
    </LPLayout>
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
    allMongodbLeadGeekWaitlist(
      filter: { plans: { elemMatch: { active: { eq: true } } } }
    ) {
      nodes {
        mongodb_id
        plans {
          type
          active
        }
      }
    }
    allStripeSubscription {
      nodes {
        status
        plan {
          id
          product
        }
      }
    }
  }
`

export default OnlineArbitrageSourcingListPage
