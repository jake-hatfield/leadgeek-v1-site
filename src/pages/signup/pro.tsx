import React, { Fragment } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import SignupPage from "@components/signupPage"

import OgImage from "@assets/images/og/og-pro.jpg"

const ProSignupPage = () => {
  // plan details
  const plan = "Pro"
  const productSelected = process.env.GATSBY_PRO_PRICE_ID
  const proPrice = 189
  const proPlanSeats = 15

  const featureList = [
    {
      description: (
        <p>
          Limited to <strong className="font-semibold">{proPlanSeats}</strong>{" "}
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
          $<strong className="font-semibold">7</strong>-50+ profit per unit
        </p>
      ),
    },
    {
      description: (
        <p>
          <strong className="font-semibold">50</strong>%+ ROI per unit
        </p>
      ),
    },
    {
      description: <p>Full software access</p>,
    },
  ]

  //   seo
  const title = "Pro Plan Signup | Leadgeek"
  const description =
    "Leadgeek's Pro plan is great for intermediate Amazon sellers who are familiar with online arbitrage and want more leads to choose every day."

  return (
    <Fragment>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/signup/pro/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Join the Pro plan & start scaling",
            },
          ],
        }}
        language="en"
      />
      <SignupPage
        plan={plan}
        productSelected={productSelected}
        featureList={featureList}
        price={proPrice}
        discount={null}
      />
    </Fragment>
  )
}

export default ProSignupPage
