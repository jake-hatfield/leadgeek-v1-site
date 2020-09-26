import React from "react"

import ReactTooltip from "react-tooltip"

import Check from "../assets/svgs/check.svg"
import X from "../assets/svgs/x.svg"

const pricingTableCell = ({ value, description, tooltip }) => {
  const contentType = () => {
    if (description) {
      return (
        <div>
          <span
            data-tip={tooltip}
            className="inline border-b border-gray-500 border-dotted"
          >
            {value}
          </span>
          <ReactTooltip
            place="right"
            effect="solid"
            backgroundColor="#5D55FA"
            textColor="#fff"
            className="w-56 md:w-64"
          />
        </div>
      )
    } else if (typeof value === "string" || typeof value === "number") {
      return value
    } else if (value === true) {
      return (
        <Check className="mx-auto h-4 lg:h-5 w-4 lg:w-5 text-teal-500 bg-teal-200 rounded-full" />
      )
    } else {
      return (
        <X className="mx-auto h-4 lg:h-5 w-4 lg:w-5 text-gray-500 bg-gray-200 rounded-full" />
      )
    }
  }
  return (
    <td
      className={`${
        description
          ? `py-6 w-2/5 text-gray-900`
          : `text-center text-gray-800 font-light`
      } border-0 text-xs lg:text-sm`}
    >
      {contentType()}
    </td>
  )
}

export default pricingTableCell
