import React from "react"

export const Ul = ({ children }) => {
//   console.log("ch obj", children[1].props.children)
//   if (Array.isArray(children)) {
//     children.forEach((element) => {
//       console.log("item", JSON.stringify(element, null, 4))
//     })
//   } else {
//     console.log(children)
//   }

  return <ul className="list-inside spaced list-disc mb-8">{children}</ul>
}
