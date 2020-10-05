import React from "react"
import { Link } from "gatsby"

import ArrowRight from "../assets/svgs/arrow-right.svg"

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
              {subHeader || `Sign up for LeadGeek today.`}
            </span>
          </h2>
          <nav className="mt-4 md:mt-6 flex flex-wrap justify-between md:justify-start items-center">
            <Link
              to={`/${buttonLink || `pricing`}`}
              className={`py-3 px-4 lg:py-4 lg:px-6 inline-block shadow-sm rounded-md ${buttonStyles}  transition-colors duration-200 focus:outline-none focus:shadow-outline`}
            >
              {buttonText || "See pricing"}
            </Link>
            <div className="md:ml-4 inline-block">
              <Link
                to={`/${link || "demo"}`}
                className={`flex items-center relative group ${linkStyles} focus:outline-none focus:shadow-outline`}
              >
                {linkText || "Watch demo"}
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
