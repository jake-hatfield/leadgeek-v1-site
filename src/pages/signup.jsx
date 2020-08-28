import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PrimaryHeader from "../components/primaryHeader"

import Check from "../assets/check.svg"
import ArrowRight from "../assets/arrow-right.svg"

const signupPage = () => {
  return (
    <Layout>
      <section className="-mt-40 bg-gray-100 inset-0 text-gray-900">
        <PrimaryHeader
          header={`Choose the sourcing plan that fits your needs.`}
          subHeader={`Are you just getting started selling? Have some experience under your belt? Join our premium sourcing service and start flipping arbitrage products hassle-free.`}
          negativeMargin
          bottomPadding={`pb-48`}
        />
      </section>
      <section className="-mt-32 container">
        <article className="md:flex md:justify-between relative z-10 rounded-md bg-gray-100 shadow-lg text-gray-700">
          <header className="pt-6 pb-2 px-8 md:w-2/3 md:rounded-tl-md md:rounded-bl-md bg-white border-r-2 border-gray-200">
            <h2 className="font-bold text-2xl lg:text-3xl text-gray-900 ">
              Grow+Pro Bundle
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a
              placeat esse beatae eos et rerum numquam?
            </p>
            <div className="mt-8 flex items-center flex-no-wrap">
              <div className="uppercase whitespace-no-wrap text-sm md:text-base text-purple-600 font-bold">
                What's included
              </div>
              <span className="ml-2 w-full border border-gray-200" />
            </div>
            <ul className="mt-4 grid grid-cols-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
                <span className="ml-4">Thing 1</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
                <span className="ml-4">Thing 2</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
                <span className="ml-4">Thing 3</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
                <span className="ml-4">Thing 4</span>
              </li>
            </ul>
          </header>
          <div className="px-8 md:w-1/3 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg">Subscribe today for:</p>
            <div className="mt-1 flex items-center justify-center text-5xl font-bold">
              <span className="text-gray-900">$263</span>
              <span className="ml-1 inline-block text-gray-600 text-2xl">
                /mo
              </span>
            </div>
            <div className="inline-block">
              <Link
                to={`/pricing#features`}
                className="flex items-center text-gray-500 group hover:text-gray-700 focus:outline-none focus:shadow-outline"
              >
                Compare all features
                <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
              </Link>
            </div>
            <div className="w-full">
              <Link
                to={`/signup/bundle`}
                className="mt-6 py-3 block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 text-center font-bold transition-colors duration-200 focus:outline-none focus:shadow-outline"
              >
                Get the Bundle
              </Link>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default signupPage
