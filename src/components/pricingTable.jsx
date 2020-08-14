import React from "react"

import PricingTableRow from "../components/pricingTableRow"

const pricingTable = () => {
  const featureRows = [
    {
      rowID: 100,
      cells: [
        { cellID: 101, description: true, value: "Profit" },
        { cellID: 102, description: false, value: true },
        { cellID: 103, description: false, value: true },
        { cellID: 104, description: false, value: true },
      ],
    },
    {
      rowID: 200,
      cells: [
        { cellID: 200, description: true, value: "ROI" },
        { cellID: 201, description: false, value: "data" },
        { cellID: 202, description: false, value: true },
        { cellID: 203, description: false, value: "data" },
      ],
    },
  ]
  return (
    <table className="mt-12 px-12 container table-fixed pricing-table">
      <thead>
        <tr className="text-gray-700 text-sm">
          <th className="border-0 text-xs lg:text-sm font-bold uppercase text-purple-600">
            Minimum criteria
          </th>
          <th className="border-0 text-center font-medium">Grow</th>
          <th className="border-0 text-center font-medium">Pro</th>
          <th className="border-0 text-center font-medium">Bundle</th>
        </tr>
      </thead>
      <tbody className="">
        {featureRows.map(row => (
          <PricingTableRow key={row.rowID} cells={row.cells} />
        ))}
      </tbody>
    </table>
  )
}

export default pricingTable
