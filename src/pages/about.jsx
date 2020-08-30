import React from "react"

import Layout from "../components/layout"
import CTA from "../components/cta"

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-24 container text-gray-700">
        <header className="md:text-center">
          <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
            About us
          </span>
          <h1 className="lg:mx-auto max-w-4xl text-4xl lg:text-6xl font-black text-gray-900">
            We are LeadGeek
          </h1>
        </header>
        <div className="mt-6 lg:mt-12 mx-auto max-w-2xl">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            rerum asperiores est rem similique veritatis quod. Totam dolor
            tenetur accusamus ex recusandae, eius asperiores placeat fugiat
            quis, ab in? Quas!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            rerum asperiores est rem similique veritatis quod. Totam dolor
            tenetur accusamus ex recusandae, eius asperiores placeat fugiat
            quis, ab in? Quas!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            rerum asperiores est rem similique veritatis quod. Totam dolor
            tenetur accusamus ex recusandae, eius asperiores placeat fugiat
            quis, ab in? Quas!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            rerum asperiores est rem similique veritatis quod. Totam dolor
            tenetur accusamus ex recusandae, eius asperiores placeat fugiat
            quis, ab in? Quas!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            rerum asperiores est rem similique veritatis quod. Totam dolor
            tenetur accusamus ex recusandae, eius asperiores placeat fugiat
            quis, ab in? Quas!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            rerum asperiores est rem similique veritatis quod. Totam dolor
            tenetur accusamus ex recusandae, eius asperiores placeat fugiat
            quis, ab in? Quas!
          </p>
        </div>
      </section>
      <CTA
        padding={`py-12 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="Join now"
        link="demo"
        linkText="Watch demo"
        linkStyles="text-purple-100 hover:text-purple-200"
      />
    </Layout>
  )
}

export default AboutPage
