import React from "react"
import { graphql } from "gatsby"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import Marquee from "react-fast-marquee"

import LPLayout from "components/layout/LandingPage/LPLayout"
import PricingCards from "components/PricingCards"
import TestimonialFull from "components/utils/TestimonialFull"

const OnlineArbitrageSourcingListPage = ({ data }) => {
  return (
    <LPLayout>
      <section className="relative overflow-hidden bg-splatter">
        <div className="py-12 md:py-20 lg:py-36 container md:mx-auto relative z-10 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          <header className="relative overflow-hidden lg:overflow-visible">
            <h1 className="max-w-2xl text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 inter header-height bg-white">
              Behold!{" "}
              <span className="emphasized-text">The online arbitrage list</span>{" "}
              you've been searching for.
            </h1>
            <h2 className="mt-4 lg:mt-6 text-gray-900 text-lg max-w-lg bg-white">
              Leadgeek is hands-down the easiest way to source new products to
              flip for profit on Amazon. Day in. Day out.
            </h2>
            <div className="mt-4 lg:mt-6 bg-white md:flex md:items-center">
              <AnchorLink
                to={"#pricing"}
                className="block md:inline-block cta-link inter text-center"
              >
                Join now
              </AnchorLink>
              <div className="pt-8 md:pt-0 md:pl-10 transform -rotate-2 text-sm text-gray-900 text-center md:text-left font-semibold">
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
                  <span className="ml-1">without any contracts</span>.
                </p>
                <p className="mt-2">Hurry - only a few spots left!</p>
              </div>
            </div>
          </header>
          <div>hello!</div>
        </div>
        <div>
          <Marquee
            className="py-3 bg-gray-100 text-gray-900 font-semibold border-t border-b border-gray-500"
            gradient={false}
            speed="100"
            pauseOnHover={true}
          >
            Say goodbye to spreadsheets! Leadgeek is all the best parts of a
            traditional online arbitrage sourcing list amplified by an
            easy-to-use interface that saves you heaps of time. 🚀
          </Marquee>
        </div>
      </section>
      <section className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-36 mb-20 container md:mx-auto relative z-10 md:flex md:justify-between md:items-center">
          <header className="relative overflow-hidden lg:overflow-visible bg-white">
            <h1 className="max-w-2xl text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 inter header-height">
              There's only one thing you need to know about Leadgeek:
            </h1>
            <h2 className="mt-4 lg:mt-6 text-gray-900 text-lg max-w-lg">
              Leadgeek is the easiest way to source new products to flip for
              profit on Amazon.
            </h2>
            <div className="mt-4 lg:mt-6 bg-white flex items-center">
              <AnchorLink
                to={"#pricing"}
                className="inline-block cta-link inter"
              >
                Join now
              </AnchorLink>
              <div className="pl-10 transform -rotate-2 text-sm text-gray-900">
                <p className="flex items-end">
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
                  <span className="ml-1">without any contracts</span>.
                </p>
                <p className="mt-2">Only a few spots left!</p>
              </div>
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
      </section>
      {/* <TestimonialFull
        size={`sm`}
        margin={`mt-20`}
        position={`md:flex items-start`}
        text={
          <p>
            I want to thank you for the effort you make to find products with
            such good quality.{" "}
            <span className="emphasized-text">
              It has been the best decision I have made in acquiring your list
            </span>
            .
          </p>
        }
        image={data.testimonialFrank.childImageSharp.fluid}
        source="Frank"
        desc="International"
        rotate="-rotate-2"
      /> */}
    </LPLayout>
  )
}

export const query = graphql`
  query {
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
