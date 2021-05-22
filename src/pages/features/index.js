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
            subHeader={`Leadgeek empowers you to find the products you want, when you want them. The top ${features.length} features are the perfect combination of hand-curation and efficient software that make arbitrage actually fun.`}
            nav
            linkOne={`features/criteria`}
            linkOneText={`Start the tour`}
          />
        </HeaderWrapper>
      </section>
      <section className="px-8 max-w-7xl mx-auto text-gray-900">
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
    title: "Top-shelf leads come standard",
    desc:
      "Scale your business without sacrificing quality in your inventory. Carefully-tailored criteria and vetting methods allow you to get professional-grade arbitrage sourcing at a fraction of the price. Every lead needs to meet profit, ROI, and sales requirements so you don’t waste any time with duds.",
    link: "criteria",
  },
  {
    title: "Laser-accurate number crunching",
    desc:
      "If the profit estimations aren’t accurate, you’re often stuck with products that are breakeven or even lose you money. With Leadgeek, all Amazon fees are accounted for with the official calculator so you see numbers that can be relied on.",
  },
  {
    title: "Source comprehensive categories",
    desc:
      "Building a diversified inventory has never been easier. Choose items sourced from 25+ top-selling Amazon categories to create your ideal product portfolio.",
  },
  {
    title: "Trusted retailers by default",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Check out historical metrics",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Keep 'em coming",
    desc:
      "Leadgeek is all about predictability, especially when it comes to the quantity of leads you can expect. Gone are the days of striking out when sourcing - the Feed delivers a guaranteed number of leads each and every weekday. Just scroll through to find the ones that best fit your selling style.",
  },
  {
    title: "The inner circle",
    desc:
      "Leadgeek takes seller exclusivity seriously, which is why there are no-budge caps on the number of people allowed on a list at any given time: 30 members for the Grow plan and 15 for the Pro plan - cutting competition significantly.",
  },
  {
    title: "Professional experience in your corner",
    desc:
      "The Leadgeek sourcing process includes review by a seasoned US Amazon seller for each and every lead. That way, the only products you see are ones that have been approved by years of FBA know-how.",
  },
  {
    title: "Skim info in the Feed",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
  {
    title: "Surface data, don't dig for it",
    desc:
      "You’ve finally got 30 minutes to sit down and check out some arbitrage leads. But there’s tons of information to sort through and so many metrics to analyze that it all feels overwhelming. Not with Leadgeek. Leadgeek allows you to combine simple filters in a powerful way to only show the information that’s important to you.",
  },
  {
    title: "Account for prep costs automatically",
    desc:
      "Built-in tools allow you to easily estimate product prep fees. Whether you need to calculate a fee based on quantity or weight, you'll see real-world profitability for each item.",
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
    title: "Variation suggestions out of the box",
    desc:
      "Finding the right variation is great, but it takes valuable time to determine which ones are worth selling. With Leadgeek, that research is done for you. Variation suggestions and seller-to-seller notes give you clarity on how to order your inventory.",
  },
  {
    title: "Your own personal researcher",
    desc:
      "Do you ever wonder if there’s a promo or some discount you’re missing before you order? Now you don’t have to wonder. Any available promotional codes, shipping minimums, or cashback from sites like Rakuten are automatically included.",
  },
  {
    title: "Leads belong to you",
    desc:
      "Leadgeek puts you in control - and that means that you should be able to download your product leads if you want to. It's easy to export the items you want into a spreadsheet to do whatever you want with.",
  },

  {
    title: "feature1",
    desc:
      "yoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoyyoyuoyoyoyoy",
  },
]

export default index
