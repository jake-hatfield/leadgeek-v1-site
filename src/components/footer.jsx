import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 border-t-2 border-gray-200 text-gray-500 lg:text-base">
      <nav className="container md:flex md:justify-center text-center">
        <div>
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
        </div>
        <div className="mt-4 md:mt-0 md:ml-8">
          <Link
            to={`/privacy`}
            className="hover:text-purple-600 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            to={`/terms`}
            className="ml-8 hover:text-purple-600 transition-colors duration-200"
          >
            Terms
          </Link>
        </div>
      </nav>
      <div className="mt-6 container text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} LeadGeek, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
