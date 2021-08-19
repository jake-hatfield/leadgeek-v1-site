import React, { useState, useEffect, useRef, useCallback } from "react"

import { useOutsideMousedown, addToMailchimp, capitalize } from "./utils"
import FormField from "components/utils/FormField"

const Popup = ({ show, setShow, details }) => {
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
    addToMailchimp({
      email: email.toLowerCase(),
      FNAME: capitalize(firstName),
      LNAME: capitalize(lastName),
      tags: details.tags,
    })
    setCount(count + 1)
  }

  return (
    <div className="relative">
      <article
        ref={wrapperRef}
        id={details.id || "popup"}
        className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-40 w-72 md:w-full md:max-w-xl py-6 px-4 lg:py-8 lg:px-6 rounded-lg bg-gray-100 ring-4 md:ring-6 lg:ring-8 ring-gray-900 ring-opacity-75 shadow-2xl text-gray-900"
      >
        {count === 1 ? (
          <div>
            <header className="md:text-center">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-black inter header-height">
                {details.headers[0]}
              </h2>
              <p className="mt-2 text-xs md:text-sm lg:text-base">
                {details.subheaders[0]}
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
                {details.cta || "Submit"}
              </button>
              <div className="mt-2 md:mt-4 flex items-center justify-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="block ml-1 text-xs text-gray-600 text-center">
                  No spam, your email is kept confidential
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <header className="md:text-center">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-black inter header-height">
                {details.headers[1]}
              </h2>
              <p className="mt-2 text-xs md:text-sm lg:text-base">
                {details.subheaders[1]}
              </p>
              {details.additionalInfo && details.additionalInfo}
            </header>
            <div className="max-w-sm mt-4 mx-auto">
              <button
                onClick={() => setShow(e => !e)}
                className="w-full cta-link inter"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setShow(e => !e)}
          className="absolute top-0 right-0 p-1 mt-1 mr-1 text-gray-400 hover:text-gray-500 hover:bg-gray-200 rounded-md transition duration-100 ease-in-out ring-gray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
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
      <div className="fixed z-30 top-0 right-0 h-full w-full bg-gray-900 opacity-75" />
    </div>
  )
}

export default Popup
