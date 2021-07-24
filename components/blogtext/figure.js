import React from "react"

const figure = ({ children }) => {
  const image = children.props.children[0]
  const caption = children.props.children.slice(1)
  return (
    <figure className="mb-8">
      {image}
      <figcaption className="text-base text-center -mt-7 mb-0 text-grayText">
        {caption.map(ele => ele)}
      </figcaption>
    </figure>
  )
}

export default figure
