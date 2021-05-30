import React, { Fragment } from "react"

import SEO from "components/utils/Seo"
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
  return (
    <Fragment>
      <SEO
        title="Pro Plan Signup"
        description="Join Leadgeek's Pro plan for more arbitrage list exclusivity and the highest quality arbitrage products possible."
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
