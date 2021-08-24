import React from "react"
import { Link, graphql } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"
import TestimonialFull from "@components/utils/TestimonialFull"
import Cta from "@components/Cta"

import LongArrow from "@assets/svgs/arrow-straight-solid.svg"
import ShortArrow from "@assets/svgs/arrow-short-fat.svg"
import TurnyFat from "@assets/svgs/turny-fat.svg"
import DividerTop from "@assets/svgs/section-divider-top.svg"
import DividerBottom from "@assets/svgs/section-divider-bottom.svg"
import RetroSun from "@assets/svgs/retro-sun.svg"
import RetroSwirl from "@assets/svgs/retro-swirl.svg"
import BirdTracks from "@assets/svgs/bird-tracks.svg"
import Signature from "@assets/svgs/signature.svg"
import DashLoopLine from "@assets/svgs/dash-loop-line.svg"
import OgImage from "@assets/images/og/og-index.jpg"

interface IndexPageProps {
  data: {
    heroImage: GatsbyImageProps
    testimonialAustin: GatsbyImageProps
    testimonialBrian: GatsbyImageProps
    testimonialFrank: GatsbyImageProps
    testimonialKevin: GatsbyImageProps
    testimonialWilliam: GatsbyImageProps
  }
  location: Location
}

const IndexPage: React.FC<IndexPageProps> = ({ data, location }) => {
  const title = "Leadgeek: Online Arbitrage Sourcing Lists & Software"
  const description =
    "Trusted by Amazon FBA sellers across the world, Leadgeek offers online arbitrage sourcing lists, software, and tools to put you in control of your selling."
  const alt = "Leadgeek Arbitrage Sourcing List & Software"

  interface Testimonial {
    size: string | null
    margin: string | null
    position: string | null
    text: JSX.Element
    image: GatsbyImageProps
    source: string
    description: string
    rotate: string
  }

  const testimonialsFull: Testimonial[] = [
    {
      size: null,
      margin: null,
      position: null,
      text: (
        <p>
          I love the leads, they're very good.{" "}
          <span className={classes.emphasizedText}>
            Leadgeek will pay off in a week
          </span>
          ... definitely the best site I've found for leads.
        </p>
      ),
      image: data.testimonialKevin.childImageSharp.fluid,
      source: "Kevin",
      description: "New",
      rotate: "-rotate-2",
    },
    {
      size: null,
      margin: null,
      position: null,
      text: (
        <p>
          Delivered their lists as promised daily and always had at least a few
          items I was interested in.{" "}
          <span className={classes.emphasizedText}>
            Good value, would recommend
          </span>
          .
        </p>
      ),
      image: data.testimonialBrian.childImageSharp.fluid,
      source: "Brian",
      description: "Intermediate",
      rotate: "rotate-2",
    },
    {
      size: null,
      margin: null,
      position: null,
      text: (
        <p>
          Leadgeek delivers on their promises in the promo video on time every
          day with solid ROI leads.{" "}
          <span className={classes.emphasizedText}>
            Would definitely recommend giving them a shot if you want to take
            the guess work out of sourcing for FBA
          </span>
          .
        </p>
      ),
      image: data.testimonialWilliam.childImageSharp.fluid,
      source: "William",
      description: "Intermediate",
      rotate: "rotate-1",
    },
    {
      size: null,
      margin: null,
      position: null,
      text: (
        <p>
          <span className={classes.emphasizedText}>
            5 stars for you guys making this super simple
          </span>
          .
        </p>
      ),
      image: data.testimonialAustin.childImageSharp.fluid,
      source: "Austin",
      description: "New",
      rotate: "-rotate-1",
    },
    {
      size: null,
      margin: null,
      position: null,
      text: (
        <p>
          I want to thank you for the effort you make to find products with such
          good quality.{" "}
          <span className={classes.emphasizedText}>
            It has been the best decision I have made in acquiring your list
          </span>
          . Thank you!
        </p>
      ),
      image: data.testimonialFrank.childImageSharp.fluid,
      source: "Frank",
      description: "International",
      rotate: "rotate-2",
    },
  ]

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt,
            },
          ],
          type: "website",
        }}
        language="en"
      />
      {/* hero section */}
      <section className={classes.headerWrapper}>
        <HeaderWrapper
          bottomPadding={"pb-28 lg:pb-80"}
          styles={"flex flex-col-reverse md:flex-col"}
        >
          <section className={classes.testimonialWrapper}>
            {testimonialsShort.map((testimonial, i) => (
              <TestimonialShort key={i} text={testimonial} />
            ))}
          </section>
          <PrimaryHeader
            title={`Amazon online arbitrage is now radically better`}
            description={
              <h2>
                Feel like your arbitrage sourcing is stuck in limbo?{" "}
                <span className="font-bold">
                  Turn "I don't know what to sell" into "I have too much to buy"
                </span>{" "}
                with a daily list of the best items to flip for profit on
                Amazon.
              </h2>
            }
            nav={true}
            goHome={false}
            linkOne={`demo`}
            linkOneText={`See how it works`}
            linkTwo={`pricing`}
            linkTwoText={`or sign up now`}
            outsideLink={null}
            svgOne={null}
            svgTwo={null}
          />
        </HeaderWrapper>
      </section>
      {/* hero image section */}
      <section className={classes.heroWrapper}>
        <DividerTop className={classes.dividerTop} />
        <DividerBottom className={classes.dividerBottom} />
        <RetroSun className={classes.retroSun1} />
        <RetroSwirl className={classes.retroSwirl} />
        <section className={classes.heroContentWrapper}>
          <div className={classes.heroImageWrapper}>
            <RetroSun className={classes.retroSun2} />
            <div className={classes.filterNoteWrapper}>
              <div className="relative">
                <LongArrow className={classes.longArrow1} />
                <p className={classes.filterNote}>Filter items on the fly</p>
              </div>
            </div>
            <div className={classes.searchNoteWrapper}>
              <div className="relative">
                <p className={classes.searchNote}>
                  Wicked-fast search by keyword
                </p>
                <ShortArrow className={classes.shortArrow} />
              </div>
            </div>
            <div className={classes.saveNoteWrapper}>
              <div className="relative">
                <p className={classes.saveNote}>
                  Save leads you like or archive them for later
                </p>
                <LongArrow className={classes.longArrow2} />
              </div>
            </div>
            <div className={classes.metricsNoteWrapper}>
              <div className="relative">
                <p className={classes.metricsNote}>
                  See all important metrics at a glance
                </p>
                <TurnyFat className={classes.turnyArrow} />
              </div>
            </div>
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              alt="Leadgeek app feed"
              className={classes.heroImage}
            />
          </div>
          <header className={classes.heroHeader}>
            <h2 className={classes.heroH2}>
              Leadgeek is made for modern Amazon sellers
            </h2>
            <p className={classes.heroParagraph}>
              <span className="font-semibold">Before using Leadgeek</span>:
              Finding new things to sell on Amazon felt like it was sluggish and
              outdated. Spreadsheets are ok, but is it the way a legit business
              finds new leads?
            </p>
            <p className={classes.heroParagraph}>
              <span className="font-semibold">After using Leadgeek</span>: In
              quite literally one click, you have the day's 10+ best arbitrage
              leads displayed in a seamless software made by an Amazon seller,
              for Amazon sellers.
            </p>
            <div
              className="mt-12 text-center"
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-duration="500"
              data-sal-easing="ease in out"
            >
              <Link to={"/features/"} className="cta-link inter">
                See how Leadgeek is built different
              </Link>
            </div>
            <article
              className={`hidden xl:block xl:absolute xl:bottom-0 xl:left-0 xl:z-20 w-72 mt-16 mx-auto py-4 lg:py-6 px-6 bg-gray-900 rounded-lg text-left text-sm text-teal-300 transition-main transform xl:-translate-y-24 xl:-translate-x-32 -rotate-6`}
            >
              <div className="flex items-center text-white">
                <h3 className="font-bold inter">Amazon online arbitrage</h3>{" "}
                <span className="ml-1 text-pink-600">&#8226;</span>
                <div className="ml-1 italic">noun</div>
              </div>
              <p className="mt-2 text-xs">
                The act of buying items at a low price from retailers and
                selling them for a higher price on Amazon. Cha-ching.
              </p>
            </article>
          </header>
        </section>
      </section>
      {/* testimonials section */}
      <section className={classes.testimonialSectionWrapper}>
        <DashLoopLine className={classes.dashLoopLine1} />
        <div className="container">
          <header>
            <h2 className={classes.testimonialSectionH2}>
              People who love clarity, love Leadgeek
            </h2>
            <h3 className={classes.testimonialSectionH3}>
              Entrepreneurs, newbies, international, and pro FBA sellers all{" "}
              <span className={classes.emphasizedText}>
                join Leadgeek to fundamentally improve the arbitrage sourcing
                process
              </span>
              .
            </h3>
          </header>
          <div className={classes.testimonialsWrapper}>
            {testimonialsFull.map((testimonial, i) => (
              <TestimonialFull
                key={i}
                size={testimonial.size}
                margin={testimonial.margin}
                position={testimonial.position}
                text={testimonial.text}
                image={testimonial.image}
                source={testimonial.source}
                description={testimonial.description}
                rotate={testimonial.rotate}
              />
            ))}
          </div>
          <div className="mt-20 mx-auto relative max-w-xl py-4 lg:py-6 px-6 bg-gray-100 rounded-lg border border-gray-900 shadow-pinkSm text-center text-gray-900 leading-relaxed">
            <p className="h4">And there's plenty more where these came from.</p>
            <Link
              to={"/stories/"}
              className="mt-4 lg:mt-6 block md:inline-block py-3 px-4 rounded-lg border border-gray-900 bg-gray-900 font-semibold text-sm inter hover:bg-gray-800 text-teal-300 transition-main"
            >
              Read more customer stories
            </Link>
          </div>
        </div>
      </section>
      {/* note section */}
      <section className={classes.noteSectionWrapper}>
        <div className="relative container">
          <DashLoopLine className={classes.dashLoopLine2} />
          <RetroSun className={classes.retroSun3} />
          <BirdTracks className={classes.birdTracks1} />
          <BirdTracks className={classes.birdTracks2} />
          <div className={classes.note}>
            <p className={classes.noteParagraph}>Howdy!</p>
            <p className={classes.noteParagraph}>
              I'm Jake, founder and CEO here at Leadgeek, and I think Amazon
              arbitrage should be uncomplicated.
            </p>
            <p className={classes.noteParagraph}>
              Buy an item low from a retailer like Target, sell it for profit on
              Amazon. Super simple and rewarding. Maybe it's time to refresh
              Seller Central to check for another sale?
            </p>
            <p className={classes.noteParagraph}>
              But somewhere along the way things changed.
            </p>
            <p className={classes.noteParagraph}>
              Arbitrage on Amazon got way too complex. Using software is
              time-consuming and complicated, and sourcing lists are dated and
              unreliable. Either solution feels like an incomplete deal-breaker.
            </p>
            <p className={classes.noteParagraph}>
              The truth is, there's a lot to learn in e-commerce. There are
              countless tools you could use; and with no single point with which
              to control lead generation, attempting to scale gets messy in no
              time flat.
            </p>
            <p className={classes.noteParagraph}>
              To say the least, online arbitrage was in desperate need of a
              dust-off.
            </p>
            <p className={classes.noteParagraph}>
              Enter Leadgeek. Leadgeek believes that simplicity is scalability.
              Having a predictable source for leads with predictable standards
              means that you can grow... predictably.
            </p>
            <p className={classes.noteParagraph}>
              <span className={classes.emphasizedTextLight}>
                Leadgeek is a reset button to make online arbitrage sourcing
                efficient, potent, and fresh by putting you back in control
              </span>
              . So poke around the site and check out how that works.
            </p>
            <p className={classes.noteParagraph}>All the best,</p>
            <div className="text-teal-300">
              <Signature className={classes.signature} />
            </div>
          </div>
        </div>
      </section>
      {/* cta */}
      <Cta
        mainHeader={"Simplify your side-hustle"}
        links={[
          { title: "See how it works", link: "demo" },
          { title: "Tour the features", link: "features" },
          { title: "Sign up now", link: "pricing" },
        ]}
        description={
          "See how Leadgeek works, the 20 features that make it rad, or join today."
        }
      />
    </Layout>
  )
}

