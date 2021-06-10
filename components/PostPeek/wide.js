import React from "react"
import Image from "next/image"
import Link from "next/link"

import DateMinute from '../micro/dateMinute'

const WidePeek = ({
  populateData: {
    title,
    topic,
    banner,
    published_at,
    slug,
    excerpt,
    minuteRead,
  },
}) => {
  // console.log(title, topic, banner, published_at, slug)
  // const banner = "https://source.unsplash.com/random/800x600"

  return (
    <article className="widearticle overflow-hidden flex mb-16">
      <div className="xl:w-72 lg:w-64 md:w-40 overflow-hidden">
        <Link href={`/post/${slug}`}>
          <a>
            <Image
              src={`http://localhost:1337${banner.url}`}
              alt={banner.alternativeText}
              className="object-cover object-center"
              width={288}
              height={176}
            />
          </a>
        </Link>
      </div>
      <div className="flex-1 bg-blue-100 pl-3 flex flex-col">
        {/* link to topic page */}
        <Link href={`/topic/${topic.topicname}`}>
          <a
            style={{ color: `#${topic.associatedColour}`}}
            className="uppercase font-roboto-cond font-bold lg:leading-5 md:leading-4 text-lightBlue-600 mb-1 xl:text-lg md:text-base"
          >
            {topic.topicname}
          </a>
        </Link>
        {/* link to blogpost */}
        <Link href={`/post/${slug}`}>
          <a>
            <h1 className="lg:text-xl xl:text-2xl lg:mb-2 md:mb-1 font-bold font-roboto">
              {title}
            </h1>
            <p className="truncate-1-line leading-3 w-4/5 font-serif text-grayText mb-2 xl:text-base lg:text-sm">
              {excerpt}
            </p>
          </a>
        </Link>
        <DateMinute date={published_at} minuteRead={minuteRead} />
      </div>
    </article>
  )
}

export default WidePeek
