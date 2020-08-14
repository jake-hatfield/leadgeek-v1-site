import React, { Fragment } from "react"

import SEO from "../../components/seo"
import SignupPage from "../../components/signupPage"

const ProSignupPage = () => {
  const price = 129
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
  const plan = "Pro Plan"
  return (
    <Fragment>
      <SEO title="Grow Plan Signup" />
      <SignupPage featureList={featureList} price={price} plan={plan} />
    </Fragment>
  )
}

export default ProSignupPage
