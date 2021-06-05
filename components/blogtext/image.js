import React from "react"
// import Image from "next/image"

const Img = ({src, alt}) => {
  return (
    <div className="overflow-hidden mb-8">
      <img
        src={`http://localhost:1337${src}`}
        alt={alt}
        layout="fill"
        className="object-fit object-center"
      />
    </div>
  )
}

export default Img
