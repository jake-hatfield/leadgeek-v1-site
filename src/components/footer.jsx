import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="mt-12 lg:mt-24 mb-12 text-gray-500 text-sm lg:text-base">
      <nav className="container flex justify-around md:justify-center flex-wrap">
        <Link
          to={`/pricing`}
          className="hover:text-purple-600 transition-colors duration-200"
        >
          Pricing
        </Link>
        <Link
          to={`/contact`}
          className="ml-8 hover:text-purple-600 transition-colors duration-200"
        >
          Contact
        </Link>
        <Link
          to={`/demo`}
          className="ml-8 hover:text-purple-600 transition-colors duration-200"
        >
          Demo
        </Link>
        <Link
          to={`/privacy`}
          className="mt-4 md:mt-0 ml-0 md:ml-8 hover:text-purple-600 transition-colors duration-200"
        >
          Privacy
        </Link>
        <Link
          to={`/terms`}
          className="mt-4 md:mt-0 ml-0 md:ml-8 hover:text-purple-600 transition-colors duration-200"
        >
          Terms
        </Link>
      </nav>
      <div className="mt-6 container text-center">
        <p>
          &copy; {new Date().getFullYear()} LeadGeek, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
