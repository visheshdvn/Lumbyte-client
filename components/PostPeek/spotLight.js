import React from "react"
import Link from "next/link"
import Image from "next/image"
import DateMinute from "../micro/dateMinute"

const SpotLight = ({ posts }) => {
  const topPick = posts[0]

  const { title, topic, banner, excerpt, minuteRead, date, slug } =
    topPick

  return (
    <section className="lg:py-10 md:py-5 py-3 block">
      <div style={{minHeight: "12rem"}} className="container xl:h-100 lg:h-96 md:h-80 h-48 mx-auto horizontal-spacing grid gap-1 grid-cols-12">
        <div className="xl:col-span-9 md:col-span-8 col-span-4 relative overflow-hidden">
          <Link href={`/post/${slug}`}>
            <a>
              <div
                style={{
                  backgroundImage: `url(${process.env.HOST}${banner.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-full w-full"
              />
              <div
                style={{ backgroundColor: `#${topic.associatedColour}` }}
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
          className="xl:col-span-3 md:col-span-4 col-span-8 px-3 bg-gray-800 text-white pt-3"
        >
          <Link href={`/topic/${topic.topicname}`}>
            <a
              style={{ color: `#${topic.associatedColour}` }}
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
              <p className="lg:my-4 md:my-3 my-1 mb-2 text-gray-300 text-sm md:text-base">
                {excerpt.substr(0, 90) + "..."}
              </p>

              <div className="hidden sm:block">

              <DateMinute date={date} minuteRead={minuteRead} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SpotLight
