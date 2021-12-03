import * as React from "react"
import { graphql, Link } from "gatsby"

import Image from "gatsby-image"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { DateTime } from "luxon"

import Layout from "@components/layout/Layout"

import OgImage from "@assets/images/og/og-blog.jpg"

const BlogPostsTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMdx.edges
  console.log(posts)

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const featuredPost = data.mdx

  const title = "Leadgeek Blog"
  const description =
    "The Leadgeek blog is a resource for online arbitrage and Amazon FBA selling tips."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/blog/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Learn from the Leadgeek blog.",
            },
          ],
        }}
        language="en"
      />
      {/* notification banner */}
      <aside className="hidden lg:block bg-gray-900 text-teal-300 inter">
        <div className="py-3 container flex items-center">
          <p className="font-semibold">
            <span
              role="img"
              aria-label="Loudspeaker emoji"
              className="font-normal"
            >
              📢
            </span>{" "}
            Stuck with too many product restrictions? Try this 100% free
          </p>
          <div className="ml-1 flex items-center hover:text-pink-600 group transition-colors duration-200">
            <button
              //   to={"#leads"}
              className="whitespace-no-wrap underline font-bold focus:outline-none focus:shadow-outline"
            >
              auto-ungate ASIN list
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
            {currentPage === 1 && featuredPost && (
              <FeaturedBlogPost data={featuredPost} />
            )}
            <BlogPostsGrid posts={posts} />
          </section>
        </div>
        {/* <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/blog/${i === 0 ? "" : i + 1}`}
                style={{
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#007acc" : "",
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul> */}
      </section>
    </Layout>
  )
}

const FeaturedBlogPost = ({ data }) => {
  // destructure necessary items
  const {
    slug,
    frontmatter: { title, description, date, readTime, image },
  } = data

  console.log(data)

  return (
    <article className="w-full md:flex md:justify-between bg-white rounded-lg shadow-pinkMd transform -rotate-1">
      <Image
        fluid={image.childImageSharp.fluid}
        alt="Leadgeek app feed"
        className="w-2/5 rounded-tl-lg rounded-bl-lg"
      />
      <div className="w-3/5 py-4 lg:py-6 px-6">
        <div>
          <time dateTime={date}>
            {DateTime.fromISO(date).toFormat("LLL dd, yyyy")}
          </time>
          {readTime && (
            <>
              <span className="ml-2">&#x2022;</span>
              <span className="ml-2">{readTime} min. read</span>
            </>
          )}
        </div>{" "}
        <Link key={slug} to={`/blog/${slug}`}>
          <h3 className="mt-2 text-2xl md:text-4xl font-black text-gray-900 inter bg-white tertiary-link">
            {title}
          </h3>
        </Link>
        <p className="mt-4 lg:mt-6 pb-4 h4 bg-white text-gray-700">
          {description}
        </p>
      </div>
    </article>
  )
}

const BlogPost = ({ data }) => {
  // destructure necessary items
  const {
    slug,
    frontmatter: { title, description, date, readTime, image },
  } = data

  return (
    <li className="w-full bg-white rounded-lg shadow-lg shadow-graySm">
      <Image
        fluid={image.childImageSharp.fluid}
        alt="Leadgeek app feed"
        className="rounded-tl-lg rounded-tr-lg"
      />
      <Link
        key={slug}
        to={`/blog/${slug}`}
        className="inline-block py-4 lg:py-6 px-6 "
      >
        <h3 className="mt-2 text-xl md:text-2xl font-black text-gray-900 inter bg-white tertiary-link">
          {title}
        </h3>
      </Link>
      {description}
    </li>
  )
}

const BlogPostsGrid = ({ posts }) => {
  return (
    <ul className="md:grid grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
      {posts.map(({ node }, i) => {
        const slug = node.slug
        const title = node.frontmatter.title || slug
        const description = node.frontmatter.description
        return <BlogPost key={i} data={node} />
      })}
    </ul>
  )
}

export const blogPostsQuery = graphql`
  query blogPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { frontmatter: { featured: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            featured
            date
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          slug
        }
      }
    }
    mdx(frontmatter: { featured: { eq: true } }) {
      frontmatter {
        date
        description
        featured
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        readTime
      }
      slug
    }
  }
`

export default BlogPostsTemplate
