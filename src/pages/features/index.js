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
            subHeader={`Leadgeek empowers you to find the products you want, when you want them. Our top 22 features are the perfect combination of hand-curation and beautiful software.`}
            nav
            linkOne={`features/profit`}
            linkOneText={`Start the tour`}
          />
        </HeaderWrapper>
      </section>
      <section className="px-8 max-w-7xl mx-auto">
        <ol className="mt-4 lg:mt-6 feature-list feature-grid">
          {features.map((feature, i) => (
            <li key={i} className="feature-list-item card w-64">
              <header>
                <h3 className="h3">
                  <Link to={`/${feature.link}`} className="secondary-link">
                    {feature.title}
                  </Link>
                </h3>
              </header>
              <div className="mt-4 lg:mt-6 ">
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
]

export default index
