import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"
import CTA from "../components/cta"

import IconExample from "../assets/bell.svg"

const featureList = [
  {
    number: "1",
    header: "Drastically save time",
    body:
      "Our online arbitrage leads allow you to remove yourself from the painstaking task of sourcing. Review a daily pre-vetted list of leads in minutes each day.",
    image: "Hello",
  },
  {
    number: "2",
    header: "Predictably source products",
    body: "As an Amazon arbitrage seller, ",
    image: "Hello",
  },
  {
    number: "3",
    header: "Significantly scale volume",
    body:
      "Once you've tapped into our consistent flow of product leads, you can scale your sourcing needs up with us as your business grows.",
    image: "Hello",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <PrimaryHeader
        header={`We help you find great online arbitrage leads.`}
        subHeader={`Turn "I don't know what to sell" into "I have too much to buy": Receive a daily list of the best arbitrage products to flip on Amazon. Our highly skilled team sources for hours each day to bring a tailored batch of proven leads to your inbox.`}
        nav
        linkOne={`pricing`}
        linkOneText={`Get started`}
        linkTwo={`demo`}
        linkTwoText={`Watch demo`}
        play
      />
    </section>
    <section className="mt-12 lg:mt-24 py-12 lg:py-24 bg-gray-100">
      <div className="container">
        <header className="lg:mx-auto md:max-w-xl xl:max-w-2xl">
          <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900 lg:text-center">
            Lead<span className="text-purple-500">Geek</span> makes it easy for
            arbitrage sellers like you to:
          </h2>
        </header>
        {featureList.map(feature => (
          <article key={feature.number} className="mt-8 lg:mt-12">
            <div className="flex">
              <div className="lg:mt-1 p-3 md:p-0 flex items-center justify-center h-8 w-8 bg-teal-200 rounded-full font-bold text-teal-500 number-list">
                {feature.number}
              </div>
              <header className="mt-1 ml-8 md:max-w-md">
                <h2 className="text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
                  {feature.header}
                </h2>
                <p className="mt-4 text-gray-700 lg:text-lg">{feature.body}</p>
              </header>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="mt-12 lg:mt-24 container lg:flex lg:justify-between">
      <header className="md:max-w-xs lg:w-2/5 font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900">
        <h2>The complete toolkit for productive sourcing.</h2>
      </header>
      <aside className="lg:mx-0 mt-8 lg:mt-0 lg:max-w-xl lg:w-3/5">
        <div className="md:flex md:justify-between">
          <div className="md:mr-12 lg:w-1/2">
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
            <h3 className="mt-6 text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
              Identifying your dream persona
            </h3>
            <p className="mt-4 text-gray-700 lg:text-lg">
              Founders who cast a wide net inevitably pick up some trash. Rather
              than marketing wide, I will help you market deep by creating a
              clear ideal persona (and equally as importantly - a negative
              persona).
            </p>
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
            <h3 className="mt-6 text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
              Clarifying your message
            </h3>
            <p className="mt-4 text-gray-700 lg:text-lg">
              Your company may solve many problems, but which one(s) do your
              users care about the most? I will trim the fat from your messaging
              to serve your users up some filet-mignon quality clarity.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-12 md:flex md:justify-between">
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
            <h3 className="mt-6 text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
              Positioning your brand strategically
            </h3>
            <p className="mt-4 text-gray-700 lg:text-lg">
              Smart SaaS companies are constantly trying to out-position their
              competitors so their ideal customers come to them. I will help
              identify and communicate your strongest advantages to your users.
            </p>
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
            <h3 className="mt-6 text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
              Converting your power users
            </h3>
            <p className="mt-4 text-gray-700 lg:text-lg">
              Time to take action! Your power users are your dream personas
              matured from caterpillar to butterfly. Once these users fully
              understand the value in your product, they’ll stick around for a
              long, long time.
            </p>
          </div>
        </div>
      </aside>
    </section>
    <section className="mt-12 lg:mt-24 py-12 lg:py-24 bg-gray-100">
      <div className="container md:flex md:justify-between">
        <header className="md:max-w-xl lg:w-2/5 font-bold text-3xl lg:text-4xl text-gray-900">
          <h2>Lorem ipsum dolor sit amet.</h2>
        </header>
        <article className="md:max-w-xl lg:w-3/5">
          <IconExample className="mt-8 md:mt-0 p-2 h-10 w-10 bg-teal-200 rounded-md text-teal-600" />
          <header className="mt-6">
            <h3 className="font-bold text-2xl lg:text-3xl text-gray-900">
              Converting your power users
            </h3>
            <p className="mt-6 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              dolor eius non accusamus quibusdam reprehenderit, magnam suscipit
              autem optio eveniet illo explicabo itaque ea unde consequatur
              aliquam, veritatis ipsum beatae!
            </p>
          </header>
          <aside className="mt-8 flex">
            <div>
              <span className="font-bold text-4xl text-teal-500">$4</span>
              <span className="block uppercase text-sm">Minimum profit</span>
            </div>
            <div className="ml-8">
              <span className="font-bold text-4xl text-teal-500">40%</span>
              <span className="block uppercase text-sm">Minimum ROI</span>
            </div>
            <div className="ml-8">
              <span className="font-bold text-4xl text-teal-500">10+</span>
              <span className="block uppercase text-sm">Sales / month</span>
            </div>
          </aside>
        </article>
      </div>
    </section>
    <CTA
      padding={`py-12 lg:py-24`}
      bgColor="bg-purple-600"
      textColor="text-white"
      buttonStyles="bg-white text-purple-600 hover:text-purple-800"
      buttonText="Join now"
      link="demo"
      linkText="Watch demo"
      linkStyles="text-purple-100 hover:text-purple-200"
    />
  </Layout>
)

export default IndexPage
