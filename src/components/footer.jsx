import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400 lg:text-lg">
      <nav className="container md:flex md:justify-center text-center">
        <div>
          <Link
            to={`/pricing`}
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            to={`/contact`}
            className="ml-8 hover:text-gray-200 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to={`/demo`}
            className="ml-8 hover:text-gray-200 transition-colors duration-200"
          >
            Demo
          </Link>
        </div>
        <div className="mt-4 md:mt-0 md:ml-8">
          <Link
            to={`/privacy`}
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            to={`/terms`}
            className="ml-8 hover:text-gray-200 transition-colors duration-200"
          >
            Terms
          </Link>
        </div>
      </nav>
      <div className="mt-6 container text-center text-sm md:text-base">
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <Link
            to={`/`}
            className="hover:text-gray-200 transition-colors duration-200"
          >
            LeadGeek
          </Link>
          , Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
