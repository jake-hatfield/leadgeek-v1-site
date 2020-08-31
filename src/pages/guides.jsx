import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryHeader from "../components/primaryHeader"
import EmailModal from "../components/emailModal"

const GuidesPage = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const guides = [
    {
      id: 1,
      category: "Selling techniques",
      color: "purple",
      title: "Interpreting Product Analytics with Keepa",
      description:
        "Study a product's metrics to turn arbitrage into a science. In this guide, you'll learn how to use powerful tools to determine the risk/reward of potential purchasing opportunities.",
      date: "Sep 1, 2020",
      length: "19 minute read",
      shortName: "Keepa",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: 2,
      category: "Account Tips",
      color: "green",
      title: "Opening Possibilities with Ungating",
      description:
        "Be able to take advantage of as many arbitrage opportunities as possible with a mature seller account. This guide teaches you the ungating process so you're no longer limited.",
      date: "Sep 6, 2020",
      length: "12 minute read",
      shortName: "ungating",
      image: data.astronaut.childImageSharp.fluid,
    },
  ]
  return (
    <Layout>
      <SEO title="Arbitrage Guides" />
      <section className="-mt-40 bg-gray-100 inset-0 text-gray-900">
        <PrimaryHeader
          header={`How-to guides`}
          subHeader={`Each of these free guides contain advice and research to give you more insight into how to become an effective Amazon arbitrage seller.`}
          bottomPadding="pb-32"
          negativeMargin
        />
      </section>
      <section className="-mt-12 mb-24 container md:grid md:grid-cols-2 lg:grid-cols-3 text-gray-700">
        {guides.map(guide => (
          <div className="mt-6 first:mt-0 md:mt-0 mx-auto md:mr-0 first:md:ml-0 md:ml-4 lg:ml-6 max-w-xs md:max-w-none">
            <article
              key={guide.id}
              className="relative z-10 rounded-md bg-white shadow-md"
            >
              <div>
                <Img
                  fluid={guide.image}
                  className="h-48 lg:h-40 w-full relative rounded-t-md border-b-2 border-gray-200"
                />
                <div className="mt-2 mr-2 p-1 absolute z-20 top-0 right-0 flex items-center justify-center rounded-full bg-gray-400 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <header className="pt-2 px-4 pb-4 md:pt-4 md:px-6 md:pb-6">
                <span
                  className={`${
                    guide.color === `purple`
                      ? `bg-purple-100 text-purple-600`
                      : `bg-teal-200 text-teal-500`
                  } py-1 px-2 rounded-full font-semibold text-xs uppercase tracking-tight`}
                >
                  {guide.category}
                </span>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-gray-900">
                  {guide.title}
                </h2>
                <p className="mt-2">{guide.description}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span>{guide.date}</span>
                  <span className="ml-1 text-gray-300">&bull;</span>
                  <span className="ml-1">{guide.length}</span>
                </div>
                <button
                  onClick={() => setModalOpen(!modalOpen)}
                  className="mt-8 py-3 w-full flex items-center justify-center shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 font-bold transition-colors duration-200 focus:outline-none focus:shadow-outline"
                >
                  <span>Get the guide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="ml-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </button>
              </header>
            </article>
            <EmailModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              header={guide.shortName}
              image={guide.image}
              bullets={guide.bullets}
            />
          </div>
        ))}
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default GuidesPage
