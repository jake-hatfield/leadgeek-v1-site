import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PrimaryHeader from "../components/primaryHeader"
import LargeDescription from "../components/largeDescription"
import CTA from "../components/cta"
import AlternatingDescription from "../components/alternatingDescription"
import TripleIcons from "../components/tripleIcons"

const aboutPage = ({ data }) => {
  const criteriaItems = [
    {
      id: "1",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: "2",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
  ]

  const description = [
    {
      id: "1",
      span: "Standards",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: "2",
      span: "Standards",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
    {
      id: "3",
      span: "Standards",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
      image: data.astronaut.childImageSharp.fluid,
    },
  ]
  const whyLeadGeek = [
    {
      id: 1,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Identifying your dream personas",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide, I will help you market deep by creating a clear ideal persona (and equally as importantly",
    },
    {
      id: 2,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Identifying your dream personas",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide, I will help you market deep by creating a clear ideal persona (and equally as importantly",
    },
    {
      id: 3,
      iconPath:
        "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
      header: "Identifying your dream personas",
      content:
        "Founders who cast a wide net inevitably pick up some trash. Rather than marketing wide, I will help you market deep by creating a clear ideal persona (and equally as importantly",
    },
  ]

  return (
    <Layout>
      <section>
        <PrimaryHeader
          header={`The Ultimate Toolkit for Online Arbitrage.`}
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
        <TripleIcons
          mainHeader={`Why customers choose LeadGeek`}
          items={whyLeadGeek}
          margin={`mt-12 lg:mt-24`}
          bgColor={`bg-purple-600`}
          primaryTextColor={`text-white`}
          secondaryTextColor={`text-purple-100`}
        />
        <AlternatingDescription
          mainHeader={`Lorem ipsum dolor sit amet consur`}
          items={description}
          bgColor={`bg-gray-100`}
          primaryTextColor={`text-gray-900`}
          secondaryTextColor={`text-gray-700`}
          tertiaryColor={`text-purple-600`}
          reverse
        />
        <LargeDescription
          mainHeader={`Lorem ipsum dolor sit amet consur`}
          mainSubheader={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.`}
          items={criteriaItems}
          bgColor={`bg-purple-600`}
          primaryTextColor={`text-white`}
          secondaryTextColor={`text-purple-100`}
        />
        <CTA />
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

export default aboutPage
