import React, { Fragment } from "react"

import SEO from "components/utils/Seo"
import SignupPage from "components/signupPage"

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
  const plan = "Grow Plan"
  const productSelected = process.env.GATSBY_GROW_PRODUCT_ID
  return (
    <Fragment>
      <SEO
        title="Grow Plan Signup"
        description="Join Leadgeek's Grow plan to receive premium arbitrage leads, support, and seller education to scale your FBA business."
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
