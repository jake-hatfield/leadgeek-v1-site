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
    table: "w-full table-auto bg-white shadow-grayMd rounded-lg",
    tableHeadWrapper: "border-b border-gray-200",
    tableHead:
      "text-left font-semibold text-xs text-gray-600 uppercase tracking-widest whitespace-no-wrap",
    tableHeadCell: "lg:p-2",
    tableHeadCellResponsive: "hidden lg:table-cell lg:p-2",
    tableHeadCellMobileResponsive: "hidden md:table-cell lg:p-2",
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
            <th className={classes.tableHeadCell} aria-label="Hot lead" />
            <th className={classes.tableHeadCellResponsive}>Category</th>
            <th className={classes.tableHeadCellResponsive}>ASIN</th>
            <th className={classes.tableHeadCellResponsive}>Buy Price</th>
            <th className={classes.tableHeadCellResponsive}>Sell Price</th>
            <th className={classes.tableHeadCell}>Profit</th>
            <th className={classes.tableHeadCell}>ROI</th>
            <th className={classes.tableHeadCellMobileResponsive}>BSR (%)</th>
            <th className={classes.tableHeadCell}>Sales</th>
            <th className={classes.tableHeadCellMobileResponsive}>Date</th>
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
            className="w-6 lg:w-7"
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
            className="w-6 lg:w-7"
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
        pageClassName="ml-0.5 lg:ml-1 py-2 px-3 rounded-lg bg-white shadow-sm text-xs lg:text-lg font-semibold border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
        pageLinkClassName="hover:text-pink-600 cursor-pointer"
        previousClassName="p-1 lg:py-2 lg:px-3 rounded-lg bg-white shadow-sm text-xs lg:text-lg font-semibold border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
        previousLinkClassName="hover:text-pink-600 cursor-pointer"
        nextClassName="ml-0.5 lg:ml-1 p-1 lg:py-2 lg:px-3 rounded-lg bg-white shadow-sm border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
        nextLinkClassName="hover:text-pink-600 cursor-pointer"
        breakClassName="ml-0.5 lg:ml-1 p-2 lg:p-3 rounded-lg bg-white shadow-sm text-xs lg:text-sm font-semibold border border-gray-200 text-gray-600 hover:text-gray-700 transition duration-100 ease-in-out ring-purple"
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
    mobileCellWrapper: "hidden md:table-cell lg:p-2",
    defaultCellWrapper: "lg:p-2",
    defaultSvg: "svg-base",
    valueIndicator: "ml-1 text-gray-400 font-semibold",
  }

  return (
    <tr className={classes.rowWrapper}>
      <td className={classes.defaultCellWrapper}>
        {((data.netProfit >= 7 && data.monthlySales >= 150) ||
          (data.netProfit >= 16 && data.roi >= 0.5 && data.monthlySales > 20) ||
          (data.netProfit >= 8 && data.roi >= 1.5) ||
          (data.netProfit >= 6 && data.roi >= 2) ||
          (data.netProfit >= 9 && data.monthlySales >= 80) ||
          (data.netProfit >= 40 && data.monthlySales >= 30) ||
          (data.roi >= 0.7 && data.monthlySales >= 90) ||
          (data.roi >= 0.9 && data.monthlySales >= 150)) && (
          <span role="img" aria-label="Fire Emoji">
            🔥
          </span>
        )}
      </td>

      {/* category */}
      <td className={classes.responsiveCell}>{truncate(data.category, 28)}</td>
      {/* asin */}
      <td
        className={
          "relative filter blur select-none hidden lg:table-cell lg:p-2"
        }
      >
        Restricted
      </td>
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
      <td className={classes.mobileCellWrapper}>
        {numberWithCommas(data.bsrCurrent)}
        <span className={classes.valueIndicator}>
          ({calculateBSR(data.bsrCurrent, data.category)})
          <span className={classes.valueIndicator}>%</span>
        </span>
      </td>
      {/* monthly sales */}
      <td className={classes.defaultCellWrapper}>
        {numberWithCommas(data.monthlySales)}
      </td>
      {/* date */}
      <td className={classes.mobileCellWrapper}>{datePosted}</td>
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
  const prevTwoWeeks = dt.minusBusiness({ days: 10 }).startOf("day").toISO()

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
