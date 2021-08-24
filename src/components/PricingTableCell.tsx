import React from "react"

import Bullet from "@assets/svgs/bullet.svg"

interface PricingTableCellProps {
  description: boolean
  value: string | number | boolean
}

const PricingTableCell: React.FC<PricingTableCellProps> = ({
  value,
  description,
}) => {
  const contentType = (
    value: string | number | boolean
  ): string | JSX.Element => {
    if (typeof value === "string" || typeof value === "number") {
      return value.toString()
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
      {contentType(value)}
    </td>
  )
}

export default PricingTableCell
