import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"

import { DateTime } from "luxon-business-days"
import ReactPaginate from "react-paginate"

import {
  numberWithCommas,
  calculateBSR,
  truncate,
} from "components/utils/utils"

const LeadSampleTable = ({ leads }) => {
  const classes = {
    tableWrapper: "relative mt-6 container",
    table:
      "w-full table-auto bg-white ring-4 md:ring-6 lg:ring-8 ring-pink-600 ring-opacity-50 shadow-2xl rounded-lg",
    tableHeadWrapper: "border-b border-gray-200",
    tableHead:
      "text-left font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap",
    tableHeadCell: "lg:p-2",
    tableHeadCellResponsive: "hidden lg:table-cell lg:p-2",
    tableBody: "text-sm text-gray-800",
  }

  const ITEMS_PER_PAGE = 15
  const [pageCount] = useState(leads.length / ITEMS_PER_PAGE)
  const [activeLeads, setActiveLeads] = useState(
    leads.slice(0, ITEMS_PER_PAGE * 1)
  )

  const onPageChange = cp => {
    setActiveLeads(
      leads.slice(
        cp.selected * ITEMS_PER_PAGE,
        (cp.selected + 1) * ITEMS_PER_PAGE
      )
    )
  }

  return (
    <>
      <table className={classes.table} id="leadSample">
        <thead className={classes.tableHeadWrapper}>
          <tr className={classes.tableHead}>
            <th className={classes.tableHeadCell} />
            <th className={classes.tableHeadCellResponsive}>Category</th>
            <th className={classes.tableHeadCellResponsive}>Buy Price</th>
            <th className={classes.tableHeadCellResponsive}>Sell Price</th>
            <th className={classes.tableHeadCell}>Profit</th>
            <th className={classes.tableHeadCell}>ROI</th>
            <th className={classes.tableHeadCell}>BSR (%)</th>
            <th className={classes.tableHeadCell}>Sales</th>
            <th className={classes.tableHeadCell}>Date</th>
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {activeLeads.map((lead, i) => (
            <LeadSampleRow key={lead.node.id} lead={lead.node} />
          ))}
        </tbody>
      </table>
      <ReactPaginate
        onPageChange={onPageChange}
        initialPage={0}
        pageCount={pageCount}
        marginPagesDisplayed={0}
        pageRangeDisplayed={4}
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        }
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        }
        activeLinkClassName={"text-pink-600"}
        containerClassName={"flex items-center justify-center mt-8"}
        previousClassName="py-2 px-3 rounded-lg bg-white shadow-sm text-sm font-semibold border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
        pageClassName="ml-1 py-2 px-3 rounded-lg bg-white shadow-sm text-lg font-semibold border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
        pageLinkClassName="hover:text-pink-600 cursor-pointer"
        nextClassName="ml-1 py-2 px-3 rounded-lg bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
        previousLinkClassName="hover:text-pink-600 cursor-pointer"
        nextLinkClassName="hover:text-pink-600 cursor-pointer"
        breakClassName="ml-1 p-3 rounded-lg bg-white shadow-sm text-sm font-semibold border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
        disabledClassName="pointer-events-none bg-gray-200 opacity-50"
      />
    </>
  )
}

const LeadSampleRow = ({ lead, unitFee, lbFee }) => {
  const { data } = lead

  const datePosted = DateTime.fromISO(data.date).toFormat("LLL dd")

  const classes = {
    rowWrapper: "relative lg:px-1 border-b border-gray-200 hover:bg-gray-100",
    responsiveCell: "hidden lg:table-cell lg:p-2",
    profitCellWrapper: "lg:p-2 uppercase",
    defaultCellWrapper: "lg:p-2",
    defaultSvg: "svg-base",
    valueIndicator: "ml-1 text-gray-400 font-semibold",
  }

  return (
    <tr className={classes.rowWrapper}>
      <td className={classes.defaultCellWrapper}>
        {(data.monthlySales > 100 || data.netProfit > 18 || data.roi > 1.4) && (
          <span role="img" aria-label="Fire Emoji">
            🔥
          </span>
        )}
      </td>
      {/* category */}
      <td className={classes.responsiveCell}>{truncate(data.category, 28)}</td>
      {/* buy price */}
      <td className={classes.responsiveCell}>
        <span>$</span>
        {data.buyPrice.toFixed(2)}
        <span className={classes.valueIndicator}>USD</span>
      </td>
      {/* sell price */}
      <td className={classes.responsiveCell}>
        <span>$</span>
        {data.sellPrice.toFixed(2)}
        <span className={classes.valueIndicator}>USD</span>
      </td>
      {/* profit */}
      <td className={classes.profitCellWrapper}>
        <span>$</span>
        {data.netProfit.toFixed(2)}
        <span className={classes.valueIndicator}>USD</span>
      </td>
      {/* roi */}
      <td className={classes.defaultCellWrapper}>
        {(
          ((data.netProfit.toFixed(2) - (unitFee || lbFee * data.weight || 0)) /
            data.buyPrice.toFixed(2)) *
          100
        ).toFixed(0)}
        <span className={classes.valueIndicator}>%</span>
      </td>
      {/* bsr */}
      <td className={classes.defaultCellWrapper}>
        {numberWithCommas(data.bsrCurrent)}
        <span className={classes.valueIndicator}>
          ({calculateBSR(data.bsrCurrent, data.category)})
          <span className={classes.valueIndicator}>%</span>
        </span>
      </td>
      {/* monthly sales */}
      <td className={classes.bsrCellWrapper}>
        {numberWithCommas(data.monthlySales)}
      </td>
      {/* date */}
      <td className={classes.defaultCellWrapper}>{datePosted}</td>
    </tr>
  )
}

const LeadSample = () => {
  const dt = DateTime.now()
  const { availableHolidayMatchers } = dt
  const businessHolidays = [
    availableHolidayMatchers.isThanksgivingDay,
    availableHolidayMatchers.isChristmasDay,
  ]
  dt.setupBusiness({ holidayMatchers: businessHolidays })
  const prevTwoWeeks = dt.minusBusiness({ days: 10 }).endOf("day").toISO()

  return (
    <StaticQuery
      query={graphql`
        query {
          allMongodbLeadGeekLeads(sort: { order: DESC, fields: data___date }) {
            edges {
              node {
                id
                data {
                  bsrCurrent
                  buyPrice
                  category
                  date
                  netProfit
                  monthlySales
                  roi
                  sellPrice
                }
              }
            }
          }
        }
      `}
      render={data => {
        const leads = data.allMongodbLeadGeekLeads.edges.filter(
          lead => lead.node.data.date >= prevTwoWeeks
        )
        return <LeadSampleTable leads={leads} />
      }}
    />
  )
}

export default LeadSample
