import React, { Fragment } from "react"

import SEO from "../../components/seo"
import SignupPage from "../../components/signupPage"

const BundleSignupPage = () => {
  const growPrice = 129
  const proPrice = 189
  const bundlePrice = 263
  const discount = Math.trunc((1 - bundlePrice / (proPrice + growPrice)) * 100)
  const featureList = [
    {
      number: "1",
      body: "Feature 1",
    },
    {
      number: "2",
      body: "Feature 2",
    },
    {
      number: "3",
      body: "Feature 3",
    },
  ]
  const plan = "Bundle"
  return (
    <Fragment>
      <SEO title="Grow Plan Signup" />
      <SignupPage
        featureList={featureList}
        price={bundlePrice}
        plan={plan}
        discount={discount}
      />
    </Fragment>
  )
}

export default BundleSignupPage
