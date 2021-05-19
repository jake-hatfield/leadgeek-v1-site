import React from "react"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import PrimaryHeader from "components/primaryHeader"
import CTA from "components/cta"

import Dotted from "../assets/svgs/dotted.svg"
import HalfDotted from "../assets/svgs/half-dotted.svg"
import Squiggles from "../assets/svgs/squiggles.svg"

const demoPage = () => {
  return (
    <Layout>
      <SEO
        title="Product Demo"
        description="Watch a demo of leadgeek in action to see how our service can simplify and improve your daily FBA operations."
      />
      <section className="-mt-40 bg-purple-100 inset-0 text-gray-900">
        <PrimaryHeader
          header={`Don't dig through information, surface it.`}
          subHeader={`Sourcing workarounds are over with, sourcing workflows are taking over. leadgeek feels familiar to how you find products now, but it's a much more efficient experience. Watch a full walkthrough to see our product in action.`}
          bottomPadding="pb-32"
          negativeMargin
          svgOne={
            <div className="absolute bottom-0 left-0 z-0 transform -translate-y-8">
              <Squiggles className="hidden md:inline-block w-64 text-purple-200" />
            </div>
          }
        />
      </section>
      <section className="-mt-20 md:-mt-16 relative container flex justify-center">
        <div className="absolute bottom-0 right-0 z-0 transform rotate-90 translate-y-12">
          <HalfDotted className="hidden md:inline-block w-48 text-gray-200" />
        </div>
        <div className="video-responsive">
          <iframe
            className="video-responsive-item"
            title="leadgeek Demo"
            src="https://player.vimeo.com/video/461992164"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </section>
      <section className="my-12 lg:my-24 container">
        <header className="md:mx-auto max-w-2xl text-gray-700">
          <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900">
            Streamlined data = better decisions.
          </h2>
          <p className="mt-6">
            leadgeek saves you time by presenting the information you need - and
            only the information you need. The days of sorting through thousands
            of products in a software's awful interface are over, as are the
            hours you spend going through an "organized" sheet of leads from
            another service.
          </p>
          <p className="mt-4">
            Our service helps surface the data that's important to you in
            seconds. Focus on the aspects of product selection that are
            important to you so you can evaluate, order, and ship your inventory
            as quickly as possible.
          </p>
        </header>
      </section>
      <CTA
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="See pricing"
        linkText="Contact us"
        link="contact"
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

export default demoPage
