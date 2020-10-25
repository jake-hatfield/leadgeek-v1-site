import React from "react"
import { Link } from "gatsby"

// import ArrowRight from "../assets/svgs/arrow-right.svg"

const arrowLink = ({ link, linkText, noMargin }) => {
  return (
    <Link
      to={link}
      className={`${
        noMargin ? "mt-0" : "mt-4"
      } py-3 px-4 lg:py-4 lg:px-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md text-gray-500 hover:text-gray-700 group transition-colors duration-200`}
    >
      <span className="whitespace-no-wrap font-semibold focus:outline-none focus:shadow-outline">
        {linkText}
      </span>
      {/* <ArrowRight className="ml-1 w-4" /> */}
    </Link>
  )
}

export default arrowLink
