import React from "react"

import PricingTableCell from "../components/pricingTableCell"

const pricingTableRow = ({ cells }) => {
  return (
    <tr v-for="row in rows" className="odd:bg-white even:bg-gray-100">
      {cells.map(cell => (
        <PricingTableCell
          key={cell.cellID}
          value={cell.value}
          description={cell.description}
        />
      ))}
    </tr>
  )
}

export default pricingTableRow
