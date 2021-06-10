import React from "react"
import { useRouter } from "next/router"
// import bgimg from "/topicbg/technology.jpg"
import WidePeek from "../../components/PostPeek/wide"
import SmallPeek from "../../components/PostPeek/smaller"
import {
  getAllTopicNames,
  getLatestPostsOfTopic,
  getfeauredPostsOfTopic,
  getPostsRelatedToTopic,
} from "../../graphql/topicPageQueries"

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const Topic = ({ latestPosts, headerColor, featuredPosts }) => {
  const router = useRouter()
  const { topic } = router.query
  const rgb = hexToRgb(headerColor)
  const { r, g, b } = rgb

  return (
    <>
      <div
        style={{
          backgroundImage: `radial-gradient( rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0.85)), url(/topicbg/technology.jpg)`,
        }}
        className="w-full h-48 bg-lightBlue-80 flex items-center justify-center bg-center bg-cover"
      >
        <h1 className="font-bungee-shade text-white text-6xl">{topic}</h1>
      </div>
      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-4 grid-cols-12 mt-2 border-t pt-1">
            <div className="col-span-8">
              <div className="">
                <h1 className="uppercase font-bungee-shade xl:text-4.5xl lg:text-4xl md:text-3xl text-black pb-3">
                  latest
                </h1>
                <div className="pt-3">
                  {latestPosts.map((postData) => (
                    <WidePeek key={postData.slug} populateData={postData} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-4">
              {featuredPosts.length > 0 ? (
                <div className="border-l pl-3 pb-1">
                  <h1
                    style={{ fontSize: "2.625re" }}
                    className="uppercase font-bungee-shade xl:text-4.5xl lg:text-4xl md:text-3xl text-black pb-3"
                  >
                    related to {topic}
                  </h1>
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

  const {data: {latest, color}} = await getLatestPostsOfTopic(topic, 0, 10)
  const {data: {related}} = await getPostsRelatedToTopic(topic, 0, 10)
  // const {data: {featured}} = await getfeauredPostsOfTopic(topic, 0, 10)

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
