import React from "react"
import { graphql } from "gatsby"
import { GatsbyImageFluidProps } from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"
import TestimonialFull from "@components/utils/TestimonialFull"

import OgImage from "@assets/images/og/og-stories.jpg"

interface StoriesPageProps {
  data: {
    testimonialAustin: GatsbyImageFluidProps
    testimonialBrian: GatsbyImageFluidProps
    testimonialCharles: GatsbyImageFluidProps
    testimonialDail: GatsbyImageFluidProps
    testimonialDimitry: GatsbyImageFluidProps
    testimonialFrank: GatsbyImageFluidProps
    testimonialKevin: GatsbyImageFluidProps
    testimonialWilliam: GatsbyImageFluidProps
    testimonialYucheng: GatsbyImageFluidProps
  }
  location: Location
}

const StoriesPage: React.FC<StoriesPageProps> = ({ data, location }) => {
  const title = "Seller Stories"
  const description =
    "Read how Leadgeek helped the arbitrage sourcing for real Amazon sellers around the world."
  const alt = "Leadgeek Seller Stories"

  const testimonialsFull = [
    {
      size: null,
      margin: null,
      position: null,
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
      description: "New",
      rotate: "rotate-2",
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
      rotate: "-rotate-1",
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
          <span className={classes.emphasizedText}>
            I've been very satisfied so far
          </span>
          !
        </p>
      ),
      image: data.testimonialDail.childImageSharp.fluid,
      source: "Dail",
      description: "New",
      rotate: "",
    },
    {
      size: null,
      margin: null,
      position: null,
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
      description: "International",
      rotate: "",
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
    {
      size: null,
      margin: null,
      position: null,
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
      description: "Intermediate",
      rotate: "-rotate-1",
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
          bottomPadding={`pb-0`}
          styles={"flex flex-col-reverse md:flex-col"}
        >
          <PrimaryHeader
            title={`Seller stories`}
            description={
              <h2>
                Have your own story to share about Leadgeek? It would 100% make
                our day if you would let us know about it.
              </h2>
            }
            nav={true}
            goHome={false}
            linkOne={null}
            linkOneText={`Shoot us a message`}
            linkTwo={null}
            linkTwoText={null}
            outsideLink={`mailto:support@leadgeek.io?subject=Here's my Leadgeek experience...`}
            svgOne={null}
            svgTwo={null}
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

export const query = graphql`
  query {
    testimonialCharles: file(relativePath: { eq: "charles.png" }) {
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
    testimonialKevin: file(relativePath: { eq: "kevin.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    testimonialDail: file(relativePath: { eq: "dail.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    testimonialYucheng: file(relativePath: { eq: "yucheng.png" }) {
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
    testimonialDimitry: file(relativePath: { eq: "dimitry.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default StoriesPage
