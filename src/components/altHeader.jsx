import React from "react"
import { Link } from "gatsby"

import ArrowRight from "../assets/arrow-right.svg"

const altHeader = ({
  title,
  header,
  subHeader,
  negativeMargin,
  nav,
  linkOne,
  linkOneText,
  linkTwo,
  linkTwoText,
  svgOne,
  svgTwo,
}) => {
  return (
    <header
      className={`${
        negativeMargin ? `mt-12 lg:mt-16 pt-40 pb-16` : `mt-8 md:mt-12 lg:mt-20`
      } relative overflow-x-hidden container`}
    >
      <div className="relative z-10 md:max-w-2xl lg:max-w-3xl">
        <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
          {title}
        </span>
        <h1 className="mt-2 text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900">
          {header}
        </h1>
        <h2 className="mt-4 lg:mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          {subHeader}
        </h2>
        {nav && (
          <nav className="mt-6 font-semibold">
            <Link
              to={`/${linkOne}`}
              className="py-3 px-4 lg:py-4 lg:px-6 inline-block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline"
            >
              {linkOneText}
            </Link>
            <div className="mt-4 md:mt-0 md:ml-2 py-3 lg:py-4 px-4 lg:px-6 inline-block">
              <Link
                to={`/${linkTwo}`}
                className="flex items-center text-gray-500 group hover:text-gray-700 focus:outline-none focus:shadow-outline"
              >
                {linkTwoText}
                <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
              </Link>
            </div>
          </nav>
        )}
      </div>
      {svgOne && svgOne}
      {svgTwo && svgTwo}
    </header>
  )
}

export default altHeader
