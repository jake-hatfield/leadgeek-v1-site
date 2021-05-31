import React from "react"

import Bullet from "assets/svgs/bullet.svg"

const PricingTableCell = ({ value, description }) => {
  const contentType = () => {
    if (typeof value === "string" || typeof value === "number") {
      return value
    } else {
      return (
        <Bullet
          className={`mx-auto h-4 lg:h-5 w-4 lg:w-5 ${
            value ? "text-teal-300" : "text-gray-700"
          }`}
        />
      )
    }
  }

  return (
    <td
      className={`${
        description ? `py-6 w-2/5` : `text-center font-light`
      } border-0 text-xs lg:text-sm text-white`}
    >
      {contentType()}
    </td>
  )
}

export default PricingTableCell
