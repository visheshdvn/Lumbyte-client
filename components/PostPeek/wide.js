import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"

const WidePeek = ({
  populateData: { title, topic, banner, published_at, slug, excerpt, minuteRead },
}) => {
  // console.log(excerpt)
  // console.log(title, topic, banner, published_at, slug)
  // const banner = "https://source.unsplash.com/random/800x600"

  return (
    <article className="widearticle overflow-hidden flex mb-16">
      <div className="xl:h-44 xl:w-72 lg:h-40 lg:w-64 md:h-40 md:w-40 overflow-hidden">
        <Link href={`/post/${slug}`}>
          <a>
            <Image
              src={`http://localhost:1337${banner.url}`}
              alt={banner.alternativeText}
              className="object-cover object-center"
              width={600}
              height={600}
            />
          </a>
        </Link>
      </div>
      <div className="flex-1 bg-blue-100 pl-3 flex flex-col">
        {/* link to topic page */}
        <Link href={`/topic/${topic.topicname}`}>
          <a
            style={{ color: `#${topic.associatedColour}` }}
            className="uppercase font-pt-sans font-bold lg:leading-5 md:leading-4 text-lightBlue-600 mb-1 xl:text-lg md:text-base"
          >
            {topic.topicname}
          </a>
        </Link>
        {/* link to blogpost */}
        <Link href={`/post/${slug}`}>
          <a>
            <h1 className="font-coda lg:text-xl xl:text-2xl lg:mb-2 md:mb-1 font-bold">
              {title}
            </h1>
            <p className="truncate-1-line leading-3 w-4/5 font-serif text-grayText mb-2 xl:text-base lg:text-sm">
              {excerpt}
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
