import React from "react"
import { Link } from "gatsby"

import Play from "../assets/play.svg"

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
  play,
}) => {
  return (
    <header
      className={`${
        negativeMargin ? `mt-12 lg:mt-16 pt-40 pb-16` : `mt-8 md:mt-12 lg:mt-16`
      } container`}
    >
      <div className="lg:max-w-3xl">
        <span className="uppercase text-purple-600 font-bold">{title}</span>
        <h1 className="mt-2 text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900">
          {header}
        </h1>
        <h2 className="mt-4 lg:mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          {subHeader}
        </h2>
        {nav && (
          <nav className="mt-6 lg:mt-12 font-semibold text-center md:text-left">
            <Link
              to={`/${linkOne}`}
              className="py-3 px-4 lg:py-4 lg:px-6 block md:inline-block shadow-sm rounded-md bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-200"
            >
              {linkOneText}
            </Link>
            <Link
              to={`/${linkTwo}`}
              className="mt-4 md:mt-0 md:ml-2 py-3 lg:py-4 px-4 lg:px-6 block md:inline-block relative shadow-sm rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
            >
              {linkTwoText}
              {play && (
                <Play className="h-5 w-5 absolute button-icon inline bg-white rounded-full text-purple-600" />
              )}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default altHeader
