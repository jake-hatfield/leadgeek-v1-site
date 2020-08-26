import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Mail from "../assets/mail.svg"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Have a question for NGUX? There's a very real person on the other end of this contact form. Reach out with a UX design question or anything on your mind."
        keywords={[`contact not garbage ux`, `contact NGUX`]}
      />
      <div className="lg:h-screen lg:w-2/5 absolute top-0 negative-z bg-gray-100" />
      <section className="relative text-gray-900">
        <div className="container lg:flex lg:justify-between lg:items-center">
          <header className="lg:w-3/5">
            <div className="mx-auto lg:mx-0 max-w-md">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900">
                Get in touch.
              </h1>
              <h2 className="mt-4 lg:mt-8 text-base md:text-lg lg:text-lg leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo unde quibusdam optio distinctio vitae similique amet
                aut cumque reprehenderit doloremque!
              </h2>
              <div className="mt-10 text-gray-500">
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <address className="mt-6 text-gray-500 not-italic">
                <div className="mt-3 flex items-center">
                  <Mail className="p-2 h-10 w-10 bg-teal-200 rounded-md text-teal-600" />
                  <a
                    href="mailto:hello@leadgeek.io"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2"
                  >
                    <span>he</span>
                    <span>llo@l</span>
                    <span>eadgeek.io</span>
                  </a>
                </div>
              </address>
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
                  Your name
                  <input
                    type="name"
                    name="name"
                    label="Your Name"
                    placeholder="Your Name"
                    required
                    className="mt-2 p-2 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-sm focus:outline-none focus:shadow-outline"
                  />
                </label>
                <label
                  htmlFor="email"
                  className="mt-6 block text-xs font-medium text-gray-700"
                >
                  Your email
                  <input
                    type="email"
                    name="email"
                    label="Your Email"
                    placeholder="youremail@email.com"
                    required
                    className="mt-2 p-2 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-sm focus:outline-none focus:shadow-outline"
                  />
                </label>
                <label className="mt-6 block text-xs font-medium text-gray-700">
                  Your message
                  <textarea
                    name="message"
                    placeholder="Enter your message here."
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
