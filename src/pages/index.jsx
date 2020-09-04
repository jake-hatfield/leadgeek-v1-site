import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"
import CTA from "../components/cta"
import ArrowLink from "../components/arrowLink"

import Dotted from "../assets/dotted.svg"
import Squiggles from "../assets/squiggles.svg"
import HalfDotted from "../assets/half-dotted.svg"

const IndexPage = ({ data }) => {
  const featureList = [
    {
      number: "1",
      header: "Drastically save time",
      body:
        "Our online arbitrage leads allow you to remove yourself from the painstaking task of sourcing. Review a pre-vetted list of leads in just minutes each day.",
      image: data.saveTime.childImageSharp.fluid,
    },
    {
      number: "2",
      header: "Predictably source products",
      body:
        "One of the biggest hurdles as an Amazon seller is sustainably finding products. LeadGeek members are provided with a guaranteed stream of leads so their business never suffers any downtime.",
      image: data.sourceProducts.childImageSharp.fluid,
    },
    {
      number: "3",
      header: "Significantly scale volume",
      body:
        "Once you've tapped into our consistent flow of product leads, you can scale your sourcing needs up as your business grows. Increasing potential new finds is as simple as subscribing to another list.",
      image: data.scaleVolume.childImageSharp.fluid,
    },
  ]

  const costItems = [
    {
      id: 1,
      iconPath:
        "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01",
      header: "Loss on no assurance",
      content:
        "Even if you're a pro at evaluating leads, you have no control over how many you'll be able to find day in and day out.",
    },
    {
      id: 2,
      iconPath:
        "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
      header: "Loss on excessive tools",
      content:
        "The more software and services you add to supplement sourcing, the more money is wasted on needless overhead.",
    },
    {
      id: 3,
      iconPath:
        "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
      header: "Loss on bad inventory",
      content:
        "If you purchase inventory without doing your due dilligence, once-profitable products can become a nightmarish drain on your resources.",
    },
  ]
  return (
    <Layout>
      <SEO title="Online Arbitrage Leads & Lists for Amazon Sellers" />
      <section className="relative">
        <PrimaryHeader
          header={`More than just premium online arbitrage sourcing.`}
          // header={`We help you find great online arbitrage leads.`}
          // header={`Premium online arbitrage sourcing, streamlined.`}
          subHeader={`Turn "I don't know what to sell" into "I have too much to buy": Receive a daily list of the best arbitrage products to flip on Amazon. Our highly skilled team sources for hours each day to bring a tailored batch of leads to your inbox.`}
          nav
          linkOne={`pricing`}
          linkOneText={`Get started`}
          linkTwo={`demo`}
          linkTwoText={`Watch demo`}
          play
          svgOne={
            <div className="absolute top-0 left-0 z-0 transform translate-y-10 translate-x-16">
              <Squiggles className="hidden md:inline-block w-64 text-gray-200" />
            </div>
          }
          svgTwo={
            <div className="absolute bottom-0 right-0 z-0 transform rotate-90 -translate-y-6 xl:-translate-y-16 xl:translate-x-12">
              <HalfDotted className="hidden md:inline-block w-48 text-purple-100" />
            </div>
          }
        />
      </section>
      <section className="py-12 md:py-16 lg:py-24 bg-gray-200 overflow-x-hidden">
        <div className="container lg:flex">
          <header className="lg:w-2/3">
            <div>
              <h2 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                How much is ineffective sourcing costing you?
              </h2>
              <h3 className="mt-4 lg:mt-6 lg:max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                Finding the right products to sell is the core of a mature
                online arbitrage business. If you can't routinely produce useful
                leads, how much are you losing through undiscovered
                opportunities?
              </h3>
            </div>
          </header>
          <div className="mt-12 lg:ml-12 md:max-w-sm lg:max-w-none lg:w-1/3 text-gray-700">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-600 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
              Loss on sorting leads
            </h3>
            <p className="mt-2">
              Sifting through software for hours a day trying to find profitable
              products is a good way to waste time even if you know where to
              start.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-12 relative container lg:flex lg:justify-between md:overflow-x-hidden lg:overflow-visible">
          {costItems.map(item => (
            <div
              key={item.id}
              v-for="item in items"
              className="relative z-10 md:max-w-sm lg:max-w-none lg:w-1/3 first:ml-0 lg:ml-8 first:mt-0 mt-8 lg:mt-0 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-600 text-white`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={item.iconPath}
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                {item.header}
              </h3>
              <p className={`mt-2`}>{item.content}</p>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 z-0 transform rotate-180 translate-y-16 -translate-x-56">
            <HalfDotted className="hidden md:inline-block w-48 text-gray-300" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-24 bg-gray-100">
        <div className="container">
          <header className="relative lg:mx-auto md:max-w-xl lg:max-w-2xl">
            <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 lg:text-center">
              LeadGeek makes it easy for Amazon sellers like you to:
            </h2>
            <div className="absolute bottom-0 right-0 z-0 transform lg:translate-y-8 lg:translate-x-24">
              <HalfDotted className="hidden lg:inline-block w-48 text-gray-200" />
            </div>
          </header>
          {featureList.map(feature => (
            <article
              key={feature.number}
              className="mt-8 lg:mt-12 flex flex-col-reverse md:flex-row  md:items-center justify-between"
            >
              <div className="md:w-1/2 md:flex">
                <span className="p-3 h-8 w-8 flex items-center justify-center bg-teal-200 rounded-full font-bold text-teal-500">
                  {feature.number}
                </span>
                <header className="mt-2 md:ml-4 lg:ml-8 md:max-w-md">
                  <h2 className="lg:text-xl font-semibold text-gray-900">
                    {feature.header}
                  </h2>
                  <p className="mt-2 text-gray-700">{feature.body}</p>
                </header>
              </div>
              <div className="md:ml-12 lg:ml-16 md:w-1/2">
                <Img fluid={feature.image} className="w-full max-w-xs" />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="my-12 md:my-16 lg:my-24 container lg:flex lg:justify-between text-gray-900">
        <header className="relative md:max-w-md lg:w-1/3 xl:w-2/5 text-3xl md:text-4xl lg:text-5xl font-black">
          <h2 className="relative z-10">
            The complete toolkit for productive arbitrage.
          </h2>
          <div className="absolute bottom-0 left-0 z-0 transform translate-y-6 -translate-x-6 lg:-translate-y-64 lg:-translate-x-16">
            <Squiggles className="hidden md:inline-block w-64 text-purple-200" />
          </div>
        </header>
        <aside className="lg:mx-0 mt-8 lg:mt-0 lg:max-w-xl lg:w-2/3 xl:w-3/5 text-gray-700">
          <div className="md:flex md:justify-between">
            <div className="md:mr-8 lg:w-1/2">
              <svg
                className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                Strict criteria
              </h3>
              <p className="mt-2">
                Don't sacrifice standards or cut any corners - every lead needs
                to meet rigorous requirements before they're approved and sent
                to you.
              </p>
              <ArrowLink
                link="/features/criteria"
                linkText="Learn about lead criteria"
              />
            </div>
            <div className="mt-8 md:mt-0 lg:w-1/2">
              <svg
                className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                Proven reliability
              </h3>
              <p className="mt-2">
                Our team works tirelessly to bring you a consistent output of
                high-quality products that you can count on to deliver results.
              </p>
              <ArrowLink
                link="/features/reliability"
                linkText="Learn about sourcing reliability"
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-12 md:flex md:justify-between text-gray-700">
            <div className="md:mr-12 lg:w-1/2">
              <svg
                className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                Seller education
              </h3>
              <p className="mt-2">
                Learn foundational online arbitrage concepts and strategies
                through guides, courses, and templates available for members.
              </p>
              <ArrowLink
                link="/features/education"
                linkText="Learn about arbitrage training"
              />
            </div>
            <div className="mt-8 md:mt-0 lg:w-1/2">
              <svg
                className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-100 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold text-gray-900">
                Member support
              </h3>
              <p className="mt-2">
                Reach out to us for dedicated support, Amazon selling
                assistance, and other perks exclusive to LeadGeek members.
              </p>
              <ArrowLink
                link="/features/support"
                linkText="Learn about member support"
              />
            </div>
          </div>
        </aside>
      </section>
      <section className="mt-12 md:mt-16 lg:mt-24 bg-gray-200 text-gray-700">
        <div className="container relative lg:flex">
          {/* <Img
            fluid={data.inspectedProducts.childImageSharp.fluid}
            className="lg:mr-12 max-w-lg lg:max-w-4xl lg:h-full lg:w-1/3 xl:w-2/5"
          /> */}
          <article className="mt-8 lg:mt-0 py-12 md:py-16 lg:py-24 lg:pr-6 xl:pr-8 lg:w-3/5 lg:max-w-xl">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="p-2 h-10 w-10 flex-shrink-0 rounded-md bg-purple-600 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <header className="mt-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                Access thoroughly-inspected products.
              </h3>
              <p className="mt-2">
                Strictly-vetted leads provide a cushion to account for shipping
                costs, prep fees, and unforseen price volatility. LeadGeek
                products must adhere to several high criteria before you ever
                even see them, which means you only receive the
                cream-of-the-crop selling opportunities.
              </p>
            </header>
            <aside className="mt-4 text-gray-700">
              <div className="flex items-center">
                <div className="uppercase whitespace-no-wrap text-sm md:text-base text-purple-600 font-bold">
                  Our standards
                </div>
                <span className="ml-2 w-full md:w-3/5 border border-gray-300" />
              </div>
              <div className="mt-4 flex">
                <div className="md:w-1/4">
                  <span className="font-bold text-4xl text-purple-600">$4</span>
                  <span className="block uppercase text-sm">
                    Minimum profit
                  </span>
                </div>
                <div className="ml-8 md:w-1/4">
                  <span className="font-bold text-4xl text-purple-600">
                    40%
                  </span>
                  <span className="block uppercase text-sm">Minimum ROI</span>
                </div>
                <div className="ml-8 md:w-1/4">
                  <span className="font-bold text-4xl text-purple-600">
                    10+
                  </span>
                  <span className="block uppercase text-sm">Sales / month</span>
                </div>
              </div>
            </aside>
          </article>
        </div>
      </section>
      <CTA
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="Join now"
        link="demo"
        linkText="Watch demo"
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

export const query = graphql`
  query {
    saveTime: file(relativePath: { eq: "save-time.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sourceProducts: file(relativePath: { eq: "source-products.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    scaleVolume: file(relativePath: { eq: "scale-volume.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    inspectedProducts: file(relativePath: { eq: "inspected-products.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
