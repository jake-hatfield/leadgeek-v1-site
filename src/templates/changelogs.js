import React from "react"
import { graphql, Link } from "gatsby"

// packages
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

// components
import Layout from "@components/layout/Layout"
import ListHeader from "@components/layout/Changelog/ListHeader"

// assets
import OgImage from "@assets/images/og/og-changelog.jpg"

const ChangelogsTemplate = ({ data, location, pageContext }) => {
  const changelogs = data.allMdx.edges

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const title = "Leadgeek Changelog"
  const description =
    "Track new features, updates, and improvements to the Leadgeek software suite. The team is constantly making improvements, and if you have any ideas on a feature, chime in!"
  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/changelog/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "View updates to the Leadgeek app",
            },
          ],
        }}
        language="en"
      />
      <section className="min-h-screen py-12 lg:py-20 relative text-gray-900 bg-splatter">
        <div className="container">
          <header className="relative mx-auto md:mx-0 max-w-md">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter bg-white">
              Changelog
            </h1>
          </header>
          <section
            id="changelog-body"
            className="mt-12 lg:mt-16 text-base text-gray-900 leading-relaxed"
          >
            {changelogs.map((changelog, i) => (
              <Changelog key={i} node={changelog.node} />
            ))}
          </section>
          {/* pagination */}
          {numPages >= 2 && (
            <ul className="mt-8 all-center">
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
                    className={`${
                      i + 1 === currentPage
                        ? "text-pink-600"
                        : "text-gray-600 hover:text-gray-700"
                    } ml-0.5 lg:ml-1 py-2 px-3 rounded-lg bg-white shadow-sm text-xs lg:text-lg font-semibold border-main transition-main ring-purple`}
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
            </ul>
          )}
        </div>
      </section>
    </Layout>
  )
}

const Changelog = ({ node }) => {
  // destructure necessary items
  const {
    slug,
    frontmatter: { date },
  } = node

  const shortcodes = { ListHeader }

  return (
    <article id="changelog-item" className="mt-8 card shadow-grayMd">
      <header className="md:flex items-end justify-between mb-4 pb-2 border-b border-gray-900">
        <div className="flex items-center">
          <h2 className="text-lg md:text-2xl font-black text-gray-900 inter">
            Version {slug}
          </h2>
          <time
            dateTime={date}
            className="ml-2 py-1 px-2 bg-gray-900 rounded-lg text-teal-300 text-xs"
          >
            {date}
          </time>
        </div>
        <a
          href="mailto:support@leadgeek.io"
          target="_blank"
          rel="noopener noreferrer"
          title="Report a problem with this update"
          className="hidden md:inline-block p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-200 rounded-md transition duration-100 ease-in-out ring-gray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </header>
      <MDXProvider components={shortcodes}>
        <MDXRenderer title={`Title`}>{node.body}</MDXRenderer>
      </MDXProvider>
    </article>
  )
}

export const changelogQuery = graphql`
  query changelogQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/changelog/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "LL")
          }
          body
          slug
        }
      }
    }
  }
`

export default ChangelogsTemplate
