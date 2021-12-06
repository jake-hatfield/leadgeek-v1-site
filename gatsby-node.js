const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogPosts = path.resolve(`./src/templates/blog-posts.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              slug
              id
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.edges

  // Create blog posts pages only if there's at least one markdown file found at "src/blog"
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].node.id
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].node.id

      createPage({
        path: `blog/${post.node.slug}`,
        component: blogPost,
        context: {
          id: post.node.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Create blog-list pages
  const postsPerPage = 7
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/` : `blog/${i + 1}/`,
      component: blogPosts,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
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
      frontmatter: Frontmatter
    }
    type Frontmatter {
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
