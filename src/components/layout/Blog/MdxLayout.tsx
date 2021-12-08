import ReactMarkdown from "react-markdown"

import React from "react"

interface MdxLayoutProps {
  children: any
}

const MdxLayout: React.FC<MdxLayoutProps> = ({ children }) => {
  console.log(children)
  return <ReactMarkdown children={children} />
}

export default MdxLayout
