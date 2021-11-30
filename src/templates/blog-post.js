import React, { useState } from "react"
import { Link, graphql } from "gatsby"

// packages
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useScrollPercentage } from "react-scroll-percentage"
import { useSpring, animated } from "react-spring"
import { MDXProvider } from "@mdx-js/react"

// components
import Layout from "@components/layout/Layout"
import SocialShare from "@components/utils/SocialShare"
// import EmailInput from "@components/emailInput"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const topic = post.frontmatter.topic || `online arbitrage`
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [redundant, setRedundant] = useState(false)
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

  let sideBlog = false
  let additionalContent = false

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  })

  if ((percentage > 0.1) & (percentage < 0.4)) {
    sideBlog = true
  } else if ((percentage > 0.400001) & (percentage < 0.95)) {
    sideBlog = true
    additionalContent = true
  }
  const fade = useSpring({
    opacity: success || failure || redundant ? 1 : 0,
  })
  const primaryFade = useSpring({
    opacity: additionalContent ? 0 : 1,
  })
  const secondaryFade = useSpring({
    opacity: additionalContent ? 1 : 0,
  })

  return (
    <Layout location={location}>
      <section ref={ref} className="h-screen">
        <aside
          className={`${sideBlog ? `opacity-100` : `opacity-0`}
          side-blog w-full transition-main`}
        >
          <div className="flex justify-center">
            <div className="alt-container w-full">
              <div className="px-4 side-blog-w relative z-40 bg-white shadow-graySm">
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
                <form onSubmit={handleSubmit} className="mb-0">
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
                </form>
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
        </aside>
        <article itemScope itemType="http://schema.org/Article">
          <h1 className="mt-4 lg:mt-0 text-3xl md:text-4xl text-black-400 font-black">
            {post.frontmatter.title}
          </h1>
          <h2 className="mt-4 text-xl text-gray-600">
            {post.frontmatter.shortDescription}
          </h2>
          <aside className="mt-8 lg:flex lg:flex-wrap lg:justify-between lg:items-end body-font font-light text-sm md:text-base text-gray-600">
            <div className="flex items-center justify-center">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={post.frontmatter.author}
                style={{
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <div className="ml-4">
                <address className="mr-4 mb-0 not-italic text-gray-800">
                  <Link to={`/about`} rel="author" className="alt-link">
                    {post.frontmatter.author}
                  </Link>
                </address>
                <time pubdate={post.frontmatter.date}>
                  Last updated: {post.frontmatter.date}
                </time>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <SocialShare
                url={`${data.site.siteMetadata.siteUrl}/blog${post.fields.slug}`}
                title={post.frontmatter.title}
                twitterTags={post.frontmatter.twitterTags}
                siteUrl={data.site.siteMetadata.siteUrl}
              />
            </div>
            <section
              id="blog-body"
              className="text-lg text-gray-900 leading-relaxed"
            >
              <MDXProvider>
                <MDXRenderer title={`Title`}>{post.body}</MDXRenderer>
              </MDXProvider>
            </section>
          </aside>
        </article>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
