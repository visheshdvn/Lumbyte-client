import React from "react"
import Image from "next/image"
import Link from "next/link"

import DateMinute from "../micro/dateMinute"
import { isValidURL } from "../../utils/checkValidURL"

const WidePeek = ({
  populateData: { title, topic, banner, date, slug, excerpt, minuteRead },
}) => {
  let source = null
  if (isValidURL(banner.url)) {
    source = bannerUrl
  } else {
    source = `${process.env.PROTOCOL}://${process.env.HOSTNAME}${banner.url}`
  }

  return (
    <article className="widearticle overflow-hidden flex lg:mb-16 md:mb-14 sm:mb-10 mb-8">
      <div className="lg:h-38 sm:h-27 h-25 lg:w-64 sm:w-44 w-25 overflow-hidden relative">
        <Link href={`/post/${slug}`} passHref>
          <a>
            <img src={source} alt={banner.alternativeText} className="between-rel-parent" />
          </a>
        </Link>
      </div>
      <div className="flex-1 bg-blue-100 pl-3 flex flex-col">
        {/* link to topic page */}
        <Link href={`/topic/${topic.topicname}`}>
          <a
            style={{ color: `#${topic.theme}` }}
            className="uppercase font-roboto-cond font-bold lg:leading-5 md:leading-4 text-lightBlue-600 md:mb-1 xl:text-lg md:text-base text-sm"
          >
            {topic.topicname}
          </a>
        </Link>
        {/* link to blogpost */}
        <Link href={`/post/${slug}`}>
          <a>
            <h1 className="lg:text-2xl md:text-xl sm:text-xl text-lg xl:mb-2 sm:mb-1 font-bold font-roboto">
              {title}
            </h1>
            <p className="truncate-1-line leading-3 w-4/5 font-serif text-grayText dark:text-gray-400 mb-2 lg:text-base text-sm hidden">
              {excerpt}
            </p>
          </a>
        </Link>
        <DateMinute date={date} minuteRead={minuteRead} />
      </div>
    </article>
  )
}

export default WidePeek
