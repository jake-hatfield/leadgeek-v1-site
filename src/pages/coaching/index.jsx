import React from "react"
import Img from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

import LongArrow from "assets/svgs/arrow-straight-solid.svg"
import OgImage from "assets/images/og/og-features-index.jpg"

const FeaturesIndexPage = () => {
  const title = `Leadgeek Features`
  const desc = ``
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/features/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "See the top 20 Leadgeek features",
            },
          ],
        }}
        language="en"
      />
      <section className="relative overflow-hidden bg-splatter">
        <HeaderWrapper>
          <PrimaryHeader
            title={`Book a free 1:1 OA coaching session.`}
            desc={
              <p>
                Selling on Amazon can be a whole 'nother beast. Bring some
                questions about online arbitrage and leave with answers -
                totally free. It's not a demo, it's a 20 minute chat.
              </p>
            }
            nav
            outsideLink={`https://scheduling.leadgeek.io/`}
            linkOneText={`Book a free session`}
            svgOne={
              <div className="hidden lg:block absolute right-1/2 transform -translate-y-12 -translate-x-80">
                <div className="relative">
                  <p className="py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-56 -rotate-6 hover:-rotate-3">
                    "Strings attached" is totally lame. This is string-free.
                  </p>
                  <LongArrow className="absolute right-0 h-48 transform -rotate-90 -translate-y-32 translate-x-28 text-gray-500" />
                </div>
              </div>
            }
          />
        </HeaderWrapper>
      </section>
      <section className="relative py-12 lg:py-20 md:text-center overflow-hidden bg-splatter">
        <div className="container">
          <header>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white">
              What to expect from our little convo
            </h2>
            <p className="mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-700">
              Whether you're starting out on Amazon or you're feeling a little
              stuck,{" "}
              <span className="emphasized-text lg:text-lg">
                let's tailor the conversation around you
              </span>{" "}
              and find a solution. Here's what we'll tackle in 20 minutes with a
              loose structure and plenty of room for questions.
            </p>
          </header>
          <div className="mt-12 px-4">
            <ul className="mx-auto md:max-w-xl lg:max-w-2xl md:text-lg lg:text-xl leading-relaxed text-gray-800 text-center">
              {expectationsList.map((exp, i) => (
                <li
                  key={i}
                  className={`relative mx-auto md:max-w-xl lg:max-w-2xl mt-12 lg:mt-24 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-dark transform ${exp.rotate}`}
                >
                  <span className="absolute top-0 left-0 transform -translate-y-4 -translate-x-4 inline-flex items-center justify-center bg-gray-900 text-teal-300 shadow-tealSm py-2 w-8 h-8 px-4 rounded-full text-lg">
                    {i + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl xl:text-3xl font-black text-gray-900 inter">
                    {exp.title}
                  </h3>
                  <div className="mt-4 lg:mt-6 h4">{exp.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-24 text-gray-900 bg-splatter">
        <div className="px-4 lg:px-12 xl:px-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto max-w-3xl lg:max-w-none">
            <header className="md:mx-auto lg:mx-0 max-w-xl text-left md:text-center lg:text-left mt-8 lg:mt-0 lg:w-2/5 bg-white">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
                You'll be talkin' to me.
              </h2>
              <p className="mt-4 lg:mt-6 mx-auto h4 text-gray-900">
                With 4+ years of experience with Amazon arbitrage, I've learned
                a lot - and I'm still figuring it out. I'm grateful to have a
                unique vantage point as the founder of Leadgeek, since there's
                tons of insight to be gained working with FBA sellers every
                single day. Not only do I learn what works, I pick up on what
                doesn't.{" "}
                <span className="emphasized-text lg:text-lg">
                  If you want to bounce some ideas about e-commerce around,
                  let's chat
                </span>
                .
              </p>
            </header>
            <div className="md:mx-auto lg:ml-12 lg:mr-0 w-full lg:w-3/5 max-w-2xl lg:max-w-4xl">
              <Img
                // fluid={data.app.childImageSharp.fluid}
                alt="Online arbitrage lead criteria"
                className="w-full rounded-lg border border-gray-900 stack-sm transform hover:rotate-2 transition-main"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const expectationsList = [
  {
    title: "Identify your blind spots",
    desc:
      "It's important to know what you don't know. We'll start by asking about your experience with online arbitrage and Amazon FBA to make this conversation as relevant as possible and save time.",
    rotate: "rotate-3 hover:rotate-2",
  },
  {
    title: "Get practical & personalized advice",
    desc:
      "Based on your questions and experience, I'll try to recommend some tools or habits to make your sourcing experience a bit more smooth. ",
    rotate: "-rotate-2 hover:-rotate-1",
  },
  {
    title: "Learn the best practices of OA",
    desc:
      "Get quick tips on how effective online arbitrage sellers find better products and recover lost time. We'll quickly cover sourcing strategies, hiring, or product analysis - whatever piques your interest.",
    rotate: "rotate-2 hover:rotate-3",
  },
]

export default FeaturesIndexPage
