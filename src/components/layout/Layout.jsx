import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "styles/app.css"

import CookieConsent from "react-cookie-consent"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, scrollRef, popup }) => {
  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [popup])
  return (
    <div className="relative flex flex-col h-screen justify-between">
      <Navbar siteTitle={"Leadgeek"} />
      <main ref={scrollRef} className="mt-16 md:mt-20">
        {children}
      </main>
      <Footer />
      <CookieConsent
        buttonText="Got it"
        disableStyles={true}
        containerClasses="py-4 mx-2 md:mx-4 fixed bottom-0 lg:left-1/2 md:flex md:items-center md:justify-center w-auto container z-40 bg-gray-900 rounded-lg mb-4 lg:mb-6 lg:-ml-96 shadow-tealSm transform md:translate-x-10"
        contentClasses="lg:mr-4 text-teal-300 text-sm"
        buttonWrapperClasses="mt-4 md:mt-0 md:ml-4 flex-none"
        buttonClasses="block w-full md:w-auto cta-link inter"
      >
        We use third-party{" "}
        <AnchorLink
          to={`/privacy#cookies`}
          title="Leadgeek cookie policy"
          className="secondary-link"
        >
          cookies
        </AnchorLink>{" "}
        to personalize your site experience.
      </CookieConsent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
