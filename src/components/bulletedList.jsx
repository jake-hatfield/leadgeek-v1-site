import React from "react"

import Check from "assets/svgs/check.svg"

const bulletedList = ({ items, margin, gridLayout, maxWidth }) => {
  const listMaxWidth = maxWidth || `md:max-w-xl lg:max-w-3xl`
  return (
    <div className={`${margin} text-gray-900 text-sm`}>
      <ul
        className={`md:mx-auto ${listMaxWidth} md:grid ${gridLayout} text-gray-700`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay={`${item.delay}00`}
            data-sal-easing="ease"
          >
            <span className="svg-sm bg-purple-500 rounded-full flex-none">
              <span className="rounded-full border-purple-600" />
            </span>
            <span className="ml-4">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default bulletedList
