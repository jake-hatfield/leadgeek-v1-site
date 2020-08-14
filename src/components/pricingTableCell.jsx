import React from "react"

import Check from "../assets/check.svg"
import X from "../assets/x.svg"

const pricingTableCell = ({ value, description }) => {
  const contentType = () => {
    if (description || typeof value === "string") {
      return value
    }
    if (value === true) {
      return (
        <Check className="mx-auto h-4 lg:h-6 w-4 lg:w-6 text-teal-500 bg-teal-200 rounded-full" />
      )
    } else {
      return (
        <X className="mx-auto h-4 lg:h-6 w-4 lg:w-6 text-gray-500 bg-gray-200 rounded-full" />
      )
    }
  }
  return (
    <td
      className={`${
        description
          ? `py-6 w-2/5 border-0 text-gray-900`
          : `text-center text-gray-800 font-light`
      } border-0 text-xs lg:text-base`}
    >
      {contentType()}
    </td>
  )
}

export default pricingTableCell
