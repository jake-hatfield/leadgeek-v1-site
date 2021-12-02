module.exports = {
  siteMetadata: {
    siteUrl: `https://leadgeek.io/`,
    title: `Leadgeek`,
    description: `Leadgeek offers premium online arbitrage sourcing lists and software. FBA sellers around the world use Leadgeek for a reliable output of quality leads every weekday.`,
    author: `Leadgeek`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              background: `#5b6c7e`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leadgeek`,
        short_name: `Leadgeek`,
        start_url: `/`,
        background_color: `#7069FA`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Subscription"],
        secretKey:
          process.env.NODE_ENV === "production"
            ? "***REMOVED***"
            : "***REMOVED***",
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `***REMOVED***`,
        dbName: `LeadGeek`,
        collection: [`leads`, `waitlist`],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        title: "Leadgeek",
        description:
          "Leadgeek offers premium online arbitrage sourcing lists and software. FBA sellers around the world use Leadgeek for a reliable output of quality leads every weekday.",
        openGraph: {
          type: "website",
          locale: "en_US",
          url: "https://leadgeek.io/",
          site_name: "Leadgeek",
        },
        twitter: {
          site: "@leadgeekAMZ",
          cardType: "summary_large_image",
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        ignore: ["/sal.js"],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/order-confirmation`,
          `/contact-success`,
          `/affiliates/confirmation`,
          `/404`,
        ],
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://c364570692be47cbab74cc3f2b152d46@o975120.ingest.sentry.io/5931063",
        sampleRate: 0.7,
      },
    },
    `gatsby-plugin-anti-flicker`,
    `gatsby-plugin-remove-console`,
  ],
}
