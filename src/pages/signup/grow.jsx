import React, { Fragment } from "react"

import SEO from "../../components/seo"
import SignupPage from "../../components/signupPage"

const GrowSignupPage = () => {
  const growPrice = 129
  const growPlanSeats = 30
  const featureList = [
    {
      id: "1",
      body: (
        <span>
          Limited to <strong className="font-semibold">{growPlanSeats}</strong>{" "}
          members
        </span>
      ),
    },
    {
      id: "2",
      body: "50+ products per week",
    },
    {
      id: "3",
      body: (
        <span>
          $<strong className="font-semibold">4</strong>-30+ profit per unit
        </span>
      ),
    },
    {
      id: "4",
      body: (
        <span>
          <strong className="font-semibold">40</strong>%+ ROI per unit
        </span>
      ),
    },
    // {
    //   id: "5",
    //   body: "Training e-books",
    // },
    {
      id: "6",
      body: "Email support",
    },
    {
      id: "7",
      body: "Free updates",
    },
  ]
  const plan = "Grow Plan"
  const productSelected = process.env.GATSBY_GROW_PRODUCT_ID
  return (
    <Fragment>
      <SEO
        title="Grow Plan Signup"
        description="Join LeadGeek's Grow plan to receive premium arbitrage leads, support, and seller education to scale your FBA business."
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
