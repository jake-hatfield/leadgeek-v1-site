import React from "react"
import { Link } from "gatsby"

import Play from "../assets/play.svg"

const CTA = () => {
  return (
    <section className="my-12 lg:my-24 container text-center">
      <header className="mt-6 lg:mt-12 mx-auto md:mx-0 container font-semibold">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
          Ready to get started?
          <span className="mt-4 lg:mt-2 block">
            Sign up for LeadGeek today.
          </span>
        </h2>
        <nav className="mt-4 lg:mt-6 mx-auto">
          <Link
            to={`/pricing`}
            className="py-3 px-4 lg:py-4 lg:px-6 block md:inline-block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200"
          >
            Get started
          </Link>
          <Link
            to={`/demo`}
            className="mt-4 md:mt-0 ml-0 md:ml-2 py-3 px-4 lg:py-4 lg:px-6 block md:inline-block relative shadow-sm rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
          >
            Watch a demo
            <Play className="h-5 w-5 absolute button-icon inline bg-white rounded-full text-purple-600" />
          </Link>
        </nav>
      </header>
    </section>
  )
}

export default CTA
