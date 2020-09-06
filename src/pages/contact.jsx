import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ArrowRight from "../assets/arrow-right.svg"
import Dotted from "../assets/dotted.svg"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Have a question for NGUX? There's a very real person on the other end of this contact form. Reach out with a UX design question or anything on your mind."
        keywords={[`contact not garbage ux`, `contact NGUX`]}
      />
      <div className="pb-8 md:pb-16 lg:pb-24 lg:h-screen lg:w-2/5 absolute top-0 negative-z bg-gray-100" />
      <section className="my-8 md:my-12 lg:my-24 relative text-gray-900">
        <div className="container lg:flex lg:justify-between lg:items-center">
          <header className="lg:w-3/5">
            <div className="relative mx-auto lg:mx-0 max-w-md">
              <div className="absolute top-0 left-0 z-0 transform -translate-x-12 -translate-y-8">
                <Dotted className="hidden lg:inline-block w-24 text-gray-200" />
              </div>
              <div className="relative z-10">
                <h1 className="text-4xl lg:text-6xl font-black text-gray-900">
                  Get in touch.
                </h1>
                <h2 className="mt-4 lg:mt-8 text-base md:text-lg leading-relaxed text-gray-700">
                  Reach out with any questions about our services and our
                  friendly team will respond as soon as possible.
                </h2>

                <div className="mt-10 text-gray-700">
                  <h3 className="text-xl font-semibold">
                    Interested in joining?
                  </h3>
                  <address className="mt-2 text-gray-500 not-italic">
                    <div className="mt-3 flex items-end">
                      <a
                        href="mailto:hello@leadgeek.io"
                        target="_blank"
                        rel="noreferrer"
                        className="flex whitespace-no-wrap items-center link text-gray-500 group hover:text-gray-700 focus:outline-none focus:shadow-outline"
                      >
                        <span>he</span>
                        <span>llo@l</span>
                        <span>eadgeek.io</span>
                        <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
                      </a>
                    </div>
                  </address>
                </div>
                <div className="mt-6 text-gray-700">
                  <h3 className="text-xl font-semibold">
                    Already a LeadGeek member?
                  </h3>
                  <div className="mt-2 inline-block text-gray-500">
                    <a
                      href="mailto:support@leadgeek.io"
                      className="flex whitespace-no-wrap items-center link text-gray-500 group hover:text-gray-700 focus:outline-none focus:shadow-outline"
                    >
                      Contact support
                      <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article className="mt-10 lg:mt-0 lg:w-2/5 lg:flex lg:items-start lg:justify-end">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mx-auto lg:mx-0 w-full max-w-md rounded-md shadow-md bg-white"
            >
              <input type="hidden" name="contact-page" value="contact" />
              <div className="pt-6 pb-2 px-4 md:px-8">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-700"
                >
                  Full name
                  <input
                    type="name"
                    name="name"
                    label="Name"
                    required
                    className="mt-1 py-1 px-2 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-xs placeholder-gray-300 focus:outline-none focus:shadow-outline"
                  />
                </label>
                <label
                  htmlFor="email"
                  className="mt-6 block text-xs font-medium text-gray-700"
                >
                  Email
                  <input
                    type="email"
                    name="email"
                    label="Email"
                    required
                    className="mt-1 py-1 px-2 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-xs placeholder-gray-300 focus:outline-none focus:shadow-outline"
                  />
                </label>
                <label className="mt-6 block text-xs font-medium text-gray-700">
                  Message
                  <textarea
                    name="message"
                    required
                    className="mt-2 resize-none pt-2 px-2 pb-16 md:pr-12 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-sm focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mt-1 bg-gray-100">
                <div className="p-4 md:px-8">
                  <button
                    type="submit"
                    className="py-4 px-5 block md:inline-block relative rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors duration-200"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
