import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Squiggles from "../assets/svgs/squiggles.svg"

const ContactSuccess = () => {
  return (
    <Layout>
      <section className="my-12 md:my-16 lg:my-24 relative container lg:flex justify-center text-center">
        <header className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Thanks for reaching out!
          </h1>
          <div className="mt-4 lg:mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            <p>
              We'll be in touch soon. Our usual response time is within 24
              hours. In the meantime, feel free to learn more about how we can
              help your Amazon business.
            </p>
            <Link
              to={"/"}
              className="mt-6 py-3 px-4 lg:py-4 lg:px-6 block md:inline-block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline"
            >
              Go to the home page
            </Link>
          </div>
        </header>
        <div className="absolute top-0 right-0 z-0 transform translate-y-10 -translate-x-48">
          <Squiggles className="hidden md:inline-block w-64 text-gray-200" />
        </div>
      </section>
    </Layout>
  )
}

export default ContactSuccess
