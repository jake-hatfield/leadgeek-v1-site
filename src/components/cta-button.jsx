import React from "react"

const CTAButton = ({ contents }) => {
  return (
    <button className="p-3 rounded-md bg-purple-300 text-purple-800 hover:bg-purple-500 hover:text-white transition-all duration-200">
      {contents}
    </button>
  )
}

export default CTAButton
