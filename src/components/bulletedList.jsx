import React from "react"
import Check from "../assets/check.svg"

const bulletedList = ({ items, margin, mainHeader }) => {
  return (
    <section className={`${margin} container text-gray-900`}>
      <header className="text-3xl lg:text-4xl xl:text-5xl font-bold md:text-center">
        <h2 className="lg:mx-auto max-w-3xl xl:max-w-4xl">{mainHeader}</h2>
      </header>
      <ul className="mt-8 lg:mt-12 md:mx-auto md:max-w-xl lg:max-w-3xl md:grid md:grid-cols-2 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-6 gap-1 lg:gap-2 text-gray-700">
        {items.map(item => (
          <li key={item.id} className="flex items-center">
            <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
            <span className="ml-4">{item.dataPoint}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default bulletedList
