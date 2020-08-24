import React from "react"

import Layout from "../../components/layout"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"

import Check from "../../assets/check.svg"

const LeadCriteriaPage = () => {
  const description = [
    {
      id: "1",
      span: "Standards",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      //   image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: "2",
      span: "Standards",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      //   image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: "3",
      span: "Standards",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      //   image: data.astronaut.childImageSharp.fluid,
    },
  ]
  const leadReliability = [
    {
      id: 1,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Identifying your drea",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide",
    },
    {
      id: 2,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Identifying your drea",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide",
    },
    {
      id: 3,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Identifying your drea",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide",
    },
  ]
  return (
    <Layout>
      <AltHeader
        title={`Proven reliability`}
        header={`Online Arbitrage Leads That Save You Time.`}
        subHeader={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo unde
        quibum optio distinctio vitae similique amet aut cumque reprehenderit
        doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Explicabo unde quibusdam optio distinctio vitae similique amet aut
        cumque reprehenderit doloremque!`}
        nav
        linkOne={`signup`}
        linkOneText={`Join now`}
        linkTwo={`demo`}
        linkTwoText={`Watch the demo`}
      />
      <ThreeIconList
        items={leadReliability}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        margin={`mt-20`}
        title={`How it works`}
        mainHeader={`Lorem ipsum dolor sit`}
      />
      <section className="mt-8 md:mt-12 lg:mt-20 -mb-16 lg:-mb-24 md:mx-auto container-width text-gray-700">
        <header className="px-4 max-w-2xl">
          <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
            Thing one
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Thing number one explained
          </h2>
        </header>
        <div className="mt-12 md:px-4 md:flex md:justify-between">
          <div className="md:mt-12 px-4 md:px-0 md:w-1/4">
            <h3 className="text-xl font-semibold text-gray-900">Lorem ipsum</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sequi soluta accusantium enim officia atque nam repudiandae ipsam
              vero nesciunt!
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-4 lg:ml-6 md:w-3/4">
            <table className="relative z-20 md:table-fixed bg-gray-900 text-xs lg:text-sm text-white border-0">
              <thead className="bg-white text-gray-700 font-bold border-0">
                <th className="md:w-1/2 border-0"></th>
                <th className="md:w-1/4 text-center md:text-left border-0">
                  Traditional
                </th>
                <th className="md:w-1/4 text-center md:text-left border-0">
                  LeadGeek
                </th>
              </thead>
              <tbody className="leading-snug font-normal shadow-lg">
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Sourcing products</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-purple-800 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="font-medium border-0">Sorting leads</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-purple-800 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Validating matches</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-purple-800 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="font-medium border-0">Picking products</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-purple-800 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Checking in stock</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-purple-800 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="font-medium border-0">
                    Determining profitability
                  </th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-purple-800 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <th className="font-medium border-0">Promo codes</th>
                  <td className="text-center md:text-left border-0">Manual</td>
                  <td className="border-0">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-purple-800 bg-purple-400 rounded-full" />
                      <p className="ml-2">Automatic</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-20 bg-gray-100">
        <div className="container">Hello</div>
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

export default LeadCriteriaPage
