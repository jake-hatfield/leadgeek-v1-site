import React from "react"

import PricingTableRow from "@components/PricingTableRow"

interface PricingTableProps {
  tableHeader: string
  featureRows: {
    cells: { description: boolean; value: string | number | boolean }[]
  }[]
  id: string
}

const PricingTable: React.FC<PricingTableProps> = ({
  tableHeader,
  featureRows,
  id,
}) => {
  return (
    <table id={id} className="mt-12 container table-auto">
      <thead>
        <tr className="leading-tight text-purple-300 inter text-base">
          <th className="border-0 text-xs lg:text-base xl:text-lg font-medium text-left md:text-center md:flex md:justify-start">
            {tableHeader}
          </th>
          <th className="border-0 text-center text-xs lg:text-base xl:text-lg font-medium">
            Grow
          </th>
          <th className="border-0 text-center text-xs lg:text-base xl:text-lg font-medium">
            Pro
          </th>
          <th className="border-0 text-center text-xs lg:text-base xl:text-lg font-medium">
            Grow+Pro Bundle
          </th>
        </tr>
      </thead>
      <tbody>
        {featureRows.map((row, i) => (
          <PricingTableRow key={i} cells={row.cells} />
        ))}
      </tbody>
    </table>
  )
}

export default PricingTable
