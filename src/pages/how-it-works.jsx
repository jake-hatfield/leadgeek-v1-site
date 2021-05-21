import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "../components/PrimaryHeader"
import CTA from "../components/Cta"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Online Arbitrage Leads & Sourcing for Amazon Sellers"
        description="Receive potent online arbitrage leads every weekday with Leadgeek. Start, grow, and mature your Amazon FBA business with premium arbitrage leads."
      />
      {/* hero section */}
      <section className="relative">
        <HeaderWrapper>
          <PrimaryHeader
            header={`The uncomplicated arbitrage software.`}
            subHeader={`Leadgeek is a tool that makes FBA sourcing productive, organized, and clear. People that use Leadgeek are more efficient at finding fresh arbitrage leads day in and day out. Here's how the magic happens.`}
          />
        </HeaderWrapper>
      </section>
      <section className="lg:mt-32 pt-40 pb-12 bg-gray-900 md:text-center text-white">
        <div className="relative -mt-72 mx-auto max-w-4xl xl:max-w-5xl px-8 all-center">
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <header className="mt-4 lg:mt-6">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black">
            The current baloney won't cut it.
          </h2>
          <p className="mt-4 lg:mt-6 mx-auto h4">
            Why should you learn how to tweak a-million-and-one settings and
            spend hours only to find a small handful of products to arbitrage?
            That’s like finding a needle in a haystack. You're putting in the
            time to find some gold nuggets, but how many leads are you missing?
            And more importantly - how much time are you wasting?
          </p>
          <p className="mt-4 lg:mt-6 mx-auto h4">
            Whether you’ve been screening thousands of products to find the 0.5%
            of winners or picking leads out from spreadsheets that look like
            they belong to the last decade, the traditional sourcing process can
            be quite painful. Unless something changes, it doesn’t take long for
            “traditional” to turn into “inefficient.”
          </p>
        </header>
      </section>
      <section className="py-12 container text-gray-900">
        <div className="md:flex md:items-center md:justify-between">
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            className="w-1/2 rounded-lg shadow-lg"
          />
          <header className="ml-8 w-1/2">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black">
              It starts with the Feed.
            </h2>
            <p className="mt-4 lg:mt-6 h4 text-gray-700">
              The Feed is a flow of arbitrage leads curated for you. These
              hand-picked leads are screened, scrubbed, and streamlined so you
              only see the best of the best. The Feed won’t clutter your screen
              with information you don’t want to see, but you can still dive
              deeper into any item on the fly. Rather than drowning in data,
              you’re empowered to inspect products as you see fit - making
              “easy” the default.
            </p>
          </header>
        </div>
      </section>
      <section className="py-12 container text-gray-900">
        <div className="md:flex md:items-center md:justify-between">
          <header className="w-1/2">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black">
              Great standards come standard.
            </h2>
            <p className="mt-4 lg:mt-6 mx-auto h4 text-gray-700">
              There are lots of{" "}
              <Link to={"/features/lead-criteria"} className="secondary-link">
                rigorous criteria
              </Link>{" "}
              every lead must meet in order for it to ever see the light of day.
              Each item is individually inspected to meet certain profit, ROI,
              ranking, and monthly sales requirements so as to make the most of
              your time.
            </p>
          </header>
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            className="ml-8 w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="py-12 md:text-center text-gray-900">
        <header>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black">
            Filters are your friend.
          </h2>
          <div className="relative mt-4 lg:mt-6 mx-auto max-w-4xl xl:max-w-5xl px-8 all-center">
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <p className="mt-4 lg:mt-6 mx-auto h4 text-gray-700">
            Our intuitive filters help you surface information rather than
            digging through it by hand. Is there a minimum profit you’d like
            your inventory to have? There’s a filter for that. Want to only sell
            lighter items? Or only ones that have at least 75 sales/month?
            You’re in control:{" "}
            <Link to={"/features/filters"} className="secondary-link">
              combine these preferences together
            </Link>{" "}
            and focus all attention on the perfect products to add to your
            inventory.
          </p>
        </header>
      </section>
      <section className="py-12 bg-gray-100 md:text-center text-gray-900">
        <header>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black">
            Develop an eye for details.
          </h2>
          <div className="relative mt-4 lg:mt-6 mx-auto max-w-4xl xl:max-w-5xl px-8 all-center">
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <p className="mt-4 lg:mt-6 mx-auto h4 text-gray-700">
            When you find a product you’re interested in, it takes no time at
            all to see if it should make the cut. The detailed view provides the
            full picture before you decide to order. It’s easy to check out the
            historical price or sales rank to verify that the item will
            reasonably sell well in the future.
          </p>
        </header>
      </section>
      <section className="py-12 container text-gray-900">
        <div className="md:flex md:items-center md:justify-between">
          <header className="w-1/2">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black">
              Keep track of the good stuff.
            </h2>
            <p className="mt-4 lg:mt-6 h4 text-gray-700">
              Adding more leads to your collection is simple, not overwhelming.
              Is there an item you want to set aside for a few minutes while you
              sort through the other leads of the day? Add it to your liked
              leads and check back when you’re ready. If there’s something you
              think that might be great to re-stock on in the future, add it to
              your archived collection. You’re in total control of organizing
              the leads how it best works for you.
            </p>
          </header>
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            className="ml-8 w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>
      <CTA
        links={[
          { title: "Tour the features", link: "features" },
          { title: "Sign up now", link: "signup" },
        ]}
      />
    </Layout>
  )
}

const classes = {
  emphasizedText: "py-0.5 px-1 rounded-md bg-gray-900 text-white text-lg",
}

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "how-it-works-hero.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 4096, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    saveTime: file(relativePath: { eq: "save-time.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sourceProducts: file(relativePath: { eq: "source-products.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    scaleVolume: file(relativePath: { eq: "scale-volume.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    inspectedProducts: file(relativePath: { eq: "inspected-products.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    frankTestimonial: file(relativePath: { eq: "frank-testimonial.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
