import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "assets/svgs/Leadgeek-logo-light.svg"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-40">
      {/* notification banner */}
      {/* <aside className="hidden lg:block bg-purple-600 text-purple-100">
        <div className="py-3 container flex items-center">
          <p>
            Join Leadgeek and start 2021 off with a great way to source daily
            products!
          </p>
          <div className="ml-2 flex items-center text-purple-100 hover:text-purple-200 group transition-colors duration-200">
            <Link
              to={"/signup"}
              className="whitespace-no-wrap underline font-bold focus:outline-none focus:shadow-outline"
            >
              Sign up now
            </Link>
            <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
          </div>
        </div>
      </aside> */}
      <div className="fixed w-screen bg-white shadow-sm">
        <div className="w-full py-6 md:py-4 container center-between">
          {/* logo */}
          <div className="font-bold text-2xl lg:text-2xl group">
            <Link to={`/`} className="all-center text-gray-900 rounded-lg">
              <Logo className="w-8 lg:w-10 mr-4" />
              lead<span className="text-purple-500">geek</span>
            </Link>
          </div>
          {/* mobile button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-200 ease-in-out"
            >
              <svg
                className="svg-base"
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
          <nav className="hidden md:flex md:items-center">
            <div className="relative all-center inter">
              {primaryLinks.map(primaryLink => (
                <Link
                  to={`/${primaryLink.link}`}
                  className={classes.navbarLink}
                  activeClassName="active-secondary-link text-purple-500"
                >
                  {primaryLink.title}
                </Link>
              ))}
            </div>
            <a
              href="https://app.Leadgeek.io/login"
              className={classes.navbarLink}
            >
              Log in
            </a>
            <Link to={"/signup"} className="no-m-first cta-link inter">
              Sign up
            </Link>
          </nav>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? `block` : `hidden`
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-md shadow-md">
          <div className="rounded-md shadow-xs bg-white divide-y-2 divide-gray-200">
            <div className="pt-4 pb-6 px-3 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <Link
                    to={`/`}
                    className="font-bold text-xl text-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    Lead<span className="text-purple-500">Geek</span>
                  </Link>
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
            </div>
            <div className="py-6 px-3 space-y-6 rounded-b-md bg-gray-100">
              <div className="grid grid-cols-2 gap-4">
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

const primaryLinks = [
  {
    title: "How it works",
    link: "how-it-works",
  },
  {
    title: "Tour features",
    link: "features",
  },
  {
    title: "Pricing",
    link: "pricing",
  },
]

const moreItems = [
  {
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
]

const moreItemsMobile = [
  {
    title: "Pricing",
    link: "pricing",
  },
  {
    title: "Demo",
    link: "demo",
  },
  {
    title: "Contact",
    link: "contact",
  },
  {
    title: "About",
    link: "about",
  },
]

const classes = {
  navbarLink: "no-m-first secondary-link text-gray-700 inter",
}

export default Navbar
