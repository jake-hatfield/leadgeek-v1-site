import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"
import CTA from "components/Cta"

import DividerTop from "assets/svgs/section-divider-top.svg"
import DividerBottom from "assets/svgs/section-divider-bottom.svg"
import RetroSun from "assets/svgs/retro-sun.svg"
import OgImage from "assets/images/og/og-how-it-works.jpg"
import FeedMp4 from "assets/video/the-feed.mp4"
import FiltersMp4 from "assets/video/filters.mp4"
import LikeArchiveMp4 from "assets/video/like-and-archive.mp4"
import FeedWebm from "assets/video/the-feed.webm"
import FiltersWebm from "assets/video/filters.webm"
import LikeArchiveWebm from "assets/video/like-and-archive.webm"
import Poster from "assets/images/white-bg.png"

const IndexPage = ({ data }) => {
  const title = "How Leadgeek Works"
  const desc =
    "Leadgeek is a fresh new take on traditional online arbitrage sourcing lists. Make finding new leads productive, organized, and clear with a simple process."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/how-it-works/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "See how Leadgeek makes things simple",
            },
          ],
        }}
        language="en"
      />
      {/* hero section */}
      <section className="relative overflow-x-hidden bg-splatter">
        <HeaderWrapper>
          <PrimaryHeader
            title={`The uncomplicated arbitrage software.`}
            desc={
              <p>
                Leadgeek is a tool that makes FBA sourcing productive,
                organized, and clear. People that use Leadgeek are more
                efficient at finding fresh arbitrage leads day in and day out.
                Here's how the magic happens.
              </p>
            }
          />
        </HeaderWrapper>
      </section>
      <section className="relative mt-12 lg:mt-32 pt-40 pb-14 bg-gray-900 md:text-center text-white">
        <DividerTop className="divider-top text-gray-900" />
        <DividerBottom className="divider-bottom text-gray-900" />
        <div className="-mt-56 lg:-mt-72 mx-auto px-4 lg:px-8 max-w-4xl lg:max-w-5xl">
          <Img
            fluid={data.details.childImageSharp.fluid}
            alt="Leadgeek app details view"
            className="min-w-full rounded-lg border border-gray-900 stack-sm"
          />
        </div>
        <div className="relative overflow-x-hidden">
          <RetroSun className="hidden md:block absolute md:w-16 lg:w-32 text-teal-200 bottom-0 right-0 transform -translate-y-12 translate-x-6 lg:translate-x-12" />
          <header className="mt-12 container">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
              The current baloney won't cut it.
            </h2>
            <p className="mt-4 lg:mt-6 mx-auto h4">
              Why should you learn how to tweak a-million-and-one settings and
              spend hours only to find a small handful of products to arbitrage?
              That’s like finding a needle in a haystack.{" "}
              <span className="emphasized-text-light lg:text-lg">
                You're putting in the time to find{" "}
                <span className="italic">some</span> gold nuggets, but how many
                leads are you missing?
              </span>{" "}
              And more importantly -{" "}
              <span className="emphasized-text-light lg:text-lg">
                how much time are you wasting?
              </span>
            </p>
            <p className="mt-4 lg:mt-6 mx-auto h4">
              Whether you’ve been screening thousands of products to find the
              0.5% of winners or picking leads out from spreadsheets that look
              like they belong to the last decade,{" "}
              <span className="emphasized-text-light lg:text-lg">
                the traditional sourcing process can be quite frustrating
              </span>
              . Unless something changes, it doesn’t take long for “traditional”
              to turn into "painful.”
            </p>
          </header>
        </div>
      </section>
      <section className="py-12 md:py-24 text-gray-900 bg-splatter">
        <div className="px-4 lg:px-12 xl:px-16">
          <div className="lg:flex lg:items-center lg:justify-center mx-auto max-w-3xl lg:max-w-none">
            <div className="md:mx-auto lg:mx-0 max-w-2xl lg:max-w-4xl video-responsive transform transition-main border border-gray-900 hover:-rotate-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={Poster}
                className="video-responsive-item"
                alt="Feed demo"
              >
                <source src={FeedWebm} type="video/webm" />
                <source src={FeedMp4} type="video/mp4" />
              </video>
            </div>
            <header className="md:mx-auto lg:mx-0 max-w-xl text-left md:text-center lg:text-left mt-8 lg:mt-0 lg:ml-12 lg:w-2/5 bg-white">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
                It starts with the Feed.
              </h2>
              <p className="mx-auto mt-4 lg:mt-6 h4 text-gray-900">
                The Feed is a flow of arbitrage leads curated for you. These
                hand-picked leads are screened, scrubbed, and streamlined so you
                only see the best of the best.{" "}
                <span className="emphasized-text">
                  The Feed won’t clutter your screen with information you don’t
                  want to see
                </span>
                , but you can still dive deeper into any item on the fly. Rather
                than drowning in data, you’re empowered to inspect products as
                you see fit - making “easy” the default.
              </p>
            </header>
          </div>
        </div>
      </section>
      <section className="py-24 text-gray-900 bg-splatter">
        <div className="px-4 lg:px-12 xl:px-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto max-w-3xl lg:max-w-none">
            <header className="md:mx-auto lg:mx-0 max-w-xl text-left md:text-center lg:text-left mt-8 lg:mt-0 lg:w-2/5 bg-white">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
                Great standards come standard.
              </h2>
              <p className="mt-4 lg:mt-6 mx-auto h4 text-gray-900">
                There are lots of{" "}
                <Link to={"/features/criteria/"} className="secondary-link">
                  rigorous criteria
                </Link>{" "}
                every lead must meet in order for it to ever see the light of
                day. Each item is individually inspected to meet certain profit,
                ROI, ranking, and monthly sales requirements (with selling fees
                accounted for too!). Now{" "}
                <span className="emphasized-text">
                  there's no more time-waste
                </span>{" "}
                doing this repetitive process yourself.
              </p>
            </header>
            <div className="md:mx-auto lg:ml-12 lg:mr-0 w-full lg:w-3/5 max-w-2xl lg:max-w-4xl">
              <Img
                fluid={data.app.childImageSharp.fluid}
                alt="Online arbitrage lead criteria"
                className="w-full rounded-lg border border-gray-900 stack-sm transform hover:rotate-2 transition-main"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-12 pb-24 md:text-center text-gray-900 overflow-x-hidden bg-splatter">
        <header className="container">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter bg-white">
            Filters are your friend.
          </h2>
          <div className="relative mt-4 lg:mt-6 mx-auto md:max-w-4xl xl:max-w-5xl md:px-8 all-center">
            <div className="w-full relative z-40">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={Poster}
                className="w-full rounded-lg border border-gray-900 stack-sm"
                alt="Filter demo"
              >
                <source src={FiltersWebm} type="video/webm" />
                <source src={FiltersMp4} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="mt-8 mx-auto h4 bg-white text-gray-900">
            Our{" "}
            <Link to={"/features/filters/"} className="secondary-link">
              intuitive filters
            </Link>{" "}
            help you surface information rather than digging through it by hand.
            Is there a minimum profit you’d like your inventory to have? There’s
            a filter for that. Want to only sell lighter items? Or only ones
            that have at least 75 sales/month? You’re in control: combine these
            preferences together and{" "}
            <span className="emphasized-text">
              focus all attention on the perfect products
            </span>
            to add to your inventory.
          </p>
        </header>
      </section>
      <section className="py-12 lg:py-24 text-gray-900 bg-splatter">
        <div className="px-4 lg:px-12 xl:px-16">
          <div className="lg:flex lg:items-center lg:justify-center mx-auto max-w-3xl lg:max-w-none">
            <div className="md:mx-auto lg:mx-0 max-w-lg lg:max-w-xl lg:w-3/5 transform transition-main hover:-rotate-1">
              <Img
                fluid={data.detailsClose.childImageSharp.fluid}
                alt="Detailed view close up"
                className="w-full rounded-lg border border-gray-900 stack-sm"
              />
            </div>
            <header className="md:mx-auto lg:mx-0 max-w-xl text-left md:text-center lg:text-left mt-8 lg:mt-0 lg:ml-12 lg:w-2/5 bg-white">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
                Develop an eye for details.
              </h2>
              <p className="mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-900">
                When you find a lead you’re interested in, it takes no time at
                all to see if it should make the cut.{" "}
                <span className="emphasized-text">
                  The detailed view provides the full picture before you decide
                  to order
                </span>
                . It’s easy to check out the historical price or sales rank to
                verify that the item will reasonably sell well in the future.
              </p>
            </header>
          </div>
        </div>
      </section>
      <section className="pt-24 pb-12 text-gray-900 bg-splatter">
        <div className="px-4 lg:px-12 xl:px-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto max-w-3xl lg:max-w-none">
            <header className="md:mx-auto lg:mx-0 max-w-xl text-left md:text-center lg:text-left mt-8 lg:mt-0 lg:w-2/5 bg-white">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
                Keep track of the good stuff.
              </h2>
              <p className="mt-4 lg:mt-6 h4 text-gray-900 ">
                <span className="emphasized-text">
                  Adding more leads to your collection is simple
                </span>
                , not overwhelming. Is there an item you want to set aside for a
                few minutes while you sort through the other leads of the day?
                Add it to your liked leads and check back when you’re ready. If
                there’s something you think that might be great to re-stock on
                in the future, add it to your archived collection.{" "}
                <span className="emphasized-text">
                  You’re in total control of organizing the leads how it best
                  works for you
                </span>
                .
              </p>
            </header>
            <div className="md:mx-auto lg:ml-12 lg:mr-0 max-w-2xl lg:max-w-4xl video-responsive transform transition-main border border-gray-900 hover:rotate-2">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={Poster}
                className="video-responsive-item"
                alt="Like and archive demo"
              >
                <source src={LikeArchiveWebm} type="video/webm" />
                <source src={LikeArchiveMp4} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <CTA
        links={[
          { title: "Tour the features", link: "features" },
          { title: "Sign up now", link: "pricing" },
        ]}
        desc={
          <p>
            See the 20 features that make Leadgeek rad or join today.{" "}
            <span className="italic">Or</span> both!
          </p>
        }
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    app: file(relativePath: { eq: "leadgeek-app.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 894, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    details: file(relativePath: { eq: "details.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 958, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    detailsClose: file(relativePath: { eq: "details-close.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 574, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
