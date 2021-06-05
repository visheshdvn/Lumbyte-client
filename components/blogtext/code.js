import React from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"


const Code = ({ className, children }) => {
//   console.log(className, children)
  const language = className.replace('language-', '')
  return (
    <div className="mb-8">
      <SyntaxHighlighter language={language} style={atomDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
