import React from "react"
import { graphql } from "gatsby"

// packages
import { GatsbySeo, BlogJsonLd } from "gatsby-plugin-next-seo"

// components
import Layout from "@components/layout/Layout"
import BlogPostsLayout from "@components/layout/Blog/Layout"

// assets
import OgImage from "@assets/images/og/og-blog.jpg"

const BlogPostsTemplate = ({ data, location, pageContext }) => {
  // destructure necessary items
  const { currentPage, numPages } = pageContext

  const posts = data.allMdx.edges
  const featuredPost = data.mdx
  const pagination = {
    currentPage,
    numPages,
    isFirst: currentPage === 1,
    isLast: currentPage === numPages,
    prevPage:
      currentPage - 1 === 1
        ? "/blog/"
        : `/page/${(currentPage - 1).toString()}`,
    nextPage: (currentPage + 1).toString(),
  }

  //   SEO
  const title = "Blog"
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
      <BlogJsonLd
        url={"https://leadgeek.io/blog/"}
        headline={"Blog"}
        description={
          "The Leadgeek blog is a resource for online arbitrage and Amazon FBA selling tips."
        }
        images="https://example.com/photos/1x1/photo.jpg"
        posts={[
          {
            headline: "Post 1",
            image: "https://example.com/photos/1x1/photo.jpg",
          },
          { headline: "Post 2" },
        ]}
        datePublished={"2021-12-08T08:00:00+08:00"}
        authorName="Jake Hatfield"
      />
      {/* notification banner */}
      {/* <aside className="hidden lg:block bg-gray-900 text-teal-300 inter">
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
      </aside> */}
      <BlogPostsLayout
        title={title}
        posts={posts}
        featuredPost={featuredPost}
        pagination={pagination}
      />
    </Layout>
  )
}

export const blogPostsQuery = graphql`
  query blogCategoriesQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___title], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { featured: { eq: false } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "LL")
            title
            descriptionShort
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          excerpt(pruneLength: 120, truncate: true)
          slug
          timeToRead
        }
      }
    }
    mdx(
      fileAbsolutePath: { regex: "/blog/" }
      frontmatter: { featured: { eq: true } }
    ) {
      frontmatter {
        date(formatString: "LL")
        title
        descriptionShort
        featured
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
      excerpt(pruneLength: 150, truncate: true)
      slug
      timeToRead
    }
  }
`

export default BlogPostsTemplate
