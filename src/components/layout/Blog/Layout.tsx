import React from "react"
import { Link } from "gatsby"

// packages
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// utils
import { truncate } from "@components/utils/utils"

interface BlogPostsLayoutProps {
  title: string
  pagination: {
    currentPage: number
    numPages: number
    isFirst: boolean
    isLast: boolean
    prevPage: number
    nextPage: number
  }
  posts: any[]
  featuredPost: any
}

const BlogPostsLayout: React.FC<BlogPostsLayoutProps> = ({
  title,
  pagination: { currentPage, numPages, isFirst, isLast, prevPage, nextPage },
  posts,
  featuredPost,
}) => {
  return (
    <section className="min-h-screen py-12 lg:py-20 relative text-gray-900 bg-splatter">
      <div className="container">
        <header className="relative mx-auto md:mx-0 max-w-md">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter bg-white">
            {title}
          </h1>
        </header>
        <section className="mt-16">
          {currentPage === 1 && featuredPost && (
            <FeaturedBlogPost node={featuredPost} />
          )}
          <BlogPostsGrid posts={posts} />
        </section>
        {numPages >= 2 && (
          <ul className="mt-8 all-center">
            {!isFirst && (
              <Link to={prevPage.toString()} rel="prev">
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
                  to={`/blog/${i === 0 ? "" : `page/${i + 1}/`}`}
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
              <Link to={nextPage.toString()} rel="next">
                Next Page →
              </Link>
            )}
          </ul>
        )}
      </div>
    </section>
  )
}

interface BlogPost {
  node: {
    excerpt: string
    slug: string
    timeToRead: number
    frontmatter: {
      date: string
      title: string
      descriptionShort: string
      image: any
    }
  }
}

const FeaturedBlogPost: React.FC<BlogPost> = ({
  node: {
    excerpt,
    slug,
    timeToRead,
    frontmatter: { date, title, descriptionShort, image },
  },
}) => {
  return (
    <article className="relative w-72 md:w-full max-w-lg lg:max-w-none flex flex-col-reverse lg:flex-row lg:justify-between mx-auto lg:mx-0 bg-white rounded-lg shadow-pinkSm transform lg:-rotate-1">
      <div className="lg:w-3/5 py-4 lg:py-6 px-6">
        <div className="text-sm lg:text-base">
          <time dateTime={date}>{date}</time>
          {timeToRead && (
            <>
              <span className="ml-2">&#x2022;</span>
              <span className="ml-2">{timeToRead} min. read</span>
            </>
          )}
        </div>
        {/* keep this link first for SEO */}
        <Link key={slug} to={`/blog/${slug}`}>
          <h3 className="mt-2 text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white tertiary-link">
            {truncate(title, 75)}
          </h3>
        </Link>
        <p className="mt-4 lg:mt-6 h4 text-gray-700">
          {truncate(descriptionShort, 150) || excerpt}
        </p>
      </div>
      <Link to={`/blog/${slug}`} className="lg:w-2/5">
        <GatsbyImage
          image={getImage(image)!}
          alt={title}
          className="h-full bg-cover rounded-t-lg lg:rounded-t-none lg:rounded-r-lg"
        />
      </Link>
    </article>
  )
}

const BlogPost: React.FC<BlogPost> = ({
  node: {
    excerpt,
    slug,
    timeToRead,
    frontmatter: { date, title, descriptionShort, image },
  },
}) => {
  return (
    <li className="flex flex-col-reverse justify-end w-72 md:w-80 h-auto mt-8 md:mt-0 mx-auto lg:mx-0 bg-white rounded-lg shadow-lg shadow-graySm">
      <header className="inline-block py-4 lg:py-6 px-6">
        <div className="text-sm lg:text-base">
          <time dateTime={date}>{date}</time>
          {timeToRead && (
            <>
              <span className="ml-2">&#x2022;</span>
              <span className="ml-2">{timeToRead} min. read</span>
            </>
          )}
        </div>
        {/* keep this link first for SEO */}
        <Link key={slug} to={`/blog/${slug}`}>
          <h3 className="mt-2 text-xl md:text-2xl font-black text-gray-900 inter bg-white tertiary-link">
            {truncate(title, 45)}
          </h3>
        </Link>
        <p className="mt-4 lg:mt-6 h4 text-gray-700">
          {truncate(descriptionShort, 120) || excerpt}
        </p>
      </header>
      <Link to={`/blog/${slug}`}>
        <GatsbyImage
          image={getImage(image)!}
          alt={title}
          className="rounded-t-lg"
        />
      </Link>
    </li>
  )
}

const BlogPostsGrid: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  return (
    <ul className="md:mx-0 md:grid grid-flow-row grid-cols-2 xl:grid-cols-3 gap-12 md:mt-16">
      {posts.map(({ node }, i) => {
        return <BlogPost key={i} node={node} />
      })}
    </ul>
  )
}

export default BlogPostsLayout
