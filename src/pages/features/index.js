import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

import { featureList } from "components/layout/Features"

const index = () => {
  return (
    <Layout>
      <SEO
        title="Online Arbitrage Leads & Sourcing for Amazon Sellers"
        description="Receive potent online arbitrage leads every weekday with Leadgeek. Start, grow, and mature your Amazon FBA business with premium arbitrage leads."
      />
      <section className="relative">
        <HeaderWrapper>
          <PrimaryHeader
            title={`Online arbitrage leads made waaay better.`}
            desc={`Leadgeek lets you to find the products you want, when you want them. The top ${featureList.length} features are the perfect combination of hand-curation and wicked-fast software that make arbitrage efficient and (dare I say it?)... fun.`}
            nav
            linkOne={`features/criteria`}
            linkOneText={`Start the tour`}
            svgOne={
              <div className="hidden lg:block absolute right-1/2 transform -translate-y-16 -translate-x-64">
                <p className="handwritten text-xl w-56 text-purple-500 transform -rotate-6">
                  Start the tour or click on a feature to learn more
                </p>
              </div>
            }
          />
        </HeaderWrapper>
      </section>
      <section className="px-8 max-w-7xl mx-auto text-gray-900">
        <ol className="mt-4 lg:mt-6 feature-list feature-grid">
          {featureList.map((feature, i) => (
            <li
              key={i}
              className="mt-4 feature-list-item card w-64 hover:shadow-xl transition-main"
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
              <div className="mt-2 lg:mt-4 leading-relaxed">{feature.desc}</div>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  )
}

export default index
