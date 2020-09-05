import React from "react"
import Img from "gatsby-image"

const largeDescription = ({
  margin,
  firstItemMargin,
  bgColor,
  primaryTextColor,
  secondaryTextColor,
  title,
  mainHeader,
  mainSubheader,
  items,
}) => {
  return (
    <section
      className={`${margin} py-12 md:py-16 lg:py-24 ${bgColor} ${primaryTextColor}`}
    >
      <div className="container">
        <header className="md:max-w-2xl lg:max-w-3xl">
          <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
            {title}
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold">
            {mainHeader}
          </h2>
          <p
            className={`mt-4 lg:mt-6 ${secondaryTextColor} lg:text-lg leading-relaxed lg:leading-normal`}
          >
            {mainSubheader}
          </p>
        </header>
        <div>
          {items.map(item => (
            <article
              key={item.id}
              className={`${
                firstItemMargin ? `mt-12 lg:mt-16` : `first:mt-0 mt-12 lg:mt-16`
              }`}
            >
              <header className="max-w-xl lg:max-w-3xl text-2xl lg:text-3xl xl:text-4xl font-bold">
                <h3>{item.header}</h3>
              </header>
              <div className="mt-6 max-w-4xl md:flex md:justify-start md:items-center">
                <Img fluid={item.image} className="md:w-1/2" />
                <div className="mt-4 md:mt-0 md:ml-12 md:w-1/2">
                  <span className="block uppercase text-sm md:text-base text-purple-600 font-bold">
                    {item.title}
                  </span>
                  <p className="mt-2">{item.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default largeDescription
