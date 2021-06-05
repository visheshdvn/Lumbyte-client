import React from "react"

const Paragraph = ({ children }) => {
//   console.log(React.isValidElement(children), children)
  if (React.isValidElement(children)) {
    return <>{children}</>
  } else {
    return <p className="text-lg mb-7 leading-7.5 text-gray-700">{children}</p>
  }
}

export default Paragraph
