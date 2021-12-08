import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import Features from "@components/layout/Features"

import OgImage from "@assets/images/og/og-calculations.jpg"

interface CalculationsPageProps {
  location: Location
}

const CalculationPage: React.FC<CalculationsPageProps> = ({ location }) => {
  const title = "Laser-Accurate Number Crunching"
  const description =
    "With Leadgeek, all Amazon fees are accounted for with the official calculator so you see numbers that can be relied on."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/calculations/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Laser-accurate number crunching",
            },
          ],
        }}
        language="en"
      />
      <Features feature={"calculations"} />
    </Layout>
  )
}

export default CalculationPage
