import React from "react"
import Img from "gatsby-image"

import FormField from "../components/formField"

const emailModal = ({ modalOpen, setModalOpen, header, image }) => {
  return (
    <article className={`${modalOpen ? `block` : `hidden`}`}>
      <div class="modal-overlay flex items-center justify-center overflow-auto bg-gray-700">
        <div className="mx-4 w-full max-w-2xl md:flex relative z-40 rounded-md shadow-md bg-white">
          <Img
            fluid={image}
            className="h-40 md:h-auto md:w-2/5 relative rounded-t-md md:rounded-t-none md:rounded-l-md border-b-2 md:border-b-0 md:border-r-2 border-gray-200"
          />
          <button
            onClick={() => modalOpen && setModalOpen(!modalOpen)}
            className="p-2 absolute top-0 right-0 rounded-md text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:shadow-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="md:w-3/5">
            <header className="p-4 md:p-6 lg:p-8 rounded-tr-md bg-gray-100">
              <h4 className="text-2xl font-semibold leading-tight text-gray-900 ">
                Enter your email
              </h4>
              <p className="mt-2 text-sm">
                Where should we send your free {header} guide?
              </p>
            </header>
            <div className="mx-auto pb-4 px-4 md:pb-6 md:px-6 lg:pb-8 lg:px-8">
              <form className="my-0">
                <FormField
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="Jeff Bezos"
                  required
                />
                <FormField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="jeff.bezos@amazon.com"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 py-3 w-full flex items-center justify-center shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 font-bold transition-colors duration-200 focus:outline-none focus:shadow-outline"
                >
                  <span>Send it!</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default emailModal
