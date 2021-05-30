import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Page Not Found" />
    <section className="my-12 md:my-16 lg:my-24 relative container lg:flex justify-center text-center">
      <header className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
          404: Page Not Found
        </h1>
        <div className="mt-4 lg:mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          <p>Uh-oh. You just hit a page that doesn't exist on our site.</p>
          <p className="mt-2">
            If you think something should be here,{" "}
            <Link to={`/contact`} className="font-semibold">
              contact support
            </Link>
            .
          </p>
          <Link
            to={"/"}
            className="mt-6 py-3 px-4 lg:py-4 lg:px-6 block md:inline-block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline"
          >
            Go to the home page
          </Link>
        </div>
      </header>
    </section>
  </Layout>
)

export default NotFoundPage
