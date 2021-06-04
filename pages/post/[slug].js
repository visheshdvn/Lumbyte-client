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
  }
  return (
    <>
      <Head>
        <meta name="description" content={metadescription} />
      </Head>
      <div className="container mt-2 mx-auto horizontal-spacing pt-16">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-8 ">
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

            <div className="text-gray-400 px-8 mb-5">
              <div className="flex items-center h-4 text-grayText overflow-hidden">
                <CalendarIcon className="h-full inline mr-1" />
                <span className="text-base font-coda">{stringdate}</span>
                <span className="mx-2">|</span>
                <ClockIcon className="h-full inline mr-1" />
                <span className="text-base font-coda">{minutes} Min read</span>
              </div>
            </div>

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
          <div className="col-span-4 pt-32">
            <div className="border-l pl-3 pb-2">
              <h1 className="text-4xl font-pt-sans font-bold mb-4">
                Featured
              </h1>
              <h3 className="font-coda text-lg leading-6 mb-4">Ad adipisicing reprehenderit esse nostrud sint eu qui.</h3>
              <h3 className="font-coda text-lg leading-6 mb-4">Culpa Lorem esse nulla enim deserunt est voluptate occaecat exercitation aliquip do in pariatur veniam.</h3>
              <h3 className="font-coda text-lg leading-6 mb-4">Culpa Lorem esse nulla enim deserunt est veniam.</h3>
              <h3 className="font-coda text-lg leading-6 mb-4">Culpa Lorem esse nulla enim deserunt est voluptate occaecat.</h3>
            </div>
          </div>
        </div>
      </div>
    </>
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
