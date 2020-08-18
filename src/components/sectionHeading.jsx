import React from "react"

const sectionHeading = ({ item, margin }) => {
  return (
    <header className={`${margin} max-w-xl container`}>
      <h2 className="text-3xl lg:text-4xl font-black text-gray-900 text-center">
        {item}
      </h2>
    </header>
  )
}

export default sectionHeading
