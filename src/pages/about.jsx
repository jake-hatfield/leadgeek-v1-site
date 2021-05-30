import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"

import Signature from "assets/svgs/signature.svg"
import Loopy from "assets/svgs/loopy-dashed.svg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About Leadgeek"
        description="Learn about our company, why we do what we do, and how we're the perfect team to help you grow your FBA business."
      />
      <section className="py-12 text-gray-700 bg-splatter">
        <div className="container max-w-2xl">
          <header>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter text-shadow text-center">
              Here's what Leadgeek is about
            </h1>
          </header>
          <div className="mt-10 py-6 container relative bg-white rounded-lg border border-gray-900 stack-sm text-gray-900">
            <p>Hey there-</p>
            <p className="mt-4">I'm Jake, founder and CEO of Leadgeek.</p>
            <p className="mt-4">
              Flipping products on Amazon gets a bad rap, but it shouldn't.
              Arbitrage is a business model that's stood the test of time, and
              when done well - is actually really rewarding.
            </p>
            <p className="mt-4">
              Discovering something that's mis-valued and selling it in a
              different marketplace for a profit can be truly enjoyable. Sure,
              you're making money, but there's a
              striking-gold-type-of-fulfillment to it. Maybe it's time to
              refresh Seller Central to check for another sale?
            </p>
            <p className="mt-4">But somewhere along the way things changed.</p>
            <p className="mt-4">
              Amazon FBA turned into "start selling today and pick up the Lambo
              tomorrow." It was pitched as something super-simple that didn't
              require any thought or effort.
            </p>
            <p className="mt-4">
              People who went into it with that mindset were frustrated and let
              down, and the "gurus" who led them on just let it happen.
            </p>
            <p className="mt-4">
              The truth is, there's a lot to learn in e-commerce. There are
              countless product sourcing tools; and with no single point with
              which to control lead generation, attempting to scale gets messy
              in no time flat. Despite juggling so many monthly software
              subscriptions, often there's no guarantee of results.
            </p>
            <p className="mt-4">
              Expensive tools that were supposed to help you find new products
              to sell felt like they were stuck in last decade. It was all
              overly complicated and a pain to use. To say the least, lead gen
              was in desperate need of a dust-off.
            </p>
            <p className="mt-4">
              Enter Leadgeek. Leadgeek believes that simplicty is scalability.
              Having a predictable source for leads with predictable standards
              means that you can grow... predictably. And with a singular
              service, it costs just a fraction of the price if you were to do
              it all on your own.
            </p>
            <p className="mt-4">
              With lots of member input, I create software that I'd want myself
              - software that has a premium feel and is a pleasure to use, but
              most of all software that delivers results.
            </p>
            <p className="mt-4">
              I'm constantly building, improving, and growing with Leadgeek
              members to create relevant solutions to their everyday problems.
              Leadgeek is a reset button to make arbitrage efficient, potent,
              and fresh.
            </p>
            <p className="mt-4">
              If you have any questions about what Leadgeek can simplify for
              you, please{" "}
              <Link to="/contact/" className="secondary-link">
                shoot me a message
              </Link>
              .
            </p>
            <p className="mt-4">All the best,</p>
            <div>
              <Signature className="w-40 lg:w-48 mt-6" />
            </div>
          </div>
        </div>
        <article className="relative pt-40 px-4 lg:px-0">
          <Loopy className="absolute top-0 right-1/2 h-32 lg:h-40 text-purple-500 transform translate-y-12" />
          <div
            className={`relative mx-auto md:max-w-xl lg:max-w-2xl mt-8 lg:mt-16 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-dark transform rotate-2 hover:-rotate-1 text-center`}
          >
            <h3 className="text-xl md:text-2xl xl:text-3xl font-black text-gray-900 inter">
              Oh yeah, one last thing...
            </h3>
            <div className="mt-4 lg:mt-6 h4">
              Leadgeek is totally bootstrapped and independently owned. I'm not
              about that venture capital life because I believe that bigger
              isn't always better for the product or its customers. I don't know
              what the future holds for the company, but I know Leadgeek will
              stay small, dedicated, and nimble to deliver the most rad and
              relevant product to <i>you</i>. Leadgeek succeeds if you do.
              <br />
              <br />
              Anyway, have an amazing day!
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default AboutPage
