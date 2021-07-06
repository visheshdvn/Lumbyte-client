import React from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share"

import {
  getSlugs,
  getPostBySlug,
  getSimilarPosts,
} from "../../graphql/postPageQueries"

// custom components
import FormattedDate from "../../components/micro/formattedDate"
import { isValidURL } from "../../utils/checkValidURL"

// custom mdx component imports
import Paragraph from "../../components/blogtext/paragraph"
import { H1, H2, H3 } from "../../components/blogtext/headings"
import Img from "../../components/blogtext/image"
import { Ul } from "../../components/blogtext/lists"
import Code from "../../components/blogtext/code"
import BlockQuote from "../../components/blogtext/blockQuote"
import Table from "../../components/blogtext/table"

const Post = ({
  postData: {
    id,
    minutes,
    metadescription,
    title,
    associatedColor,
    topic,
    banner,
    bannerUrl,
    bannerAlt,
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
    blockquote: (props) => <BlockQuote {...props} />,
    table: (props) => <Table {...props} />,
  }

  let source = null
  if (isValidURL(bannerUrl)) {
    source = bannerUrl
  } else {
    source = `http://${process.env.HOSTNAME}${bannerUrl}`
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
        <meta property="og:image" content={source} key="ogimage" />
      </Head>
      <section style={{ maxWidth: "1200px" }} className="mx-auto">
        <div className="container mx-auto horizontal-spacing md:pt-8">
          <div style={{ maxWidth: "730px" }} className="mx-auto">
            <Link href={`/topic/${topic}`}>
              <a
                style={{ color: `#${associatedColor}` }}
                className="font-roboto-cond uppercase font-bold text-lg"
              >
                {topic}
              </a>
            </Link>

            <h1 className="md:text-5xl text-4xl font-roboto-cond font-bold my-5 md:leading-tight">
              {title}
            </h1>

            <div className="mb-8">
              <div className="clearfix relative">
                <div
                  style={{
                    background: "center url('/topicbg/bg.jpg')",
                    backgroundSize: "cover",
                  }}
                  className="md:h-11 md:w-11 h-10 w-10 rounded-full relative float-left"
                />
                <div className="flex flex-col pl-2 justify-around float-left">
                  <h5 className="md:text-base text-sm font-roboto">
                    Vishesh Dhawan
                  </h5>
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

                <div className="h-full flex items-center absolute right-0">
                  <ul>
                    <li className="ml-3">
                      <TwitterShareButton
                        title={title}
                        url={`https://lumbytes.com/post/${slug}`}
                        className="focus:outline-none border-none"
                      >
                        <svg
                          style={{ color: "#00aced" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="md:h-6 md:w-6 h-5 w-5"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </TwitterShareButton>
                    </li>
                  </ul>
                  <ul>
                    <li className="ml-3">
                      <FacebookShareButton
                        style={{ color: "#3A5794" }}
                        quote={title}
                        url={`https://lumbytes.com/post/${slug}`}
                        className="focus:outline-none border-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="md:h-6 md:w-6 h-5 w-5"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </FacebookShareButton>
                    </li>
                  </ul>
                  <ul>
                    <li className="ml-3">
                      <LinkedinShareButton
                        style={{ color: "#0A66C2" }}
                        title={title}
                        url={`https://lumbytes.com/post/${slug}`}
                        className="focus:outline-none border-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="md:h-6 md:w-6 h-5 w-5"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </LinkedinShareButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-12 mb-5">
            <div className="lg:col-span-12 col-span-12">
              <div className="mb-8">
                <Image
                  src={source}
                  alt={bannerAlt}
                  width={1366}
                  height={900}
                  layout="responsive"
                  className="object-cover object-center"
                  placeholder="blur"
                  blurDataURL={source}
                />
              </div>
              <main
                key={id}
                className="lg:px-14 md:px-16 sm:px-8 px-3 mt-5 pb-8"
              >
                <div
                  style={{ maxWidth: "730px" }}
                  id="toSpeech"
                  className="font-serif leading-7.5 text-lg mx-auto"
                >
                  <MDXRemote {...content} components={components} />
                </div>
              </main>
              <div className="lg:px-14 md:px-16 sm:px-8">
                <hr className="border-t" />
              </div>

              {/* Author */}
              {/* <div className="w-full lg:px-14 md:px-16 sm:px-8">
                <div className="border-t dark:border-gray-700 flex pt-8">
                  <div className="flex items-start justify-center lg:h-32">
                    <div className="rounded-full h-20 w-20 border border-lightBlue-300"></div>
                  </div>
                  <div className="border-lightBlue-800 flex-1 pl-3">jebv</div>
                </div>
              </div> */}
            </div>

            <div className="col-span-3 hidden lg:bloc">
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

      {similar.length > 0 ? (
        <section className="py-3 mb-14">
          <div className="container mx-auto horizontal-spacing">
            <h1 className="font-pt-sans font-bold lg:text-4xl sm:text-3xl text-4xl mb-2 pl-2 dark:text-gray-200">
              Read More
            </h1>
            <div className="flex sm:flex-row flex-col flex-wrap">
              {similar.map((data) => (
                <SimilarArticles key={data.slug} data={data} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* extra bytes */}
      {/* <section className="">
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
      </section> */}
    </>
  )
}

function SimilarArticles({ data }) {
  let source = null
  if (isValidURL(data.bannerUrl)) {
    source = data.bannerUrl
  } else {
    source = `http://${process.env.HOSTNAME}${data.bannerUrl}`
  }

  return (
    <Link href={`/post/${data.slug}`}>
      <a
        style={{ minWidth: "x" }}
        className="px-2 col-span-2 lg:col-auto sm:w-1/3 w-full sm:h-auto h-auto mb-5 sm:mb-0"
      >
        <div className="relative h-44 sm:h-64 md:h-72 w-full rounded-lg overflow-hidden">
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 98%)",
            }}
            className="gradient-div absolute top-0 right-0 left-0 bottom-0 z-10"
          />

          <Image
            className="object-cover object-center"
            src={source}
            alt={data.bannerAlt}
            layout="fill"
          />

          <h3 className="absolute bottom-2 right-2 left-2 font-roboto font-bold text-white text-2xl sm:text-2xl lg:text-3xl leading-7 z-20">
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
  // const {
  //   data: { extraBytes },
  // } = await getExtraBytes(slug)

  const mdxSource = await serialize(blogposts[0].content)
  const {
    title,
    published_at,
    banner,
    bannerUrl,
    bannerAlt,
    topic,
    id,
    metadescription,
    minuteRead,
    date,
  } = blogposts[0]

  const {
    data: { similar },
  } = await getSimilarPosts(topic.topicname, slug)

  return {
    props: {
      postData: {
        title,
        published_at,
        topic: topic.topicname,
        associatedColor: topic.associatedColour,
        banner,
        bannerUrl,
        bannerAlt,
        id,
        date,
        content: mdxSource,
        metadescription,
        minutes: minuteRead,
        slug,
      },
      // extraBytes,
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
