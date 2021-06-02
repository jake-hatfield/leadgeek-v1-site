import React, { Fragment } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import SignupPage from "components/signupPage"

const BundleSignupPage = () => {
  const growPrice = 129
  const proPrice = 189
  const bundlePrice = 263
  const discount = Math.trunc((1 - bundlePrice / (proPrice + growPrice)) * 100)
  const featureList = [
    {
      desc: (
        <p>
          <strong>100+</strong> products per week
        </p>
      ),
    },
    {
      desc: <p>All Grow plan leads</p>,
    },
    {
      desc: <p>All Pro plan leads</p>,
    },
    {
      desc: <p>Full software access</p>,
    },
    {
      desc: <p>Early access/discounts on new tools</p>,
    },
  ]
  const plan = "Bundle"
  const productSelected = process.env.GATSBY_BUNDLE_PRODUCT_ID
  const title = "Bundle Signup | Leadgeek"
  const desc =
    "Leadgeek's Bundle is a heavily-discounted combination of the Grow plan and Pro plan. It's the perfect mix of quality and volume for arbitrage sourcing."
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
        price={bundlePrice}
        plan={plan}
        productSelected={productSelected}
        discount={discount}
      />
    </Fragment>
  )
}

export default BundleSignupPage
