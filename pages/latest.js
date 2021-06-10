import React from "react"

import WidePeek from '../components/PostPeek/wide'
import { getLatestPosts } from "../graphql/Queries"

const Latest = ({latestPosts}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `radial-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/latestPage/bg2.jpg)`,
        }}
        className="w-full h-48 bg-lightBlue-80 flex items-center justify-center bg-center bg-cover"
      >
        <h1 className="font-bungee-shade text-white text-6xl">Latest</h1>
      </div>

      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-4 grid-cols-12 mt-2 pt-4">
            <div className="col-span-8">
              <div className="">
                {latestPosts.map((postData) => (
                    <WidePeek key={postData.slug} populateData={postData} />
                  ))}
              </div>
            </div>
            <div className="col-span-4">2</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Latest


export async function getServerSideProps() {
  const {
    data: { latest },
  } = await getLatestPosts(0, 10)

  return {
    props: {
      latestPosts: latest,
    },
  }
}
