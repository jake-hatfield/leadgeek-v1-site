import React, { useState, useEffect } from "react"

import { useScrollPercentage } from "react-scroll-percentage"

import FormField from "components/utils/FormField"
import SoloSellingMp4 from "assets/video/solo-selling.mp4"

const Popup = ({ show, setShow }) => {
  const [showPopup, setShowPopup] = useState(show)
  useEffect(() => {
    if (showPopup) {
      let expiryDate = new Date(Date.now() + 14 * (1000 * 60 * 60 * 24))
      expiryDate.setFullYear(expiryDate.getFullYear() + 1)
      document.cookie = `popupSeen=true; expires=${expiryDate.toUTCString()}`
    }
    setShowPopup(showPopup)
  }, [showPopup])

  const [ref, percentage] = useScrollPercentage({
    /* options */
    threshold: 0,
  })
  //   const handlePercentageScroll = p => {
  //     const triggerPercentage = 0.35
  //     if (p >= triggerPercentage && !showPopup && !popupCookie) {
  //       setPopup(true)
  //     }
  //   }
  //   //   monitor scroll percentage
  //   useEffect(() => {
  //     console.log(percentage)
  //     if (!popupCookie) {
  //       handlePercentageScroll(percentage)
  //     }
  //   }, [percentage, popupCookie])

  return (
    <div className="relative w-screen">
      <article className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-40 w-72 md:w-full md:max-w-xl p-4 lg:py-8 lg:px-6 rounded-lg bg-gray-100 ring-4 md:ring-6 lg:ring-8 ring-gray-900 ring-opacity-75 shadow-2xl text-gray-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          // poster={Poster}
          className="hidden md:block mx-auto ring-4 ring-pink-600 ring-opacity-50 shadow-2xl rounded-lg"
          alt="Learning how to sell on Amazon"
        >
          {/* <source src={FeedWebm} type="video/webm" /> */}
          <source src={SoloSellingMp4} type="video/mp4" />
        </video>
        <header className="mt-4 lg:mt-8 md:text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black inter header-height">
            Figuring out how to sell on Amazon by yourself sucks...
          </h2>
          <p className="mt-2 text-base lg:text-lg text-gray-700">
            But it doesn't have to <i>stay</i> that way. Schedule a{" "}
            <span className="font-bold text-pink-600">100% free</span> coaching
            call with an experienced FBA arbitrage seller.{" "}
            <strong>No strings attached</strong>.{" "}
            <span role="img" aria-label="Party emoji">
              🎉
            </span>
          </p>
        </header>
        <form className="lg:mt-4 mx-auto max-w-sm">
          <FormField
            name="name"
            label="Name"
            type="text"
            placeholder={"Dave Saunders"}
            // value={email}
            // onChange={onChange}
            required
          />
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder={"dsaunders@gmail.com"}
            // value={email}
            // onChange={onChange}
            required
          />
          <button
            type="submit"
            // className={`${
            //   isProcessing
            //     ? `bg-gray-200 text-gray-500 ring-gray cursor-not-allowed`
            //     : `bg-purple-500 shadow-purpleSm hover:shadow-purpleMd border-purple-500 hover:border-purple-600 hover:bg-purple-600 ring-purple`
            // } w-full mt-4 lg:mt-8 py-3 px-4 rounded-lg border font-semibold text-sm text-white transition-main inter`}
            className="w-full mt-4 cta-link inter"
          >
            Request a free coaching call
          </button>
        </form>
        <button
          onClick={() => setShow(e => !e)}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-500 rounded-md transition duration-100 ease-in-out ring-gray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
      </article>
      <div className="fixed z-30 top-0 right-0 h-screen w-full bg-gray-900 opacity-75" />
    </div>
  )
}

export default Popup
