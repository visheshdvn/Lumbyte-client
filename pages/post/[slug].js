import React, { StrictMode } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

import {
  getSlugs,
  getPostBySlug,
  getSimilarPosts,
  getExtraBytes,
} from "../../graphql/postPageQueries"

// custon components
import WidePeek from "../../components/PostPeek/wide"
import FormattedDate from "../../components/micro/formattedDate"

// custom mdx component imports
import Paragraph from "../../components/blogtext/paragraph"
import { H1, H2, H3 } from "../../components/blogtext/headings"
import Img from "../../components/blogtext/image"
import Ul from "../../components/blogtext/ul"
import Code from "../../components/blogtext/code"

const Post = ({
  postData: {
    id,
    minutes,
    metadescription,
    title,
    associatedColor,
    date,
    topic,
    banner,
    content,
  },
  extraBytes,
  similar,
}) => {
  const components = {
    p: (props) => <Paragraph {...props} />,
    h1: (props) => <H1 {...props} />,
    h2: (props) => <H2 {...props} />,
    h3: (props) => <H3 {...props} />,
    ul: (props) => <Ul {...props} />,
    img: (props) => <Img {...props} />,
    code: (props) => <Code {...props} />,
  }
  return (
    <>
      <Head>
        <meta name="description" content={metadescription} />
      </Head>
      <section className="max-w-7xl mx-auto">
        <div className="container mt-2 mx-auto horizontal-spacing lg:pt-10 md:pt-10 border-b">
          <>
            <Link href={`/topic/${topic}`}>
              <a
                style={{ color: `#${associatedColor}` }}
                className="font-roboto-cond uppercase font-bold text-lg pl-8"
              >
                {topic}
              </a>
            </Link>

            <h1 className="md:text-5xl text-4xl font-roboto-cond font-bold px-8 mb-5 mt-3">
              {title}
            </h1>

            <div className="flex items-center h-3 px-8 mb-8 text-grayText overflow-hidden">
              <CalendarIcon className="h-full inline mr-1" />
              <span className="text-sm font-roboto">
                <FormattedDate date={date} />
              </span>
              <span className="mx-2">|</span>
              <ClockIcon className="h-full inline mr-1" />
              <span className="text-sm font-roboto">{minutes} min read</span>
            </div>
          </>

          <div className="grid gap-4 grid-cols-12">
            <div className="lg:col-span-8 col-span-12">
              <div className="mb-8">
                <Image
                  src={`http://localhost:1337${banner.url}`}
                  alt={banner.alternativeText}
                  width={1366}
                  height={900}
                  layout="responsive"
                  className="object-cover object-center"
                />
              </div>
              <main key={id} className="lg:px-14 md:px-16 sm:px-8 mt-5">
                <div className="font-serif leading-7.5 text-lg">
                  <MDXRemote {...content} components={components} />
                </div>
              </main>
            </div>

            <div className="col-span-4 hidden lg:block">
              <div className="border-l pl-3 pb-2">
                <h1 className="text-4xl font-pt-sans font-bold mb-4">
                  Featured
                </h1>
                <h3 className="text-xl leading-6 mb-4 font-normal font-roboto-cond">
                  Ad adipisicing reprehenderit esse nostrud sint eu qui.
                </h3>
                <h3 className="text-xl leading-6 mb-4 font-normal font-roboto-cond">
                  Culpa Lorem esse nulla enim deserunt est voluptate occaecat
                  exercitation aliquip do in pariatur veniam.
                </h3>
                <h3 className="text-xl leading-6 mb-4 font-normal font-roboto-cond">
                  Culpa Lorem esse nulla enim deserunt est veniam.
                </h3>
                <h3 className="text-xl leading-6 mb-4 font-normal font-roboto-cond">
                  Culpa Lorem esse nulla enim deserunt est voluptate occaecat.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {similar.length > 1 ? (
        <section
          style={{ backgroundColor: "#fafafa" }}
          className="bg-gray- py-3 my-2"
        >
          <div className="container mx-auto horizontal-spacing">
            <h1 className="font-pt-sans font-bold text-4xl mb-2 pl-2">
              Similar
            </h1>

            {/* <div className="grid lg:gap-1 md:gap-4 grid-cols-4">
            <SimilarArticles />
            <SimilarArticles />
            <SimilarArticles />
            <SimilarArticles />
          </div> */}
            <div className="flex sm:flex-row flex-col justify-betwee flex-wrap">
              {similar.map((data) => (
                <SimilarArticles data={data} asd="dwe" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="">
        <div className="container mx-auto horizontal-spacing border-t">
          <div className="grid gap-4 grid-cols-12 pt-2">
            <div className="lg:col-span-8 col-span-12">
              <div className="">
                <h1 className="bungee-head-style">Extra bytes</h1>
                <div className="pt-3">
                  {extraBytes.map((postData) => (
                    <WidePeek key={postData.slug} populateData={postData} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-4 hidden lg:block"></div>
          </div>
        </div>
      </section>
    </>
  )
}

function SimilarArticles({ data, asd }) {
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ) // fragment locator
    return !!pattern.test(str)
  }

  let source = null
  if (validURL(data.banner.url)) {
    source = src
  } else {
    source = `http://localhost:1337${data.banner.url}`
  }

  return (
    <Link href={`/post/${data.slug}`}>
      <a
        style={{ minWidth: "x" }}
        className="px-2 col-span-2 lg:col-auto sm:w-1/3 w-full sm:h-auto h-auto mb-5 sm:mb-0"
      >
        <div className="relative md:h-72 lg:h-80 sm:h-64 h-44 w-full overflow-hidden">
          <Image
            className="object-cover object-center"
            src={source}
            alt="image"
            // width={340}
            // height={320}
            layout="fill"
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 98%)",
            }}
            className="absolute top-0 right-0 left-0 bottom-0"
          />

          <h3 className="absolute bottom-2 right-2 left-2 font-roboto font-bold text-white text-2xl leading-7">
            {data.title}
          </h3>
        </div>
      </a>
    </Link>
  )
}

export async function getStaticProps(context) {
  console.log("Re-Generating...")
  const { params } = context
  const { slug } = params

  const {
    data: { blogposts },
  } = await getPostBySlug(slug)
  const {
    data: { extraBytes },
  } = await getExtraBytes(slug)
  // console.log(JSON.stringify(data.data.blogposts[0].banner, null, 4));

  const mdxSource = await serialize(blogposts[0].content)
  const {
    title,
    published_at,
    banner,
    topic,
    id,
    metadescription,
    minuteRead,
  } = blogposts[0]

  const {
    data: { similar },
  } = await getSimilarPosts(topic.topicname, slug)
  // console.log(similar);

  return {
    props: {
      postData: {
        title,
        date: published_at,
        topic: topic.topicname,
        associatedColor: topic.associatedColour,
        banner,
        id,
        content: mdxSource,
        metadescription,
        minutes: minuteRead,
      },
      extraBytes,
      similar,
    },
    revalidate: 86400,
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
