import Head from "next/head"
import WidePeek from "../components/PostPeek/wide"
import SmallPeek from "../components/PostPeek/smaller"
import { getLatestPosts, getfeauredPosts } from "../graphql/Queries"

export default function Home({ latestPosts, featuredPosts }) {
  // console.log(featuredPosts);
  return (
    <>
      <Head>
        <title>LumBytes | Home</title>
      </Head>
      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-4 grid-cols-12 mt-2 border-t pt-1">
            <div className="col-span-9">
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
            <div className="col-span-3">
            {featuredPosts.length > 0 ? (
                <div className="border-l pl-3 pb-1">
                  <h1
                    style={{ fontSize: "2.625re" }}
                    className="uppercase font-bungee-shade xl:text-4.5xl lg:text-4xl md:text-3xl text-black pb-3"
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
  const {data: {latest}} = await getLatestPosts(0, 10)
  const {data: {featured}} = await getfeauredPosts(0, 10)


  return {
    props: {
      latestPosts: latest,
      featuredPosts: featured,
    },
    revalidate: 10,
  }
}
