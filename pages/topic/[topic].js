import React from "react"
import { useRouter } from "next/router"
// import bgimg from "/topicbg/technology.jpg"
import WidePeek from "../../components/PostPeek/wide"
import SmallPeek from "../../components/PostPeek/smaller"

const Topic = () => {
  const router = useRouter()
  const { topic } = router.query

  return (
    <>
      <div
        style={{
          backgroundImage: `radial-gradient( rgba(56, 131, 202, 1), rgba(56, 131, 202, 0.85)), url(/topicbg/technology.jpg)`,
        }}
        className="w-full h-48 bg-lightBlue-80 flex items-center justify-center bg-center bg-cover"
      >
        <h1 className="font-bungee-shade text-white text-5xl">{topic}</h1>
      </div>
      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          <div className="grid gap-4 grid-cols-12 mt-2 border-t pt-1">
            <div className="col-span-8">
              <div className="">
                <h1 className="uppercase font-bungee-shade xl:text-4.5xl lg:text-4xl md:text-3xl text-black pb-3">
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
            <div className="col-span-4">
              <div className="border-l pl-3 pb-1">
                <h1
                  style={{ fontSize: "2.625re" }}
                  className="uppercase font-bungee-shade xl:text-4.5xl lg:text-4xl md:text-3xl text-black pb-3"
                >
                  featured
                </h1>
                <div className="pt-3">
                  <SmallPeek />
                  <SmallPeek />
                  <SmallPeek />
                  <SmallPeek />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Topic
