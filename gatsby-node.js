/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "https://Leadgeek.io/features",
    toPath: "https://Leadgeek.io/",
    isPermanent: true,
    force: true,
  })
}
