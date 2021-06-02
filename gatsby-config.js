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
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leadgeek Sourcing & Software`,
        short_name: `Leadgeek`,
        start_url: `/`,
        background_color: `#7069FA`,
        theme_color: `#7069FA`,
        display: `minimal-ui`,
        icon: `src/assets/images/leadgeek-logo.png`,
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
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          "https://leadgeek.us2.list-manage.com/subscribe/post?u=78aa88c3633ef35c7c1ce0995&amp;id=d456eb75e8",
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
      resolve: "gatsby-plugin-next-seo",
      options: {
        title: "Leadgeek",
        description:
          "Leadgeek offers premium online arbitrage sourcing lists and software. FBA sellers around the world use Leadgeek for a reliable output of quality leads every weekday.",
        openGraph: {
          type: "website",
          locale: "en_IE",
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
        exclude: [`/order-confirmation`, `/contact-success`, `/404`],
      },
    },
  ],
}
