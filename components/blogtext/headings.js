import React from "react"

export const H1 = ({ children }) => {
  return <h1 className="text-4xl font-pt-sans font-bold mb-8">{children}</h1>
}

export const H2 = ({ children }) => {
  return <h2 className="text-3xl font-pt-sans font-bold mb-8">{children}</h2>
}

export const H3 = ({ children }) => {
  return <h3 className="text-2xl font-pt-sans font-bold">{children}</h3>
}
