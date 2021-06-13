import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "../components/PrimaryHeader"
import CTA from "../components/Cta"

import LongArrow from "assets/svgs/arrow-straight-solid.svg"
import ShortArrow from "assets/svgs/arrow-short-fat.svg"
import TurnyFat from "assets/svgs/turny-fat.svg"
import Quote from "assets/svgs/quote.svg"
import DividerTop from "assets/svgs/section-divider-top.svg"
import DividerBottom from "assets/svgs/section-divider-bottom.svg"
import RetroSun from "assets/svgs/retro-sun.svg"
import RetroSwirl from "assets/svgs/retro-swirl.svg"
import BirdTracks from "assets/svgs/bird-tracks.svg"
import Signature from "assets/svgs/signature.svg"
import DashLoopLine from "assets/svgs/dash-loop-line.svg"

import OgImage from "assets/images/og/og-index.jpg"

const IndexPage = ({ data }) => {
  const title = "Leadgeek: Online Arbitrage Sourcing Lists & Software"
  const desc =
    "Trusted by Amazon FBA sellers across the world, Leadgeek offers online arbitrage sourcing lists, software, and tools to put you in control of your selling."
  const alt = "Leadgeek Arbitrage Sourcing List & Software"
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
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
          bottomPadding={"pb-24 lg:pb-80"}
          classes={"flex flex-col-reverse md:flex-col"}
        >
          <section className={classes.testimonialWrapper}>
            {testimonialsShort.map((testimonial, i) => (
              <TestimonialShort key={i} text={testimonial} />
            ))}
          </section>
          <PrimaryHeader
            title={`Online arbitrage sourcing at its best.`}
            desc={
              <p>
                Turn "I don't know what to sell" into "I have too much to buy:"
                <span className="font-bold">
                  {" "}
                  Receive a daily list of the best online arbitrage products to
                  flip for profit on Amazon.
                </span>
                .
              </p>
            }
            nav
            linkOne={`how-it-works`}
            linkOneText={`See how it works`}
            linkTwo={`pricing`}
            linkTwoText={`Already know you want to join? Sign up now.`}
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
                <p className={classes.filterNote}>Filter leads on the fly</p>
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
              Your side-hustle is <i>finally</i> manageable.
            </h2>
            <p className={classes.heroParagraph}>
              <span className="font-semibold">Before using Leadgeek</span>: Your
              process to find new arbitrage leads is disorganized,
              time-consuming, and inconsistent. You feel like time and resources
              are wasted when you can't find items to sell that meet your
              criteria.
            </p>
            <p className={classes.heroParagraph}>
              <span className="font-semibold">After using Leadgeek</span>: You
              know exactly the list quality to expect every day. Your business
              has a predictable growth system in place, there are fewer
              headaches, and you can focus on getting more important things
              done.
            </p>
            <div className="mt-6 text-center">
              <Link to={"/features/"} className="secondary-link">
                See how Leadgeek is built different
              </Link>
            </div>
          </header>
        </section>
      </section>
      {/* testimonials section */}
      <section className={classes.testimonialSectionWrapper}>
        <DashLoopLine className={classes.dashLoopLine1} />
        <div className="container">
          <header>
            <h2 className={classes.testimonialSectionH2}>
              People who love clarity, love Leadgeek.
            </h2>
            <h3 className={classes.testimonialSectionH3}>
              Entrepreneurs, newbies, international sellers, and pros all{" "}
              <span className={classes.emphasizedText}>
                join Leadgeek to fundamentally improve the arbitrage sourcing
                process
              </span>
              . See what members had to say...
            </h3>
          </header>
          <div className={classes.testimonialsWrapper}>
            {testimonialsFull.map((testimonial, i) => (
              <TestimonialFull
                key={i}
                text={testimonial.text}
                source={testimonial.source}
                desc={testimonial.desc}
                rotate={testimonial.rotate}
                position={testimonial.position}
              />
            ))}
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
              I'm Jake, founder and CEO here at Leadgeek.
            </p>
            <p className={classes.noteParagraph}>
              Raise your hand if you think selling on Amazon shouldn't be that
              complicated.
            </p>
            <p className={classes.noteParagraph}>
              That's 1, 2, 3, 4, 73, 116... yep - just about everyone.
            </p>
            <p className={classes.noteParagraph}>
              Buy an item low from a retailer like Target, sell it for profit on
              Amazon. The basics of arbitrage sound pretty easy, right? It's a
              business model that's stood the test of time, and when done well -
              is actually really rewarding.
            </p>
            <p className={classes.noteParagraph}>
              Discovering something that's mis-valued and selling it in a
              different marketplace for a profit can be truly enjoyable. Sure,
              you're making money, but there's a
              striking-gold-type-of-fulfillment to it. Maybe it's time to
              refresh Seller Central to check for another sale?
            </p>
            <p className={classes.noteParagraph}>
              But somewhere along the way things changed.
            </p>
            <p className={classes.noteParagraph}>
              Amazon FBA got way too complex. Using software is time-consuming
              and complicated, and sourcing lists are dated and unreliable.
              Either solution feels like an incomplete deal-breaker.
            </p>
            <p className={classes.noteParagraph}>
              The truth is, there's a lot to learn in e-commerce. There are
              countless tools you could use; and with no single point with which
              to control lead generation, attempting to scale gets messy in no
              time flat.
            </p>
            <p className={classes.noteParagraph}>
              To say the least, Amazon arbitrage was in desperate need of a
              dust-off.
            </p>
            <p className={classes.noteParagraph}>
              Enter Leadgeek. Leadgeek believes that simplicty is scalability.
              Having a predictable source for leads with predictable standards
              means that you can grow... predictably. And with a singular
              service, it costs just a fraction of the price if you were to do
              it all on your own.
            </p>
            <p className={classes.noteParagraph}>
              With lots of input from members, I create software that I'd want
              myself - software that has a premium feel and is a pleasure to
              use, but most of all software that's tailored to <i>you</i>.
            </p>
            <p className={classes.noteParagraph}>
              <span className={classes.emphasizedTextLight}>
                Leadgeek is a reset button to make arbitrage efficient, potent,
                and fresh - putting you back in control of your business
              </span>
              . So poke around the site and check out how that works.
            </p>
            <p className={classes.noteParagraph}>All the best,</p>
            <div className="text-purple-300">
              <Signature className={classes.signature} />
            </div>
          </div>
        </div>
      </section>
      {/* cta */}
      <CTA
        links={[
          { title: "See how it works", link: "how-it-works" },
          { title: "Tour the features", link: "features" },
          { title: "Sign up now", link: "pricing" },
        ]}
        desc={
          <p>
            See how Leadgeek works, the 20 features that make it rad, or join
            today.
          </p>
        }
      />
    </Layout>
  )
}

