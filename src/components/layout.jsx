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
        buttonText="Got it"
        disableStyles={true}
        containerClasses="pt-5 pb-6 fixed bottom-0 md:flex md:items-center md:justify-center w-full z-40 bg-teal-200"
        contentClasses="container lg:mr-32 xl:mx-auto text-teal-600 text-xs md:text-sm"
        buttonWrapperClasses="mt-3 ml-3 md:mt-0 md:mr-12 md:ml-0 xl:mr-6 lg:right-0 lg:absolute lg:inset-auto flex-none"
        buttonClasses="py-2 px-3 lg:py-3 lg:px-4 rounded-md text-sm bg-teal-600 text-teal-100 focus:outline-none focus:shadow-outline"
      >
        Please note that we use cookies on our website to keep things running
        properly and to optimize performance. To learn more about how we use
        cookies,{" "}
        <Link
          to={`/privacy`}
          className="font-semibold focus:outline-none focus:shadow-outline"
        >
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
