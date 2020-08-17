import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PricingTable from "../components/pricingTable"
import SideCard from "../components/sideCard"
import Faq from "../components/faq"

import Check from "../assets/check.svg"
import IconExample from "../assets/bell.svg"
import Play from "../assets/play.svg"

const PricingPage = () => {
  const growFeatureList = [
    {
      number: "1",
      body: "Feature 1",
    },
    {
      number: "2",
      body: "Feature 2",
    },
    {
      number: "3",
      body: "Feature 3",
    },
    {
      number: "4",
      body: "Feature 4",
    },
    {
      number: "5",
      body: "Feature 5",
    },
  ]
  const proFeatureList = [
    {
      number: "1",
      body: "Feature 1",
    },
    {
      number: "2",
      body: "Feature 2",
    },
    {
      number: "3",
      body: "Feature 3",
    },
    {
      number: "4",
      body: "Feature 4",
    },
    {
      number: "5",
      body: "Feature 5",
    },
  ]
  const bundleFeatureList = [
    {
      number: "1",
      body: "Feature 1",
    },
    {
      number: "2",
      body: "Feature 2",
    },
    {
      number: "3",
      body: "Feature 3",
    },
    {
      number: "4",
      body: "Feature 4",
    },
    {
      number: "5",
      body: "Feature 5",
    },
    {
      number: "6",
      body: "Feature 6",
    },
  ]
  const criteriaFeatureRows = [
    {
      rowID: 100,
      cells: [
        { cellID: 101, description: true, value: "Profit" },
        { cellID: 102, description: false, value: true },
        { cellID: 103, description: false, value: true },
        { cellID: 104, description: false, value: false },
      ],
    },
    {
      rowID: 200,
      cells: [
        { cellID: 200, description: true, value: "ROI" },
        { cellID: 201, description: false, value: true },
        { cellID: 202, description: false, value: "50%" },
        { cellID: 203, description: false, value: "40%" },
      ],
    },
  ]
  const supportFeatureRows = [
    {
      rowID: 100,
      cells: [
        { cellID: 101, description: true, value: "Profit" },
        { cellID: 102, description: false, value: true },
        { cellID: 103, description: false, value: true },
        { cellID: 104, description: false, value: false },
      ],
    },
    {
      rowID: 200,
      cells: [
        { cellID: 200, description: true, value: "ROI" },
        { cellID: 201, description: false, value: true },
        { cellID: 202, description: false, value: "50%" },
        { cellID: 203, description: false, value: "40%" },
      ],
    },
  ]
  const growPrice = 129
  const proPrice = 189
  const bundlePrice = 263
  const proLink = "pro"
  const growLink = "grow"
  return (
    <Layout>
      <SEO title="Pricing" />
      <section className="-mt-40 h-5/6 lg:h-2/3 bg-gray-100 inset-0 text-gray-900">
        <header className="mt-12 lg:mt-16 pt-32 lg:pt-40 pb-16 container text-center">
          <h1 className="text-3xl lg:text-4xl font-black">
            Online arbitrage leads for e-com sellers.
          </h1>
          <h2 className="mt-8 mx-auto max-w-3xl text-base lg:text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            unde quibusdam optio distinctio vitae similique amet aut cumque
            reprehenderit doloremque!
          </h2>
        </header>
        <article className="pb-24 container lg:grid lg:grid-cols-10">
          <div className="max-w-md mx-auto lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div>
                <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-purple-400"></div>
                <div className="absolute inset-x-0 top-0 transform translate-y-px">
                  <div className="flex justify-center transform -translate-y-1/2">
                    <span className="inline-flex rounded-full bg-purple-400 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                      Get both plans
                    </span>
                  </div>
                </div>
                <header className="pt-12 pb-6 px-6 bg-white rounded-t-md text-center background-repeat">
                  <h3 className="text-2xl lg:text-3xl font-semibold">
                    Grow + Pro Bundle
                  </h3>
                  <div className="mt-1 flex items-center justify-center text-5xl font-bold">
                    <span className="-ml-10 text-gray-600 text-2xl line-through font-light tracking-wider">
                      $318
                    </span>
                    <span className="ml-1 text-2xl font-bold">$</span>
                    <span>{bundlePrice}</span>
                    <span className="ml-1 inline-block text-gray-600 text-2xl">
                      /mo
                    </span>
                  </div>
                </header>
                <div className="border-t-2 border-purple-400 rounded-b-md py-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                  <ul>
                    {bundleFeatureList.map(feature => (
                      <li key={feature.number} className="flex items-center">
                        <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
                        <p className="ml-4 text-gray-600">{feature.body}</p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/signup/bundle`}
                    className="mt-8 py-3 block shadow-sm bg-purple-600 text-white hover:bg-purple-500 rounded-md text-center font-bold transition-colors duration-200 focus:outline-none focus:shadow-outline"
                  >
                    Get the Bundle
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <SideCard
            featureList={growFeatureList}
            plan={`Grow`}
            price={growPrice}
            link={growLink}
            start={true}
          />
          <SideCard
            featureList={proFeatureList}
            plan={`Pro`}
            price={proPrice}
            link={proLink}
            start={false}
          />
        </article>
      </section>
      <section className="py-12 lg:py-24 bg-purple-600 text-white">
        <div className="container">
          <header className="text-3xl lg:text-4xl font-bold text-center">
            <h2>Why customers choose LeadGeek</h2>
          </header>
          <div className="mt-12 md:flex md:justify-between">
            <div className="lg:w-1/3">
              <IconExample className="p-2 h-10 w-10 bg-white rounded-md text-purple-600" />
              <h3 className="mt-6 lg:text-xl font-medium">
                Identifying your dream personas
              </h3>
              <p className="mt-4 text-purple-100">
                Founders who cast a wide net inevitably pick up some trash.
                Rather than marketing wide, I will help you market deep by
                creating a clear ideal persona (and equally as importantly
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:ml-12 lg:w-1/3">
              <IconExample className="p-2 h-10 w-10 bg-white rounded-md text-purple-600" />
              <h3 className="mt-6 lg:text-xl font-medium">
                Clarifying your message
              </h3>
              <p className="mt-4 text-purple-100">
                Your company may solve many problems, but which one(s) do your
                users care about the most? I will trim the fat from your
                messaging to serve your users up some filet-mignon quality
                clarity.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:ml-12 lg:w-1/3">
              <IconExample className="p-2 h-10 w-10 bg-white rounded-md text-purple-600" />
              <h3 className="mt-6 lg:text-xl font-medium">
                Clarifying your message
              </h3>
              <p className="mt-4 text-purple-100">
                Your company may solve many problems, but which one(s) do your
                users care about the most? I will trim the fat from your
                messaging to serve your users up some filet-mignon quality
                clarity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-900">
        <header className="mt-12 lg:mt-24 container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">Compare plans</h2>
        </header>
        <PricingTable
          tableHeader={`minimum criteria`}
          featureRows={criteriaFeatureRows}
        />
        <PricingTable
          tableHeader={`support`}
          featureRows={supportFeatureRows}
        />
      </section>
      <Faq />
      <section className="mt-12 lg:mt-24 container text-center">
        <header>
          <h2 className="font-bold text-2xl lg:text-3xl text-gray-900">
            Ready to get started?
            <span className="mt-4 lg:mt-2 block">
              Sign up for LeadGeek today.
            </span>
          </h2>
          <nav className="mt-12 font-semibold">
            <Link
              to={`/demo`}
              className="mt-4 md:mt-0 py-4 px-5 block md:inline-block relative rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200"
            >
              Watch a demo
              <Play className="h-5 w-5 absolute button-icon inline bg-white rounded-full text-purple-600" />
            </Link>
            <Link
              to={`/contact`}
              className="ml-2 py-4 px-5 block md:inline-block rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
            >
              Contact support
            </Link>
          </nav>
        </header>
      </section>
    </Layout>
  )
}

export default PricingPage
