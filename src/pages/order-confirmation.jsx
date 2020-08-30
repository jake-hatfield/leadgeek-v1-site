import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ArrowRight from "../assets/arrow-right.svg"
import Check from "../assets/check.svg"

const OrderConfirmationPage = () => {
  const items = [
    {
      id: 1,
      description: `Any educational material will be emailed to you over the next few
  days.`,
    },
    {
      id: 2,
      description: `Online arbitrage leads will be emailed to you every weekday morning.`,
    },
    {
      id: 3,
      description: (
        <span>
          To join additional lists,{" "}
          <a
            href="mailto:support@leadgeek.io?subject=Request%20to%20Join%20Additional%20Lists"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-dotted"
          >
            contact support
          </a>
          .
        </span>
      ),
    },
  ]
  return (
    <Layout>
      <SEO title="Order Confirmation" />
      <div className="lg:h-screen lg:w-2/5 absolute top-0 right-0 negative-z bg-purple-100" />
      <section className="my-8 md:my-12 lg:my-24 container md:flex md:justify-between">
        <header className="md:max-w-2xl md:w-3/5 ">
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900">
            Thank you for joining LeadGeek!
          </h1>
          <p className="mt-4 lg:mt-6 lg:max-w-3xl lg:text-lg leading-relaxed text-gray-700">
            You should receive a confirmation email shortly. We're happy to
            assist with any part of your Amazon selling journey, so reach out
            with any questions or concerns.
          </p>
          <div className="mt-4 py-2 px-4 border-l-8 border-teal-400 bg-teal-200 text-teal-600">
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="mt-1 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="ml-2 text-sm">
                We'll send your leads to the email you signed up with. If you
                prefer to receive leads to a different email address, please
                contact support.
              </p>
            </div>
          </div>
          <div className="text-gray-500">
            <h2 className="mt-8 text-2xl lg:text-3xl font-bold text-gray-700">
              Next steps
            </h2>
            <ul>
              {items.map(item => (
                <li
                  key={item.id}
                  className="first:mt-4 mt-2 flex md:items-center"
                >
                  <Check className="mt-1 md:mt-0 h-4 w-4 flex-none text-teal-500 bg-teal-200 rounded-full" />
                  <p className="ml-4">{item.description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4"></p>
          </div>
        </header>
        <article className="lg:w-1/4 text-gray-500">
          <header className="mt-6 lg:mt-0 text-gray-700">
            <h3 className="text-xl font-semibold">Have any questions?</h3>
            <div className="mt-2 inline-block">
              <a
                href="mailto:support@leadgeek.io"
                className="flex whitespace-no-wrap items-center text-gray-500 group hover:text-gray-700 focus:outline-none focus:shadow-outline"
              >
                <span>sup</span>
                <span>port@l</span>
                <span>eadgeek.io</span>
                <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
              </a>
            </div>
          </header>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Support hours:
            </h3>
            <p className="mt-2">
              <strong className="font-semibold">8am - 5pm</strong> CST
              Monday-Friday
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Leads sent at:
            </h3>
            <p className="mt-2">
              <strong className="font-semibold">8am</strong> CST Monday-Friday
            </p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default OrderConfirmationPage
