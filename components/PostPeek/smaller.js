import React from "react"
import Image from "next/image"
import Link from "next/link"

import DateMinute from "../micro/dateMinute"

const SmallPeek = ({
  populateData: { topic, banner, title, minuteRead, date, slug },
}) => {
  return (
    <article className="lg:mb-16 md:mb-14 sm:mb-10 mb-8 flex md:flex-col justify-start overflow-hidden">
      <Link href={`/topic/${topic.topicname}`}>
        <a
          style={{ color: `#${topic.associatedColour}` }}
          className="uppercase font-roboto-cond font-bold leading-5 xl:text-lg text-base hidden md:block"
        >
          {topic.topicname}
        </a>
      </Link>

      <div className="xl:h-44 lg:h-38 sm:h-27 md:w-full sm:w-44 h-25 w-25 overflow-hidden md:my-2 relative">
        <Link href={`/post/${slug}`}>
          <a>
            <Image
              src={`http://localhost:1337${banner.url}`}
              alt={banner.alternativeText}
              className="object-cover object-center"
              // width={395}
              // height={176}
              layout="fill"
            />
          </a>
        </Link>
      </div>

      <div className="flex-1 pl-3 md:pl-0">
        <Link href={`/topic/${topic.topicname}`}>
          <a
            style={{ color: `#${topic.associatedColour}` }}
            className="uppercase font-roboto-cond font-bold lg:leading-5 md:leading-4 text-lightBlue-600 md:mb-1 xl:text-lg sm:text-base text-sm md:hidden"
          >
            {topic.topicname}
          </a>
        </Link>

        <Link href={`/post/${slug}`}>
          <a>
            <h1 className="lg:text-xl md:text-lg sm:text-xl text-lg mb-1 font-bold font-roboto">
              {title}
            </h1>
          </a>
        </Link>

        <DateMinute date={date} minuteRead={minuteRead} />
      </div>
    </article>
  )
}

export default SmallPeek
