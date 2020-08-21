/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/app.css"

import Header from "./header"
import Footer from "./footer"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="relative flex flex-col h-screen justify-between">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        buttonText="Got it!"
        disableStyles={true}
        containerClasses="py-5 fixed left-0 container md:flex md:items-center md:justify-between w-full z-40 bg-teal-200"
        contentClasses="text-teal-600 text-xs md:text-sm"
        buttonWrapperClasses="mt-2 md:mt-0 md:ml-12 flex-none"
        buttonClasses="py-2 px-3 lg:py-3 lg:px-4 rounded-md text-sm bg-teal-600 text-teal-100"
      >
        Please note that we use cookies on our website to keep things running
        properly and to optimize performance. To learn more about how we use
        cookies,{" "}
        <Link to={`/privacy`} className="font-semibold">
          read our privacy policy
        </Link>
        .
      </CookieConsent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
