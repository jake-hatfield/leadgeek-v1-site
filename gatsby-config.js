module.exports = {
  siteMetadata: {
    siteUrl: `https://www.Leadgeek.io`,
    title: `Leadgeek`,
    description: `Leadgeek offers premium online arbitrage leads to Amazon FBA sellers. Our service provides a reliable output of quality leads every weekday.`,
    author: `Leadgeek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leadgeek Arbitrage Leads`,
        short_name: `Leadgeek`,
        start_url: `/`,
        background_color: `#5d55fa`,
        theme_color: `#5d55fa`,
        display: `minimal-ui`,
        icon: `src/assets/images/Leadgeek-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          "https://Leadgeek.us2.list-manage.com/subscribe/post?u=78aa88c3633ef35c7c1ce0995&amp;id=d456eb75e8",
      },
    },
    {
      resolve: "gatsby-plugin-google-marketing-platform",
      options: {
        dataLayer: {
          gaPropertyId: "UA-177232307-1",
        },
        tagmanager: {
          id: "GTM-NNVJ2DH",
        },
        optimize: {
          id: "OPT-KXGPFFT",
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
        ignore: ["/sal.js"], // Ignore files/folders
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/order-confirmation`, `/privacy`, `/terms`, `/404`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
