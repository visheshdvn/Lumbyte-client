import React from "react"

const Paragraph = ({ children }) => {
//   console.log(React.isValidElement(children), children)
  if (React.isValidElement(children)) {
    return <>{children}</>
  } else {
    return <p className="mb-7">{children}</p>
  }
}

export default Paragraph
