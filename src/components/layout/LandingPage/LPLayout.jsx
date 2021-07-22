import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "styles/app.css"

import exitIntent from "exit-intent"

import LPNavbar from "./LPNavbar"
import LPFooter from "./LPFooter"
import { handleLGID } from "components/utils/utils"
import Popup from "components/utils/Popup"

const Layout = ({ children, location }) => {
  useEffect(() => {
    if (typeof document !== undefined) {
      handleLGID(location)
    }
  }, [])

  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showPopup])

  useEffect(() => {
    if (document.cookie.indexOf("popupSeen=true") < 0) {
      const removeExitIntent = exitIntent({
        threshold: 30,
        eventThrottle: 100,
        maxDisplays: 1,
        onExitIntent: () => {
          setShowPopup(true)
        },
      })
      return () => {
        removeExitIntent()
      }
    }
  })

  return (
    <div className="relative flex flex-col h-screen justify-between">
      <LPNavbar siteTitle={"Leadgeek"} />
      <main className="mt-16 md:mt-20">{children}</main>
      <LPFooter />
      {/* exit popup */}
      {showPopup && <Popup show={showPopup} setShow={setShowPopup} />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
