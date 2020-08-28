import React from "react"
import { Link } from "gatsby"

import ArrowRight from "../assets/arrow-right.svg"

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
}) => {
  return (
    <section className={`${margin} ${padding} ${bgColor}`}>
      <div className="container">
        <header className="mt-6 lg:mt-0 mx-auto md:mx-0 font-semibold">
          <h2
            className={`text-2xl lg:text-4xl xl:text-5xl font-bold ${textColor}`}
          >
            {mainHeader || `Ready to get started?`}
            <span className="mt-4 lg:mt-2 block">
              {subHeader || `Sign up for LeadGeek today.`}
            </span>
          </h2>
          <nav className="mt-4 lg:mt-6 mx-auto">
            <Link
              to={`/${buttonLink || `pricing`}`}
              className={`py-3 px-4 lg:py-4 lg:px-6 inline-block shadow-sm rounded-md ${buttonStyles}  transition-colors duration-200 focus:outline-none focus:shadow-outline`}
            >
              {buttonText || "Get started"}
            </Link>
            <div className="mt-4 md:mt-0 md:ml-2 py-3 lg:py-4 px-4 lg:px-6 inline-block">
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
      </div>
    </section>
  )
}

export default CTA
