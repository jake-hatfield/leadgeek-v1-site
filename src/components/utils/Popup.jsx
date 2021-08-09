import React, { useState, useEffect, useRef, useCallback } from "react"

import { useOutsideMousedown, addToMailchimp } from "./utils"
import FormField from "components/utils/FormField"
import Bullet from "assets/svgs/bullet.svg"
import SoloSellingBefore from "assets/video/solo-selling-before.mp4"
import SoloSellingAfter from "assets/video/solo-selling-after.gif"

const Popup = ({ show, setShow }) => {
  const [showPopup, setShowPopup] = useState(show)

  //   set cookie if popup has already been seen
  useEffect(() => {
    if (showPopup) {
      let expiryDate = new Date(Date.now() + 14 * 1000 * 60 * 60 * 24)
      document.cookie = `popupSeen=true; expires=${expiryDate.toUTCString()}`
    }
    setShowPopup(showPopup)
  }, [showPopup])

  //   close popup on outside mouseup
  const wrapperRef = useRef(null)
  useOutsideMousedown(wrapperRef, setShow)

  //   close popup on esc keypress
  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && show) {
        setShow(false)
      }
    },
    [show, setShow]
  )
  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  // form data handling
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const { firstName, lastName, email } = formData
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  //   two step modal
  const [count, setCount] = useState(1)

  // handle submit
  const onSubmit = async e => {
    e.preventDefault()
    const firstNameCapitalized =
      firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase()
    const lastNameCapitalized =
      lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase()
    const lowerCaseEmail = email.toLowerCase()
    const subscriberData = {
      FNAME: firstNameCapitalized,
      LNAME: lastNameCapitalized,
      LEAD: `Coaching Call Lead`,
      tags: ["Coaching Call Lead"],
    }
    addToMailchimp(lowerCaseEmail, subscriberData)
    setCount(count + 1)
  }

  const coachingItems = [
    "How to develop your own unique selling style",
    "How to get ungated in more brands & categories",
    "Which sourcing tools are important (and which aren't)",
    "Best practices to keep your Amazon account healthy",
  ]

  return (
    <div className="relative w-screen">
      <article
        ref={wrapperRef}
        className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-40 w-80 md:w-full md:max-w-xl p-4 lg:py-8 lg:px-6 rounded-lg bg-gray-100 ring-4 md:ring-6 lg:ring-8 ring-gray-900 ring-opacity-75 shadow-2xl text-gray-900"
      >
        {count === 1 ? (
          <div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hidden md:block mx-auto ring-4 ring-pink-600 ring-opacity-50 shadow-2xl rounded-lg"
              alt="Before an online arbitrage coaching call"
            >
              <source src={SoloSellingBefore} type="video/mp4" />
            </video>
            <header className="mt-4 lg:mt-8 md:text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black inter header-height">
                Figuring out how to sell on Amazon by yourself sucks...
              </h2>
              <p className="mt-2 text-sm md:text-base lg:text-lg">
                But it doesn't have to <i>stay</i> that way. Schedule a{" "}
                <span className="font-bold text-pink-600">100% free</span>{" "}
                coaching call with an experienced FBA arbitrage seller.{" "}
                <strong>No strings attached</strong>.{" "}
                <span role="img" aria-label="Party emoji">
                  🎉
                </span>
              </p>
            </header>
            <form onSubmit={onSubmit} className="lg:mt-4 mx-auto max-w-sm">
              <div className="md:flex justify-between">
                <FormField
                  name="firstName"
                  label="First name"
                  type="text"
                  placeholder="Dave"
                  value={firstName}
                  onChange={onChange}
                  required
                />
                <FormField
                  name="lastName"
                  label="Last name"
                  type="text"
                  placeholder="Saunders"
                  width="md:ml-4"
                  value={lastName}
                  onChange={onChange}
                  required
                />
              </div>
              <FormField
                name="email"
                label="Email"
                type="email"
                placeholder={"dsaunders@gmail.com"}
                value={email}
                onChange={onChange}
                required
              />
              <button
                type="submit"
                id="submitPopup"
                className="w-full mt-4 cta-link inter"
              >
                Request a free coaching call
              </button>
              <div className="mt-2 md:mt-4 flex items-center justify-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="block ml-1 text-xs text-gray-600">
                  No spam, your email is kept confidential
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <img
              src={SoloSellingAfter}
              alt="After an online arbitrage coaching call"
              className="hidden md:block max-w-xs mx-auto ring-4 ring-pink-600 ring-opacity-50 shadow-2xl rounded-lg"
            />
            <header className="mt-4 lg:mt-8 md:text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black inter header-height">
                Raise the roof!
              </h2>
              <p className="mt-2 text-sm md:text-base lg:text-lg">
                <strong>
                  Check your email for a link to schedule the call
                </strong>
                . If you have any questions, bring 'em on! Otherwise, here are
                some things we'll discuss:
              </p>
              <ul className="max-w-md mt-4 mx-auto text-sm md:text-base">
                {coachingItems.map((item, i) => (
                  <li key={i} className="mt-2 flex text-left">
                    <Bullet className="mt-1 svg-sm text-teal-300 flex-none" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </header>
            <div className="max-w-sm mt-4 mx-auto">
              <button
                onClick={() => setShow(e => !e)}
                id="closePopup"
                className="w-full cta-link inter"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setShow(e => !e)}
          id="closePopup"
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
      <div
        id="closePopup"
        className="fixed z-30 top-0 right-0 h-screen w-full bg-gray-900 opacity-75"
      />
    </div>
  )
}

export default Popup
