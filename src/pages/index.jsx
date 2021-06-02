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

import OGimage from "assets/images/og/og-index.jpg"

const IndexPage = ({ data }) => {
  const title = "Leadgeek: Online Arbitrage Sourcing Lists & Software"
  const desc =
    "Trusted by Amazon FBA sellers across the world, Leadgeek offers online arbitrage sourcing lists, software, and tools to put you in control of your selling."
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
              url: OGimage,
              width: 1200,
              height: 630,
              alt: "Leadgeek Arbitrage Sourcing List & Software",
            },
          ],
          type: "website",
        }}
        language="en"
      />
      {/* hero section */}
      <section className="relative overflow-hidden bg-splatter">
        <HeaderWrapper bottomPadding={"pb-24 lg:pb-80"}>
          <section className="md:flex md:items-center md:justify-center mb-4 container">
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
                  flip via Amazon FBA
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
      <div className="relative bg-gray-100">
        <DividerTop className="divider-top text-gray-100" />
        <DividerBottom className="divider-bottom text-gray-100" />
        <section className="py-12 relative">
          <div className="relative -mt-24 lg:-mt-40 mx-auto max-w-4xl xl:max-w-5xl px-4 lg:px-8 all-center">
            <div className="hidden lg:block absolute top-0 right-0 z-20 text-purple-500 transform translate-y-20 -translate-x-8">
              <div className="relative">
                <LongArrow className="h-40 transform rotate-180 text-gray-500" />
                <p className="py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-48 -rotate-6 hover:-rotate-3">
                  Filter leads on the fly
                </p>
              </div>
            </div>
            <div className="hidden lg:block absolute top-0 right-0 z-20 transform -translate-y-28 -translate-x-56">
              <div className="relative">
                <p className="py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-48 rotate-3 hover:-rotate-2">
                  Wicked-fast search by keyword
                </p>
                <ShortArrow className="absolute right-0 h-12 transform text-gray-500 translate-x-6 -rotate-12" />
              </div>
            </div>
            <div className="hidden lg:block absolute top-0 left-0 z-20 transform -translate-y-36 translate-x-64">
              <div className="relative">
                <p className="py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-48 -rotate-3 hover:rotate-3">
                  Save leads you like or archive them for later
                </p>
                <LongArrow className="absolute left-0 h-36 transform text-gray-500 translate-x-2 rotate-45" />
              </div>
            </div>
            <div className="hidden lg:block absolute bottom-0 left-0 z-20 transform -translate-y-48 translate-x-16">
              <div className="relative">
                <p className="py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-48 rotate-3 hover:-rotate-3">
                  See all important metrics at a glance
                </p>
                <TurnyFat className="absolute left-0 h-10 transform text-gray-500 translate-y-4 translate-x-16" />
              </div>
            </div>
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              alt="Leadgeek app feed"
              className="min-w-full rounded-lg stack-sm border border-gray-900"
            />
          </div>
          <header className="pt-12 lg:pb-12 container md:text-center text-gray-700">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter">
              Don't dig through information - surface it.
            </h2>
            <p className="mt-4 lg:mt-6 mx-auto h4">
              <span className="font-semibold">Before using Leadgeek</span>: Your
              process to find new arbitrage leads is disorganized,
              time-consuming, and inconsistent. You feel like time and resources
              are wasted when you can't find leads that meet your criteria.
            </p>
            <p className="mt-4 lg:mt-6 mx-auto h4">
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
      </div>
      <section className="relative py-12 lg:pt-28 lg:pb-12 md:text-center overflow-hidden bg-splatter">
        <div className="container">
          <header>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white">
              People who love clarity, love Leadgeek.
            </h2>
            <h3 className="mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-700">
              Entrepreneurs, side-hustlers, newbies, and pro sellers all{" "}
              <span className={classes.emphasizedText}>
                join Leadgeek to fundamentally improve the arbitrage sourcing
                process
              </span>
              .
            </h3>
          </header>
          <div className="mt-12 px-4">
            {testimonialsFull.map((testimonial, i) => (
              <TestimonialFull
                key={i}
                text={testimonial.text}
                source={testimonial.source}
                desc={testimonial.desc}
                rotate={testimonial.rotate}
              />
            ))}
          </div>
        </div>
      </section>
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
  emphasizedText: "emphasized-text lg:text-lg",
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

const TestimonialFull = ({ text, source, desc, rotate }) => {
  return (
    <article
      className={`relative mx-auto md:max-w-xl lg:max-w-2xl mt-12 lg:mt-24 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-dark transform ${rotate}`}
    >
      <div className="absolute top-0 left-0 font-bold text-5xl svg-shadow-purple">
        <Quote className="h-8 w-8 text-gray-500 transform rotate-180 -translate-y-4 -translate-x-6" />
      </div>
      <div className="absolute bottom-0 right-0 font-bold text-5xl svg-shadow-purple">
        <Quote className="h-8 w-8 text-gray-500 transform -translate-y-2 translate-x-6" />
      </div>
      <blockquote className="md:text-lg leading-relaxed text-gray-800">
        {text}
      </blockquote>
      <div className="mt-4 all-center">
        <cite className="text-sm font-semibold inter">{source}</cite>
        <span className="mx-2 font-semibold text-purple-500">/</span>
        <p className="font-semibold text-xs lg:text-sm text-gray-600 inter">{`${desc} FBA seller`}</p>
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
    rotate: "rotate-2 hover:-rotate-2",
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
    rotate: "hover:-rotate-1",
  },
  {
    text: (
      <p>
        <span className={classes.emphasizedText}>
          It looks FANTASTIC on my first try!
        </span>{" "}
        Great work. I look forward to trying it more on my next lead list.
      </p>
    ),
    source: "Yucheng",
    desc: "International",
    image: null,
    rotate: "rotate-2 hover:rotate-3",
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
    rotate: "rotate-1 hover:-rotate-1",
  },
]

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "leadgeek-app.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 4096, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
