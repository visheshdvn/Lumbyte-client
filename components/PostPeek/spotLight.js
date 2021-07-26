import React from "react"
import Link from "next/link"
import DateMinute from "../micro/dateMinute"
import { isValidURL } from "../../utils/checkValidURL"

const SpotLight = ({ posts }) => {
  const topPick = posts[0]
  const { title, topic, excerpt, minuteRead, date, slug, banner } = topPick

  let source = null
  if (isValidURL(banner.url)) {
    source = bannerUrl
  } else {
    source = `${process.env.PROTOCOL}://${process.env.HOSTNAME}${banner.url}`
  }

  return (
    <section className="lg:py-10 md:py-5 py-3 block">
      <div
        style={{ minHeight: "12rem" }}
        className="container xl:h-100 lg:h-96 md:h-80 h-auto mx-auto horizontal-spacing grid gap-1 grid-cols-12"
      >
        <div className="xl:col-span-9 md:col-span-8 col-span-12 relative overflow-hidden">
          <Link href={`/post/${slug}`}>
            <a className="relative">
              <div className="border-2 md:h-full w-full h-48 relative">
                <img
                  src={source}
                  alt="temp alt"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div
                style={{ backgroundColor: `#${topic.theme}` }}
                className="absolute left-0 md:top-4 top-3 lg:px-8 lg:py-2 md:px-5 py-1 px-3 flex justify-center items-center"
              >
                <p className="lg:text-4xl md:text-3xl text-2xl leading-none font-pt-sans font-bold text-white">
                  Spotlight
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div
          style={{ backgroundColo: "#fafafa" }}
          className="xl:col-span-3 md:col-span-4 col-span-12 px-3 bg-gray-800 text-white pt-3 md:pb-0 pb-3"
        >
          <Link href={`/topic/${topic.topicname}`}>
            <a
              style={{ color: `#${topic.theme}` }}
              className="uppercase font-roboto-cond font-bold lg:leading-5 md:leading-4 text-lightBlue-600 xl:text-lg md:text-base"
            >
              {topic.topicname}
            </a>
          </Link>

          <Link href={`/post/${slug}`}>
            <a>
              <h1 className="font-roboto font-bold lg:text-4xl sm:text-3xl text-2xl md:mt-2 mt-1">
                {title}
              </h1>
              <p className="lg:my-4 md:my-3 my-1 mb-2 text-grayTex text-gray-400 text-sm md:text-base hidden md:block">
                {excerpt.substr(0, 90) + "..."}
              </p>
              <DateMinute date={date} minuteRead={minuteRead} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SpotLight
