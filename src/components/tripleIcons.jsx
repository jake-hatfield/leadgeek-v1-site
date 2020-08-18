import React from "react"

const tripleIcons = ({
  margin,
  bgColor,
  mainHeader,
  items,
  primaryTextColor,
  secondaryTextColor,
}) => {
  return (
    <section
      className={`${margin} py-12 lg:py-24 ${bgColor} ${primaryTextColor}`}
    >
      <div className="container">
        <header className="text-3xl lg:text-4xl xl:text-5xl font-bold md:text-center">
          <h2>{mainHeader}</h2>
        </header>
        <div className="mt-12 xl:mt-16 md:flex md:justify-between">
          {items.map(item => (
            <div
              key={item.id}
              v-for="item in items"
              className="lg:w-1/3 first:ml-0 md:ml-8 first:mt-0 mt-8 md:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="p-2 h-10 w-10 bg-white rounded-md text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={item.iconPath}
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-medium">{item.header}</h3>
              <p className={`mt-4 ${secondaryTextColor} lg:text-lg`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default tripleIcons
