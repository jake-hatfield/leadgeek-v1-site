import React from "react"
import { Link } from "gatsby"

import PricingTableRow from "components/PricingTableRow"

const PricingTable = ({ tableHeader, featureRows, id }) => {
  return (
    <table id={id} className="mt-12 container table-auto">
      <thead>
        <tr className="text-gray-700 text-sm leading-tight">
          <th className="border-0 text-xs lg:text-sm font-bold uppercase text-purple-600">
            {tableHeader}
          </th>
          <th className="border-0 text-center xl:text-lg font-medium">
            Grow+Pro Bundle
          </th>
          <th className="border-0 text-center xl:text-lg font-medium">Pro</th>
          <th className="border-0 text-center xl:text-lg font-medium">Grow</th>
        </tr>
      </thead>
      <tbody>
        {featureRows.map(row => (
          <PricingTableRow key={row.rowID} cells={row.cells} />
        ))}
        <tr className="mt-24 hidden md:table-row">
          <td className="py-6 text-gray-900 border-0 text-xs lg:text-base" />
          <td className="lg:py-6 text-gray-900 border-0 text-xs lg:text-base text-center">
            <Link
              to={`/signup/bundle`}
              className="md:py-2 md:px-3 bg-purple-600 shadow-md rounded-md text-white font-semibold hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline"
            >
              Sign up
            </Link>
          </td>
          <td className="lg:py-6 text-gray-900 border-0 text-xs lg:text-base text-center">
            <Link
              to={`/signup/pro`}
              className="md:py-2 md:px-3 shadow-xs rounded-md text-purple-500 font-semibold hover:text-purple-600 focus:outline-none focus:shadow-outline"
            >
              Sign up
            </Link>
          </td>
          <td className="lg:py-6 text-gray-900 border-0 text-xs lg:text-base text-center">
            <Link
              to={`/signup/grow`}
              className="md:py-2 md:px-3 shadow-xs rounded-md text-purple-500 font-semibold hover:text-purple-600 focus:outline-none focus:shadow-outline"
            >
              Sign up
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default PricingTable
