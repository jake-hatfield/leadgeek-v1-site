import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"
import { featureList } from "components/layout/Features"

import LongArrow from "assets/svgs/arrow-straight-solid.svg"

const index = () => {
  return (
    <Layout>
      <SEO
        title="Online Arbitrage Leads & Sourcing for Amazon Sellers"
        description="Receive potent online arbitrage leads every weekday with Leadgeek. Start, grow, and mature your Amazon FBA business with premium arbitrage leads."
      />
      <section className="relative overflow-hidden bg-splatter">
        <HeaderWrapper>
          <PrimaryHeader
            title={`Online arbitrage leads made waaay better.`}
            desc={
              <p>
                Leadgeek lets you to find the products you want, when you want
                them. The top {featureList.length} features are the perfect
                combination of hand-curation and wicked-fast software that make
                arbitrage efficient and (dare I say it?)... fun.
              </p>
            }
            nav
            linkOne={`features/criteria`}
            linkOneText={`Start the tour`}
            svgOne={
              <div className="hidden lg:block absolute right-1/2 transform -translate-y-16 -translate-x-72">
                <div className="relative">
                  <p className="py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-56 -rotate-6 hover:-rotate-3">
                    Start the tour or click on a feature to learn more
                  </p>
                  <LongArrow className="absolute right-0 h-48 transform -rotate-90 -translate-y-32 translate-x-28 text-gray-500" />
                </div>
              </div>
            }
          />
        </HeaderWrapper>
      </section>
      <section className="relative pb-12 px-8 text-gray-900 overflow-x-hidden bg-splatter">
        <div className="max-w-7xl mx-auto">
          <ol className="mt-4 lg:mt-6 feature-list feature-grid">
            {featureList.map((feature, i) => (
              <Link key={i} to={`/features/${feature.link}/`}>
                <li className="mt-4 lg:mt-6 feature-list-item py-4 lg:py-6 px-6 bg-white hover:bg-purple-500 hover:text-white group rounded-lg border border-gray-900 w-64 transition-main shadow-dark">
                  <header className="text-gray-900 group-hover:text-white">
                    <h2 className="text-lg xl:text-xl inter font-black">
                      {feature.title}
                    </h2>
                  </header>
                  <div className="mt-2 lg:mt-4 leading-relaxed">
                    {feature.desc}
                  </div>
                </li>
              </Link>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  )
}

export default index
