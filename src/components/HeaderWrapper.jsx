import React from "react"

const HeaderWrapper = ({ negativeMargin, bottomPadding, children }) => {
  const classPadding = bottomPadding ? bottomPadding : `pb-16`
  return (
    <section className={`${classPadding} mt-8 md:mt-12 lg:mt-20 pb-12`}>
      {children}
    </section>
  )
}

export default HeaderWrapper
