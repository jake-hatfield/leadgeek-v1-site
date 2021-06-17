import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

import Quote from "assets/svgs/quote.svg"

import OgImage from "assets/images/og/og-stories.jpg"

const IndexPage = ({ data }) => {
  const title = "Customer Stories"
  const desc =
    "Read how Leadgeek helped the arbitrage sourcing for real Amazon sellers around the world."
  const alt = "Leadgeek Customer Stories"

  const testimonialsFull = [
    {
      text: (
        <p>
          The very first thing I bought as an FBA seller was from your list
          about 33 days ago. I've sold 5 units of that item so far today (it's
          only 3:50 pm CST) and{" "}
          <span className={classes.emphasizedText}>it's my first $100 day</span>
          . Profit margin is roughly 25% and ROI more than 2x that. Thank you
          for helping me get started.
        </p>
      ),
      image: data.testimonialCharles.childImageSharp.fluid,
      source: "Charles",
      desc: "New",
      rotate: "rotate-2 hover:rotate-3",
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
      image: data.testimonialBrian.childImageSharp.fluid,
      source: "Brian",
      desc: "Intermediate",
      rotate: "-rotate-1 hover:rotate-2",
    },
    {
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
      desc: "Intermediate",
      rotate: "rotate-1 hover:-rotate-2",
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
      image: data.testimonialKevin.childImageSharp.fluid,
      source: "Kevin",
      desc: "New",
      rotate: "-rotate-2 hover:-rotate-3",
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
      image: data.testimonialDail.childImageSharp.fluid,
      source: "Dail",
      desc: "New",
      rotate: "hover:rotate-3",
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
      image: data.testimonialYucheng.childImageSharp.fluid,
      source: "Yucheng",
      desc: "International",
      rotate: "-rotate-1 hover:rotate-3",
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
      image: data.testimonialAustin.childImageSharp.fluid,
      source: "Austin",
      desc: "New",
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
      image: data.testimonialFrank.childImageSharp.fluid,
      source: "Frank",
      desc: "International",
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
      image: data.testimonialDimitry.childImageSharp.fluid,
      source: "Dimitry",
      desc: "Intermediate",
      rotate: "-rotate-1 hover:-rotate-2",
    },
  ]

  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/stories/",
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
          classes={"flex flex-col-reverse md:flex-col"}
          bottomPadding={`pb-0`}
        >
          <PrimaryHeader
            title={`Customer stories`}
            desc={
              <p>
                Have your own story to share? It would 100% make our day if you
                shared it with us.
              </p>
            }
            nav
            outsideLink={`mailto:support@leadgeek.io?subject=Here's my Leadgeek experience...`}
            linkOneText={`Shoot us a message`}
          />
        </HeaderWrapper>
      </section>
      {/* testimonials section */}
      <section className={classes.testimonialSectionWrapper}>
        <div className="container">
          <div className={classes.testimonialsWrapper}>
            {testimonialsFull.map((testimonial, i) => (
              <TestimonialFull
                key={i}
                text={testimonial.text}
                image={testimonial.image}
                source={testimonial.source}
                desc={testimonial.desc}
                rotate={testimonial.rotate}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

const classes = {
  headerWrapper: "relative overflow-hidden bg-splatter",
  testimonialSectionWrapper:
    "relative pb-24 md:text-center overflow-hidden bg-splatter",
  testimonialsWrapper: "mt-12 px-4",
  emphasizedText: "emphasized-text lg:text-lg",
  emphasizedTextLight: "emphasized-text-light",
}
const TestimonialFull = ({
  text,
  image,
  source,
  desc,
  rotate,
  position,
  bgSvg,
}) => {
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
          <div className="mt-4 md:flex md:items-center md:justify-center">
            <div className="flex items-center justify-center">
              <Img
                fluid={image}
                alt={`${source}'s testimonial`}
                className="w-12 rounded-full shadow-tealSm border border-gray-900 bg-gray-900 transform -rotate-6"
              />
              <cite className="ml-4 text-sm font-semibold inter text-gray-900">
                {source}
              </cite>
            </div>
            <span className="hidden md:block mx-2 font-semibold text-purple-500">
              /
            </span>
            <p className="mt-2 md:mt-0 font-semibold text-xs lg:text-sm text-gray-600 inter">{`${desc} FBA seller`}</p>
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

export const query = graphql`
  query {
    testimonialCharles: file(relativePath: { eq: "charles.png" }) {
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
    testimonialWilliam: file(relativePath: { eq: "william.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialKevin: file(relativePath: { eq: "kevin.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    testimonialDail: file(relativePath: { eq: "dail.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialYucheng: file(relativePath: { eq: "yucheng.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialAustin: file(relativePath: { eq: "austin.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
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
    testimonialDimitry: file(relativePath: { eq: "dimitry.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
