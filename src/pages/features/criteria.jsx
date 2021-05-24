import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout/Layout"
import SEO from "components/utils/Seo"
import Features from "components/layout/Features"

const LeadCriteriaPage = ({ data }) => {
  const productCategories = [
    {
      id: 1,
      delay: 0,
      dataPoint: "Baby",
    },
    {
      id: 2,
      delay: 1,
      dataPoint: "Beauty & personal care",
    },
    {
      id: 3,
      delay: 2,
      dataPoint: "Books",
    },
    {
      id: 4,
      delay: 3,
      dataPoint: "Clothing, shoes, & jewelry",
    },
    {
      id: 5,
      delay: 4,
      dataPoint: "Electronics",
    },
    {
      id: 6,
      delay: 5,
      dataPoint: "Garden & outdoor",
    },
    {
      id: 7,
      delay: 6,
      dataPoint: "Grocery & gourmet food",
    },
    {
      id: 9,
      delay: 7,
      dataPoint: "Home & kitchen",
    },
    {
      id: 10,
      delay: 8,
      dataPoint: "Industrial & scientific",
    },
    {
      id: 11,
      delay: 9,
      dataPoint: "Office products",
    },
    {
      id: 12,
      delay: 9,
      dataPoint: "Pet supplies",
    },
    {
      id: 13,
      delay: 9,
      dataPoint: "Sports & outdoors",
    },
    {
      id: 14,
      delay: 9,
      dataPoint: "Toys & games",
    },
  ]
  const categoryCount = productCategories.length

  return (
    <Layout>
      <SEO
        title="Strict Criteria"
        description="Strict vetting criteria ensure that only the best online arbitrage products are sent to you, without having to source anything yourself."
      />
      <Features header={"Hello there"} />
    </Layout>
  )
}

export const query = graphql`
  query {
    profit: file(relativePath: { eq: "profit.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    roi: file(relativePath: { eq: "roi.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    bsr: file(relativePath: { eq: "bsr.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sellerInsight: file(relativePath: { eq: "seller-insight.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default LeadCriteriaPage
