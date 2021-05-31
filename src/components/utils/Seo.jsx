import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, title }) {
  const defaultDescription =
    "Leadgeek offers premium online arbitrage leads to Amazon FBA sellers. Our service provides a reliable output of quality leads every weekday."
  const metaDescription = description || defaultDescription
  const defaultTitle = "Leadgeek"
  const fullTitle = title || defaultTitle
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={fullTitle}
      titleTemplate={`%s | Leadgeek`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: fullTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: fullTitle,
        },
        {
          name: `twitter:title`,
          content: fullTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        { name: `wot-verification`, content: "e1d10c408e176da4deec" },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
