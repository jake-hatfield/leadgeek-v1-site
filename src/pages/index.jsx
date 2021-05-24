import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "../components/PrimaryHeader"
import CTA from "../components/Cta"

import SearchAnnotation from "assets/svgs/search-annotation.svg"
import FilterAnnotation from "assets/svgs/filter-annotation.svg"
import MetricsAnnotation from "assets/svgs/important-metrics-annotation.svg"
import LikeArchiveAnnotation from "assets/svgs/like-archive-annotation.svg"

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
          <section className="all-center mb-4 container">
            {testimonialsShort.map(testimonial => (
              <TestimonialShort text={testimonial} />
            ))}
          </section>
          <PrimaryHeader
            header={`Online arbitrage sourcing at its best.`}
            subHeader={`Turn "I don't know what to sell" into "I have too much to buy": Receive a daily list of the best online arbitrage products to flip via Amazon FBA.`}
            nav
            linkOne={`how-it-works`}
            linkOneText={`See how it works`}
            linkTwo={`signup`}
            linkTwoText={`Already know you want to join? Sign up now.`}
          />
        </HeaderWrapper>
      </section>
      {/* testimonial section */}

      <div className="relative lg:mt-48 xl:mt-64 py-12 bg-gray-100">
        <div className="text-gray-100">
          {/* <div className="section-divider-top" /> */}
        </div>
        <section className="relative">
          <div className="relative -mt-40 mx-auto max-w-4xl xl:max-w-5xl px-8 all-center">
            <FilterAnnotation className="hidden lg:block absolute top-0 right-0 z-20 lg:w-52 xl:w-full xl:max-w-sm text-purple-500 transform translate-y-16 translate-x-2 xl:translate-x-40" />
            <SearchAnnotation className="hidden lg:block absolute top-0 right-0 z-20 lg:w-28 xl:w-48 text-purple-500 transform -translate-y-20 xl:-translate-y-32 -translate-x-28" />
            <LikeArchiveAnnotation className="hidden lg:block absolute top-0 left-0 z-20 lg:w-40 xl:w-64 text-purple-500 transform -translate-y-20 xl:-translate-y-28 translate-x-40" />
            <MetricsAnnotation className="hidden xl:block absolute bottom-0 left-0 z-20 md:w-36 lg:w-72 xl:w-full max-w-sm text-purple-500 transform -translate-y-20 lg:-translate-y-32 -translate-x-64" />
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              className="w-full rounded-lg border border-gray-200 shadow-lg"
            />
          </div>
          <header className="pt-12 md:text-center text-gray-700">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900">
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
              know exactly the quality of leads to expect every day. Your
              business has a predictable growth system in place, there are fewer
              headaches, and you can focus on getting more important things
              done.
            </p>
            <div className="mt-6">
              <Link to={"/features"} className="secondary-link">
                See how Leadgeek is built different
              </Link>
            </div>
          </header>
        </section>
      </div>
      <section className="py-12 container md:text-center">
        <header>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900">
            People who love clarity, love Leadgeek.
          </h2>
          <h3 className="mt-4 lg:mt-6 mx-auto h4 text-gray-700">
            Entrepreneurs, side-hustlers, newbies, and pro sellers have all
            joined Leadgeek to{" "}
            <span className={classes.emphasizedText}>
              fundamentally improve their arbitrage sourcing process
            </span>
            .
          </h3>
        </header>
        <div className="mt-8">
          {testimonialsFull.map(testimonial => (
            <TestimonialFull
              text={testimonial.text}
              source={testimonial.source}
              desc={testimonial.desc}
            />
          ))}
        </div>
      </section>
      <CTA
        links={[
          { title: "See how it works", link: "how-it-works" },
          { title: "Tour the features", link: "features" },
          { title: "Sign up now", link: "signup" },
        ]}
      />
    </Layout>
  )
}

const classes = {
  emphasizedText: "emphasized-text text-lg",
}

const TestimonialShort = ({ text }) => {
  return (
    <div className="first:ml-0 ml-8">
      <div className="all-center text-purple-500">
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
      <p className="text-sm text-gray-600">{`"${text}"`}</p>
    </div>
  )
}

const TestimonialFull = ({ text, source, desc }) => {
  return (
    <article className="mt-8">
      <blockquote className="mx-auto md:max-w-xl lg:max-w-2xl md:text-lg lg:text-xl leading-relaxed text-gray-800">
        {text}
      </blockquote>
      <div className="mt-4 all-center">
        <cite className="text-sm font-semibold inter">{source}</cite>
        <span className="mx-2 font-semibold text-purple-500">/</span>
        <p className="font-semibold text-sm text-gray-600 inter">{`${desc} FBA seller`}</p>
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
        "The very first thing I bought as an FBA seller was from your list about
        33 days ago. I've sold 5 units of that item so far today (it's only 3:50
        pm CST) and{" "}
        <span className={classes.emphasizedText}>it's my first $100 day</span>.
        Profit margin is roughly 25% and ROI more than 2x that. Thank you for
        helping me get started."
      </p>
    ),
    source: "Charles",
    desc: "New",
    image: null,
  },
  {
    text: (
      <p>
        "Delivered their lists as promised daily and always had at least a few
        items I was interested in.{" "}
        <span className={classes.emphasizedText}>
          Good value, would recommend
        </span>
        ."
      </p>
    ),
    source: "Brian",
    desc: "Intermediate",
    image: null,
  },
  {
    text: (
      <p>
        "Leadgeek delivers on their promises in the promo video on time every
        day with solid ROI leads.{" "}
        <span className={classes.emphasizedText}>
          Would definitely recommend giving them a shot if you want to take the
          guess work out of sourcing for FBA
        </span>
        ."
      </p>
    ),
    source: "William",
    desc: "Intermediate",
    image: null,
  },
  {
    text: (
      <p>
        "I love the leads, they're very good.{" "}
        <span className={classes.emphasizedText}>
          Leadgeek will pay off in a week
        </span>
        ... definitely the best site I've found for leads."
      </p>
    ),
    source: "Kevin",
    desc: "New",
    image: null,
  },
  {
    text: (
      <p>
        "
        <span className={classes.emphasizedText}>
          It looks FANTASTIC on my first try!
        </span>{" "}
        Great work, Jake. I look forward to trying it more on my next lead
        list."
      </p>
    ),
    source: "Yucheng",
    desc: "International",
    image: null,
  },
  {
    text: (
      <p>
        "
        <span className={classes.emphasizedText}>
          5 stars for you guys making this super simple
        </span>
        ."
      </p>
    ),
    source: "Austin",
    desc: "New",
    image: null,
  },
  {
    text: (
      <p>
        "I want to thank you for the effort you make to find products with such
        good quality.{" "}
        <span className={classes.emphasizedText}>
          It has been the best decision I have made in acquiring your list
        </span>
        . Thank you!"
      </p>
    ),
    source: "Frank",
    desc: "International",
    image: null,
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