const classes = {
  headerWrapper: "relative overflow-hidden bg-splatter",
  testimonialWrapper:
    "md:flex md:items-center md:justify-center mt-4 md:mt-0 mb-4 container",
  heroWrapper: "relative bg-purple-100",
  heroContentWrapper: "relative py-12",
  heroImageWrapper:
    "relative all-center mx-auto max-w-4xl xl:max-w-5xl -mt-24 lg:-mt-40 px-4 lg:px-8",
  filterNoteWrapper:
    "hidden lg:block absolute top-0 right-0 z-20 text-purple-500 transform translate-y-20 -translate-x-8",
  filterNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 shadow-tealMd text-teal-300 text-center transform transition-main -rotate-6 hover:-rotate-3",
  searchNoteWrapper:
    "hidden lg:block absolute top-0 right-0 z-20 transform -translate-y-28 -translate-x-56",
  searchNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 shadow-tealMd text-teal-300 text-center transform transition-main rotate-3 hover:-rotate-2",
  saveNoteWrapper:
    "hidden lg:block absolute top-0 left-0 z-20 transform -translate-y-36 translate-x-64",
  saveNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 shadow-tealMd text-center text-teal-300 transform transition-main -rotate-3 hover:rotate-3",
  metricsNoteWrapper:
    "hidden lg:block absolute bottom-0 left-0 z-20 transform -translate-y-48 translate-x-16",
  metricsNote:
    "w-48 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 shadow-tealMd text-center text-teal-300 transform transition-main rotate-3 hover:-rotate-3",
  heroImage: "min-w-full rounded-lg stack-sm border border-gray-900",
  heroHeader: "pt-12 lg:pb-12 container md:text-center text-gray-900",
  heroH2: "text-2xl md:text-3xl xl:text-4xl font-black inter",
  heroParagraph: "mt-4 lg:mt-6 mx-auto h4",
  testimonialSectionWrapper:
    "relative pt-28 pb-20 md:text-center overflow-hidden bg-splatter",
  testimonialSectionH2:
    "text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white",
  testimonialSectionH3: "mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-700",
  testimonialsWrapper: "mt-12 px-4",
  noteSectionWrapper: "relative pt-8 lg:pt-0 text-gray-900 bg-splatter",
  note:
    "relative max-w-2xl mt-32 lg:mt-48 mb-4 py-4 container bg-gray-900 rounded-lg border border-gray-900 stack-sm text-white leading-relaxed",
  noteParagraph: "mt-4",
  signature: "w-32 lg:w-40 mt-6 pb-6",
  dividerTop: "divider-top text-purple-100",
  dividerBottom: "divider-bottom text-purple-100",
  retroSun1:
    "hidden md:block absolute bottom-0 right-0 w-12 md:w-20 lg:w-28 text-purple-300 transform md:-translate-y-12 lg:-translate-y-32 -translate-x-12 rotate-45",
  retroSun2:
    "absolute bottom-0 left-0 w-12 md:w-16 lg:w-24 text-purple-300 transform -translate-y-12 md:-translate-x-2 lg:-translate-x-4",
  retroSun3:
    "hidden lg:block absolute bottom-0 left-0 w-12 md:w-16 lg:w-24 text-gray-400 transform -translate-y-12 lg:translate-x-48",
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

const TestimonialShort = ({ text }) => {
  return (
    <div className="mt-4 md:mt-0 first:ml-0 md:ml-8 bg-white">
      <div className="flex items-center justify-start md:justify-center text-purple-500">
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
      <p className="text-sm text-gray-900 text-left md:text-center">{`"${text}"`}</p>
    </div>
  )
}

const TestimonialFull = ({ text, source, desc, rotate, position, bgSvg }) => {
  return (
    <article
      className={`relative mt-16 lg:mt-24 md:flex justify-center text-center transform ${position}`}
    >
      <div
        className={`relative z-40 w-full md:max-w-xl lg:max-w-xl transform ${rotate} transition-main`}
      >
        <div className="hidden md:block absolute bottom-1/2 w-full max-w-2xl negative-z">
          {bgSvg}
        </div>
        <div className="relative py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 shadow-dark">
          <blockquote className="md:text-lg leading-relaxed text-gray-800">
            {text}
          </blockquote>
          <div className="mt-4 all-center">
            <cite className="text-sm font-semibold inter text-gray-900">
              {source}
            </cite>
            <span className="mx-2 font-semibold text-purple-500">/</span>
            <p className="font-semibold text-xs lg:text-sm text-gray-600 inter">{`${desc} FBA seller`}</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 font-bold text-5xl svg-shadow-purple">
          <Quote className="h-8 w-8 text-gray-900 transform rotate-180 -translate-x-6" />
        </div>
        <div className="absolute bottom-0 right-0 font-bold text-5xl svg-shadow-purple">
          <Quote className="h-8 w-8 text-gray-900 transform -translate-y-2 translate-x-6" />
        </div>
      </div>
    </article>
  )
}

const testimonialsShort = [
  "good value, would recommend",
  "the best site I've found for leads",
  "Leadgeek delivers on their promises",
]

const testimonialsFull = [
  {
    text: (
      <p>
        The very first thing I bought as an FBA seller was from your list about
        33 days ago. I've sold 5 units of that item so far today (it's only 3:50
        pm CST) and{" "}
        <span className={classes.emphasizedText}>it's my first $100 day</span>.
        Profit margin is roughly 25% and ROI more than 2x that. Thank you for
        helping me get started.
      </p>
    ),
    source: "Charles",
    desc: "New",
    image: null,
    rotate: "rotate-2 hover:rotate-3",
    position: "lg:-translate-x-6",
  },
  {
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
    source: "Brian",
    desc: "Intermediate",
    image: null,
    rotate: "-rotate-1 hover:rotate-2",
    position: "justify-start lg:translate-x-16",
  },
  {
    text: (
      <p>
        Leadgeek delivers on their promises in the promo video on time every day
        with solid ROI leads.{" "}
        <span className={classes.emphasizedText}>
          Would definitely recommend giving them a shot if you want to take the
          guess work out of sourcing for FBA
        </span>
        .
      </p>
    ),
    source: "William",
    desc: "Intermediate",
    image: null,
    rotate: "rotate-2 hover:-rotate-3",
    position: "lg:-translate-x-2",
  },
  {
    text: (
      <p>
        I love the leads, they're very good.{" "}
        <span className={classes.emphasizedText}>
          Leadgeek will pay off in a week
        </span>
        ... definitely the best site I've found for leads.
      </p>
    ),
    source: "Kevin",
    desc: "New",
    image: null,
    rotate: "-rotate-2 hover:-rotate-3",
    position: "justify-start lg:translate-x-28",
  },
  {
    text: (
      <p>
        <span className={classes.emphasizedText}>
          I've been very satisfied so far
        </span>
        !
      </p>
    ),
    source: "Dail",
    desc: "New",
    image: null,
    rotate: "hover:rotate-3",
    position: "lg:translate-x-8",
  },
  {
    text: (
      <p>
        The software is awesome...{" "}
        <span className={classes.emphasizedText}>
          It looks FANTASTIC on my first try
        </span>
        ! Great work.
      </p>
    ),
    source: "Yucheng",
    desc: "International",
    image: null,
    rotate: "rotate-2 hover:rotate-3",
    position: "lg:-translate-x-12",
  },
  {
    text: (
      <p>
        <span className={classes.emphasizedText}>
          5 stars for you guys making this super simple
        </span>
        .
      </p>
    ),
    source: "Austin",
    desc: "New",
    image: null,
    rotate: "-rotate-1 hover:rotate-2",
    position: "lg:translate-x-16",
  },
  {
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
    source: "Frank",
    desc: "International",
    image: null,
    rotate: "rotate-2 hover:-rotate-1",
    position: "lg:-translate-x-8",
  },
  {
    text: (
      <p>
        <span className={classes.emphasizedText}>
          I really like the [software] setup
        </span>
        .
      </p>
    ),
    source: "Dimitry",
    desc: "Intermediate",
    image: null,
    rotate: "-rotate-2 hover:-rotate-1",
    position: "",
  },
]

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
  }
`

export default IndexPage
