import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout/layout"
import SEO from "components/utils/Seo"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

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
            header={`Online arbitrage leads made waaay better.`}
            subHeader={`Leadgeek empowers you to find the products you want, when you want them. The top ${features.length} features are a perfect combination of hand-curation and beautiful software that make arbitrage actually fun.`}
            nav
            linkOne={`features/criteria`}
            linkOneText={`Start the tour`}
          />
        </HeaderWrapper>
      </section>
      <section className="px-8 max-w-7xl mx-auto">
        <ol className="mt-4 lg:mt-6 feature-list feature-grid">
          {features.map((feature, i) => (
            <li key={i} className="feature-list-item card w-64">
              <header className="">
                <h3 className="h3">
                  <Link
                    to={`/features/${feature.link}`}
                    className="secondary-link text-gray-700"
                  >
                    {feature.title}
                  </Link>
                </h3>
              </header>
              <div className="mt-2 lg:mt-4">
                <p>{feature.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  )
}

const features = [
  {
    title: "Get top-shelf leads by default",
    desc: `Know what you want to buy but don’t know exactly which sizes? What if you miss out on a discount hidden somewhere on the website? With Leadgeek, you won’t have to wonder. Variations suggestions, promo codes, shipping minimums, and seller-to-seller notes give you clarity on how to order your inventory.
    `,
    link: "criteria",
  },
  {
    title: "Laser-accurate number crunching",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Comprehensive categories",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyy",
  },
  {
    title: "500+ trusted retailers",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Check out historical metrics",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Professional experience in your corner",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Keep 'em coming",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Skim info in the Feed",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Surface data, don't dig for it",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Account for prep costs automatically",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "View details on the fly",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Notes",
    desc: `Know what you want to buy but don’t know exactly which sizes? What if you miss out on a discount hidden somewhere on the website? With Leadgeek, you won’t have to wonder. Variations suggestions, promo codes, shipping minimums, and seller-to-seller notes give you clarity on how to order your inventory.
      `,
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
]

export default index
