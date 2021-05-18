import React, { Fragment } from "react"

import SEO from "components/utils/Seo"
import SignupPage from "components/signupPage"

const BundleSignupPage = () => {
  const growPrice = 129
  const proPrice = 189
  const bundlePrice = 263
  const discount = Math.trunc((1 - bundlePrice / (proPrice + growPrice)) * 100)
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
      body: "100+ products per week",
    },
    {
      id: "3",
      body: "All Grow Plan leads",
    },
    {
      id: "4",
      body: "All Pro Plan leads",
    },
    // {
    //   id: "5",
    //   body: (
    //     <span>
    //       Training e-books & <strong>course</strong>
    //     </span>
    //   ),
    // },
    {
      id: "6",
      body: "Email & phone support",
    },
    {
      id: "7",
      body: "Free updates",
    },
  ]
  const plan = "Bundle"
  const productSelected = process.env.GATSBY_BUNDLE_PRODUCT_ID
  return (
    <Fragment>
      <SEO
        title="Grow + Pro Bundle Signup"
        description="Join LeadGeek's Grow + Pro Bundle to receive an abundance of premium leads, support, and seller education at a substantial discount."
      />
      <SignupPage
        featureList={featureList}
        price={bundlePrice}
        plan={plan}
        productSelected={productSelected}
        discount={discount}
      />
    </Fragment>
  )
}

export default BundleSignupPage
