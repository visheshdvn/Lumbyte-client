import React from "react"

export const figure = ({ children }) => {
  const image = children.props.children[0]
  const caption = children.props.children[1]
  return (
    <figure className="mb-8">
      {image}
      <figcaption className="text-base text-center -mt-7 mb-0 text-grayText">
        {caption.trim()}
      </figcaption>
    </figure>
  )
}

export const figcaption = ({ children }) => {
  console.log("caption", children)
  return <>caption</>
}
