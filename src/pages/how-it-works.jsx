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
        description="Receive potent online arbitrage leads every weekday with leadgeek. Start, grow, and mature your Amazon FBA business with premium arbitrage leads."
      />
      {/* hero section */}
      <section className="relative">
        <HeaderWrapper>
          <PrimaryHeader
            header={`The uncomplicated arbitrage software.`}
            subHeader={`Leadgeek is a tool that makes FBA sourcing productive, organized, and clear. People that use leadgeek are more efficient at finding arbitrage leads day in and day out. Here's how the magic happens.`}
          />
        </HeaderWrapper>
      </section>
      {/* testimonial section */}
      <div className="relative lg:mt-32 py-12 bg-gray-100">
        <div className="text-gray-100">
          {/* <div className="section-divider-top" /> */}
        </div>
        <section className="relative">
          <div className="relative -mt-40 mx-auto max-w-4xl xl:max-w-5xl px-8 all-center">
            <Img
              fluid={data.heroImage.childImageSharp.fluid}
              className="w-full rounded-lg border border-gray-200 shadow-lg"
            />
          </div>
          <header className="pt-12 md:text-center">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900">
              Don't dig through information - surface it.
            </h2>
            <p className="mt-4 lg:mt-6 mx-auto h3">
              <span className="font-semibold">Before using leadgeek</span>: Your
              process to find new arbitrage leads is disorganized,
              time-consuming, and inconsistent. You feel like time and resources
              are wasted when you can't find leads that meet your criteria.
            </p>
            <p className="mt-4 lg:mt-6 mx-auto h3">
              <span className="font-semibold">After using leadgeek</span>: You
              know exactly the quality of leads to expect every day. Your
              business has a predictable growth system in place, there are fewer
              headaches, and you can focus on getting more important things
              done.
            </p>
            <div className="mt-6">
              <Link to={"/features"} className="secondary-link">
                See how leadgeek is built different
              </Link>
            </div>
          </header>
        </section>
      </div>

      <section className="py-12 container md:text-center">
        <header>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900">
            People who love clarity, love leadgeek.
          </h2>
          <h3 className="mt-4 lg:mt-6 mx-auto h3">
            Entrepreneurs, side-hustlers, newbies, and pro sellers have all
            joined leadgeek to{" "}
            <span className={classes.emphasizedText}>
              fundamentally improve their arbitrage sourcing process
            </span>
            .
          </h3>
        </header>
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
