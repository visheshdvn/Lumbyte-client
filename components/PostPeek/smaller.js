import React from "react"
import Image from "next/image"
import Link from "next/link"

import DateMinute from '../micro/dateMinute'

const SmallPeek = ({
  populateData: { topic, banner, title, minuteRead, published_at, slug },
}) => {

  return (
    <article className="mb-16">
      <Link href={`/topic/${topic.topicname}`}>
        <a
          style={{ color: `#${topic.associatedColour}` }}
          className="uppercase font-roboto-cond font-bold leading-5 mb-1 xl:text-lg lg:text-base"
        >
          {topic.topicname}
        </a>
      </Link>
      <div className="h-auto w-full overflow-hidden transform md:scale-105 lg:scale-100 mb-1">
        <Link href={`/post/${slug}`}>
          <a>
            <Image
              src={`http://localhost:1337${banner.url}`}
              alt={banner.alternativeText}
              className="object-cover object-center"
              width={395}
              height={176}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
      <Link href={`/post/${slug}`}>
        <a>
          <h1 className="lg:text-lg xl:text-xl mb-2 font-bold font-roboto">
            {title}
          </h1>
        </a>
      </Link>
      <DateMinute date={published_at} minuteRead={minuteRead} />
    </article>
  )
}

export default SmallPeek
