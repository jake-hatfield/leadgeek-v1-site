import React, { Fragment } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import SignupPage from "components/signupPage"

import OgImage from "assets/images/og/og-grow.jpg"

const GrowSignupPage = () => {
  const growPrice = 129
  const growPlanSeats = 30
  const featureList = [
    {
      desc: (
        <p>
          Limited to <strong className="font-semibold">{growPlanSeats}</strong>{" "}
          members
        </p>
      ),
    },
    {
      desc: "50+ products per week",
    },
    {
      desc: (
        <p>
          $<strong className="font-semibold">4</strong>-30+ profit per unit
        </p>
      ),
    },
    {
      desc: (
        <p>
          <strong className="font-semibold">40</strong>%+ ROI per unit
        </p>
      ),
    },
    {
      desc: <p>Full software access</p>,
    },
  ]
  const plan = "Grow"
  const productSelected = process.env.GATSBY_GROW_PRICE_ID
  const title = "Grow Plan Signup | Leadgeek"
  const desc =
    "Leadgeek's Grow plan offers entry-level FBA sellers a great starting point to find high-quality products efficiently."
  return (
    <Fragment>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
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
        featureList={featureList}
        price={growPrice}
        plan={plan}
        productSelected={productSelected}
      />
    </Fragment>
  )
}

export default GrowSignupPage
