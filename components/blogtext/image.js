import React from "react"
import Image from "next/image"

const Img = ({src, alt}) => {
  return (
    <div className="w-full overflow-hidden border relativ">
      <Image
        src={`http://172.23.16.255:1337${src}`}
        alt={alt}
        layout="fill"
        className="object-fit absolute top-0"
        // width={1000}
        // height={1000}
      />
    </div>
  )
}

export default Img
