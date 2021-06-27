import React from "react"

const BlockQuote = ({ children }) => {
  return (
    <blockquote
      style={{ borderLeftWidth: "3px" }}
      className="border-gray-800 dark:border-gray-300 dark:bg-bquote-dark rounded-r-md pl-4 py-3 mb-7 italic"
    >
      {children.props.children}
    </blockquote>
  )
}

export default BlockQuote
