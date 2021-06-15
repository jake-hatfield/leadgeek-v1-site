import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"

import LongArrow from "assets/svgs/arrow-straight-solid.svg"
import DividerTop from "assets/svgs/section-divider-top.svg"
import OgImage from "assets/images/og/og-coaching.jpg"

const CoachingIndexPage = ({ data }) => {
  const title = `Free Online Arbitrage Coaching`
  const desc = `Selling on Amazon can be a whole 'nother beast. Bring some questions about online arbitrage and leave with answers - totally free. It's not a demo, it's a 20 minute chat.`
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/coaching/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Book a free online arbitrage coaching call",
            },
          ],
        }}
        language="en"
      />
      <section className="relative overflow-hidden bg-splatter">
        <HeaderWrapper>
          <PrimaryHeader
            title={`Book a free 1:1 online arbitrage coaching call.`}
            desc={
              <p>
                Selling on Amazon can be a whole 'nother beast. Bring some
                questions about online arbitrage and leave with answers -
                totally free. It's not a demo, it's a 20 minute chat.
              </p>
            }
            nav
            outsideLink={`https://scheduling.leadgeek.io/`}
            linkOneText={`Book a free call`}
            svgOne={
              <div className="hidden lg:block absolute z-20 right-1/2 transform -translate-y-12 -translate-x-80">
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
      <section className="relative pb-12 lg:pb-20 md:text-center overflow-hidden bg-splatter">
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
                  className={`relative mx-auto md:max-w-xl lg:max-w-2xl mt-12 md:mt-16 lg:mt-24 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-dark transform ${exp.rotate}`}
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
      <section className="pt-12 pb-16 md:text-center bg-splatter">
        <div className="container">
          <header className="mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white">
              Here's a list of things you will and will not learn from our call
              together.
            </h2>
          </header>
          <div className="mt-12 md:mt-16 md:flex md:justify-between">
            <div className="md:w-1/2">
              <header>
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white">
                  You will
                </h3>
              </header>
              <div className="mt-8 bg-gray-900 py-4 lg:py-6 px-6 rounded-lg stack-sm text-white text-left">
                <ul>
                  {youWillList.map((item, i) => (
                    <li key={i} className="first:mt-0 mt-4 lg:mt-6">
                      <span className="font-bold italic">You will</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-16 md:mt-0 md:ml-12 md:w-1/2">
              <header>
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter bg-white">
                  You will not
                </h3>
              </header>
              <div className="mt-8 bg-gray-900 py-4 lg:py-6 px-6 rounded-lg stack-sm text-white text-left">
                <ul>
                  {youWillNotList.map((item, i) => (
                    <li key={i} className="first:mt-0 mt-4 lg:mt-6">
                      <span className="font-bold italic">You will not</span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mt-12 py-12 lg:py-24 text-white bg-gray-900">
        <DividerTop className="divider-top text-gray-900" />
        <div className="px-4 lg:px-12 xl:px-16 overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-auto max-w-3xl lg:max-w-none">
            <header className="md:mx-auto lg:mx-0 max-w-lg mt-8 lg:mt-0">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
                You'll be talkin' to me.
              </h2>
              <p className="mt-4 lg:mt-6 mx-auto h4">
                Howdy, I'm Jake. I'm grateful to have a unique vantage point as
                the founder of Leadgeek since there's tons of insight to be
                gained working with FBA sellers every single day. Not only do I
                learn what works, I've picked up on what doesn't.{" "}
                <span className="emphasized-text-light lg:text-lg">
                  If you want to bounce some ideas about e-commerce around,
                  let's chat
                </span>
                .
              </p>
              <div className="my-8 text-center md:text-left">
                <a
                  href="https://scheduling.leadgeek.io/"
                  className="block md:inline-block cta-link inter"
                >
                  Book a free call
                </a>
              </div>
            </header>
            <div className="relative md:mx-auto md:ml-24 lg:ml-48 lg:mr-0 w-full max-w-xs">
              <Img
                fluid={data.headshot.childImageSharp.fluid}
                alt="Online arbitrage lead criteria"
                className="w-full rounded-lg transform rotate-6 hover:rotate-12 transition-main"
              />
              <div className="hidden xl:block">
                <p className="absolute top-0 right-0 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-56 translate-x-40 -rotate-6 hover:-rotate-3">
                  I grew this massive beard to distract from my steadily
                  receding hairline.
                </p>
                <p className="absolute top-0 left-0 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform shadow-tealMd text-center transition-main w-56 -translate-x-40 translate-y-12 -rotate-6 hover:-rotate-3">
                  Glasses make you 24.7% better at arbitrage.
                </p>
              </div>
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
    desc: (
      <p>
        It's important to know what you don't know.{" "}
        <span className="emphasized-text lg:text-lg">
          I'll start by asking about your experience with online arbitrage and
          Amazon FBA
        </span>{" "}
        to make this conversation as relevant as possible and save time.
      </p>
    ),
    rotate: "rotate-3 hover:rotate-2",
  },
  {
    title: "Get practical & personalized advice",
    desc: (
      <p>
        Based on your questions and experience,{" "}
        <span className="emphasized-text lg:text-lg">
          I'll try to recommend some tools or habits to make your sourcing
          experience a bit more smooth
        </span>
        .
      </p>
    ),
    rotate: "-rotate-2 hover:-rotate-1",
  },
  {
    title: "Learn the best practices of OA",
    desc: (
      <p>
        Get quick tips on how effective online arbitrage sellers find better
        products and recover lost time.{" "}
        <span className="emphasized-text lg:text-lg">
          We'll quickly cover sourcing strategies, hiring, or product analysis
        </span>{" "}
        - whatever piques your interest.
      </p>
    ),
    rotate: "rotate-2 hover:rotate-3",
  },
]

const youWillList = [
  `learn which sourcing tools are important and which ones aren't worth the time.`,
  `learn how to develop your own unique selling style.`,
  `learn best best practices to keep your Seller Central account healthy.`,
  `learn how to get ungated in more brands and categories over time.`,
]

const youWillNotList = [
  `learn how to make loads of money overnight.`,
  `learn a one-size-fits-all selling strategy.`,
  `learn the exact metrics a products should include for you to buy 27 units of it.`,
  `be bored if I can possibly help it. Arbitrage is actually a ton of fun.`,
]

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 850, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default CoachingIndexPage
