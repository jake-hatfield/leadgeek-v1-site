import React from "react"

const HeaderWrapper = ({ negativeMargin, bottomPadding, children }) => {
  const classPadding = bottomPadding ? bottomPadding : `pb-16`

  return (
    <section
      className={`${
        negativeMargin
          ? `mt-12 pt-32 lg:pt-48 ${classPadding}`
          : `mt-8 md:mt-12 pb-12`
      }`}
    >
      {children}
    </section>
  )
}

export default HeaderWrapper
