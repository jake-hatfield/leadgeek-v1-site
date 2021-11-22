import React from "react"
import { Link, graphql } from "gatsby"
import Img, { GatsbyImageFluidProps } from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"

// import OgImage from "@assets/images/og/og-contact.jpg"

interface BlogPageProps {
  location: Location
  data: {
    dummyImage: { childImageSharp: GatsbyImageFluidProps }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ location, data }) => {
  const title = "Contact Leadgeek"
  const description =
    "Have a question about Leadgeek? We'll do our best to get you some answers. Ask away and receive a prompt reply."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        // openGraph={{
        //   title,
        //   description,
        //   url: "https://leadgeek.io/contact/",
        //   type: "website",
        //   images: [
        //     {
        //       url: OgImage,
        //       width: 1200,
        //       height: 630,
        //       alt: "Reach out & chat with Leadgeek",
        //     },
        //   ],
        // }}
        language="en"
      />
      {/* notification banner */}
      <aside className="hidden lg:block bg-gray-900 text-teal-300 inter">
        <div className="py-3 container flex items-center">
          <p className="font-semibold">
            <span role="img" aria-label="Loudspeaker emoji">
              📢
            </span>{" "}
            Hey you! Leadgeek is an easy-to-use, high-tech way of finding things
            to flip on Amazon.
          </p>
          <div className="ml-2 flex items-center hover:text-pink-600 group transition-colors duration-200">
            <button
              //   to={"#leads"}
              className="whitespace-no-wrap underline font-bold focus:outline-none focus:shadow-outline"
            >
              View the latest leads
            </button>
          </div>
        </div>
      </aside>
      <section className="min-h-screen py-12 md:py-24 relative text-gray-900 bg-splatter">
        <div className="container">
          <header className="relative mx-auto lg:mx-0 max-w-md">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter bg-white">
              Blog
            </h1>
          </header>
          <section className="mt-16">
            {/* featured post */}
            <Link
              to={"/"}
              className="w-full md:flex md:justify-between bg-white rounded-lg shadow-pinkMd"
            >
              <div className="w-2/5">
                <Img
                  fluid={data.dummyImage.childImageSharp.fluid}
                  alt="Leadgeek app feed"
                  className="rounded-tl-lg rounded-bl-lg"
                />
              </div>
              <div className="w-3/5 py-4 lg:py-6 px-6">
                <span>date</span>
                <h2 className="mt-2 text-2xl md:text-4xl font-black text-gray-900 inter bg-white">
                  Blog
                </h2>
                <p className="mt-4 lg:mt-6 pb-4 h4 bg-white text-gray-700">
                  Stay up to date with every change made to Leadgeek since Q4
                  2021.
                </p>
              </div>
            </Link>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    dummyImage: file(relativePath: { eq: "dummy-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default BlogPage
