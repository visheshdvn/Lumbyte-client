import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"

const SmallPeek = () => {
  return (
    <article className="mb-16">
      <Link href="/">
        <a>
          <h3 className="uppercase font-pt-sans font-bold leading-5 text-lightBlue-600 mb-1 xl:text-lg lg:text-base">
            techology
          </h3>
        </a>
      </Link>
      <div className="h-44 w-full overflow-hidden border mb-1">
        <Link href="/">
          <a>
            <Image
              src="https://source.unsplash.com/random/800x600"
              alt="post banner"
              className="object-cover object-center"
              width={1024}
              height={768}
              //   layout="responsive"
            />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>
          <h1 className="font-coda lg:text-lg xl:text-xl mb-2 font-bold">
            Cillum ea magna officia consequat enim consectetur nulla excepteur
            veniam nisi eiusmod.
          </h1>
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
    </article>
  )
}

export default SmallPeek
