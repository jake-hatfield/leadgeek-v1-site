import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"
import CTA from "../components/cta"

import IconExample from "../assets/bell.svg"

const featureList = [
  {
    number: "1",
    header: "Lorem ipsum dolor sit",
    body:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabunde quibusdam optio distinctio vitae similique amet aut cumquereprehenderit doloremque!",
    image: "Hello",
  },
  {
    number: "2",
    header: "Lorem ipsum dolor sit",
    body:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabunde quibusdam optio distinctio vitae similique amet aut cumquereprehenderit doloremque!",
    image: "Hello",
  },
  {
    number: "3",
    header: "Lorem ipsum dolor sit",
    body:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabunde quibusdam optio distinctio vitae similique amet aut cumquereprehenderit doloremque!",
    image: "Hello",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <PrimaryHeader
        header={`We help you find great online arbitrage leads.`}
        subHeader={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo unde
        quibum optio distinctio vitae similique amet aut cumque reprehenderit
        doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Explicabo unde quibusdam optio distinctio vitae similique amet aut
        cumque reprehenderit doloremque!`}
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
          <article key={feature.number} className="mt-8 md:mt-12 lg:mt-16">
            <div className="flex">
              <div className="lg:mt-1 p-3 md:p-0 flex items-center justify-center h-8 w-8 bg-teal-200 rounded-full font-bold text-teal-500 number-list">
                {feature.number}
              </div>
              <header className="mt-1 ml-8 md:max-w-md">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900">
                  {feature.header}
                </h2>
                <p className="mt-4 text-gray-700 lg:text-lg">{feature.body}</p>
              </header>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="mt-12 lg:mt-24 container md:flex md:justify-between">
      <header className="md:max-w-xs lg:w-2/5 font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900">
        <h2>Lorem ipsum dolor sit amet.</h2>
      </header>
      <aside className="md:mx-auto lg:mx-0 mt-8 md:mt-0 md:max-w-xl lg:w-3/5">
        <div className="md:flex md:justify-between">
          <div className="md:mr-12 lg:w-1/2">
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
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
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
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
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
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
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
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
    <CTA />
  </Layout>
)

export default IndexPage
