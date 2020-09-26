import React from "react"
import { Link } from "gatsby"

import ArrowRight from "../assets/svgs/arrow-right.svg"

const arrowLink = ({ link, linkText, noMargin }) => {
  return (
    <div
      className={`${
        noMargin ? "mt-0" : "mt-4"
      } flex items-center text-gray-500 hover:text-gray-700 group transition-colors duration-200`}
    >
      <Link
        to={link}
        className="whitespace-no-wrap link focus:outline-none focus:shadow-outline"
      >
        {linkText}
      </Link>
      <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
    </div>
  )
}

export default arrowLink
