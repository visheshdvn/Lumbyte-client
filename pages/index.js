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
          <div className="grid gap-4 grid-cols-12 mt-2 border-t pt-1 divider-co">
            <div className="col-span-8">
              <div className="">
                <h1 className="uppercase font-bungee-shade xl:text-4.5xl lg:text-4xl md:text-3xl text-black pb-3">
                  The latest
                </h1>
                <div className="pt-3">
                  {latestPosts.map(postData => <WidePeek populateData={postData} />)}
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="border-l divider-co pl-3 pb-1">
                <h1
                  style={{ fontSize: "2.625re" }}
                  className="uppercase font-bungee-shade xl:text-4.5xl lg:text-4xl md:text-3xl text-black pb-3"
                >
                  featured
                </h1>
                <div className="pt-3">
                  {featuredPosts.map(postData => <SmallPeek populateData={postData} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const latestPosts = await getLatestPosts(0, 10)
  const featuredPosts = await getfeauredPosts(0, 10)


  return {
    props: {
      latestPosts: latestPosts.data.blogposts,
      featuredPosts: featuredPosts.data.blogposts
    },
    revalidate: 10,
  }
}
