import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AltHeader from "../../components/altHeader"
import ThreeIconList from "../../components/threeIconList"
import LargeDescription from "../../components/largeDescription"
import OtherFeatures from "../../components/otherFeatures"
import CTA from "../../components/cta"

import Dotted from "../../assets/dotted.svg"
import HalfDotted from "../../assets/half-dotted.svg"

const supportPage = ({ data }) => {
  const supportSummary = [
    {
      id: 1,
      iconPath:
        "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      header: "100% Issue solve rate",
      content:
        "We help you get every problem resolved, whether you have a question with our leads or an issue with Amazon itself.",
    },
    {
      id: 2,
      iconPath:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      header: "Seller account protection",
      content:
        "Your account is safe - receive help appealling a wrongful Amazon account suspension as a result of one of our leads.",
    },
    {
      id: 3,
      iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      header: "Accessible communication",
      content:
        "Readily communicate with our team through several methods, so you can have your problems solved quickly and easily.",
    },
  ]
  const supportPoints = [
    {
      id: 1,
      title: "100% Issue solve rate",
      header: "Problem solving at your fingertips.",
      content:
        "Bring any issue to our team's attention, and we guarantee a resolution. No matter how small the problem, LeadGeek members get their inquiries fixed thoroughly every time.",
      image: data.problemSolving.childImageSharp.fluid,
    },
    {
      id: 2,
      title: "Seller account protection",
      header: "Keep your Amazon account humming.",
      content:
        "If you receive a wrongful suspension from Amazon as a result of selling one of our arbitrage leads, our team will help you appeal it. We stand behind our lead suggestions, so you'll be guided through the appeal process to get your account fully reinstated.",
      image: data.accountProtection.childImageSharp.fluid,
    },
    {
      id: 3,
      title: "Accessible communication",
      header: "Tailored & individualized support.",
      content:
        "Because of strict member caps, our team can provide in-depth support through several different methods of communication. Members of the Grow Plan receive support via email, and Pro Plan members additionally receive phone support.",
      image: data.accessibleCommuncation.childImageSharp.fluid,
    },
  ]
  return (
    <Layout>
      <SEO
        title="Member Support"
        description="Join a selling community that genuinely cares about helping you exceed your arbitrage goals. Receive top-tier support when you join LeadGeek."
      />
      <AltHeader
        title={`Member support`}
        header={`Sell with confidence, not confusion.`}
        subHeader={`Navigating Amazon's marketplace can be a challenge, but there's no need to stumble through it alone. LeadGeek members gain access to guidance from experienced arbitrage sellers to prevent pitfalls and solve issues.`}
        nav
        linkOne={`signup`}
        linkOneText={`Join now`}
        linkTwo={`demo`}
        linkTwoText={`Watch demo`}
        svgOne={
          <div className="absolute top-0 right-0 z-0 transform translate-y-4 -translate-x-12">
            <HalfDotted className="hidden md:inline-block w-32 lg:w-48 text-gray-200" />
          </div>
        }
      />
      <ThreeIconList
        items={supportSummary}
        bgColor={`bg-gray-100`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
        iconColor={`bg-purple-100 text-purple-600`}
        margin={`mt-20`}
        title={`Why we're different`}
        mainHeader={`Receive world-class seller support.`}
      />
      <LargeDescription
        items={supportPoints}
        bgColor={`bg-gray-200`}
        primaryTextColor={`text-gray-900`}
        secondaryTextColor={`text-gray-700`}
      />
      <OtherFeatures
        primaryTextColor="text-gray-900"
        secondaryTextColor="text-gray-700"
        iconColor="bg-purple-100 text-purple-600"
        criteria
        reliability
        education
      />
      <CTA
        padding={`py-12 md:py-16 lg:py-24`}
        bgColor="bg-purple-600"
        textColor="text-white"
        buttonStyles="bg-white text-purple-600 hover:text-purple-800"
        buttonText="See pricing"
        link="demo"
        linkText="Watch demo"
        linkStyles="text-purple-100 hover:text-purple-200"
        svgOne={
          <div className="absolute top-0 left-0 z-0 transform -translate-y-32 xl:-translate-y-40 xl:-translate-x-24">
            <Dotted className="hidden md:inline-block w-24 text-purple-400" />
          </div>
        }
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    problemSolving: file(relativePath: { eq: "problem-solving.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    accountProtection: file(relativePath: { eq: "account-protection.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    accessibleCommuncation: file(
      relativePath: { eq: "accessible-communication.png" }
    ) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default supportPage
