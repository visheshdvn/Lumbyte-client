import React from "react"
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
    topic,
    banner,
    content,
    date,
    slug,
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
        <title>{title}</title>
        <meta name="description" content={metadescription} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={`https://lumbytes.com/post/${slug}`} />
        <meta
          property="og:description"
          content={metadescription}
          key="ogdesc"
        />
        <meta
          property="og:image"
          content={`https://lumbytes.com${banner.url}`}
          key="ogimage"
        />
      </Head>
      <section className="max-w-7xl mx-auto">
        <div className="container mx-auto horizontal-spacing md:pt-8 border-b dark:border-gray-700">
          <>
            <Link href={`/topic/${topic}`}>
              <a
                style={{ color: `#${associatedColor}` }}
                className="font-roboto-cond uppercase font-bold text-lg pl-8"
              >
                {topic}
              </a>
            </Link>

            <h1 className="md:text-5xl text-4xl font-roboto-cond font-bold px-8 my-5">
              {title}
            </h1>

            <div className="flex px-8  mb-8">
              <div
                style={{
                  background: "center url('/topicbg/bg.jpg')",
                  backgroundSize: "cover",
                }}
                className="md:h-11 md:w-11 h-10 w-10 rounded-full border-lightBlue-900 border relative"
              />
              <div className="flex flex-col pl-2 justify-around">
                <h5 className="md:text-base text-sm font-roboto">Vishesh Dhawan</h5>
                <div className="flex items-center h-3 text-grayText dark:text-gray-400 overflow-hidden">
                  <span className="text-sm font-roboto">
                    <FormattedDate date={date} />
                  </span>
                  <span className="mx-2">|</span>
                  {/* <ClockIcon className="h-full inline mr-1" /> */}
                  <span className="text-sm font-roboto">
                    {minutes} min read
                  </span>
                </div>
              </div>
            </div>
          </>

          <div className="grid gap-4 grid-cols-12 mb-5">
            <div className="lg:col-span-8 col-span-12">
              <div className="mb-8">
                <Image
                  src={`http://${process.env.HOSTNAME}:${process.env.PORT}${banner.url}`}
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
                {/* <div className="w-full border flex">
                  <div className="border border-red-800">
                    Vishesh Dhawan Image
                  </div>
                  <div className="border border-lightBlue-800 flex-1">
                    jebv
                  </div>
                </div> */}
              </main>
            </div>

            <div className="col-span-4 hidden lg:block">
              <div className="border-l dark:border-gray-700 pl-3 pb-2">
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
        <section className="py-3 my-2 bg-gray-100 dark:bg-blac dark:bg-gray-800">
          <div className="container mx-auto horizontal-spacing">
            <h1 className="font-pt-sans font-bold text-4xl mb-2 pl-2 dark:text-gray-200">
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
                <SimilarArticles key={data.slug} data={data} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="">
        <div className="container mx-auto horizontal-spacing border-t dark:border-gray-700 pt-8">
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

function SimilarArticles({ data }) {
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
    date,
  } = blogposts[0]

  const {
    data: { similar },
  } = await getSimilarPosts(topic.topicname, slug)
  // console.log(similar);

  return {
    props: {
      postData: {
        title,
        published_at,
        topic: topic.topicname,
        associatedColor: topic.associatedColour,
        banner,
        id,
        date,
        content: mdxSource,
        metadescription,
        minutes: minuteRead,
        slug,
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
