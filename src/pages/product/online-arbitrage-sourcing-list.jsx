import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import Marquee from "react-fast-marquee"

import LPLayout from "components/layout/LandingPage/LPLayout"
import TestimonialFull from "components/utils/TestimonialFull"
import PricingCards from "components/PricingCards"

const OnlineArbitrageSourcingListPage = ({ data }) => {
  return (
    <LPLayout>
      <section className="relative overflow-hidden bg-splatter">
        <div className="relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-48 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative z-30 max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              Behold!{" "}
              <span className="emphasized-text">The online arbitrage list</span>{" "}
              you've been searching for.
            </h1>
            <h2 className="max-w-lg mt-4 lg:mt-6 text-gray-900 text-lg bg-white">
              Leadgeek is hands-down the <strong>easiest</strong> way to source
              new products to flip for profit on Amazon. Day in. Day out.
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
                  Join now
                </AnchorLink>
              </div>
              <div className="pt-8 md:pt-0 md:pl-10 text-sm text-gray-900 text-center md:text-left font-semibold transform -rotate-2">
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
                  limited spots left
                </p>
              </div>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-16 lg:py-16 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto pl-4 lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg ring-8 ring-purple-500 shadow-2xl"
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
          <p>
            Say "see ya" to spreadsheets! Leadgeek is all the best parts of a
            traditional online arbitrage sourcing list amplified by a software
            interface that helps you find amazing products in a fraction of the
            time.{" "}
            <span role="img" aria-label="Rocket Emoji">
              🚀
            </span>
          </p>
        </Marquee>
      </section>
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-36 mb-20 max-w-7xl md:mx-auto relative z-10 md:flex md:justify-between md:items-center">
          <header className="relative overflow-hidden lg:overflow-visible">
            <h2 className="max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              The only modern tool for{" "}
              <span className="emphasized-text">online arbitrage sourcing</span>{" "}
              in {new Date().getFullYear()}.
            </h2>
            <p className="max-w-lg mt-4 lg:mt-6 text-gray-900 text-lg bg-white">
              Upgrade your Amazon arbitrage sourcing setup from smoke signals,
              carrier pigeons, and spreadsheets. 🤢{" "}
              <strong>Get more things done</strong> with a simple, flexible
              interface.
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
                Join now
              </AnchorLink>
            </div>
            {/* <TestimonialFull
              size={`sm`}
              margin={`mt-20`}
              position={`md:flex items-start`}
              text={
                <p>
                  I want to thank you for the effort you make to find products
                  with such good quality.{" "}
                  <span className="emphasized-text">
                    It has been the best decision I have made in acquiring your
                    list
                  </span>
                  .
                </p>
              }
              image={data.testimonialFrank.childImageSharp.fluid}
              source="Frank"
              desc="International"
              rotate="-rotate-2"
            /> */}
            <div className="max-w-lg mt-6 lg:mt-8 bg-gray-100 shadow-lg rounded-lg p-4 text-gray-700">
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
          </header>
          <div>hello!</div>
        </div>
      </section>
      <section
        id="pricing"
        className="py-12 md:py-20 lg:py-36 text-gray-900 overflow-hidden bg-splatter"
      >
        <div className="w-full bg-white">
          <PricingCards margin={"lg:mt-0"} />
        </div>
        <h1 className="max-w-2xl text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 inter header-height">
          There's only one thing you need to know about Leadgeek:
        </h1>
      </section>
    </LPLayout>
  )
}

export const query = graphql`
  query {
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
  }
`

export default OnlineArbitrageSourcingListPage
