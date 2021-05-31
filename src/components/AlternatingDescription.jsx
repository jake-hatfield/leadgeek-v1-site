import React from "react"
import Img from "gatsby-image"

const alternatingDescription = ({
  margin,
  mainHeader,
  items,
  reverse,
  bgColor,
  primaryTextColor,
  secondaryTextColor,
  tertiaryColor,
}) => {
  return (
    <section
      className={`${margin} py-12 lg:py-24 ${bgColor} ${primaryTextColor}`}
    >
      <header className="md:max-w-xl lg:max-w-2xl container md:text-center">
        <h2 className="text-4xl lg:text-5xl font-black">{mainHeader}</h2>
      </header>
      <div className="container text-gray-700">
        {items.map(item => (
          <article
            key={item.id}
            className={`${
              reverse
                ? `md:odd:flex-row-reverse md:even:flex-row`
                : `md:odd:flex-row md:even:flex-row-reverse`
            } mt-6 md:mt-12 lg:mt-16 lg:first:mt-0 flex flex-col-reverse md:flex-row md:justify-between md:items-center`}
          >
            <header className="mt-4 md:mt-0 md:mx-12 md:w-3/5">
              <span className={`text-sm ${tertiaryColor} uppercase font-bold`}>
                {item.span}
              </span>
              <h3
                className={`mt-2 text-2xl lg:text-3xl font-bold ${primaryTextColor}`}
              >
                {item.header}
              </h3>
              <p
                className={`mt-4 leading-relaxed ${secondaryTextColor} xl:text-lg`}
              >
                {item.content}
              </p>
            </header>
            {item.image ? (
              <Img
                fluid={item.image}
                className="w-full max-w-xs md:w-2/5 lg:max-w-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="md:w-1/2 bg-white rounded-md text-purple-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={item.iconPath}
                />
              </svg>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default alternatingDescription
