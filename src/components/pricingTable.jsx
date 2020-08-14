import React from "react"

import PricingTableRow from "../components/pricingTableRow"

const pricingTable = ({ tableHeader, featureRows }) => {
  return (
    <table className="mt-12 container table-auto">
      <thead>
        <tr className="text-gray-700 text-sm">
          <th className="border-0 text-xs lg:text-sm font-bold uppercase text-purple-600">
            {tableHeader}
          </th>
          <th className="border-0 text-center font-medium">Bundle</th>
          <th className="border-0 text-center font-medium">Pro</th>
          <th className="border-0 text-center font-medium">Grow</th>
        </tr>
      </thead>
      <tbody>
        {featureRows.map(row => (
          <PricingTableRow key={row.rowID} cells={row.cells} />
        ))}
      </tbody>
    </table>
  )
}

export default pricingTable
