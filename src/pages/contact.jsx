import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ArrowRight from "../assets/arrow-right.svg"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Have a question for NGUX? There's a very real person on the other end of this contact form. Reach out with a UX design question or anything on your mind."
        keywords={[`contact not garbage ux`, `contact NGUX`]}
      />
      <div className="lg:h-screen lg:w-2/5 absolute top-0 negative-z bg-gray-100" />
      <section className="my-8 md:my-12 lg:my-24 relative text-gray-900">
        <div className="container lg:flex lg:justify-between lg:items-center">
          <header className="lg:w-3/5">
            <div className="mx-auto lg:mx-0 max-w-md">
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900">
                Get in touch.
              </h1>
              <h2 className="mt-4 lg:mt-8 text-base md:text-lg leading-relaxed text-gray-700">
                Reach out with any questions about our services and our friendly
                team will respond as soon as possible.
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
          </header>
          <article className="mt-10 lg:mt-0 lg:w-2/5 lg:flex lg:items-start lg:justify-end">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mx-auto lg:mx-0 w-full max-w-md"
            >
              <input type="hidden" name="contact-page" value="contact" />
              <div>
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
                    className="mt-2 p-2 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-sm focus:outline-none focus:shadow-outline"
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
                    className="mt-2 p-2 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-sm focus:outline-none focus:shadow-outline"
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
                <button
                  type="submit"
                  className="mt-4 py-4 px-5 block md:inline-block relative rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors duration-200"
                >
                  Send message
                </button>
              </div>
            </form>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
