import React from "react"
import Image from "next/image"

const Img = ({src, alt}) => {
  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  let source = null
  if (validURL(src)) {
    source = src
  } else {
    source = `http://localhost:1337${src}`
  }

  return (
    <div className="overflow-hidden mb-8 w-full flex justify-center">
      {/* <Image
        src={source}
        alt={alt}
        width={700}
        height={300}
        className="object-contain object-left max-h-96 h-full"
      /> */}
      <img style={{maxHeight: "700px"}} className="object-center" src={source} alt={alt} />
    </div>
  )
}

export default Img
