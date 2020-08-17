import React, { useState } from "react"
import { Link } from "gatsby"

import FeatureDropdown from "./featureDropdown"
import AltDropdown from "./altDropdown"

const Header = () => {
  const [featureNavOpen, setFeatureNavOpen] = useState(false)
  const featureItems = [
    {
      linkID: 100,
      title: "Lead criteria",
      description: "Hi this is a description",
      link: "about",
    },
    {
      linkID: 200,
      title: "Scalability",
      description: "Hi this is a description",
      link: "about",
    },
    {
      linkID: 300,
      title: "Third thing",
      description: "Hi this is a description",
      link: "about",
    },
    {
      linkID: 400,
      title: "About",
      description: "Hi this is a description",
      link: "about",
    },
  ]
  const moreItems = [
    {
      linkID: 100,
      title: "Demo",
      description: "Hi this is a description",
      link: "demo",
    },
    {
      linkID: 200,
      title: "Contact",
      description: "Hi this is a description",

      link: "contact",
    },
    {
      linkID: 300,
      title: "About",
      description: "Hi this is a description",
      link: "about",
    },
    {
      linkID: 300,
      title: "Guides",
      description: "Hi this is a description",
      link: "guides",
    },
    {
      linkID: 300,
      title: "Security",
      description: "Learn about how LeadGeek protects users' privacy",
      link: "security",
    },
  ]
  return (
    <header className="relative z-40 container">
      <div className="py-6 flex items-center justify-between md:justify-between md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <div className="font-bold text-2xl lg:text-3xl">
            <Link to={`/`} className="text-gray-900">
              Lead<span className="text-purple-500">Geek</span>
            </Link>
          </div>
        </div>
        {/* mobile button */}
        <div className="-mr-2 -my-2 md:hidden">
          <button
            onClick={() => setFeatureNavOpen(!featureNavOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-200 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex md:items-center md:space-x-6 space-x-10">
          <div className="relative">
            <FeatureDropdown
              title={`Features`}
              items={featureItems}
              open={featureNavOpen}
              setOpen={setFeatureNavOpen}
            />
          </div>
          <Link
            to={`/pricing`}
            className="text-base leading-6 font-medium text-gray-500 hover:text-purple-600 focus:outline-none focus:text-purple-600 transition ease-in-out duration-200"
          >
            Pricing
          </Link>
          <div className="relative">
            <AltDropdown title={`More`} items={moreItems} />
          </div>
          <Link
            to={`/
            `}
            className="ml-8 py-3 px-5 border border-purple-400 rounded-md text-purple-400 hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
            activeClassName="active"
          >
            Sign up
          </Link>
        </nav>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95" */}

      <div
        className={`${
          featureNavOpen ? `block` : `hidden`
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-md shadow-md">
          <div className="rounded-md shadow-xs bg-white divide-y-2 divide-gray-200">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-200 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-600">
                  Product Features
                </div>
                <nav className="mt-5 grid row-gap-8">
                  {featureItems.map(item => (
                    <Link
                      to={item.link}
                      className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-200"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div className="text-base leading-6 font-medium text-gray-900">
                        {item.title}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                <Link
                  to={`/pricing`}
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-200"
                >
                  Pricing
                </Link>
              </div>
              <div className="space-y-6">
                <span className="w-full flex rounded-md shadow-sm">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-200"
                  >
                    Sign up
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
