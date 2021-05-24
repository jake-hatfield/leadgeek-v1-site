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
            subHeader={`Leadgeek lets you to find the products you want, when you want them. The top ${features.length} features are the perfect combination of hand-curation and efficient software that make arbitrage actually fun. Start the tour or click on each feature to learn more.`}
            nav
            linkOne={`features/criteria`}
            linkOneText={`Start the tour`}
          />
        </HeaderWrapper>
      </section>
      <section className="px-8 max-w-7xl mx-auto text-gray-900">
        <ol className="mt-4 lg:mt-6 feature-list feature-grid">
          {features.map((feature, i) => (
            <li
              key={i}
              className="mt-4 feature-list-item card w-64 hover:shadow-xl transition-main"
            >
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
              <div className="mt-2 lg:mt-4 leading-relaxed">{feature.desc}</div>
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
    desc: (
      <p>
        Scale your business without sacrificing quality in your inventory.
        Carefully-tailored criteria and vetting methods allow you to get
        professional-grade arbitrage sourcing at a fraction of the price.{" "}
        <span className="emphasized-text">
          Every lead needs to meet profit, ROI, and sales requirements
        </span>{" "}
        so you don’t waste any time with duds.
      </p>
    ),
    link: "criteria",
  },
  {
    title: "Laser-accurate number crunching",
    desc: (
      <p>
        If the profit estimations aren’t accurate, you’re often stuck with
        products that are breakeven or even lose you money. With Leadgeek,{" "}
        <span className="emphasized-text">
          all Amazon fees are accounted for with the official calculator
        </span>{" "}
        so you see numbers that can be relied on.
      </p>
    ),
  },
  {
    title: "Source comprehensive categories",
    desc: (
      <p>
        Building a diversified inventory has never been easier.{" "}
        <span className="emphasized-text">
          Choose items sourced from 25+ top-selling Amazon categories
        </span>{" "}
        to create your ideal product portfolio.
      </p>
    ),
  },
  {
    title: "Solid sources by default",
    desc: (
      <p>
        <span className="emphasized-text">
          Over 500 trusted US-based retailers are used to source products
        </span>
        . This not only gives you variety, but a peace of mind that your items
        are authentic brands to arbitrage, not some knock-off crap that will get
        your Seller Central account suspended.
      </p>
    ),
  },
  {
    title: "Check out historical metrics",
    desc: (
      <p>
        History tends to repeat itself, and you deserve the full picture. That’s
        why{" "}
        <span className="emphasized-text">
          Leadgeek includes 30 & 90 day metrics and current competition for the
          buy box
        </span>
        . While the price right now is important too, use historical data to see
        trends like seasonality, out of stock spikes, and more.
      </p>
    ),
  },
  {
    title: "Keep 'em coming",
    desc: (
      <p>
        Leadgeek is all about predictability, especially when it comes to the
        quantity of leads you can expect. Gone are the days of striking out when
        sourcing -{" "}
        <span className="emphasized-text">
          the Feed delivers a guaranteed number of leads each and every weekday
        </span>
        . Just scroll through to find the ones that best fit your selling style.
      </p>
    ),
  },
  {
    title: "The inner circle",
    desc: (
      <p>
        Leadgeek takes seller exclusivity seriously, which is why{" "}
        <span className="emphasized-text">
          there are no-budge caps on the number of people allowed on a list at
          any given time
        </span>
        : 30 members for the Grow plan and 15 for the Pro plan - cutting
        competition significantly.
      </p>
    ),
  },
  {
    title: "Hot off the press",
    desc: (
      <p>
        Leadgeek helps you make sourcing a system by releasing{" "}
        <span className="emphasized-text">
          fresh leads every morning by 9 am CST
        </span>
        . These guaranteed arbitrage oppotunties let you be the first one to
        order - and the first one to sell.
      </p>
    ),
  },
  {
    title: "Professional experience in your corner",
    desc: (
      <p>
        <span className="emphasized-text">
          The Leadgeek sourcing process includes review by a seasoned US Amazon
          seller
        </span>{" "}
        for each and every lead. That way, the only products you see are ones
        that have been approved by years of FBA know-how.
      </p>
    ),
  },
  {
    title: "Skim info in the Feed",
    desc: (
      <p>
        The Feed shows the most important product metrics by design, making it
        easy to see the leads you’re interested in and breeze through the ones
        you aren’t.{" "}
        <span className="emphasized-text">You won’t be bombarded by info</span>,
        but instead feel informed to make the right decisions for you.
      </p>
    ),
  },
  {
    title: "Surface data, don't dig for it",
    desc: (
      <p>
        You’ve finally got 30 minutes to sit down and check out some arbitrage
        leads. But there’s tons of information to sort through and so many
        metrics to analyze that it all feels overwhelming. Not with Leadgeek.
        Leadgeek allows you to{" "}
        <span className="emphasized-text">
          combine simple filters in a powerful way to only show the information
          that’s important to you
        </span>
        .
      </p>
    ),
  },
  {
    title: "View details on the fly",
    desc: (
      <p>
        Don't miss a beat with the detailed view for each item.{" "}
        <span className="emphasized-text">
          See primary metrics, historical data, and helpful notes all in one
          place.
        </span>{" "}
        Also included are helpful links to the source retailer, Amazon listing,
        and Seller Central to see if the product is ungated for you.
      </p>
    ),
  },
  {
    title: `Stay organized with "Like" & "Archive"`,
    desc: (
      <p>
        <span className="emphasized-text">
          Things are right where you expect to find them
        </span>{" "}
        with Leadgeek's simple but powerful like and archive system. Like the
        leads you want to order soon and archive the ones that deserve a second
        look at some point in the future.
      </p>
    ),
  },
  {
    title: "Account for prep costs automatically",
    desc: (
      <p>
        Built-in tools allow you to{" "}
        <span className="emphasized-text">
          easily estimate product prep fees
        </span>
        . Whether you need to calculate a fee based on quantity or weight,
        you'll see real-world profitability for each item.
      </p>
    ),
  },
  {
    title: "Leave your mark",
    desc: (
      <p>
        <span className="emphasized-text">
          Personalize each product by writing a comment that only you can see
        </span>
        . Interested in a few variations or plan to re-order an item? Write it
        down so you don’t forget!
      </p>
    ),
  },
  {
    title: "Keyword central",
    desc: (
      <p>
        Looking for something in particular?{" "}
        <span className="emphasized-text">
          Powerful search lets you find what you’re interested in
        </span>{" "}
        without hunting through thousands of leads. Input keywords to search by
        the source store, title, ASIN, and more.
      </p>
    ),
  },
  {
    title: "Variation suggestions out of the box",
    desc: (
      <p>
        Finding the right variation is great, but it takes valuable time to
        determine which ones are worth selling. With Leadgeek,{" "}
        <span className="emphasized-text">
          variation research is done for you
        </span>
        . These suggestions and seller-to-seller notes give you clarity on how
        to order your inventory.
      </p>
    ),
  },
  {
    title: "Your own personal researcher",
    desc: (
      <p>
        Are you ever curious if there’s a promo or some discount you’re missing
        before you order? Now you don’t have to wonder.{" "}
        <span className="emphasized-text">
          Any available promotional code, free shipping minimum, and cashback is
          automatically noted
        </span>
        .
      </p>
    ),
  },
  {
    title: "Leads belong to you",
    desc: (
      <p>
        Leadgeek puts you in control - and that means that you should be able to
        download your product leads if you want to.{" "}
        <span className="emphasized-text">
          It's easy to export the items you want into a spreadsheet
        </span>{" "}
        to do whatever you want with.
      </p>
    ),
  },
  {
    title: "A+ member support",
    desc: (
      <p>
        Navigating Amazon's marketplace can be a challenge, but there's no need
        to go through it alone.{" "}
        <span className="emphasized-text">
          LeadGeek members get dedicated guidance from an experienced arbitrage
          seller
        </span>{" "}
        to prevent pitfalls and solve issues. Sell with confidence, not
        confusion.
      </p>
    ),
  },
]

export default index
