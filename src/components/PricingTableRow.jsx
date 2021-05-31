import React from "react"

import PricingTableCell from "components/PricingTableCell"

const PricingTableRow = ({ cells }) => {
  return (
    <tr
      v-for="row in rows"
      className="leading-snug row-border hover:bg-gray-800 transition-main"
    >
      {cells.map((cell, i) => (
        <PricingTableCell
          key={i}
          value={cell.value}
          description={cell.description}
        />
      ))}
    </tr>
  )
}

export default PricingTableRow
