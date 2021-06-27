import React from "react"
import { useRouter } from "next/router"
import Head from 'next/head'

import WidePeek from "../../components/PostPeek/wide"
import SmallPeek from "../../components/PostPeek/smaller"
import {
  getAllTopicNames,
  getTopickPageData,
} from "../../graphql/topicPageQueries"

const Topic = ({ latestPosts, headerColor, featuredPosts, headerImg, metaDescription }) => {
  if (!latestPosts || !headerColor || !featuredPosts || !metaDescription || !headerImg) {
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

  const headImg = headerImg ? `http://${process.env.HOSTNAME}:${process.env.PORT}${headerImg.url}` : "/topicbg/bg.jpg"

  return (
    <>
    <Head>
      <title>Lumbytes | {topic.toUpperCase()}</title>
      <meta name="description" content={metaDescription} />
    </Head>
      <div
        style={{
          backgroundImage: `radial-gradient( rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0.85)), url(${headImg})`,
        }}
        className="w-full lg:h-48 md:h-44 sm:h-32 h-28 bg-lightBlue-80 flex items-center justify-center bg-center bg-cover"
      >
        <h1 className="font-bungee-shade text-white xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-center">
          {topic}
        </h1>
      </div>
      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-4 grid-cols-12 mt-2 border-t dark:border-gray-700 pt-5">
            <div className="md:col-span-8 col-span-12 md:order-1 order-2">
              <div className="">
                <h1 className="bungee-head-style">latest</h1>
                <div className="pt-3">
                  {latestPosts.map((postData) => (
                    <WidePeek key={postData.slug} populateData={postData} />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 md:order-2 order-1">
              {featuredPosts.length > 0 ? (
                <aside className="md:border-l dark:border-gray-700 md:pl-3 pb-1">
                  <h1 className="bungee-head-style">related</h1>
                  <div className="pt-3">
                    {featuredPosts.map((postData) => (
                      <SmallPeek key={postData.slug} populateData={postData} />
                    ))}
                  </div>
                </aside>
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
    data: { latest, buildData, related },
  } = await getTopickPageData(topic, 0, 10)

  return {
    props: {
      headerColor: buildData[0].associatedColour,
      headerImg: buildData[0].headerBack,
      metaDescription: buildData[0].metaDescription,
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
