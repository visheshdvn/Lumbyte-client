import Head from "next/head"
import WidePeek from "../components/PostPeek/wide"
// import { getPostIntroIndex } from "../graphql/Queries"

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>LumBytes | Home</title>
      </Head>
      <section className="body-font relative">
        {/* <div className="container px-3 sm:px-0 md:px-5 py-5 lg:py-15 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            id="postIntroParent"
            className="lg:w-2/3 md:w-3/4 w-full overflow-hidden md:mr-4 lg:mr-8 flex flex-col"
          >
            {data.map(item => <PostIntro key={item.slug} postData={item} />)}
          </div>
          <div className="lg:w-1/3 hidden md:flex md:w-1/4 bg-white flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            section 2
          </div>
        </div> */}
        d
        <div className="container mx-auto">
          <div className="grid gap-4 grid-cols-12 mt-2 border-t pt-1">
            <div className="col-span-8">
              <div className="">
                <h1 style={{fontSize: "2.625re"}} className="uppercase font-bungee-shade text-4.5xl text-black pb-3">
                  The latest
                </h1>
                <div className="pt-3">
                  <WidePeek />
                  <WidePeek />
                  <WidePeek />
                  <WidePeek />
                  <WidePeek />
                  <WidePeek />
                  <WidePeek />
                  <WidePeek />
                  <WidePeek />
                </div>
              </div>
            </div>
            <div className="bg-blue- col-span-4">
            <div className="border-l pl-2">
                <h1 style={{fontSize: "2.625re"}} className="uppercase font-bungee-shade text-4.5xl text-black pb-3">
                  Top picks
                </h1>
                <div className="pt-3">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// export async function getStaticProps() {
//   const { data } = await getPostIntroIndex(0, 10)

//   return {
//     props: {
//       data: data.blogposts
//     },
//     revalidate: 1,
//   }
// }
