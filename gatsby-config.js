module.exports = {
  siteMetadata: {
    siteUrl: `https://www.leadgeek.io`,
    title: `LeadGeek`,
    description: `LeadGeek offers premium online arbitrage leads to Amazon FBA sellers. Our service provides a reliable output of quality leads every weekday.`,
    author: `LeadGeek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LeadGeek Arbitrage Leads`,
        short_name: `LeadGeek`,
        start_url: `/`,
        background_color: `#5d55fa`,
        theme_color: `#5d55fa`,
        display: `minimal-ui`,
        icon: `src/assets/images/leadgeek-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      //   options: {
      //     threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
      //     once: true, // Defines if animation needs to be launched once
      //     disable: false, // Flag for disabling animations

      //     // Advanced Options
      //     // selector: '[data-sal]', // Selector of the elements to be animated
      //     // animateClassName: 'sal-animate', // Class name which triggers animation
      //     // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
      //     // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
      //     // enterEventName: 'sal:in', // Enter event name
      //     // exitEventName: 'sal:out', // Exit event name
      //   },
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
