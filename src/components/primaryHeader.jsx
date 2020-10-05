import React from "react"
import { Link } from "gatsby"

import Play from "../assets/svgs/play.svg"

const primaryHeader = ({
  header,
  subHeader,
  negativeMargin,
  bottomPadding,
  nav,
  linkOne,
  linkOneText,
  linkTwo,
  linkTwoText,
  play,
  svgOne,
  svgTwo,
}) => {
  const classPadding = bottomPadding ? bottomPadding : `pb-16`
  return (
    <header
      className={`${
        negativeMargin
          ? `mt-12 pt-32 lg:pt-48 ${classPadding}`
          : `mt-8 md:mt-12 lg:mt-24 pb-12 md:pb-16 lg:pb-24`
      } relative container overflow-hidden lg:overflow-visible md:text-center`}
    >
      <div className="md:mx-auto relative z-10 md:max-w-2xl xl:max-w-4xl">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-gray-900">
          {header}
        </h1>
        <h2 className="mt-4 lg:mt-6 mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          {subHeader}
        </h2>
        {nav && (
          <nav className="mt-6 lg:mt-12 font-semibold text-center">
            <Link
              to={`/${linkOne}`}
              className="py-3 px-4 lg:py-4 lg:px-6 block md:inline-block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200 focus:outline-none focus:shadow-outline"
            >
              {linkOneText}
            </Link>
            <Link
              to={`/${linkTwo}`}
              className="mt-4 md:mt-0 md:ml-2 py-3 lg:py-4 px-4 lg:px-6 block md:inline-block relative shadow-sm rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200 focus:outline-none focus:shadow-outline"
            >
              {linkTwoText}
              {play && (
                <Play className="h-5 w-5 absolute button-icon inline bg-white rounded-full text-purple-600" />
              )}
            </Link>
          </nav>
        )}
      </div>
      {svgOne && svgOne}
      {svgTwo && svgTwo}
    </header>
  )
}

export default primaryHeader
