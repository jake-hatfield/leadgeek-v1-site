import React from "react"
import { Link } from "gatsby"

import PrimaryHeader from "components/primaryHeader"

const FeaturePage = ({
  header,
  desc,
  video,
  image,
  faq,
  nextLink,
  previousLink,
}) => {
  return (
    <>
      <PrimaryHeader header={header} />
    </>
  )
}

export default FeaturePage
