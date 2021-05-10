import Head from "next/head"
import PostIntro from "../components/postIntro"

export default function Home() {
  return (
    <>
      <Head>
        <title>LumBytes | Home</title>
      </Head>
      <section className="text-gray-600 body-font relative">
        <div className="container px-3 md:px-5 py-5 lg:py-15 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            id="postIntroParent"
            className="lg:w-2/3 md:w-3/4 w-full overflow-hidden md:mr-4 lg:mr-8 flex flex-col"
          >
            <PostIntro />
            <PostIntro />
            <PostIntro />
          </div>
          <div className="lg:w-1/3 hidden md:flex md:w-1/4 bg-white flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         blogposts {
//           title
//           date
//           banner {
//             url
//           }
//           tags {
//             tagname
//           }
//           topics {
//             topicname
//           }
//         }
//       }
//     `,
//   })

//   console.log(JSON.stringify(data, null, 4));

//   return {
//     props: {
//       // countries: data.countries.slice(0, 4),
//     },
//   }
// }
