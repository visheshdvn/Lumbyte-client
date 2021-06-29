import React from "react"

const table = ({ children }) => {
  //   console.log(JSON.stringify(children, null, 4))
  //   return <div>table here</div>
  return (
    <table id="special-table" className="table-fixed">
      {children}
    </table>
  )
}

export default table
