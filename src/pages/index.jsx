import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "../components/PrimaryHeader"
import CTA from "../components/Cta"

import Dotted from "../assets/svgs/dotted.svg"
import Squiggles from "../assets/svgs/squiggles.svg"
import HalfDotted from "../assets/svgs/half-dotted.svg"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Online Arbitrage Leads & Sourcing for Amazon Sellers"
        description="Receive potent online arbitrage leads every weekday with LeadGeek. Start, grow, and mature your Amazon FBA business with premium arbitrage leads."
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
            subHeader={`Turn "I don't know what to sell" into "I have too much to buy": Receive a daily list of the best online arbitrage products to sell via Amazon FBA.`}
            nav
            linkOne={`how-it-works`}
            linkOneText={`See how it works`}
            linkTwo={`signup`}
            linkTwoText={`Already know you want to join? Sign up now.`}
            svgOne={
              <div className="absolute top-0 left-0 z-0 transform translate-y-10 translate-x-16">
                <Squiggles className="hidden md:inline-block w-64 text-gray-200" />
              </div>
            }
            svgTwo={
              <div className="absolute bottom-0 right-0 z-0 transform rotate-90 -translate-y-6">
                <HalfDotted className="hidden md:inline-block w-48 text-purple-100" />
              </div>
            }
          />
        </HeaderWrapper>
      </section>
      {/* testimonial section */}

      <div className="mt-20 py-12 bg-gray-100">
        <section className="">
          <div className="all-center">
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              className="-mt-32 w-full max-w-5xl rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>

      <section className="py-12 container md:text-center">
        <header>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900">
            People who love simplicity, love LeadGeek
          </h2>
          <h3 className="mt-4 lg:mt-6 mx-auto h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            provident sunt esse debitis accusamus optio aliquid est enim fuga
            id?
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
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="See pricing"
        link="demo"
        linkText="Watch a demo"
        linkStyles="text-purple-100 hover:text-purple-200"
        svgOne={
          <div className="absolute top-0 left-0 z-0 transform -translate-y-32 xl:-translate-y-40 xl:-translate-x-24">
            <Dotted className="hidden md:inline-block w-24 text-purple-400" />
          </div>
        }
      />
    </Layout>
  )
}

const classes = {
  emphasizedText: "py-0.5 px-1 rounded-md bg-gray-900 text-white text-lg",
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
      <blockquote className="mx-auto md:max-w-xl lg:max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed font-semibold text-gray-800">
        {text}
      </blockquote>
      <div className="mt-4 all-center">
        <cite className="text-sm font-semibold">{source}</cite>
        <span className="mx-2 font-semibold text-purple-500">/</span>
        <p className="font-semibold text-sm text-gray-600">{`${desc} FBA seller`}</p>
      </div>
    </article>
  )
}

const testimonialsShort = [
  "good value, would recommend",
  "the best site I've found for leads",
  "LeadGeek delivers on their promises",
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
        "LeadGeek delivers on their promises in the promo video on time every
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
          LeadGeek will pay off in a week
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
        fluid(maxWidth: 2048, quality: 90) {
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
