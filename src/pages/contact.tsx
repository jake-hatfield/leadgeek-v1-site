import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import FormField from "@components/utils/FormField"

import OgImage from "@assets/images/og/og-contact.jpg"

interface ContactPageProps {
  location: Location
}

const ContactPage: React.FC<ContactPageProps> = ({ location }) => {
  const title = "Contact"
  const description =
    "Have a question about Leadgeek? We'll do our best to get you some answers. Ask away and receive a prompt reply."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/contact/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Reach out & chat with Leadgeek",
            },
          ],
        }}
        language="en"
      />
      <section className="py-12 md:py-24 relative text-gray-900 bg-splatter">
        <div className="container lg:flex lg:justify-between lg:items-center">
          <header className="lg:w-3/5">
            <div className="relative mx-auto lg:mx-0 max-w-md">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter">
                  Get in touch
                </h1>
                <p className="mt-4 lg:mt-6 pb-4 h4 bg-white text-gray-700">
                  Have a question? Shoot! We're sharp as a tack.
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
              name="Primary Contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact-success/"
              className="mx-auto lg:mx-0 w-full max-w-md rounded-lg bg-white border border-gray-900 shadow-pinkSm transform -rotate-1"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="Primary Contact" />
              <div className="pt-6 pb-2 px-4 md:px-8">
                <FormField
                  label="Name *"
                  type="text"
                  name="name"
                  placeholder="Dave Saunders"
                  required={true}
                  styles={null}
                />
                <FormField
                  label="Email *"
                  name="email"
                  type="email"
                  placeholder="dsaunders@gmail.com"
                  required={true}
                  styles={null}
                />
                <label className="pt-4 form-field-label">
                  Message *
                  <textarea
                    name="message"
                    placeholder="Have any questions about Leadgeek or arbitrage? Ask away..."
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
