import React, { Fragment } from "react"

import SEO from "../../components/seo"
import SignupPage from "../../components/signupPage"

const ProSignupPage = () => {
  const proPrice = 189
  const proPlanSeats = 15
  const featureList = [
    {
      id: "1",
      body: (
        <span>
          Limited to <strong className="font-semibold">{proPlanSeats}</strong>{" "}
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
          $<strong className="font-semibold">5</strong>-30+ profit per unit
        </span>
      ),
    },
    {
      id: "4",
      body: (
        <span>
          <strong className="font-semibold">50</strong>%+ ROI per unit
        </span>
      ),
    },
    {
      id: "5",
      body: (
        <span>
          Training e-books & <strong>course</strong>
        </span>
      ),
    },
    {
      id: "6",
      body: "Email & phone support",
    },
    {
      id: "7",
      body: "Free updates",
    },
  ]
  const plan = "Pro Plan"
  const productSelected = process.env.GATSBY_PRO_PRODUCT_ID
  return (
    <Fragment>
      <SEO
        title="Pro Plan Signup"
        description="Join LeadGeek's Pro plan for more arbitrage list exclusivity and the highest quality arbitrage products possible."
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