const classes = {
  headerWrapper: "relative overflow-hidden bg-splatter",
  testimonialWrapper:
    "hidden md:block md:flex md:items-center md:justify-center mt-4 md:mt-0 mb-4 container",
  heroWrapper: "relative bg-gray-100",
  heroContentWrapper: "relative py-12",
  heroImageWrapper:
    "relative all-center mx-auto max-w-4xl xl:max-w-5xl -mt-24 lg:-mt-40 px-4 lg:px-8",
  filterNoteWrapper:
    "hidden lg:block absolute top-0 right-0 z-20 text-purple-500 transform translate-y-20 -translate-x-8",
  filterNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 text-center transform transition-main -rotate-6 hover:-rotate-3",
  searchNoteWrapper:
    "hidden lg:block absolute top-0 right-0 z-20 transform -translate-y-28 -translate-x-56",
  searchNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 text-center transform transition-main rotate-3 hover:-rotate-2",
  saveNoteWrapper:
    "hidden lg:block absolute top-0 left-0 z-20 transform -translate-y-36 translate-x-64",
  saveNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-center text-teal-300 transform transition-main -rotate-3 hover:rotate-3",
  metricsNoteWrapper:
    "hidden lg:block absolute bottom-0 left-0 z-20 transform -translate-y-48 translate-x-16",
  metricsNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-center text-teal-300 transform transition-main rotate-3 hover:-rotate-3",
  heroImage:
    "min-w-full rounded-lg ring-4 md:ring-6 lg:ring-8 ring-pink-600 ring-opacity-50 shadow-2xl",
  heroHeader: "relative pt-12 lg:pb-12 container md:text-center text-gray-900",
  heroH2: "text-2xl md:text-3xl xl:text-4xl font-black inter",
  heroParagraph: "mt-4 lg:mt-6 mx-auto h4",
  testimonialSectionWrapper:
    "relative pt-16 lg:pt-36 pb-12 md:text-center overflow-hidden bg-splatter",
  testimonialSectionH2:
    "text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white",
  testimonialSectionH3: "mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-900",
  testimonialsWrapper: "mt-12 px-4",
  noteSectionWrapper: "relative pt-8 lg:pt-0 bg-splatter",
  note:
    "relative max-w-xl lg:max-w-2xl mt-32 lg:mt-48 mb-4 py-4 container bg-gray-900 rounded-lg border border-gray-900 shadow-purpleSm text-white leading-relaxed",
  noteParagraph: "mt-4",
  signature: "w-32 lg:w-40 mt-6 pb-6",
  dividerTop: "divider-top text-gray-100",
  dividerBottom: "divider-bottom text-gray-100",
  retroSun1:
    "hidden md:block absolute bottom-0 right-0 w-12 md:w-20 lg:w-28 text-purple-300 transform md:-translate-y-12 lg:-translate-y-32 -translate-x-12 rotate-45",
  retroSun2:
    "absolute bottom-0 left-0 w-12 md:w-16 lg:w-24 text-gray-300 transform -translate-y-12 md:-translate-x-2 lg:-translate-x-4",
  retroSun3:
    "hidden lg:block absolute bottom-0 left-0 w-12 md:w-16 lg:w-24 text-gray-300 transform -translate-y-12 lg:translate-x-48",
  retroSwirl:
    "hidden md:block absolute bottom-1/2 left-0 w-8 lg:w-12 text-purple-300 transform translate-y-24 translate-x-16",
  longArrow1: "h-40 text-gray-500 transform rotate-180",
  longArrow2:
    "absolute left-0 h-36 text-gray-500 transform translate-x-2 rotate-45",
  shortArrow:
    "absolute right-0 h-12 text-gray-500 transform translate-x-6 -rotate-12",
  turnyArrow:
    "absolute left-0 h-10 transform text-gray-500 translate-y-4 translate-x-16",
  dashLoopLine1:
    "absolute top-0 right-1/2 h-36 lg:h-40 text-purple-500 transform -translate-y-40 lg:-translate-y-48 translate-x-24",
  dashLoopLine2:
    "absolute top-0 right-1/2 h-36 lg:h-40 text-purple-500 transform -translate-y-40 lg:-translate-y-48 translate-x-24",
  birdTracks1:
    "hidden md:block absolute bottom-1/2 right-0 w-full max-w-2xl text-gray-400 transform translate-y-24 -translate-x-40",
  birdTracks2:
    "hidden md:block absolute bottom-1/2 left-0 w-full max-w-2xl text-gray-400 transform -translate-y-40 translate-x-40",
  emphasizedText: "emphasized-text lg:text-lg",
  emphasizedTextLight: "emphasized-text-light",
}

const TestimonialShort: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mt-8 md:mt-0 first:ml-0 md:ml-8 bg-white">
      <div className="flex items-center justify-start md:justify-center text-pink-600">
        {Array.apply(null, { length: 5 }).map((s, i) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-sm"
            viewBox="0 0 20 20"
            fill="currentColor"
            key={i}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-800 text-left md:text-center">{`"${text}"`}</p>
    </div>
  )
}

const testimonialsShort = [
  "good value, would recommend",
  "the best site I've found for leads",
  "Leadgeek delivers on their promises",
]

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "leadgeek-app.png" }) {
      childImageSharp {
        fluid(maxWidth: 958, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialKevin: file(relativePath: { eq: "kevin.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialBrian: file(relativePath: { eq: "brian.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialWilliam: file(relativePath: { eq: "william.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialAustin: file(relativePath: { eq: "austin.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialFrank: file(relativePath: { eq: "frank.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
