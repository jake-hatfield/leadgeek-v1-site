import React, { useState } from "react"
import { Link } from "gatsby"

import FeatureDropdown from "./featureDropdown"
import AltDropdown from "./altDropdown"

const Header = () => {
  const [featureNavOpen, setFeatureNavOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const featureItems = [
    {
      linkID: 100,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      title: "Strict criteria",
      description: "Choose from a hand-picked group of quality products",
      link: "features/criteria",
    },
    {
      linkID: 200,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Proven reliability",
      description: "Get a consistent output of arbitrage leads every weekday",
      link: "features/reliability",
    },
    {
      linkID: 300,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
      title: "Seller education",
      description: "Build a solid foundation of online arbitrage knowledge",
      link: "features/education",
    },
    {
      linkID: 400,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Member support",
      description: "Receive top-tier support from experienced sellers",
      link: "features/support",
    },
  ]
  const moreItems = [
    {
      linkID: 100,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      title: "Demo",
      description: "Watch a short video to see our service in action",
      link: "demo",
    },
    {
      linkID: 200,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Contact",
      description: "Reach out to our team if you have any questions",

      link: "contact",
    },
    {
      linkID: 300,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: "About",
      description: "Learn about our company and how we can help you",
      link: "about",
    },
    {
      linkID: 400,
      path: (
        <svg
          className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Guides",
      description: "Check out our free guides to help de-mystify arbitrage",
      link: "guides",
    },
    // {
    //   linkID: 500,
    //   title: "Security",
    //   description: "Learn about how LeadGeek protects users' privacy",
    //   link: "security",
    // },
  ]
  const moreItemsMobile = [
    {
      linkID: 100,
      title: "Pricing",
      description: "Hi this is a description",
      link: "pricing",
    },
    {
      linkID: 200,
      title: "Demo",
      description: "Hi this is a description",
      link: "demo",
    },
    {
      linkID: 300,
      title: "Contact",
      description: "Hi this is a description",

      link: "contact",
    },
    {
      linkID: 400,
      title: "About",
      description: "Hi this is a description",
      link: "about",
    },
    {
      linkID: 500,
      title: "Guides",
      description: "Hi this is a description",
      link: "guides",
    },
    // {
    //   linkID: 600,
    //   title: "Security",
    //   description: "Learn about how LeadGeek protects users' privacy",
    //   link: "security",
    // },
  ]
  return (
    <header className="relative z-20 container">
      <div className="py-6 lg:py-3 flex items-center justify-between md:space-x-10">
        {/* logo */}
        <div>
          <div className="font-bold text-xl lg:text-2xl">
            <Link
              to={`/`}
              className="text-gray-900 focus:outline-none focus:shadow-outline"
            >
              Lead<span className="text-purple-500">Geek</span>
            </Link>
          </div>
        </div>
        {/* mobile button */}
        <div className="-mr-2 -my-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-200 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* md:+ nav */}
        <nav className="hidden md:flex md:items-center md:space-x-6 space-x-10">
          <div className="relative">
            <FeatureDropdown
              title={`Features`}
              items={featureItems}
              open={featureNavOpen}
              setOpen={setFeatureNavOpen}
              eventTypes="click"
            />
          </div>
          <Link
            to={`/pricing`}
            className="text-base leading-6 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-purple-600 transition ease-in-out duration-200"
            activeClassName="active"
          >
            Pricing
          </Link>
          <div className="relative">
            <AltDropdown title={`More`} items={moreItems} />
          </div>
          <Link
            to={`/signup`}
            className="ml-8 py-2 px-3 lg:py-3 lg:px-4 shadow-sm rounded-md bg-transparent font-medium text-gray-500 border border-gray-500 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-colors duration-200 focus:outline-none focus:shadow-outline"
          >
            Sign up
          </Link>
        </nav>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? `block` : `hidden`
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-md shadow-md">
          <div className="rounded-md shadow-xs bg-white divide-y-2 divide-gray-200">
            <div className="pt-5 pb-6 px-3 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <img
                    className="mb-0 h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mt-1 -mr-2">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-200 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                <nav className="mt-8 grid row-gap-8">
                  {featureItems.map(item => (
                    <Link
                      key={item.linkID}
                      to={`/${item.link}`}
                      className="-m-3 p-3 flex items-start space-x-3 rounded-md transition ease-in-out duration-200"
                    >
                      {item.path}
                      <div className="text-base leading-6 font-medium text-gray-700">
                        {item.title}
                        <p className="text-sm leading-tight font-normal text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-3 space-y-6 rounded-b-md bg-gray-100">
              <div className="grid grid-cols-2 row-gap-4 gap-8">
                {moreItemsMobile.map(item => (
                  <Link
                    key={item.linkID}
                    to={`/${item.link}`}
                    className="text-base leading-6 font-medium text-gray-700 hover:text-gray-900 transition ease-in-out duration-200"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="space-y-6">
                <span className="w-full flex rounded-md shadow-sm">
                  <Link
                    to={`/signup`}
                    className="w-full flex items-center justify-center py-3 px-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-200"
                  >
                    Sign up
                  </Link>
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
