import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "styles/app.css"

import CookieConsent from "react-cookie-consent"

import Navbar from "./Navbar"
import Footer from "./Footer"

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
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <main className="mt-16 md:mt-20">{children}</main>
      <Footer />
      <CookieConsent
        buttonText="Got it"
        disableStyles={true}
        containerClasses="pt-5 pb-6 fixed bottom-0 md:flex md:items-center md:justify-center w-full z-40 bg-teal-100 border-t-4 border-teal-400"
        contentClasses="container lg:mr-32 xl:mx-auto text-teal-600 text-xs md:text-sm"
        buttonWrapperClasses="mt-3 ml-3 md:mt-0 md:mr-12 md:ml-0 xl:mr-4 lg:right-0 lg:absolute lg:inset-auto flex-none"
        buttonClasses="py-2 px-3 lg:py-3 lg:px-4 rounded-md text-sm bg-teal-600 text-teal-100 hover:bg-teal-500 transition-colors duration-200 focus:outline-none focus:shadow-outline"
      >
        Leadgeek uses cookies on our site to keep things running properly and to
        optimize performance. To learn more about how we responsibly handle your
        data,{" "}
        <Link
          to={`/privacy/`}
          className="font-semibold focus:outline-none focus:shadow-outline"
        >
          read our privacy policy
        </Link>
      </CookieConsent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
