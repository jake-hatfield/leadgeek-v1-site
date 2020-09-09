import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"

import Dotted from "../assets/dotted.svg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About LeadGeek" />
      <section className="py-12 lg:py-24 container max-w-2xl text-gray-700">
        <header>
          <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
            About LeadGeek
          </span>
          <h1 className="mt-2 lg:mx-auto max-w-4xl text-4xl lg:text-5xl font-black text-gray-900">
            We're here to help you grow and understand your Amazon business.
          </h1>
        </header>
        <div className="mt-6 lg:mt-10 relative">
          <div className="absolute top-0 right-0 z-0 transform translate-y-12 translate-x-32">
            <Dotted className="hidden lg:inline-block w-24 text-gray-200" />
          </div>
          <p>
            LeadGeek was borne out of frustration trying to run an arbitrage
            business with countless product sourcing tools. With no single point
            with which to control sourcing output, attempting to scale gets
            messy in no time flat. And despite juggling so many monthly software
            subscriptions, often there would be no guarantee of results.
          </p>
          <p className="mt-4">
            Our team is made of experienced Amazon sellers who figured out that
            simplicity is scalability. We create tools that we want ourselves -
            tools that have a premium feel and that are a pleasure to use, but
            most of all tools that deliver results.
          </p>
          <p className="mt-4">
            Our Amazon journey started with us working full-time and attempting
            to arbitrage products on the side. This when-the-time-allows gig is
            all too common, and we knew it wasn't practical long-term.
          </p>
          <p className="mt-4">
            We had to change something - and it came in the form of hiring out
            our sourcing work to virtual assistants. After years of training and
            managing FBA virtual assistant teams, we have it down to an art and
            a science.
          </p>
          <p className="mt-4">
            The efficiencies we've discovered in managing our own team has
            transferred over to how we manage our team to source for you. This
            allows us to bring you scalable arbitrage leads for a mere fraction
            of the price if you were to do it all on your own.
          </p>
          <p className="mt-4">
            We're constantly building, improving, and growing with our members
            to create relevant solutions to their everyday problems. Joining
            LeadGeek means you're a part of a unique community who genuinely
            care about every member's success.
          </p>
          <p className="mt-4">
            If you have any questions about what our team can do for you, please{" "}
            <Link to="/contact" className="font-semibold">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
      <CTA
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="See pricing"
        link="demo"
        linkText="Watch demo"
        linkStyles="text-purple-100 hover:text-purple-200"
        svgOne={
          <div className="absolute top-0 left-0 z-0 transform -translate-y-32 xl:-translate-y-40 xl:-translate-x-24">
            <Dotted className="hidden md:inline-block w-24 text-purple-400" />
          </div>
        }
      />
    </Layout>
  )
}

export default AboutPage
