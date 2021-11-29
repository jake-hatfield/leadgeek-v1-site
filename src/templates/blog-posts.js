import * as React from "react"
import { graphql, Img, Link } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"

const BlogPostsTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const featuredPost = data.markdownRemark

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
            <span
              role="img"
              aria-label="Loudspeaker emoji"
              className="font-normal"
            >
              📢
            </span>{" "}
            TEST
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
            {currentPage === 1 && featuredPost && (
              <FeaturedBlogPost
                slug={featuredPost.frontmatter.slug}
                title={featuredPost.frontmatter.title}
                description={featuredPost.frontmatter.description}
              />
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

const FeaturedBlogPost = ({ slug, title, description }) => {
  return (
    <article>
      <Link
        key={slug}
        to={`/blog/${slug}/`}
        className="w-full md:flex md:justify-between bg-white rounded-lg shadow-pinkMd"
      >
        <div className="w-2/5">
          {/* <Img
fluid={data.dummyImage.childImageSharp.fluid}
alt="Leadgeek app feed"
className="rounded-tl-lg rounded-bl-lg"
/> */}
        </div>
        <div className="w-3/5 py-4 lg:py-6 px-6">
          <span>date</span>
          <h3 className="mt-2 text-2xl md:text-4xl font-black text-gray-900 inter bg-white">
            {title}
          </h3>
          <p className="mt-4 lg:mt-6 pb-4 h4 bg-white text-gray-700">
            {description}
          </p>
        </div>
      </Link>
    </article>
  )
}

const BlogPost = ({ slug, title, description }) => {
  return (
    <li className="w-full">
      <Link
        key={slug}
        to={`/blog${slug}`}
        className="inline-block card hover:bg-purple-500 hover:text-white group transition-main shadow-graySm"
      >
        {title}
        {description}
      </Link>
    </li>
  )
}

const BlogPostsGrid = ({ posts }) => {
  return (
    <ul className="grid grid-cols-3 gap-12 mt-16">
      {posts.map(({ node }) => {
        const slug = node.fields.slug
        const title = node.frontmatter.title || slug
        const description = node.frontmatter.description
        return <BlogPost slug={slug} title={title} description={description} />
      })}
    </ul>
  )
}

export const blogPostsQuery = graphql`
  query blogPostsQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            featured
          }
        }
      }
    }
    markdownRemark(frontmatter: { featured: { eq: true } }) {
      id
      frontmatter {
        date
        description
        featured
        title
        slug
      }
    }
  }
`
export default BlogPostsTemplate
