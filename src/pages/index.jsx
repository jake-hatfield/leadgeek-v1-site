import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import IconExample from "../assets/bell.svg"
import Play from "../assets/play.svg"

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
    <section className="mt-8 md:mt-12 lg:mt-16 container">
      <header className="md:text-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900">
          Online arbitrage leads for e-com sellers.
        </h1>
        <h2 className="mt-4 mx-auto lg:mt-8 lg:max-w-4xl text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          unde quibusdam optio distinctio vitae similique amet aut cumque
          reprehenderit doloremque! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Explicabo unde quibusdam optio distinctio vitae
          similique amet aut cumque reprehenderit doloremque!
        </h2>
        <nav className="mt-12 font-semibold text-center">
          <Link
            to={`/pricing`}
            className="py-3 px-4 lg:py-4 lg:px-10 block md:inline-block rounded-md bg-purple-600 lg:text-xl text-white hover:bg-purple-500 transition-colors duration-200"
          >
            Get started
          </Link>
          <Link
            to={`/demo`}
            className="mt-4 md:mt-0 md:ml-2 py-3 lg:py-4 px-4 lg:px-12 block md:inline-block relative rounded-md bg-purple-100 lg:text-xl text-purple-600 hover:bg-purple-200 transition-colors duration-200"
          >
            Watch demo
            <Play className="h-5 w-5 absolute button-icon inline bg-white rounded-full text-purple-600" />
          </Link>
        </nav>
      </header>
    </section>
    <section className="mt-12 lg:mt-24 py-12 lg:py-24 bg-gray-100">
      <div className="container">
        <h2 className="font-bold text-3xl lg:text-4xl text-gray-900 lg:text-center">
          With Lead<span className="text-purple-500">Geek</span>, sellers like
          you can:
        </h2>
        {featureList.map(feature => (
          <article key={feature.number} className="mt-8 md:mt-12 lg:mt-16">
            <div className="flex">
              <div className="p-3 md:p-0 flex items-center justify-center h-8 w-8 bg-teal-200 rounded-full font-bold text-teal-500 number-list">
                {feature.number}
              </div>
              <header className="mt-1 ml-8 md:max-w-md">
                <h2 className="text-xl lg:text-2xl font-medium text-gray-900">
                  {feature.header}
                </h2>
                <p className="mt-4 text-gray-700">{feature.body}</p>
              </header>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="mt-12 lg:mt-24 container md:flex md:justify-between">
      <header className="md:max-w-xs lg:w-2/5 font-bold text-3xl lg:text-4xl text-gray-900">
        <h2>Lorem ipsum dolor sit amet.</h2>
      </header>
      <aside className="md:mx-auto lg:mx-0 mt-8 md:mt-12 lg:mt-0 md:max-w-xl lg:w-3/5">
        <div className="md:flex md:justify-between">
          <div className="md:mr-12 lg:w-1/2">
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
            <h3 className="mt-6 lg:text-xl font-medium text-gray-900">
              Identifying your dream persona
            </h3>
            <p className="mt-4 text-gray-700">
              Founders who cast a wide net inevitably pick up some trash. Rather
              than marketing wide, I will help you market deep by creating a
              clear ideal persona (and equally as importantly - a negative
              persona).
            </p>
          </div>
          <div className="mt-8 md:mt-0 lg:w-1/2">
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
            <h3 className="mt-6 lg:text-xl font-medium text-gray-900">
              Clarifying your message
            </h3>
            <p className="mt-4 text-gray-700">
              Your company may solve many problems, but which one(s) do your
              users care about the most? I will trim the fat from your messaging
              to serve your users up some filet-mignon quality clarity.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-12 md:flex md:justify-between">
          <div className="md:mr-12 lg:w-1/2">
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
            <h3 className="mt-6 lg:text-xl font-medium text-gray-900">
              Positioning your brand strategically
            </h3>
            <p className="mt-4 text-gray-700">
              Smart SaaS companies are constantly trying to out-position their
              competitors so their ideal customers come to them. I will help
              identify and communicate your strongest advantages to your users.
            </p>
          </div>
          <div className="mt-8 md:mt-0 lg:w-1/2">
            <IconExample className="p-2 h-10 w-10 bg-purple-100 rounded-md text-purple-600" />
            <h3 className="mt-6 lg:text-xl font-medium text-gray-900">
              Converting your power users
            </h3>
            <p className="mt-4 text-gray-700">
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
    <section className="my-12 lg:my-24 container text-center">
      <header>
        <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-gray-900">
          Ready to get started?
          <span className="mt-4 lg:mt-2 block">
            Sign up for LeadGeek today.
          </span>
        </h2>
        <nav className="mt-12 font-semibold">
          <Link
            to={`/pricing`}
            className="py-3 px-4 lg:py-4 lg:px-5 block md:inline-block rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200"
          >
            Get started
          </Link>
          <Link
            to={`/demo`}
            className="mt-4 md:mt-0 ml-0 md:ml-2 py-3 px-4 lg:py-4 lg:px-5 block md:inline-block relative rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
          >
            Watch a demo
            <Play className="h-5 w-5 absolute button-icon inline bg-white rounded-full text-purple-600" />
          </Link>
        </nav>
      </header>
    </section>
  </Layout>
)

export default IndexPage
