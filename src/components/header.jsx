import React from "react"

import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="py-4 container md:flex md:justify-between md:items-center">
      <div className="font-bold text-xl">
        <Link to={`/`} className="text-gray-900">
          Lead<span className="text-purple-500">Geek</span>
        </Link>
      </div>
      <nav className="text-gray-700">
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
          to={`/pricing`}
          className="ml-8 py-3 px-5 border border-purple-400 rounded-md text-purple-400 hover:text-purple-600 hover:border-purple-600 transition-colors duration-200"
        >
          Sign up
        </Link>
      </nav>
    </header>
  )
}

export default Header
