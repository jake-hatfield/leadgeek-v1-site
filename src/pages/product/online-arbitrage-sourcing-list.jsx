import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Marquee from "react-fast-marquee"
import { DateTime } from "luxon"

import LPLayout from "components/layout/LandingPage/LPLayout"
import LeadSample from "components/LeadSample"
import PricingCards from "components/PricingCards"
import Faq from "components/Faq"
import LoopyDashed from "assets/svgs/loopy-dashed.svg"

const OnlineArbitrageSourcingListPage = ({ data }) => {
  const title = "Online Arbitrage Sourcing List | Leadgeek"
  const desc = "Online arbitrage sourcing list."

  const startDate = DateTime.fromISO("2020-10-12T12:00")
  const currentDate = DateTime.now()
  const difference = startDate.diff(currentDate, ["days"])
  const differenceInDays = Math.abs(difference.toObject().days).toFixed()

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

  return (
    <LPLayout>
      <GatsbySeo
        title={title}
        description={desc}
        // openGraph={{
        //   title,
        //   description: desc,
        //   url: "https://leadgeek.io/",
        //   images: [
        //     {
        //       url: OgImage,
        //       width: 1200,
        //       height: 630,
        //       alt,
        //     },
        //   ],
        //   type: "website",
        // }}
        language="en"
      />
      <section className="relative overflow-hidden bg-splatter">
        <div className="relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-48 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative z-30 max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              Behold!{" "}
              <span className="emphasized-text">The online arbitrage list</span>{" "}
              you've been searching for.
            </h1>
            <h2 className="max-w-lg mt-4 lg:mt-6 text-gray-900 text-lg bg-white">
              Online arbitrage sourcing just got a huge upgrade: Leadgeek is
              hands-down the <strong>easiest</strong> and{" "}
              <strong>smoothest</strong> way to find new products to flip for
              profit on Amazon. Day in. Day out.
            </h2>
            <div className="md:flex md:items-center mt-4 lg:mt-6">
              <div
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <AnchorLink
                  to={"#pricing"}
                  className="block md:inline-block cta-link inter text-center"
                >
                  Start sourcing now
                </AnchorLink>
              </div>
              <div className="pt-8 md:pt-0 md:pl-10 text-sm text-gray-900 text-center md:text-left font-semibold">
                <p className="flex items-end justify-center md:justify-start">
                  <span>Leads you will</span>
                  <span className="ml-1 text-pink-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="ml-1">without any contracts</span>
                </p>
                <p className="mt-2">
                  Hurry!{" "}
                  <span className="line-through text-lg text-pink-600 text-decoration-dark">
                    15
                  </span>{" "}
                  <span className="underline">limited</span> spots left
                </p>
              </div>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-16 lg:py-16 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto pl-4 lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg ring-8 ring-pink-600 ring-opacity-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
        <Marquee
          className="py-3 bg-gray-100 text-gray-900 font-semibold border-t border-b border-gray-500"
          gradient={false}
          speed="100"
          pauseOnHover={true}
        >
          <p className="pl-10">
            <span className="text-pink-600">
              There's only 1 thing you need to know about Leadgeek
            </span>
            : It's all the best parts of a traditional online arbitrage sourcing
            list made better by an interface that helps you find amazing product
            leads in a fraction of the normal time.{" "}
            <span role="img" aria-label="Rocket Emoji">
              🚀
            </span>
          </p>
        </Marquee>
      </section>
      {/* section 1 */}
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-36 mb-72 max-w-7xl md:mx-auto relative z-10 md:flex md:justify-between md:items-center">
          <header className="relative overflow-hidden lg:overflow-visible">
            <h2 className="max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              <span className="emphasized-text">Online arbitrage sourcing</span>{" "}
              for the modern era.
            </h2>
            <p className="max-w-lg mt-4 lg:mt-6 text-gray-900 text-lg bg-white">
              It's {new Date().getFullYear()}: Upgrade your Amazon arbitrage
              sourcing setup from smoke signals, carrier pigeons, and clunky
              spreadsheets. <strong>Get more things done</strong> by viewing a
              daily arbitrage list in a powerful, flexible interface.{" "}
              <span role="img" aria-label="Muscle Emoji">
                💪
              </span>
            </p>
            <div
              className="mt-4 lg:mt-6 flex items-center"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <AnchorLink
                to={"#pricing"}
                className="inline-block cta-link inter"
              >
                Start sourcing now
              </AnchorLink>
            </div>
            <div className="max-w-lg mt-6 lg:mt-8 bg-gray-100 shadow-lg rounded-lg py-4 px-6 text-gray-700">
              <blockquote>
                I want to thank you for the effort you make to find products
                with such good quality.{" "}
                <strong>
                  It has been the best decision I have made in acquiring your
                  list
                </strong>
                .
                <div className="mt-2 lg:mt-4 flex items-center">
                  <Img
                    fluid={data.testimonialFrank.childImageSharp.fluid}
                    alt={`Frank's testimonial`}
                    className="w-10 rounded-full shadow-tealSm border border-gray-900 bg-gray-900 transform -rotate-6"
                  />
                  <div className="flex items-center">
                    <cite className="ml-4 inter font-black">Frank</cite>
                    <span className="hidden md:block mx-2 font-semibold text-pink-600">
                      /
                    </span>
                    <p className="mt-2 md:mt-0 font-semibold text-xs lg:text-sm text-gray-600 inter">{`International FBA seller`}</p>
                  </div>
                </div>
              </blockquote>
            </div>
            <LoopyDashed className="absolute bottom-0 h-28 lg:h-56 text-purple-500 transform translate-y-64 translate-x-12" />
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-16 lg:py-4 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto pl-4 lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg ring-8 ring-teal-500 ring-opacity-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 lg:mb-64 max-w-7xl md:mx-auto relative z-10 md:flex md:justify-between md:items-center">
          <header className="relative overflow-hidden lg:overflow-visible">
            <h2 className="max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              Your <span className="emphasized-text">side-hustle</span> should
              stay on the side.
            </h2>
            <p className="max-w-lg mt-4 lg:mt-6 text-gray-900 text-lg bg-white">
              Let's face it - OA sourcing is a grind. Free up time, find
              profitable inventory, and{" "}
              <strong>blow up your Amazon sales</strong> by letting Leadgeek do
              the research for you every weekday morning.{" "}
              <span role="img" aria-label="Microscope Emoji">
                🔬
              </span>{" "}
              All you have to do is{" "}
              <strong>log in, pick your favorites, and buy</strong>.
            </p>
            <div
              className="mt-4 lg:mt-6 flex items-center"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <AnchorLink
                to={"#pricing"}
                className="inline-block cta-link inter"
              >
                Start sourcing now
              </AnchorLink>
            </div>
            <div className="max-w-lg mt-6 lg:mt-8 bg-gray-100 shadow-lg rounded-lg py-4 px-6 text-gray-700">
              <blockquote>
                Delivered their lists as promised daily and always had at least
                a few items I was interested in.{" "}
                <strong>Good value, would recommend</strong>.
                <div className="mt-2 lg:mt-4 flex items-center">
                  <Img
                    fluid={data.testimonialBrian.childImageSharp.fluid}
                    alt={`Frank's testimonial`}
                    className="w-10 rounded-full shadow-tealSm border border-gray-900 bg-gray-900 transform -rotate-6"
                  />
                  <div className="flex items-center">
                    <cite className="ml-4 inter font-black">Brian</cite>
                    <span className="hidden md:block mx-2 font-semibold text-pink-600">
                      /
                    </span>
                    <p className="mt-2 md:mt-0 font-semibold text-xs lg:text-sm text-gray-600 inter">{`Intermediate FBA seller`}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-16 lg:py-4 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto pl-4 lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg ring-8 ring-purple-500 ring-opacity-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 lg:mb-64 max-w-7xl md:mx-auto relative z-10 md:flex md:justify-between md:items-center">
          <header className="relative overflow-hidden lg:overflow-visible">
            <h2 className="max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              The <span className="emphasized-text">OA leads list</span> that
              doesn't cut corners on criteria.
            </h2>
            <p className="max-w-lg mt-4 lg:mt-6 text-gray-900 text-lg bg-white">
              Since profitable leads are undeniably the most vital part of a
              successful arbitrage business,{" "}
              <strong>quality is at the core of Leadgeek</strong>. By sourcing
              500+ US retailers, you receive only the best of the best
              hand-selected products to choose from.{" "}
              <span role="img" aria-label="Trophy Emoji">
                🏆
              </span>
            </p>
            <div
              className="mt-4 lg:mt-6 flex items-center"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <AnchorLink
                to={"#pricing"}
                className="inline-block cta-link inter"
              >
                Start sourcing now
              </AnchorLink>
            </div>
            <div className="relative max-w-lg mt-6 lg:mt-8 bg-gray-100 shadow-lg rounded-lg py-4 px-6 text-gray-700">
              <div className="absolute bottom-0 right-0 p-2 rounded-lg transform -rotate-6 text-xs bg-gray-900 text-teal-300 shadow-tealSm translate-x-24">
                Last updated: {currentDate.toFormat("LLL dd")}
              </div>
              <p>
                Real-time unit averages over the past{" "}
                <span className="font-bold text-pink-600">
                  {differenceInDays} days
                </span>
              </p>
              <ol className="flex items-center mt-4">
                <li>
                  <p className="font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap">
                    Net profit
                  </p>
                  <div className="mt-2 text-3xl font-black">
                    ${allTimeAverageProfit.toFixed()}
                  </div>
                </li>
                <span className="ml-6 font-semibold text-pink-600 text-3xl">
                  /
                </span>
                <li className="ml-6">
                  <p className="font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap">
                    ROI
                  </p>
                  <div className="mt-2 text-3xl font-black">
                    {allTimeAverageROI.toFixed()}%
                  </div>
                </li>
                <span className="ml-6 font-semibold text-pink-600 text-3xl">
                  /
                </span>
                <li className="ml-6">
                  <p className="font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap">
                    Sales
                  </p>
                  <div className="mt-2 text-3xl font-black">
                    {allTimeAverageMonthlySales.toFixed()}
                    <span className="text-base">/mo</span>
                  </div>
                </li>
              </ol>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-16 lg:py-4 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto pl-4 lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg ring-8 ring-purple-500 ring-opacity-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 lg:mb-64 max-w-7xl md:mx-auto relative z-10 md:flex md:justify-between md:items-center">
          <header className="relative overflow-hidden lg:overflow-visible">
            <h2 className="max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              Competition is a buzzkill.
            </h2>
            <p className="max-w-lg mt-4 lg:mt-6 text-gray-900 text-lg bg-white">
              Since profitable leads are undeniably the most vital part of a
              successful arbitrage business,{" "}
              <strong>quality is at the core of Leadgeek</strong>. By sourcing
              500+ US retailers, you receive only the best of the best
              hand-selected products to choose from.{" "}
              <span role="img" aria-label="Trophy Emoji">
                🏆
              </span>
            </p>
            <div
              className="mt-4 lg:mt-6 flex items-center"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <AnchorLink
                to={"#pricing"}
                className="inline-block cta-link inter"
              >
                Start sourcing now
              </AnchorLink>
            </div>
            <div className="max-w-lg mt-6 lg:mt-8 bg-gray-100 shadow-lg rounded-lg py-4 px-6 text-gray-700">
              <h3 className="ml-4 inter font-black">
                Average stats over the past 274 days
              </h3>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-16 lg:py-4 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto pl-4 lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg ring-8 ring-purple-500 ring-opacity-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 lg:mb-64 pb-16 container md:mx-auto relative z-10">
          <header className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              <span className="emphasized-text">No BS</span>. Here's exactly
              what you get.
            </h2>
            <p className="max-w-2xl mt-4 lg:mt-6 mx-auto text-gray-900 text-lg bg-white">
              Get the most representative idea of what it's like to use Leadgeek
              with a real-time list of the <strong>exact</strong> hand-picked
              products members received over the last 2 weeks.
            </p>
            <div
              className="mt-4 lg:mt-6 flex items-center"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            ></div>
          </header>
          <div className="relative mt-16">
            <div className="absolute top-0 right-0 p-2 rounded-lg transform rotate-12 text-xs bg-gray-900 text-teal-300 shadow-tealSm -translate-y-4 translate-x-24">
              Last updated: {currentDate.toFormat("LLL dd")}
            </div>
            <LeadSample />
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="py-12 md:py-20 lg:py-36 text-gray-900 overflow-hidden bg-splatter"
      >
        <header className="relative text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
            <span className="emphasized-text">Fair, no-nonsense</span> pricing
            on every plan.
          </h2>
        </header>
        <div className="w-full pb-4 bg-white">
          <PricingCards margin={"lg:mt-0"} />
        </div>
      </section>
      <section id="faq">
        <Faq />
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
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "leadgeek-app.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 958, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialFrank: file(relativePath: { eq: "frank.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialBrian: file(relativePath: { eq: "brian.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default OnlineArbitrageSourcingListPage
