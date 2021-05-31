import React from "react"

const tripleIcons = ({
  margin,
  bgColor,
  iconColor,
  title,
  mainHeader,
  items,
  primaryTextColor,
  secondaryTextColor,
  textCenter,
}) => {
  return (
    <section
      className={`${margin} py-12 lg:py-24 ${bgColor} ${primaryTextColor}`}
    >
      <div className="container">
        <header>
          <span className="uppercase text-sm md:text-base text-purple-600 font-bold">
            {title}
          </span>
          <h2
            className={`${
              textCenter && `md:text-center`
            } mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold`}
          >
            {mainHeader}
          </h2>
        </header>
        <div className="mt-12 md:flex md:justify-between">
          {items.map(item => (
            <div
              key={item.id}
              v-for="item in items"
              className="md:w-1/3 first:ml-0 md:ml-8 first:mt-0 mt-8 md:mt-0"
              data-sal="slide-up"
              data-sal-delay={`${item.id}00` || 100}
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`p-2 h-10 w-10 ${iconColor} rounded-md`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={item.iconPath}
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold">{item.header}</h3>
              <p className={`mt-2 ${secondaryTextColor}`}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default tripleIcons
