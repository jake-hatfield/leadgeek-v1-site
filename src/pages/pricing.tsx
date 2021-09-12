import React, { useState } from "react"
import { graphql } from "gatsby"

import { GatsbySeo, ProductJsonLd } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"
import PricingCards from "@components/PricingCards"
import PricingTable from "@components/PricingTable"
import Faq from "@components/Faq"

import Loopy from "@assets/svgs/loopy-dashed.svg"
import DividerTop from "@assets/svgs/section-divider-top.svg"
import DividerBottom from "@assets/svgs/section-divider-bottom.svg"
import OgImage from "@assets/images/og/og-pricing.jpg"

interface SubscriptionItem {
  status: string
  plan: {
    id: string
    product: string
  }
}

interface PricingPageProps {
  data: {
    allStripeSubscription: {
      nodes: SubscriptionItem[]
    }
  }
  location: Location
}

const PricingPage: React.FC<PricingPageProps> = ({ data, location }) => {
  const title = "Leadgeek Pricing"
  const description =
    "Leadgeek offers entry-level and intermediate plans for arbitrage sourcing, so there's something for everyone. Join today!"

  //   check active subscriptions
  const activeSubscriptions = data.allStripeSubscription.nodes.filter(
    subscription =>
      subscription.status === "active" ||
      subscription.status === "trialing" ||
      subscription.status === "past_due"
  )

  const bundleSubscriptions = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_BUNDLE_PRODUCT_ID
  )
  const proSubscriptions = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_PRO_PRODUCT_ID
  )
  const growSubscriptions = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_GROW_PRODUCT_ID
  )

  //   out-of-stock popup state
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false)

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/pricing/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "See Leadgeek pricing & plans",
            },
          ],
        }}
        language="en"
      />
      <ProductJsonLd
        productName="Leadgeek Grow Plan"
        images={["../assets/images/leadgeek-app.png"]}
        description="Leadgeek's Grow plan offers entry-level FBA sellers a great starting point to find high-quality products efficiently."
        brand="Leadgeek"
        reviews={[
          {
            author: "Charles",
            reviewBody: `Leads were well researched and actionable. Excellent and only getting better. Highly recommend. The very first thing I bought as an FBA seller was from your list about 33 days ago. I've sold 5 units of that item so far today (it's only 3:50 pm CST) and it's my first $100 day. Profit margin is roughly 25% and ROI more than 2x that. Thank you for helping me get started.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Brian",
            reviewBody: `Delivered their lists as promised daily and always had at least a few items I was interested in. Good value, would recommend.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "William",
            reviewBody: `Leadgeek delivers on their promises in the promo video on time every day with solid ROI leads. Would definitely recommend giving them a shot if you want to take the guess work out of sourcing for FBA.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Kevin",
            reviewBody: `I love the leads, they're very good. Leadgeek will pay off in a week... definitely the best site I've found for leads.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Yucheng",
            reviewBody: `It looks FANTASTIC on my first try! Great work. I look forward to trying it more on my next lead list.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Austin",
            reviewBody: `5 stars for you guys making this super simple.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Frank",
            reviewBody: `I want to thank you for the effort you make to find products with such good quality. It has been the best decision I have made in acquiring your list. Thank you!`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Dimitry",
            reviewBody: `I really like the [software] setup.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Dail",
            reviewBody: `I've been very satisfied so far!`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Cris",
            reviewBody: `Great product you provide. It's allowed me to grow to the point where I needed more listings and the other list I subscribed to wasn't doing it for me. Always has high quality leads and many more leads than a different more expensive list. Overall I highly recommend this list over other lists I have purchased in the past. Support is always responsive and the leads are great. I’ve been able to double my profits using this list. So much better than hours of pouring over Tactical Arbitrage.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Cage",
            reviewBody: `Great source for retail and online arbitrage leads. Easy-to-use interface with links to retailer site and Amazon, daily lists, key information about each item like estimated number of monthly sales. Overall I am happy with leadgeek and plan to continue using the service; I started with the Grow plan and will upgrade to the Pro plan soon.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "4",
              worstRating: "1",
            },
          },
        ]}
        aggregateRating={{
          ratingValue: "4.91",
          reviewCount: 11,
        }}
        offers={{
          price: "129.99",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          itemCondition: "NewCondition",
          availability: "LimitedAvailability",
          url: "https://leadgeek.io/signup/grow/",
          seller: {
            name: "Leadgeek",
          },
        }}
        sku="001"
        mpn="1"
      />
      <ProductJsonLd
        productName="Leadgeek Pro Plan"
        images={["../assets/images/leadgeek-app.png"]}
        description="Leadgeek's Pro plan is great for intermediate Amazon sellers who are familiar with online arbitrage and want more leads to choose every day."
        brand="Leadgeek"
        reviews={[
          {
            author: "Charles",
            reviewBody: `The very first thing I bought as an FBA seller was from your list about
              33 days ago. I've sold 5 units of that item so far today (it's only 3:50
              pm CST) and it's my first $100 day. Profit margin is roughly 25% and ROI more than 2x that. Thank you for helping me get started.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Brian",
            reviewBody: `Delivered their lists as promised daily and always had at least a few
            items I was interested in. Good value, would recommend.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "William",
            reviewBody: `Leadgeek delivers on their promises in the promo video on time every day
            with solid ROI leads. Would definitely recommend giving them a shot if you want to take the guess work out of sourcing for FBA.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Kevin",
            reviewBody: `I love the leads, they're very good. Leadgeek will pay off in a week... definitely the best site I've found for leads.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Yucheng",
            reviewBody: `It looks FANTASTIC on my first try! Great work. I look forward to trying it more on my next lead list.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Austin",
            reviewBody: `5 stars for you guys making this super simple.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Frank",
            reviewBody: `I want to thank you for the effort you make to find products with such
            good quality. It has been the best decision I have made in acquiring your list. Thank you!`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Dimitry",
            reviewBody: `I really like the [software] setup.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Dail",
            reviewBody: `I've been very satisfied so far!`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Cris",
            reviewBody: `Great product you provide. It's allowed me to grow to the point where I needed more listings and the other list I subscribed to wasn't doing it for me. Always has high quality leads and many more leads than a different more expensive list. Overall I highly recommend this list over other lists I have purchased in the past. Support is always responsive and the leads are great. I’ve been able to double my profits using this list. So much better than hours of pouring over Tactical Arbitrage.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Cage",
            reviewBody: `Great source for retail and online arbitrage leads. Easy-to-use interface with links to retailer site and Amazon, daily lists, key information about each item like estimated number of monthly sales. Overall I am happy with leadgeek and plan to continue using the service; I started with the Grow plan and will upgrade to the Pro plan soon.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "4",
              worstRating: "1",
            },
          },
        ]}
        aggregateRating={{
          ratingValue: "4.91",
          reviewCount: 11,
        }}
        offers={{
          price: "189.99",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          itemCondition: "NewCondition",
          availability: "LimitedAvailability",
          url: "https://leadgeek.io/signup/pro/",
          seller: {
            name: "Leadgeek",
          },
        }}
        sku="002"
        mpn="2"
      />
      <ProductJsonLd
        productName="Leadgeek Bundle"
        images={["../assets/images/leadgeek-app.png"]}
        description="Leadgeek's Bundle is a heavily-discounted combination of the Grow plan and Pro plan. It's the perfect mix of quality and volume for arbitrage sourcing."
        brand="Leadgeek"
        reviews={[
          {
            author: "Charles",
            reviewBody: `The very first thing I bought as an FBA seller was from your list about
              33 days ago. I've sold 5 units of that item so far today (it's only 3:50
              pm CST) and it's my first $100 day. Profit margin is roughly 25% and ROI more than 2x that. Thank you for helping me get started.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Brian",
            reviewBody: `Delivered their lists as promised daily and always had at least a few
            items I was interested in. Good value, would recommend.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "William",
            reviewBody: `Leadgeek delivers on their promises in the promo video on time every day
            with solid ROI leads. Would definitely recommend giving them a shot if you want to take the guess work out of sourcing for FBA.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Kevin",
            reviewBody: `I love the leads, they're very good. Leadgeek will pay off in a week... definitely the best site I've found for leads.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Yucheng",
            reviewBody: `It looks FANTASTIC on my first try! Great work. I look forward to trying it more on my next lead list.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Austin",
            reviewBody: `5 stars for you guys making this super simple.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Frank",
            reviewBody: `I want to thank you for the effort you make to find products with such
            good quality. It has been the best decision I have made in acquiring your list. Thank you!`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Dimitry",
            reviewBody: `I really like the [software] setup.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Dail",
            reviewBody: `I've been very satisfied so far!`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Cris",
            reviewBody: `Great product you provide. It's allowed me to grow to the point where I needed more listings and the other list I subscribed to wasn't doing it for me. Always has high quality leads and many more leads than a different more expensive list. Overall I highly recommend this list over other lists I have purchased in the past. Support is always responsive and the leads are great. I’ve been able to double my profits using this list. So much better than hours of pouring over Tactical Arbitrage.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            author: "Cage",
            reviewBody: `Great source for retail and online arbitrage leads. Easy-to-use interface with links to retailer site and Amazon, daily lists, key information about each item like estimated number of monthly sales. Overall I am happy with leadgeek and plan to continue using the service; I started with the Grow plan and will upgrade to the Pro plan soon.`,
            reviewRating: {
              bestRating: "5",
              ratingValue: "4",
              worstRating: "1",
            },
          },
        ]}
        aggregateRating={{
          ratingValue: "4.91",
          reviewCount: 11,
        }}
        offers={{
          price: "263.00",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          itemCondition: "NewCondition",
          availability: "LimitedAvailability",
          url: "https://leadgeek.io/signup/bundle/",
          seller: {
            name: "Leadgeek",
          },
        }}
        sku="003"
        mpn="3"
      />
      <section id="top" className="relative overflow-x-hidden bg-splatter">
        <HeaderWrapper bottomPadding={"pb-80"} styles={null}>
          <PrimaryHeader
            title={`Leadgeek pricing`}
            description={
              <h2>
                From starting out to scaling up - here are your monthly
                membership options. Zero contracts. Zero hassle.
              </h2>
            }
            nav={false}
            goHome={false}
            linkOne={null}
            linkOneText={null}
            linkTwo={null}
            linkTwoText={null}
            outsideLink={null}
            svgOne={null}
            svgTwo={
              <div
                className={`hidden lg:block absolute bottom-0 right-0 py-1 px-2 handwritten text-lg xl:text-xl rounded-lg bg-gray-900 text-teal-300 transform -translate-x-12 translate-y-32 text-center transition-main w-56 rotate-3 hover:rotate-6`}
              >
                <blockquote>
                  "Leadgeek will pay off in a week" - <cite>Kevin</cite>
                </blockquote>
              </div>
            }
          />
        </HeaderWrapper>
      </section>
      <section className="relative text-gray-900 bg-gray-900">
        <DividerTop className="divider-top text-gray-900" />
        <Loopy className="absolute top-0 right-1/2 h-32 lg:h-40 text-purple-500 transform -translate-y-80" />
        <div className="mt-8 pt-20 lg:pt-32 pb-12 px-8 max-w-7xl mx-auto">
          <div>
            <PricingCards
              margin={"-mt-64 lg:mt-0"}
              negativeMarginCards={true}
              bundleSubscriptions={bundleSubscriptions}
              proSubscriptions={proSubscriptions}
              growSubscriptions={growSubscriptions}
              showWaitlistPopup={showWaitlistPopup}
              setShowWaitlistPopup={setShowWaitlistPopup}
            />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="relative pt-12 pb-16 text-white bg-gray-900"
      >
        <DividerBottom className="divider-bottom text-gray-900" />
        <header className="container text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold inter">
            Compare plans
          </h2>
        </header>
        <PricingTable
          tableHeader={`Plan features`}
          featureRows={coreFeatureRows}
          id={`plan-features`}
        />
        <PricingTable
          tableHeader={`Lead standards`}
          featureRows={criteriaFeatureRows}
          id={`lead-standards`}
        />
      </section>
      <Faq />
    </Layout>
  )
}

const growPlanSeats = 30
const proPlanSeats = 15

interface FeatureRow {
  cells: { description: boolean; value: string | number | boolean }[]
}

const coreFeatureRows: FeatureRow[] = [
  {
    cells: [
      {
        description: true,
        value: "Member limit",
      },
      { description: false, value: growPlanSeats },
      { description: false, value: proPlanSeats },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Weekly # of products",
      },
      { description: false, value: "50+" },
      { description: false, value: "50+" },
      { description: false, value: "100+" },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Price per lead",
      },
      { description: false, value: "$0.64" },
      { description: false, value: "$0.94" },
      { description: false, value: "$0.66" },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "500+ Retail sources",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Full software access",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Seller support",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Early access/discounts on new tools",
      },
      { description: false, value: false },
      { description: false, value: false },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Free updates forever",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
]

const criteriaFeatureRows: FeatureRow[] = [
  {
    cells: [
      {
        description: true,
        value: "Minimum profit",
      },
      { description: false, value: "$4+" },
      { description: false, value: "$7+" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Minimum ROI",
      },
      { description: false, value: "40%+" },
      { description: false, value: "50%+" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Minimum monthly sales",
      },
      { description: false, value: "10+" },
      { description: false, value: "15+" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "Minimum BSR",
      },
      { description: false, value: "<2%" },
      { description: false, value: "<1.5%" },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "US seller approval",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
  {
    cells: [
      {
        description: true,
        value: "No hazmat status",
      },
      { description: false, value: true },
      { description: false, value: true },
      { description: false, value: true },
    ],
  },
]

export const query = graphql`
  query {
    allStripeSubscription {
      nodes {
        status
        plan {
          id
          product
        }
      }
    }
  }
`

export default PricingPage
