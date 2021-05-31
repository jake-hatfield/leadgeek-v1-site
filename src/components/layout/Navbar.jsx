import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "assets/svgs/leadgeek-logo-light.svg"

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
              to={"/pricing/"}
              className="whitespace-no-wrap underline font-bold focus:outline-none focus:shadow-outline"
            >
              Sign up now
            </Link>
            <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
          </div>
        </div>
      </aside> */}
      <div className="fixed w-screen bg-white shadow-sm">
        <div className="w-full py-4 container center-between">
          {/* logo */}
          <div className="font-bold text-xl lg:text-2xl group">
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
                  key={primaryLink.link}
                  to={`/${primaryLink.link}/`}
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
            <Link to={"/pricing/"} className="no-m-first cta-link inter">
              Sign up
            </Link>
          </nav>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? `block` : `hidden`
        } fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-md shadow-md">
          <div className="rounded-md shadow-dark border border-gray-900 bg-white divide-y divide-gray-900">
            <div className="p-4 space-y-6">
              <div className="flex items-start justify-between">
                <div className="font-bold text-xl lg:text-2xl group">
                  <Link
                    to={`/`}
                    className="all-center text-gray-900 rounded-lg"
                  >
                    <Logo className="w-8 lg:w-10 mr-4" />
                    lead<span className="text-purple-500">geek</span>
                  </Link>
                </div>
                <div className="-mt-1 -mr-2">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 ring-gray transition-main"
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
            <div className="py-6 px-4 text-gray-700 font-semibold">
              <ul className="grid grid-rows gap-4">
                {mobileLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={`/${link.link}/`} className="flex items-center">
                      <span className="p-1 rounded-lg bg-gray-900 text-teal-300 shadow-tealSm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-sm"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          {link.path}
                        </svg>
                      </span>
                      <span className="ml-4">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 space-y-6 rounded-b-md">
              <div className="space-y-6 text-center">
                <Link to={`/pricing/`} className="block cta-link inter">
                  Sign up now
                </Link>
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

const mobileLinks = [
  {
    title: "How it works",
    link: "how-it-works",
    path: (
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      />
    ),
  },
  {
    title: "Tour features",
    link: "features",
    path: (
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    ),
  },
  {
    title: "Pricing",
    link: "pricing",
    path: (
      <g>
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
          clipRule="evenodd"
        />
      </g>
    ),
  },
  {
    title: "Contact",
    link: "contact",
    path: (
      <g>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </g>
    ),
  },
  {
    title: "About",
    link: "about",
    path: (
      <g>
        <path
          fillRule="evenodd"
          d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </g>
    ),
  },
]

const classes = {
  navbarLink: "no-m-first secondary-link text-gray-700 inter",
}

export default Navbar
