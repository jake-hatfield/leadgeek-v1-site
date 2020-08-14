import React from "react"

import Check from "../assets/check.svg"
import X from "../assets/x.svg"

const pricingTableCell = ({ value, description }) => {
  const contentType = () => {
    if (description) {
      return value
    }
    if (value === true) {
      return (
        <Check className="mx-auto h-6 w-6 text-teal-500 bg-teal-200 rounded-full" />
      )
    } else {
      return (
        <X className="mx-auto h-6 w-6 text-gray-500 bg-gray-200 rounded-full" />
      )
    }
  }

  console.log(value)
  return (
    <td
      className={`${
        description
          ? `py-6 w-2/5 border-0 text-gray-700 font-light text-xs lg:text-base`
          : `text-center`
      } border-0`}
    >
      {contentType()}
    </td>
  )
}

export default pricingTableCell
