const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogPostsTemplate = path.resolve(`./src/templates/blog-posts.js`)
  const changelogsTemplate = path.resolve(`./src/templates/changelogs.js`)

  // Get all markdown blog posts sorted by date
  const blogQuery = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (blogQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogQuery.errors
    )
    return
  }

  //   get all markdown changelogs sorted by date
  const changelogQuery = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/changelog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (changelogQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your changelogs`,
      changelogQuery.errors
    )
    return
  }

  const blogPosts = blogQuery.data.allMdx.edges
  const changelogs = changelogQuery.data.allMdx.edges

  // Create blog posts pages only if there's at least one markdown file found at "src/blog"
  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].node.id
      const nextPostId =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].node.id

      createPage({
        path: `blog/${post.node.slug}`,
        component: blogPostTemplate,
        context: {
          id: post.node.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  const itemsPerPage = 7

  // Create blog pages
  const numBlogPages = Math.ceil(blogPosts.length / itemsPerPage)
  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/` : `blog/${i + 1}/`,
      component: blogPostsTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numPages: numBlogPages,
        currentPage: i + 1,
      },
    })
  })

  //   create changelog pages
  const numChangelogPages = Math.ceil(changelogs.length / itemsPerPage)
  Array.from({ length: numChangelogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `changelog/` : `changelog/${i + 1}/`,
      component: changelogsTemplate,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numPages: numChangelogPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
     type Mdx implements Node {
      frontmatter: BlogFrontmatter
    }
    type BlogFrontmatter {
      author: String!
      featured: Boolean!
      title: String!
      descriptionShort: String!
      descriptionLong: String!
      tags: [String!]!
      optin: Optin!
    }
    type Optin {
        title: String!
        description: [String!]!
        popupTitle: String!
        popupDescripton: [String!]!
        cta: String!
        tag: String!
    }
  `)
}
