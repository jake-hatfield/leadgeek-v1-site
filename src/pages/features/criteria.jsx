import React from "react"

import Layout from "../../components/layout"
import AltHeader from "../../components/altHeader"
import AlternatingDescription from "../../components/alternatingDescription"

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
  return (
    <Layout>
      <AltHeader
        title={`Strict Criteria`}
        header={`Online Arbitrage Leads That Save You Time.`}
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
      <AlternatingDescription
        mainHeader={`Lorem ipsum dolor sit amet consur`}
        items={description}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        tertiaryColor={`text-purple-600`}
        reverse
      />
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
