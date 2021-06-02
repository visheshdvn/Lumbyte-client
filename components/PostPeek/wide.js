import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"

const WidePeek = (
  {
    // postData: { title, topic, banner, published_at, slug, excerpt },
  }
) => {
  // console.log(excerpt)
  // console.log(title, topic, banner, published_at, slug)
  return (
    <article className="widearticle overflow-hidden flex pb-16">
      <div className="h-44 w-72 overflow-hidden border">
        <Link href="/"> 
          <a>
            <Image
              src="https://source.unsplash.com/random/800x600"
              alt="post banner"
              className="object-cover object-center"
              width={1024}
              height={768}
            />
          </a>
        </Link>
      </div>
      <div className="flex-1 bg-blue-100 pl-3 flex flex-col">
        {/* link to topic page */}
        <Link href="/">
          <a>
            <h3 className="uppercase font-pt-sans font-bold leading-5 text-lightBlue-600 mb-1 text-lg">
              techology
            </h3>
          </a>
        </Link>
        {/* link to blogpost */}
        <Link href="/">
          <a>
            <h1 className="font-coda text-2xl mb-2">
              Cillum ea magna officia consequat enim consectetur nulla excepteur
              veniam nisi eiusmod.
            </h1>
            <p className="truncat w-2/3 font-serif text-grayText mb-2">
              Cillum commodo voluptate nulla nisi velit adipisicing sint labore
              elit commodo consequat non.
            </p>
          </a>
        </Link>
        <div className="h-3 text-gray-400 flex items-center">
          <div className="flex items-center h-3 text-grayText overflow-y-hidden">
            <CalendarIcon className="h-full inline mb-1 mr-1 mt-1" />
            <span className="text-xs font-coda leading-3 mt-1">26 May</span>
            <span className="mx-2">|</span>
            <ClockIcon className="h-full inline mb-1 mr-1 mt-1" />
            <span className="text-xs font-coda leading-3 mt-1">5 Min read</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default WidePeek
