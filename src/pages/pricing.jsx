import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PricingTable from "../components/pricingTable"

const PricingPage = () => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <section className="-mt-40 bg-gray-100">
        <header className="mt-12 lg:mt-24 py-32 lg:py-40 container text-center">
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900">
            Online arbitrage leads for e-com sellers.
          </h1>
          <h2 className="mt-8 mx-auto max-w-3xl text-base lg:text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            unde quibusdam optio distinctio vitae similique amet aut cumque
            reprehenderit doloremque!
          </h2>
        </header>
        <div className="container">
          <Link to={"/signup/grow"}>Sign Up Now</Link>
        </div>
      </section>
      <section>
        <header className="mt-12 lg:mt-24 container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Compare plans
          </h2>
        </header>
        <PricingTable />
      </section>
    </Layout>
  )
}

export default PricingPage
