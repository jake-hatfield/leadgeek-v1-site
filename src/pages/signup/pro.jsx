import React, { Fragment } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import SignupPage from "components/signupPage"

const ProSignupPage = () => {
  const proPrice = 189
  const proPlanSeats = 15
  const featureList = [
    {
      desc: (
        <p>
          Limited to <strong className="font-semibold">{proPlanSeats}</strong>{" "}
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
          $<strong className="font-semibold">7</strong>-50+ profit per unit
        </p>
      ),
    },
    {
      desc: (
        <p>
          <strong className="font-semibold">50</strong>%+ ROI per unit
        </p>
      ),
    },
    {
      desc: <p>Full software access</p>,
    },
  ]
  const plan = "Pro Plan"
  const productSelected = process.env.GATSBY_PRO_PRODUCT_ID
  const title = "Pro Plan Signup | Leadgeek"
  const desc =
    "Leadgeek's Pro plan is great for intermediate Amazon sellers who are familiar with online arbitrage and want more leads to choose every day."
  return (
    <Fragment>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title: { title },
          description: { desc },
          type: "website",
        }}
        language="en"
      />
      <SignupPage
        featureList={featureList}
        price={proPrice}
        plan={plan}
        productSelected={productSelected}
      />
    </Fragment>
  )
}

export default ProSignupPage
