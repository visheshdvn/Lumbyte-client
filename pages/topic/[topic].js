import React from "react"
import { useRouter } from "next/router"

import WidePeek from "../../components/PostPeek/wide"
import SmallPeek from "../../components/PostPeek/smaller"
import {
  getAllTopicNames,
  getTopickPageData,
} from "../../graphql/topicPageQueries"

const Topic = ({ latestPosts, headerColor, featuredPosts }) => {
  if (!latestPosts || !headerColor || !featuredPosts) {
    return <div>Loading</div>
  }

  const router = useRouter()
  const { topic } = router.query

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }
  const rgb = hexToRgb(headerColor)
  const { r, g, b } = rgb

  return (
    <>
      <div
        style={{
          backgroundImage: `radial-gradient( rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0.85)), url(/topicbg/technology.jpg)`,
        }}
        className="w-full lg:h-48 md:h-44 sm:h-32 h-28 bg-lightBlue-80 flex items-center justify-center bg-center bg-cover"
      >
        <h1 className="font-bungee-shade text-white xl:text-6xl md:text-5xl sm:text-4xl text-3xl">
          {topic}
        </h1>
      </div>
      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-4 grid-cols-12 mt-2 border-t dark:border-gray-700 pt-1">
            <div className="md:col-span-8 col-span-12 order-1">
              <div className="">
                <h1 className="bungee-head-style">latest</h1>
                <div className="pt-3">
                  {latestPosts.map((postData) => (
                    <WidePeek key={postData.slug} populateData={postData} />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 order-2">
              {featuredPosts.length > 0 ? (
                <div className="md:border-l dark:border-gray-700 md:pl-3 pb-1">
                  <h1 className="bungee-head-style">related</h1>
                  <div className="pt-3">
                    {featuredPosts.map((postData) => (
                      <SmallPeek key={postData.slug} populateData={postData} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Topic

export async function getStaticProps(context) {
  console.log("Re-Generating...")
  const { params } = context
  const { topic } = params

  const {
    data: { latest, color, related },
  } = await getTopickPageData(topic, 0, 10)

  return {
    props: {
      headerColor: color[0].associatedColour,
      latestPosts: latest,
      featuredPosts: related,
    },
    revalidate: 86400,
  }
}

export async function getStaticPaths() {
  const { data } = await getAllTopicNames()

  return {
    paths: data.topics.map((item) => ({ params: { topic: item.topicname } })),
    fallback: true,
  }
}
