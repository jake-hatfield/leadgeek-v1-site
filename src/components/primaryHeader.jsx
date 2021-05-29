import React from "react"
import { Link } from "gatsby"

const PrimaryHeader = ({
  title,
  desc,
  nav,
  linkOne,
  linkOneText,
  linkTwo,
  linkTwoText,
  outsideLink,
  svgOne,
  svgTwo,
}) => {
  return (
    <header
      className={`relative container overflow-hidden lg:overflow-visible md:text-center`}
    >
      <div className="md:mx-auto relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter text-shadow">
          {title}
        </h1>
        <div className="mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-700">
          {desc}
        </div>
        {nav && (
          <nav className="mt-6 lg:mt-8 font-semibold text-center">
            {linkOne && (
              <div>
                <Link
                  to={`/${linkOne}/`}
                  className="block md:inline-block cta-link inter"
                >
                  {linkOneText}
                </Link>
              </div>
            )}
            {outsideLink && (
              <div>
                <a
                  href={outsideLink}
                  className="block md:inline-block cta-link inter"
                >
                  {linkOneText}
                </a>
              </div>
            )}
            {linkTwo && (
              <div className="mt-4 lg:mt-6">
                <Link
                  to={`/${linkTwo}/`}
                  className="secondary-link text-gray-700"
                >
                  {linkTwoText}
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
      {svgOne && svgOne}
      {svgTwo && svgTwo}
    </header>
  )
}

export default PrimaryHeader
