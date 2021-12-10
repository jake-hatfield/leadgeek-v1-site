// import React, { useState } from "react"
import React, { useState, useEffect, useRef, useCallback } from "react"
import { Link, graphql } from "gatsby"

// packages
import { StaticImage, GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import { GatsbySeo, BlogPostJsonLd } from "gatsby-plugin-next-seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useSpring, animated, config } from "react-spring"
import _ from "lodash"
import { MDXProvider } from "@mdx-js/react"

// components
import Chapter from "@components/layout/Blog/Chapter"
import Comments from "@components/layout/Blog/Comments"
import Layout from "@components/layout/Layout"
import Popup from "@components/utils/Popup"
import SocialShare from "@components/layout/Blog/SocialShare"
import TableOfContents from "@components/layout/Blog/TableOfContents"

import { titleCase, useWindowDimensions } from "@components/utils/utils"

const BlogPostTemplate = ({ data, location }) => {
  //   local state
  const [showPopup, setShowPopup] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(false)

  const post = data.mdx
  const frontmatter = data.mdx.frontmatter
  const shortcodes = { Chapter, TableOfContents }
  const images = [data.imagesSm.edges, data.imagesMd.edges, data.imagesLg.edges]

  const getImageData = images => {
    let arr = []
    images.forEach(imageArr =>
      imageArr.forEach(image => arr.push(getImage(image.node)))
    )
    return arr
  }

  const getImageSrcs = imageData => {
    let arr = []
    imageData.forEach(image =>
      arr.push(data.site.siteMetadata.siteUrl + getSrc(image))
    )
    return arr
  }

  const imageSrcs = getImageSrcs(getImageData(images))

  const { height } = useWindowDimensions()

  const [articleHeight, setArticleHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setArticleHeight(ref.current.clientHeight)
  }, [setArticleHeight])

  //   side optin animation
  const fade = useSpring({
    opacity: hideOnScroll ? 1 : 0,
    config: config.gentle,
  })
  useScrollPosition(
    ({ currPos }) => {
      const show = currPos.y < -height && -currPos.y < articleHeight
      if (show !== hideOnScroll) setHideOnScroll(show)
    },
    [hideOnScroll],
    null,
    false,
    500
  )

  const getItemIds = useCallback(items => {
    return items.reduce((acc, item) => {
      if (item.url) {
        // url has a # as first character, remove it to get the raw CSS-id
        acc.push(item.url.slice(1))
      }
      if (item.items) {
        acc.push(...getItemIds(item.items))
      }

      return acc
    }, [])
  }, [])

  const itemIds = getItemIds(post.tableOfContents.items)

  //   SEO
  const title = `${titleCase(frontmatter.title)}`
  //   max 155 chars
  const description = frontmatter.description || post.excerpt
  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: `https://leadgeek.io/blog/${post.slug}`,
          type: "article",
          images: [
            {
              url: getSrc(frontmatter.ogImage),
              width: 1200,
              height: 630,
              alt: frontmatter.title,
            },
          ],
        }}
        language="en"
      />
      <BlogPostJsonLd
        url={`https://leadgeek.io/blog/${post.slug}`}
        headline={title}
        description={description}
        datePublished={frontmatter.date}
        dateModified={frontmatter.dateModified}
        authorName={frontmatter.author}
        images={imageSrcs}
      />
      {/* blog post */}
      <article
        itemScope
        itemType="http://schema.org/Article"
        className="relative pb-16"
      >
        <div className="py-8 lg:py-16 bg-splatter border-b border-gray-900">
          <div className="max-w-4xl mx-auto px-8 transform -rotate-2">
            <Link
              to={"/blog/"}
              className="inline-block py-0.5 px-2 bg-gray-900 rounded-lg text-teal-300 hover:bg-purple-500 hover:text-white transition-main"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xl handwritten tracking-wider">
                  See all posts
                </span>
              </div>
            </Link>
            <GatsbyImage
              image={getImage(frontmatter.heroImage)}
              alt={frontmatter.title}
              className="mt-4 blog-hero-image mx-auto rounded-lg shadow-pinkMd"
            />
          </div>
          <header className="mt-12 lg:mt-16 container md:max-w-xl lg:max-w-2xl">
            <h1 className="inline-block bg-white text-2xl md:text-4xl font-black text-gray-900 inter">
              {frontmatter.title}
            </h1>
            <h2 className="mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-900">
              {frontmatter.description}
            </h2>
          </header>
          <div className="mt-8 container md:max-w-xl lg:max-w-2xl lg:flex lg:flex-wrap lg:justify-between lg:items-end text-sm md:text-base text-gray-800">
            <div className="flex items-center">
              <StaticImage
                src={"../assets/images/profile-picture.png"}
                placeholder="traced_SVG"
                layout="fixed"
                width={50}
                height={50}
                alt={frontmatter.author}
                className="rounded-full shadow-graySm bg-gray-900"
              />
              <div className="ml-4 bg-white">
                <address
                  className="font-semibold inter text-gray-900"
                  rel="author"
                >
                  {frontmatter.author}
                </address>
                <time pubdate={frontmatter.date}>
                  Last updated: {frontmatter.date}
                </time>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <SocialShare
                url={`${data.site.siteMetadata.siteUrl}/blog/${post.slug}`}
                title={frontmatter.title}
                tags={frontmatter.tags}
                siteUrl={data.site.siteMetadata.siteUrl}
              />
            </div>
          </div>
        </div>
        <div ref={ref} className="relative h-full min-h-screen">
          <section
            id="blog-body"
            className="mt-12 lg:mt-16 container md:max-w-xl lg:max-w-2xl text-base text-gray-900 leading-relaxed"
          >
            <MDXProvider components={shortcodes}>
              <MDXRenderer title={frontmatter.title}>{post.body}</MDXRenderer>
            </MDXProvider>
          </section>{" "}
          {/* side optin */}
          <animated.aside
            style={fade}
            className={"hidden xl:block w-full max-w-7xl mx-auto"}
          >
            <div className="fixed top-32 ml-8">
              <div className="xl:w-64 mb-8 py-6 px-6 bg-white rounded-lg shadow-graySm">
                <h4 className="text-gray-900 font-bold inter">
                  {frontmatter.optin.title}
                </h4>
                {frontmatter.optin.description.map((item, i) => (
                  <p
                    key={i}
                    className="mt-2 text-sm text-gray-600 leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
                <button
                  onClick={() => hideOnScroll && setShowPopup(!showPopup)}
                  className={`w-full mt-2 py-2 px-4 rounded-lg shadow-md hover:shadow-lg border border-purple-500 hover:border-purple-600 bg-purple-500 font-semibold text-sm ${
                    hideOnScroll ? "cursor-pointer" : "cursor-default"
                  } hover:bg-purple-600 text-white transition-main ring-purple inter`}
                >
                  {frontmatter.optin.cta || "Join now"}
                </button>
              </div>
              {post.tableOfContents.items && (
                <TableOfContents
                  items={post.tableOfContents.items}
                  itemIds={itemIds}
                />
              )}
            </div>
          </animated.aside>
        </div>
      </article>
      {/* tags */}
      <section id="tags" className="container md:max-w-xl lg:max-w-2xl pb-16">
        <ul className="flex items-centerflex-wrap">
          {frontmatter.tags.map((tag, i) => (
            <li key={i} className="first:ml-0 ml-4">
              <Link
                to={`/blog/tags/${_.kebabCase(tag)}/`}
                className="inline-block py-0.5 px-2 bg-gray-900 rounded-lg text-xl handwritten tracking-wider text-teal-300 hover:bg-purple-500 hover:text-white transition-main"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* comments */}
      <section
        id="comments"
        className="pb-16 container md:max-w-xl lg:max-w-2xl relative z-20"
      >
        <Comments id={post.frontmatter.postID} />
      </section>
      {showPopup && (
        <Popup
          show={showPopup}
          setShow={setShowPopup}
          details={{
            id: "blogPostPopup",
            headers: [
              <>{frontmatter.optin.popupTitle}</>,
              <>Gotcha, you're in!</>,
            ],
            subheaders: [
              <>{frontmatter.optin.popupDescription}</>,
              <>
                You should receive an email confirmation shortly, and we'll
                email you again once some space frees up.
              </>,
            ],
            additionalInfo: null,
            cta: frontmatter.optin.cta,
            tags: [{ name: frontmatter.optin.tag, status: "active" }],
          }}
        />
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    avatar: file(absolutePath: { regex: "/profile-picture.png/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "LL")
        dateModified
        author
        title
        heroImage: image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
        ogImage: image {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        optin {
          title
          description
          popupTitle
          popupDescription
          cta
          tag
        }
        category
        tags
      }
      id
      body
      slug
      tableOfContents
    }
    imagesSm: allFile(
      filter: {
        relativeDirectory: { eq: $slug }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(aspectRatio: 1, width: 2560, formats: PNG)
          }
        }
      }
    }
    imagesMd: allFile(
      filter: {
        relativeDirectory: { eq: $slug }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.33, width: 2560, formats: PNG)
          }
        }
      }
    }
    imagesLg: allFile(
      filter: {
        relativeDirectory: { eq: $slug }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77, width: 2560, formats: PNG)
          }
        }
      }
    }
  }
`
