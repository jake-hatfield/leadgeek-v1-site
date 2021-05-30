import React from "react"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import FormField from "components/utils/FormField"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Have a question for our team? We're real people on the other end of the screen, so reach out with any questions or concerns."
      />
      <section className="py-12 md:py-24 relative text-gray-900 bg-splatter">
        <div className="container lg:flex lg:justify-between lg:items-center">
          <header className="lg:w-3/5">
            <div className="relative mx-auto lg:mx-0 max-w-md">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter text-shadow">
                  Get in touch.
                </h1>
                <p className="mt-4 lg:mt-6 pb-4 h4 bg-white text-gray-700">
                  Have a question? Shoot! We're sharp as a tack but please don't
                  sit on us.
                </p>
                <div className="mt-2 bg-white">
                  <h3 className="text-lg xl:text-xl inter font-black">
                    Support hours:
                  </h3>
                  <p className="mt-2 text-base text-gray-700">
                    Monday-Friday 9am-5pm CST
                  </p>
                  <div className="mt-4 lg:mt-6">
                    <h3 className="text-lg xl:text-xl inter font-black">
                      Already a Leadgeek member?
                    </h3>
                    <div className="mt-2 inline-block text-base text-gray-700">
                      <a
                        href="mailto:support@leadgeek.io"
                        className="secondary-link"
                      >
                        Contact support
                      </a>
                    </div>
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
              action="/contact-success"
              className="mx-auto lg:mx-0 w-full max-w-md rounded-lg bg-white border border-gray-900 shadow-dark transform -rotate-1 hover:rotate-0"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="pt-6 pb-2 px-4 md:px-8">
                <FormField
                  label="Name"
                  type="name"
                  placeholder="Dave Saunders"
                  required={true}
                />
                <FormField
                  label="Email"
                  type="email"
                  placeholder="dsaunders@gmail.com"
                  required={true}
                />
                <label className="pt-4 form-field-label">
                  Message
                  <textarea
                    name="message"
                    placeholder="So...what is arbitrage?"
                    required
                    className="mt-2 resize-none pt-2 px-2 pb-16 w-full rounded-md text-sm border border-gray-200 hover:border-purple-300 placeholder-gray-300 ring-purple"
                  />
                </label>
              </div>

              <div className="p-4 md:px-8">
                <button type="submit" className="cta-link inter">
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
