import React from "react"
import { getSlugs, getPostBySlug } from "../../graphql/Queries"
import Image from "next/image"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Link from "next/link"
import Head from "next/head"

// custom mdx component imports
import Paragraph from "../../components/blogtext/paragraph"
import { H1, H2, H3 } from "../../components/blogtext/headings"
import Img from '../../components/blogtext/image'

const Post = ({
  postData: {
    id,
    minutes,
    metadescription,
    title,
    date,
    topic,
    banner,
    content,
  },
}) => {
  const stringdate = new Date(date).toDateString()
  console.log(metadescription)

  const components = {
    p: (props) => <Paragraph {...props} />,
    h1: (props) => <H1 {...props} />,
    h2: (props) => <H2 {...props} />,
    h3: (props) => <H3 {...props} />,
    img: (props) => <Img {...props} />
  }
  return (
    <>
      <Head>
        <meta name="description" content={metadescription} />
      </Head>
      <section className="">
        <div style={{borderColor: "rgba(0,0,0,0.20)"}} className="container mt-2 mx-auto horizontal-spacing pt-16 border-b">
          <>
            <Link href={`/topic/${topic}`}>
              <a>
                <h4 className="font-pt-sans uppercase font-bold text-lightBlue-600 text-lg pl-8 mb-3">
                  {topic}
                </h4>
              </a>
            </Link>

            <h1 className="md:text-5xl text-4xl font-pt-sans font-bold px-8 mb-5">
              {title}
            </h1>

            <div className="flex items-center h-4 px-8 mb-5 text-grayText overflow-hidden">
              <CalendarIcon className="h-full inline mr-1" />
              <span className="text-base font-coda">{stringdate}</span>
              <span className="mx-2">|</span>
              <ClockIcon className="h-full inline mr-1" />
              <span className="text-base font-coda">{minutes} Min read</span>
            </div>
          </>

          <div className="grid gap-4 grid-cols-12">
            <div className="col-span-8 ">
              {/* <div className="h-96 overflow-hidden"> */}
              <Image
                src={`http://localhost:1337${banner.url}`}
                width={1366}
                height={950}
                layout="responsive"
                className="object-cover object-center"
              />
              <main key={id} className="px-8 mt-5">
                <div className="prose lg:prose-lg font-serif">
                  <MDXRemote {...content} components={components} />
                </div>
              </main>
              {/* </div> */}
            </div>
            <div className="col-span-4">
              <div className="border-l pl-3 pb-2">
                <h1 className="text-4xl font-pt-sans font-bold mb-4">
                  Featured
                </h1>
                <h3 className="font-coda text-lg leading-6 mb-4">
                  Ad adipisicing reprehenderit esse nostrud sint eu qui.
                </h3>
                <h3 className="font-coda text-lg leading-6 mb-4">
                  Culpa Lorem esse nulla enim deserunt est voluptate occaecat
                  exercitation aliquip do in pariatur veniam.
                </h3>
                <h3 className="font-coda text-lg leading-6 mb-4">
                  Culpa Lorem esse nulla enim deserunt est veniam.
                </h3>
                <h3 className="font-coda text-lg leading-6 mb-4">
                  Culpa Lorem esse nulla enim deserunt est voluptate occaecat.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-3 my-2">
        <div className="container mx-auto">
          <h1 className="font-pt-sans font-bold text-white text-4xl mb-2">
            Similar
          </h1>
          <div className="flex justify-between">
            <SimilarArticles />
            <SimilarArticles />
            <SimilarArticles />
          </div>
        </div>
      </section>
    </>
  )
}

function SimilarArticles() {
  return (
    <Link href="/">
      <a className="px-2">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            className="object-cover object-center"
            src="https://source.unsplash.com/random"
            alt="image"
            width={1000}
            height={1000}
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 80%, rgba(0,0,0,1) 99%)",
            }}
            className="absolute top-0 right-0 left-0 bottom-0"
          />

          <h3 className="absolute bottom-2 right-2 left-2 font-coda text-white text-lg leading-6">Voluptate adipisicing occaecat quis mollit et laborum commodo.</h3>
        </div>
      </a>
    </Link>
  )
}

export async function getStaticProps(context) {
  console.log("Re-Generating...")
  const { params } = context
  const { slug } = params

  const data = await getPostBySlug(slug)

  const mdxSource = await serialize(data.data.blogposts[0].content)
  const {
    title,
    published_at,
    banner,
    topic,
    id,
    metadescription,
    minuteRead,
  } = data.data.blogposts[0]

  return {
    props: {
      postData: {
        title,
        date: published_at,
        topic: topic.topicname,
        banner,
        id,
        content: mdxSource,
        metadescription,
        minutes: minuteRead,
      },
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const { data } = await getSlugs()

  return {
    paths: data.blogposts.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  }
}

export default Post
