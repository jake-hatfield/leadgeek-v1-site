import React from "react"
import Check from "../assets/check.svg"

const bulletedList = ({ items, margin, gridLayout }) => {
  return (
    <div className={`${margin} text-gray-900 text-sm md:text-xs lg:text-sm`}>
      <ul
        className={`md:mx-auto md:max-w-xl lg:max-w-3xl md:grid ${gridLayout} text-gray-700`}
      >
        {items.map(item => (
          <li key={item.id} className="flex items-center">
            <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
            <span className="ml-4">{item.dataPoint}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default bulletedList
