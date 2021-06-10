import React from 'react'
import Link from 'next/link'
import DateMinute from '../micro/dateMinute'

const SpotLight = ({posts}) => {
    const topPick = posts[0]

    const {title, topic, banner, excerpt, minuteRead, published_at, slug} = topPick

    return (
        <section className="lg:py-10 md:py-5 block">
        <div className="container xl:h-100 lg:h-96 md:h-80 h-auto mx-auto horizontal-spacing grid gap-1 grid-cols-12">
          <div className="xl:col-span-9 md:col-span-8 relative overflow-hidden">
            <img
              src={`http://localhost:1337${banner.url}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div style={{backgroundColor: `#${topic.associatedColour}`}} className="absolute left-0 top-4 lg:px-8 lg:py-2 md:px-5 py-1 flex justify-center items-center">
              <p className="lg:text-4xl md:text-3xl leading-none font-pt-sans font-bold text-white">Spotlight</p>
            </div>
          </div>
          <div
            style={{ backgroundColo: "#fafafa" }}
            className="xl:col-span-3 md:col-span-4 pl-3 bg-gray-800 text-white pt-3"
          >
            <Link href={`/topic/${topic.topicname}`}>
              <a
                style={{ color: `#${topic.associatedColour}` }}
                className="uppercase font-roboto-cond font-bold lg:leading-5 md:leading-4 text-lightBlue-600 xl:text-lg md:text-base"
              >
                {topic.topicname}
              </a>
            </Link>

            <h1 className="font-roboto font-bold lg:text-4xl md:text-3xl mt-2">
              {title}
            </h1>
            <p className="lg:my-4 md:my-3 text-grayText">{excerpt.substr(0, 90) + "..."}</p>

            <DateMinute date={published_at} minuteRead={minuteRead} />

          </div>
        </div>
      </section>
    )
}

export default SpotLight
