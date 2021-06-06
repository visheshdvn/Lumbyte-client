import React from "react"
import Image from "next/image"

const Img = ({src, alt}) => {
  return (
    <div className="overflow-hidden mb-8 relative h-96 w-full">
      <Image
        src={`http://localhost:1337${src}`}
        alt={alt}
        layout="fill"
        className="object-contain object-left stati"
      />
    </div>
  )
}

export default Img
