import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"
import { featureList } from "components/layout/Features"

import ArrowDashed from "assets/svgs/arrow-straight-dashed-solid.svg"

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
                them. The top ${featureList.length} features are the perfect
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
                  <p className="py-1 px-2 handwritten text-xl w-56 rounded-lg bg-gray-900 text-teal-300 transform -rotate-6 shadow-lg text-center">
                    Start the tour or click on a feature to learn more
                  </p>
                  <ArrowDashed className="absolute right-0 h-48 transform -rotate-90 -translate-y-32 translate-x-28 text-purple-500" />
                </div>
              </div>
            }
          />
        </HeaderWrapper>
      </section>
      <section className="relative py-12 px-8 text-gray-900 overflow-x-hidden bg-splatter">
        <div className="max-w-7xl mx-auto">
          <ol className="mt-4 lg:mt-6 feature-list feature-grid">
            {featureList.map((feature, i) => (
              <li
                key={i}
                className="mt-4 lg:mt-6 feature-list-item py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 w-64 transition-main shadow-dark transform rotate-3"
              >
                <header className="">
                  <h3 className="h3">
                    <Link
                      to={`/features/${feature.link}/`}
                      className="secondary-link text-gray-700 inter font-black"
                    >
                      {feature.title}
                    </Link>
                  </h3>
                </header>
                <div className="mt-2 lg:mt-4 leading-relaxed">
                  {feature.desc}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  )
}

export default index
