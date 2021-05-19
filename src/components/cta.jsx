import React from "react"
import { Link } from "gatsby"

import ArrowRight from "assets/svgs/arrow-right.svg"

const CTA = ({
  margin,
  padding,
  bgColor,
  textColor,
  mainHeader,
  subHeader,
  buttonText,
  buttonStyles,
  buttonLink,
  link,
  linkText,
  linkStyles,
  svgOne,
  svgTwo,
}) => {
  return (
    <section className={`${margin} ${padding} ${bgColor} relative`}>
      <div className="relative container">
        <header className="mt-6 lg:mt-0 mx-auto md:mx-0 relative z-10 font-semibold">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${textColor}`}
          >
            {mainHeader || `Ready to get started?`}
            <span className="mt-4 lg:mt-2 block">
              {subHeader || `Sign up for leadgeek today.`}
            </span>
          </h2>
          <nav className="mt-6 md:mt-8 text-center md:text-left">
            <Link
              to={`/${buttonLink || `pricing`}`}
              className="py-3 px-4 lg:py-4 lg:px-6 block md:inline-block shadow-sm rounded-md bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200 focus:outline-none focus:shadow-outline"
            >
              {buttonText || "See pricing"}
            </Link>
            <div className="mt-4 md:mt-0 md:ml-4 md:inline-block">
              <Link
                to={`/${link || "demo"}`}
                className={`flex justify-center md:justify-start items-center relative group ${linkStyles} focus:outline-none focus:shadow-outline`}
              >
                {linkText || "Watch a demo"}
                <ArrowRight className="ml-1 md:group-hover:ml-2 w-4" />
              </Link>
            </div>
          </nav>
        </header>
        {svgOne && svgOne}
        {svgTwo && svgTwo}
      </div>
    </section>
  )
}

export default CTA
