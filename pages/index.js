import Head from "next/head"

import WidePeek from "../components/PostPeek/wide"
import SmallPeek from "../components/PostPeek/smaller"
import SpotLight from '../components/PostPeek/spotLight'

import {
  getLatestPosts,
  getfeauredPosts,
  getTopPicks,
} from "../graphql/Queries"

export default function Home({ latestPosts, featuredPosts, topPicks }) {
  return (
    <>
      <Head>
        <title>LumBytes | Home</title>
      </Head>

      <SpotLight posts={topPicks} />

      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-4 grid-cols-12 mt-2 border-t pt-1">
            <div className="md:col-span-8 col-span-12 order-1">
              <div className="">
                <h1 className="bungee-head-style">
                  latest
                </h1>
                <div className="pt-3">
                  {latestPosts.map((postData) => (
                    <WidePeek key={postData.slug} populateData={postData} />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 order-2">
              {featuredPosts.length > 0 ? (
                <div className="md:border-l md:pl-3 pb-1">
                  <h1
                    className="bungee-head-style"
                  >
                    featured
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

export async function getStaticProps() {
  const {
    data: { latest },
  } = await getLatestPosts(0, 10)
  const {
    data: { featured },
  } = await getfeauredPosts(0, 10)
  const {
    data: { topPicks },
  } = await getTopPicks(0, 1)

  return {
    props: {
      latestPosts: latest,
      featuredPosts: featured,
      topPicks: topPicks,
    },
    revalidate: 10,
  }
}
