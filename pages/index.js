import Head from "next/head"
// import PostIntro from "../components/postIntro"
// import { getPostIntroIndex } from "../graphql/Queries"

export default function Home({data}) {

  return (
    <>
      <Head>
        <title>LumBytes | Home</title>
      </Head>
      <section className="text-gray-600 body-font relative">
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
