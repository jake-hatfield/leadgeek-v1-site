import React from "react"

import Bullet from "@assets/svgs/bullet.svg"

interface BulletedListProps {
  maxWidth: string
  gridLayout: string
  items: string[]
}

const BulletedList: React.FC<BulletedListProps> = ({
  gridLayout,
  maxWidth,
  items,
}) => {
  const listMaxWidth = maxWidth || `md:max-w-xl lg:max-w-3xl`
  return (
    <div className="text-gray-900 text-sm">
      <ul
        className={`md:mx-auto ${listMaxWidth} md:grid ${gridLayout} text-gray-700`}
      >
        {items.map((item, i) => (
          <li key={i} className="mt-2 lg:mt-0 flex items-center">
            <Bullet className="svg-sm text-teal-300" />
            <span className="ml-4">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BulletedList
