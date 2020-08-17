import React from "react"

import Layout from "../components/layout"
import LargeDescription from "../components/largeDescription"

const aboutPage = () => {
  const criteriaItems = [
    {
      id: "1",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
    },
    {
      id: "2",
      header: "Lorem Ipsum dolor sit amet consectetur",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.",
    },
  ]
  return (
    <Layout>
      <section>
        <LargeDescription
          bgColor={`bg-purple-100`}
          mainHeader={`Lorem ipsum dolor sit amet consur`}
          mainSubheader={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum molestiae sed eligendi cupiditate? Veniam dolorem, sit quae sed ducimus aliquam laborum! Deserunt quod quo id, quos odit consequuntur accusantium.`}
          items={criteriaItems}
        />
      </section>
    </Layout>
  )
}

export default aboutPage
