import React from "react"

interface HeaderWrapperProps {
  children: React.ReactNode
  bottomPadding: string | null
  styles: string | null
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({
  children,
  bottomPadding,
  styles,
}) => {
  const classPadding = bottomPadding ? bottomPadding : `pb-16`
  return (
    <section
      className={`${classPadding} mt-8 md:mt-12 lg:mt-20 pb-12 ${
        styles ? styles : ""
      }`}
    >
      {children}
    </section>
  )
}

export default HeaderWrapper
