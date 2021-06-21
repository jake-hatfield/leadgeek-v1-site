import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "styles/app.css"

import LPNavbar from "./LPNavbar"
import LPFooter from "./LPFooter"

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
      <LPNavbar siteTitle={"Leadgeek"} />
      <main ref={scrollRef} className="mt-16 md:mt-20">
        {children}
      </main>
      <LPFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
