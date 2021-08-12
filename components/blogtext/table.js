import React from "react"

const table = ({ children }) => {
  return (
    <table id="special-table" className="table-fixed mb-8">
      {children}
    </table>
  )
}

export default table
