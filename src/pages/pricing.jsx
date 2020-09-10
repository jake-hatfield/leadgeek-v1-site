import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"
import PricingTable from "../components/pricingTable"
import SideCard from "../components/sideCard"
import TripleIcons from "../components/threeIconList"
import Faq from "../components/faq"
import CTA from "../components/cta"

import Check from "../assets/check.svg"
import Dotted from "../assets/dotted.svg"
import HalfDotted from "../assets/half-dotted.svg"

const PricingPage = () => {
  const growPrice = 129
  const proPrice = 189
  const bundlePrice = 263
  const discount = Math.trunc((1 - bundlePrice / (proPrice + growPrice)) * 100)
  const proLink = "pro"
  const growLink = "grow"
  const growPlanSeats = 30
  const proPlanSeats = 15
  const growFeatureList = [
    {
      id: "1",
      body: (
        <span>
          Limited to <strong className="font-semibold">{growPlanSeats}</strong>{" "}
          members
        </span>
      ),
    },
    {
      id: "2",
      body: "50+ products per week",
    },
    {
      id: "3",
      body: (
        <span>
          $<strong className="font-semibold">4</strong>-30+ profit per unit
        </span>
      ),
    },
    {
      id: "4",
      body: (
        <span>
          <strong className="font-semibold">40</strong>%+ ROI per unit
        </span>
      ),
    },
    {
      id: "5",
      body: "Training e-books",
    },
    {
      id: "6",
      body: "Email & chat support",
    },
    {
      id: "7",
      body: "Free updates",
    },
  ]
  const proFeatureList = [
    {
      id: "1",
      body: (
        <span>
          Limited to <strong className="font-semibold">{proPlanSeats}</strong>{" "}
          members
        </span>
      ),
    },
    {
      id: "2",
      body: "50+ products per week",
    },
    {
      id: "3",
      body: (
        <span>
          $<strong className="font-semibold">5</strong>-30+ profit per unit
        </span>
      ),
    },
    {
      id: "4",
      body: (
        <span>
          <strong className="font-semibold">50</strong>%+ ROI per unit
        </span>
      ),
    },
    {
      id: "5",
      body: (
        <span>
          Training e-books & <strong>course</strong>
        </span>
      ),
    },
    {
      id: "6",
      body: "Email & chat support",
    },
    {
      id: "7",
      body: "Free updates",
    },
  ]
  const bundleFeatureList = [
    {
      id: "1",
      body: (
        <span>
          Limited to <strong className="font-semibold">{proPlanSeats}</strong>{" "}
          members
        </span>
      ),
    },
    {
      id: "2",
      body: "100+ products per week",
    },
    {
      id: "3",
      body: "All Grow Plan leads",
    },
    {
      id: "4",
      body: "All Pro Plan leads",
    },
    {
      id: "5",
      body: (
        <span>
          Training e-books & <strong>course</strong>
        </span>
      ),
    },
    {
      id: "6",
      body: "Premium support",
    },
    {
      id: "7",
      body: "Free updates",
    },
  ]
  const whyLeadGeek = [
    {
      id: 1,
      iconPath:
        "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
      header: "Excellent standards",
      content:
        "We understand that finding profitable products is a major responsibility for an arbitrage seller, and we don't take it lightly. Our criteria reflect our priority to only bring you the best.",
    },
    {
      id: 2,
      iconPath:
        "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      header: "Complete toolkit",
      content:
        "Our service cuts out the need to subscribe to expensive 3rd party sourcing tools. We help reduce your monthly costs by consolidating everything you need in one place.",
    },
    {
      id: 3,
      iconPath:
        "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
      header: "Friendly support",
      content:
        "Navigating Amazon's rules can be tricky, but not with experienced sellers in your corner. Our team is happy to help out any way we can to make your selling experience better.",
    },
  ]
  const coreFeatureRows = [
    {
      rowID: 100,
      cells: [
        {
          cellID: 101,
          description: true,
          value: "Member limit",
          tooltip:
            "The maximum number of members allowed on each plan - fewer members means less competition.",
        },
        { cellID: 102, description: false, value: proPlanSeats },
        { cellID: 103, description: false, value: proPlanSeats },
        { cellID: 104, description: false, value: growPlanSeats },
      ],
    },
    {
      rowID: 200,
      cells: [
        {
          cellID: 200,
          description: true,
          value: "Weekly # of products",
          tooltip:
            "The minimum number of online arbitrage leads members are guaranteed to receive weekly.",
        },
        { cellID: 201, description: false, value: "100+" },
        { cellID: 202, description: false, value: "50+" },
        { cellID: 203, description: false, value: "50+" },
      ],
    },
    {
      rowID: 300,
      cells: [
        {
          cellID: 300,
          description: true,
          value: "Price per lead",
          tooltip: "The approximate average cost of each lead per plan.",
        },
        { cellID: 301, description: false, value: "$0.66" },
        { cellID: 302, description: false, value: "$0.94" },
        { cellID: 303, description: false, value: "$0.64" },
      ],
    },
    {
      rowID: 400,
      cells: [
        {
          cellID: 400,
          description: true,
          value: "500+ Retail sources",
          tooltip:
            "We source over 500 verified, legitimate US retailers to find the best online arbitrage deals of the day.",
        },
        { cellID: 401, description: false, value: true },
        { cellID: 402, description: false, value: true },
        { cellID: 403, description: false, value: true },
      ],
    },
    {
      rowID: 500,
      cells: [
        {
          cellID: 500,
          description: true,
          value: "Delivery via email",
          tooltip:
            "Receive your leads directly to your inbox every morning at approximately 8am CST.",
        },
        { cellID: 501, description: false, value: true },
        { cellID: 502, description: false, value: true },
        { cellID: 503, description: false, value: true },
      ],
    },
    {
      rowID: 600,
      cells: [
        {
          cellID: 600,
          description: true,
          value: ".PDF & .XLSX format",
          tooltip:
            "We send the .PDF and .XLSX formats of our lead lists in case you prefer one over the other.",
        },
        { cellID: 601, description: false, value: true },
        { cellID: 602, description: false, value: true },
        { cellID: 603, description: false, value: true },
      ],
    },
  ]
  const criteriaFeatureRows = [
    {
      rowID: 100,
      cells: [
        {
          cellID: 101,
          description: true,
          value: "Minimum profit",
          tooltip:
            "The bare minimum profit a product must meet to be approved for our list, after FBA fees are accounted for. Our average profit is much higher.",
        },
        { cellID: 102, description: false, value: true },
        { cellID: 103, description: false, value: "$5+" },
        { cellID: 104, description: false, value: "$4+" },
      ],
    },
    {
      rowID: 200,
      cells: [
        {
          cellID: 200,
          description: true,
          value: "Minimum ROI",
          tooltip:
            "The bare minimum ROI a product must meet to be approved for our list, after FBA fees are accounted for. Our average ROI is much higher.",
        },
        { cellID: 201, description: false, value: true },
        { cellID: 202, description: false, value: "50%+" },
        { cellID: 203, description: false, value: "40%+" },
      ],
    },
    {
      rowID: 300,
      cells: [
        {
          cellID: 300,
          description: true,
          value: "Minimum monthly sales",
          tooltip:
            "The minimum number of times a product must sell in an average month to be approved for our list, estimated with tools like Keepa. The average monthly sales are substantially higher.",
        },
        { cellID: 301, description: false, value: true },
        { cellID: 302, description: false, value: "15+" },
        { cellID: 303, description: false, value: "10+" },
      ],
    },
    {
      rowID: 400,
      cells: [
        {
          cellID: 400,
          description: true,
          value: "Minimum BSR",
          tooltip:
            "The minimum Best Sellers Rank, or BSR, a product must have to be approved for our list. This is specific to each product's category on Amazon. Lower numbers (e.g. 1.5%) are better.",
        },
        { cellID: 401, description: false, value: true },
        { cellID: 402, description: false, value: "<1.5%" },
        { cellID: 403, description: false, value: "<3%" },
      ],
    },
    {
      rowID: 500,
      cells: [
        {
          cellID: 500,
          description: true,
          value: "US seller approval",
          tooltip:
            "All leads are checked by an experienced Amazon seller to verify each product lead has a history of selling and a high probability of selling well in the future.",
        },
        { cellID: 501, description: false, value: true },
        { cellID: 502, description: false, value: true },
        { cellID: 503, description: false, value: true },
      ],
    },
    {
      rowID: 600,
      cells: [
        {
          cellID: 600,
          description: true,
          value: "Promo codes",
          tooltip:
            "We include any relevant promo/discount codes with our leads in order to help save you money.",
        },
        { cellID: 601, description: false, value: true },
        { cellID: 602, description: false, value: true },
        { cellID: 603, description: false, value: true },
      ],
    },
    {
      rowID: 700,
      cells: [
        {
          cellID: 700,
          description: true,
          value: "Cashback offers",
          tooltip:
            "We include any cashback offers from retailers to help reduce the cost of inventory.",
        },
        { cellID: 701, description: false, value: true },
        { cellID: 702, description: false, value: true },
        { cellID: 703, description: false, value: true },
      ],
    },
    {
      rowID: 800,
      cells: [
        {
          cellID: 800,
          description: true,
          value: "No hazmat status",
          tooltip: "Hazmat products are ineligible for our arbitrage lists.",
        },
        { cellID: 801, description: false, value: true },
        { cellID: 802, description: false, value: true },
        { cellID: 803, description: false, value: true },
      ],
    },
  ]
  const educationFeatureRows = [
    {
      rowID: 100,
      cells: [
        { cellID: 100, description: true, value: "Keepa graph e-book" },
        { cellID: 101, description: false, value: true },
        { cellID: 102, description: false, value: true },
        { cellID: 103, description: false, value: true },
      ],
    },
    {
      rowID: 200,
      cells: [
        { cellID: 200, description: true, value: "Ungating training e-book" },
        { cellID: 201, description: false, value: true },
        { cellID: 202, description: false, value: true },
        { cellID: 203, description: false, value: true },
      ],
    },
    {
      rowID: 300,
      cells: [
        { cellID: 301, description: true, value: "8-Module arbitrage course" },
        { cellID: 302, description: false, value: true },
        { cellID: 303, description: false, value: true },
        { cellID: 304, description: false, value: false },
      ],
    },
    {
      rowID: 400,
      cells: [
        { cellID: 400, description: true, value: "Tracking templates" },
        { cellID: 401, description: false, value: true },
        { cellID: 402, description: false, value: true },
        { cellID: 403, description: false, value: false },
      ],
    },
    {
      rowID: 500,
      cells: [
        {
          cellID: 500,
          description: true,
          value: "Free content updates",
        },
        { cellID: 501, description: false, value: true },
        { cellID: 502, description: false, value: true },
        { cellID: 503, description: false, value: true },
      ],
    },
  ]
  const supportFeatureRows = [
    {
      rowID: 100,
      cells: [
        {
          cellID: 101,
          description: true,
          value: "100% Solve rate",
          tooltip:
            "Our team works with members to reach a resolution to every problem.",
        },
        { cellID: 102, description: false, value: true },
        { cellID: 103, description: false, value: true },
        { cellID: 104, description: false, value: true },
      ],
    },
    {
      rowID: 200,
      cells: [
        {
          cellID: 200,
          description: true,
          value: "Account protection",
          tooltip:
            "If you receive a suspension notice from Amazon as a result of using a product on our lists, we'll help you get it lifted.",
        },
        { cellID: 201, description: false, value: true },
        { cellID: 202, description: false, value: true },
        { cellID: 203, description: false, value: true },
      ],
    },
    {
      rowID: 300,
      cells: [
        {
          cellID: 300,
          description: true,
          value: "Email & chat support",
          tooltip:
            "Reach our team for support via email or live chat during normal business hours.",
        },
        { cellID: 301, description: false, value: true },
        { cellID: 302, description: false, value: true },
        { cellID: 303, description: false, value: true },
      ],
    },
    {
      rowID: 400,
      cells: [
        {
          cellID: 400,
          description: true,
          value: "Phone support",
          tooltip:
            "Reach our team for support via phone during normal business hours.",
        },
        { cellID: 401, description: false, value: true },
        { cellID: 402, description: false, value: true },
        { cellID: 403, description: false, value: false },
      ],
    },
  ]

  return (
    <Layout>
      <SEO
        title="LeadGeek Pricing and Plans - Monthly Membership Costs"
        description="Find out all the details of LeadGeek pricing so you can choose the plan that's best for your arbitrage business."
      />
      <section className="-mt-40 bg-gray-100 inset-0 text-gray-900">
        <PrimaryHeader
          header={`Grow your online arbitrage business with LeadGeek.`}
          negativeMargin
          svgOne={
            <div className="absolute bottom-0 right-0 z-0 transform translate-y-32">
              <Dotted className="hidden lg:inline-block w-32 text-gray-200" />
            </div>
          }
        />
        <article
          id="pricing-plans"
          className="pb-12 lg:pb-24 relative container lg:grid lg:grid-cols-10"
        >
          <div className="absolute bottom-0 left-0 z-0 transform rotate-180 translate-y-12 -translate-x-32">
            <HalfDotted className="hidden lg:inline-block w-48 text-purple-200" />
          </div>
          <div className="mx-auto max-w-md md:max-w-sm lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-purple-400"></div>
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-purple-500 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                    Get both plans
                  </span>
                </div>
              </div>
              <header className="pt-12 pb-6 px-6 bg-white rounded-t-md text-center background-repeat">
                <span className="py-1 px-2 shadow-sm bg-teal-200 rounded-full text-teal-500">{`Save ${discount}%`}</span>
                <h3 className="mt-2 text-2xl lg:text-3xl font-semibold">
                  Grow + Pro Bundle
                </h3>
                <div className="mt-1 flex items-center justify-center text-5xl font-bold">
                  <span className="-ml-2 lg:-ml-10 text-gray-600 text-xl lg:text-2xl line-through font-light tracking-wider">
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
                    <li key={feature.id} className="flex items-center">
                      <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
                      <p className="ml-4 text-gray-600">{feature.body}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/signup/bundle`}
                  className="mt-8 py-3 block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 text-center font-bold transition-colors duration-200 focus:outline-none focus:shadow-outline"
                >
                  Get the Bundle
                </Link>
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
      <TripleIcons
        bgColor={`bg-purple-600`}
        mainHeader={`Why customers choose LeadGeek`}
        items={whyLeadGeek}
        primaryTextColor={`text-white`}
        secondaryTextColor={`text-purple-100`}
        iconColor={`bg-white text-purple-600
        `}
        textCenter
      />
      <section id="features" className="text-gray-900">
        <header className="mt-12 lg:mt-24 container text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
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
        <PricingTable
          tableHeader={`Seller education`}
          featureRows={educationFeatureRows}
          id={`seller-education`}
        />
        <PricingTable
          tableHeader={`Member support`}
          featureRows={supportFeatureRows}
          id={`member-support`}
        />
      </section>
      <Faq growPlanSeats={growPlanSeats} proPlanSeats={proPlanSeats} />
      <CTA
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="Join now"
        buttonLink="signup"
        link="contact"
        linkText="Contact us"
        linkStyles="text-purple-100 hover:text-purple-200"
        svgOne={
          <div className="absolute top-0 left-0 z-0 transform -translate-y-32 xl:-translate-y-40 xl:-translate-x-24">
            <Dotted className="hidden md:inline-block w-24 text-purple-400" />
          </div>
        }
      />
    </Layout>
  )
}

export default PricingPage
