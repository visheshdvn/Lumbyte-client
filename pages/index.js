import Head from "next/head"

import WidePeek from "../components/PostPeek/wide"
import SmallPeek from "../components/PostPeek/smaller"
import SpotLight from "../components/PostPeek/spotLight"

import { getIndexPageData } from "../graphql/Queries"

export default function Home({ latestPosts, featuredPosts, topPicks }) {
  return (
    <>
      <Head>
        <title>LumBytes | Home</title>
      </Head>

      <SpotLight posts={topPicks} />

      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-1 grid-cols-12 mt-2 border-t dark:border-gray-700 pt-5">
            <div className="md:col-span-8 col-span-12 md:order-1 order-2">
              <div className="md:border-r dark:border-gray-700">
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
                <aside className="md:pl-3 pb-1">
                  <h1 className="bungee-head-style">featured</h1>
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

export async function getStaticProps() {
  const {
    data: { latest, featured, topPicks },
  } = await getIndexPageData(0, 10)

  return {
    props: {
      latestPosts: latest,
      featuredPosts: featured,
      topPicks: [topPicks[0]],
    },
    revalidate: 10,
  }
}
