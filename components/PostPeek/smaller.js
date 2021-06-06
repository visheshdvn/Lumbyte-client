import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"

const SmallPeek = ({
  populateData: { topic, banner, title, minuteRead, published_at, slug },
}) => {
  return (
    <article className="mb-16">
      <Link href={`/topic/${topic.topicname}`}>
        <a
          style={{ color: `#${topic.associatedColour}` }}
          className="uppercase font-pt-sans font-bold leading-5 mb-1 xl:text-lg lg:text-base"
        >
          {topic.topicname}
        </a>
      </Link>
      <div className="h-44 w-full overflow-hidden transform md:scale-105 lg:scale-100 mb-1">
        <Link href={`/post/${slug}`}>
          <a>
            <Image
              src={`http://localhost:1337${banner.url}`}
              alt={banner.alternativeText}
              className="object-cover object-center"
              width={1024}
              height={768}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
      <Link href={`/post/${slug}`}>
        <a>
          <h1 className="font-coda lg:text-lg xl:text-xl mb-2 font-bold">
            {title}
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
