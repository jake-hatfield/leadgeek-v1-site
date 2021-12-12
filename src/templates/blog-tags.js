import React from "react"
import { graphql } from "gatsby"

// packages
import { GatsbySeo } from "gatsby-plugin-next-seo"
import _ from "lodash"

// components
import Layout from "@components/layout/Layout"
import BlogPostsLayout from "@components/layout/Blog/Layout"

// assets
import OgImage from "@assets/images/og/og-blog.jpg"

const BlogTagsTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMdx.edges

  //   SEO
  const title = `#${_.kebabCase(pageContext.tag)} Posts`
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
          url: `https://leadgeek.io/tags/${pageContext.tag}`,
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
        noindex={true}
      />
      <BlogPostsLayout
        title={`#${_.kebabCase(pageContext.tag)} posts`}
        posts={posts}
      />
    </Layout>
  )
}

export const blogTagsQuery = graphql`
  query blogTagsQuery($tag: [String]) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { tags: { in: $tag } }
      }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "LL")
            title
            descriptionShort
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
            category
          }
          excerpt(pruneLength: 120, truncate: true)
          slug
          timeToRead
        }
      }
    }
  }
`

export default BlogTagsTemplate
