import React, { useState, useEffect } from "react"

import { useScrollPercentage } from "react-scroll-percentage"

const Popup = () => {
  // popup
  function setCookie(cookieName, cookieValue) {
    var today = new Date()
    var expire = new Date()
    expire.setTime(today.getTime() + 3600000 * 24 * 7)
    document.cookie =
      cookieName +
      "=" +
      encodeURI(cookieValue) +
      ";expires=" +
      expire.toGMTString()
  }
  function readCookie(name) {
    var nameEQ = name + "="
    var ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
  //   check for popup cookie
  const [popup, setPopup] = useState(false)
  const [popupCookie, setPopupCookie] = useState(readCookie("hasClosedPopup"))
  const [ref, percentage] = useScrollPercentage({
    /* options */
    threshold: 0,
  })
  const handlePercentageScroll = p => {
    const triggerPercentage = 0.35
    if (p >= triggerPercentage && !popup && !popupCookie) {
      setPopup(true)
    }
  }
  const handlePopupClose = setState => {
    setState(false)
    setPopupCookie(true)
    setCookie("hasClosedPopup", true)
  }
  //   monitor scroll percentage
  useEffect(() => {
    console.log(percentage)
    if (!popupCookie) {
      handlePercentageScroll(percentage)
    }
  }, [percentage, popupCookie])
  return (
    <article className="relative">
      <div className="fixed top-0 inset-x-0 z-40 max-w-lg mt-8 mx-auto p-6 rounded-lg bg-white shadow-lg">
        Leadgeek is a reset button to make online arbitrage sourcing efficient,
        potent, and fresh by putting you back in control.
        <button
          onClick={() => handlePopupClose(setPopup)}
          className="absolute top-0 right-0 mt-2 hover:text-gray-600 rounded-md transition duration-100 ease-in-out ring-gray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="fixed z-20 top-0 right-0 h-screen w-full bg-gray-900 opacity-25" />
    </article>
  )
}

export default Popup
