import React from "react"
import Image from "next/image"

const Img = ({src, alt}) => {
  console.log(src);
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
  console.log(source);
  
  return (
    <div className="overflow-hidden mb-8 relative h-96 w-full">
      <Image
        src={source}
        alt={alt}
        layout="fill"
        className="object-contain object-left stati"
      />
    </div>
  )
}

export default Img
