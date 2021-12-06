// import React, { useState } from "react"
import React, { useState } from "react"
import { Link, graphql } from "gatsby"

// packages
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useScrollPercentage } from "react-scroll-percentage"
import { useSpring, animated, config } from "react-spring"
import { MDXProvider } from "@mdx-js/react"

// components
import Chapter from "@components/layout/Blog/Chapter"
import Comments from "@components/layout/Blog/Comments"
import Layout from "@components/layout/Layout"
import Popup from "@components/utils/Popup"
import SocialShare from "@components/layout/Blog/SocialShare"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const frontmatter = data.mdx.frontmatter
  const shortcodes = { Chapter }

  //   local state
  const [showPopup, setShowPopup] = useState(false)

  //   side optin visibility logic
  let optin = false
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  })
  if (percentage < 0.3) {
    optin = false
  } else if ((percentage > 0.300001) & (percentage < 0.85)) {
    optin = true
  } else {
    optin = false
  }

  //   side optin animation
  const fade = useSpring({
    opacity: optin ? 1 : 0,
    config: config.gentle,
  })

  //   SEO
  const title = `${frontmatter.title} | Leadgeek`
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
          type: "website",
          images: [
            {
              url: getImage(frontmatter.ogImage),
              width: 1200,
              height: 630,
              alt: frontmatter.title,
            },
          ],
        }}
        language="en"
      />
      <section className="relative h-full" ref={ref}>
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
                className="inline-block py-0.5 px-2 bg-gray-900 rounded-lg text-teal-300 hover:bg-purple-500 hover:text-white"
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
          <section
            id="blog-body"
            className="mt-12 lg:mt-16 container md:max-w-xl lg:max-w-2xl text-base text-gray-900 leading-relaxed"
          >
            <MDXProvider components={shortcodes}>
              <MDXRenderer title={`Title`}>{post.body}</MDXRenderer>
            </MDXProvider>
          </section>
        </article>
        <section
          id="comments"
          className="my-8 container md:max-w-xl lg:max-w-2xl relative z-20"
        >
          <Comments id={post.frontmatter.postID} />
        </section>
      </section>
      {/* side optin */}
      <animated.aside style={fade} className={"z-30 w-full side-blog"}>
        <div className="flex justify-center">
          <div className="alt-container w-full">
            <div className="side-blog-w relative z-40 lg:py-6 px-6 w-full bg-white rounded-lg shadow-graySm">
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
                onClick={() => setShowPopup(!showPopup)}
                className="w-full mt-2 py-2 px-2 lg:px-4 rounded-lg shadow-md hover:shadow-lg border border-purple-500 hover:border-purple-600 bg-purple-500 font-semibold text-sm hover:bg-purple-600 text-white transition-main ring-purple inter"
              >
                {frontmatter.optin.cta || "Join now"}
              </button>
            </div>
          </div>
        </div>
      </animated.aside>
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
  query BlogPostBySlug($id: String!) {
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
      id
      frontmatter {
        date(formatString: "LL")
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
      }
      body
      slug
    }
  }
`
