import React, { Fragment } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import SignupPage from "@components/SignupPage"

import OgImage from "@assets/images/og/og-grow.jpg"

const GrowSignupPage = () => {
  // plan details
  const plan = "Grow"
  const productSelected = process.env.GATSBY_GROW_PRICE_ID
  const growPrice = 129
  const growPlanSeats = 30

  const featureList = [
    {
      description: (
        <p>
          Limited to <strong className="font-semibold">{growPlanSeats}</strong>{" "}
          members
        </p>
      ),
    },
    {
      description: <p>50+ products per week</p>,
    },
    {
      description: (
        <p>
          $<strong className="font-semibold">4</strong>-30+ profit per unit
        </p>
      ),
    },
    {
      description: (
        <p>
          <strong className="font-semibold">40</strong>%+ ROI per unit
        </p>
      ),
    },
    {
      description: <p>Full software access</p>,
    },
  ]

  //   seo
  const title = "Grow Plan Signup | Leadgeek"
  const description =
    "Leadgeek's Grow plan offers entry-level FBA sellers a great starting point to find high-quality products efficiently."

  return (
    <Fragment>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/signup/grow/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Join the Grow plan & start sourcing",
            },
          ],
        }}
        language="en"
      />
      <SignupPage
        plan={plan}
        productSelected={productSelected}
        featureList={featureList}
        price={growPrice}
        discount={null}
      />
    </Fragment>
  )
}

export default GrowSignupPage
