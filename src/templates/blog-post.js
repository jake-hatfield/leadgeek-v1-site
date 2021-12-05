// import React, { useState } from "react"
import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

// packages
import Image from "gatsby-image"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useScrollPercentage } from "react-scroll-percentage"
import { useSpring, animated, config } from "react-spring"
import { MDXProvider } from "@mdx-js/react"

// components
import Comments from "@components/layout/Blog/Comments"
import Layout from "@components/layout/Layout"
import SocialShare from "@components/layout/Blog/SocialShare"
import Chapter from "@components/layout/Blog/Chapter"
// import EmailInput from "@components/emailInput"

const shortcodes = { Chapter }

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const frontmatter = data.mdx.frontmatter
  const topic = post.frontmatter.topic || `online arbitrage`
  const [email, setEmail] = React.useState("")
  const [success, setSuccess] = React.useState(false)
  const [failure, setFailure] = React.useState(false)
  const [redundant, setRedundant] = React.useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    // const data = await addToMailchimp(email)
    //   .then(data => {
    //     console.log(data.result)
    //     console.log(failure)
    //     if (
    //       (data.result === "error") &
    //       (success === true) &
    //       (failure === false)
    //     ) {
    //       setSuccess(!success)
    //       setFailure(!failure)
    //       setRedundant(!redundant)
    //     } else if (
    //       (data.result === "error") & (failure === false) ||
    //       success === true
    //     ) {
    //       setFailure(!failure)
    //     } else if ((data.result === "success") & (failure === true)) {
    //       setFailure(!failure)
    //       setSuccess(!success)
    //     } else if (data.result === "success") {
    //       setSuccess(!success)
    //     }
    //   })
    //   .catch(error => {
    //     // Errors in here are client side
    //     // Mailchimp always returns a 200
    //   })
  }
  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  let optin = false
  let secondaryOptinContent = false

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  })

  if (percentage < 0.3) {
    optin = false
  } else if ((percentage > 0.300001) & (percentage < 0.6)) {
    optin = true
  } else if ((percentage > 0.600001) & (percentage < 0.9)) {
    optin = true
    secondaryOptinContent = true
  }
  const fade = useSpring({
    opacity: optin ? 1 : 0,
    config: config.slow,
  })
  const primaryFade = useSpring({
    opacity: secondaryOptinContent ? 0 : 1,
    config: config.gentle,
  })
  const secondaryFade = useSpring({
    opacity: secondaryOptinContent ? 1 : 0,
    config: config.gentle,
  })

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
              url: frontmatter.ogImage,
              width: 1200,
              height: 630,
              alt: "Learn from the Leadgeek blog.",
            },
          ],
        }}
        language="en"
      />
      <section className="h-full" ref={ref}>
        {/* side optin */}
        <animated.aside style={fade} className={"z-40 w-full side-blog"}>
          <div className="flex justify-center">
            <div className="alt-container w-full">
              <div className="side-blog-w relative z-40 lg:py-6 px-6 w-full bg-white rounded-lg shadow-graySm">
                <h2 className="text-lg text-gray-900 font-bold">Leadgeek</h2>
                <animated.div style={primaryFade} className="absolute pr-4">
                  <h4 className="mt-2 body-font text-sm text-gray-600 leading-relaxed">
                    Interested in {topic}?
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    There's a ton more where that came from...
                  </p>
                </animated.div>
                <animated.div style={secondaryFade}>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Really, you should join our newsletter.
                  </p>
                  <h4 className="mt-2 body-font text-sm text-gray-600 leading-relaxed">
                    You'll be able to learn about {topic} and so much more.
                  </h4>
                </animated.div>
                {/* <form onSubmit={handleSubmit} className="mb-0">
                  <input
                    placeholder="Enter your email"
                    onChange={handleEmailChange}
                    name="email"
                    type="text"
                    required
                    className="mt-4 p-3 w-full bg-gray-200 alt-border text-sm focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    className="mt-2 p-3 w-full bg-purple-500 text-white text-sm alt-border focus:outline-none focus:shadow-outline"
                  >
                    Join the Leadgeek newsletter
                  </button>
                </form> */}
                <animated.p
                  className={`${
                    success ? `block` : `hidden`
                  } mt-4 py-2 pl-4 pr-2 bg-gray-300 border-l-4 border-black-400 text-sm`}
                  style={fade}
                >
                  You're in. Please <strong>don't</strong> check your inbox now.
                  <span className="text-xs"> (Reverse psychology)</span>
                </animated.p>
                <animated.p
                  className={`${
                    failure ? `block` : `hidden`
                  } mt-4 py-2 pl-4 pr-2 bg-gray-300 border-l-4 border-black-400 text-sm`}
                  style={fade}
                >
                  {redundant
                    ? `You've already signed up for these fire tips. Chill & check your inbox.`
                    : `AHHH. We're throwin' errors. Try a different email to
      make it stop.`}
                </animated.p>
              </div>
            </div>
          </div>
        </animated.aside>
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
              <Image
                fluid={frontmatter.image.childImageSharp.fluid}
                alt={frontmatter.title}
                className="mt-4 h-full blog-hero-image mx-auto rounded-lg shadow-pinkMd"
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
            <div className="mt-8 container md:max-w-xl lg:max-w-2xl lg:flex lg:flex-wrap lg:justify-between lg:items-end body-font font-light text-sm md:text-base text-gray-800">
              <div className="flex items-center">
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={frontmatter.author}
                  className="w-16 md:w-20 lg:w-24 rounded-full shadow-graySm bg-gray-900"
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
        fixed(width: 65, height: 65) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "LL")
        title
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(pruneLength: 100, truncate: true)
      body
      slug
    }
  }
`
