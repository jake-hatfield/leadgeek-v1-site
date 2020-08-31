import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"
import CTA from "../components/cta"

const demoPage = () => {
  return (
    <Layout>
      <SEO title="Demo" />
      <section className="-mt-40 bg-purple-100 inset-0 text-gray-900">
        <PrimaryHeader
          header={`How-to guides`}
          subHeader={`Each of these free guides contain advice and research to give you more insight into how to become an effective Amazon arbitrage seller.`}
          bottomPadding="pb-32"
          negativeMargin
        />
      </section>
      <section className="my-12 lg:my-24 container">
        <header className="md:mx-auto max-w-2xl text-gray-700">
          <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900 lg:text-center">
            LeadGeek makes it easy for arbitrage sellers like you to:
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            nesciunt, placeat recusandae vel totam aspernatur nemo, tempora
            deserunt harum mollitia dolorem delectus sapiente ratione voluptatum
            sunt maxime possimus sit optio, labore alias ad. Voluptatibus ipsum
            inventore, corrupti cupiditate necessitatibus suscipit.
          </p>
        </header>
      </section>
      <CTA
        padding={`py-12 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="Join now"
        linkText="Contact support"
        link="contact"
        linkStyles="text-purple-100 hover:text-purple-200"
      />
    </Layout>
  )
}

export default demoPage
