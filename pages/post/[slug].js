import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";

import {
  getSlugs,
  getPostBySlug,
  getSimilarPosts,
} from "../../graphql/postPageQueries";

// custom components
import FormattedDate from "../../components/micro/formattedDate";
import ShowTags from "../../components/micro/showTags";
import { isValidURL, getValidImageURL } from "../../utils/checkValidURL";

// custom mdx component imports
import Paragraph from "../../components/blogtext/paragraph";
import { H2, H3, H4 } from "../../components/blogtext/headings";
import Img from "../../components/blogtext/image";
import { Ul } from "../../components/blogtext/lists";
import Code from "../../components/blogtext/code";
import BlockQuote from "../../components/blogtext/blockQuote";
import Table from "../../components/blogtext/table";
import Figure from "../../components/blogtext/figure";
import BlogLink from "../../components/blogtext/link";

const Post = ({ postData, similar }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const {
    id,
    minutes,
    metadescription,
    title,
    banner,
    content,
    date,
    slug,
    tags,
    author: { firstname, lastname, username, dp, about },
  } = postData;

  const components = {
    p: (props) => <Paragraph {...props} />,
    h1: (props) => <H2 {...props} />,
    h2: (props) => <H3 {...props} />,
    h3: (props) => <H4 {...props} />,
    ul: (props) => <Ul {...props} />,
    img: (props) => <Img {...props} />,
    code: (props) => <Code {...props} />,
    blockquote: (props) => <BlockQuote {...props} />,
    table: (props) => <Table {...props} />,
    figure: (props) => <Figure {...props} />,
    a: (props) => <BlogLink {...props} />,
  };

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
          content={getValidImageURL(banner.url)}
          key="ogimage"
        />
        <meta property="og:site_name" content="Lumbytes" />
        {/* twitter */}
        <meta name="twitter:card" value="summary_large_image" />
      </Head>
      <div className="mx-auto">
        <div className="container mx-auto horizontal-spacing md:pt-6 pt-5">
          <header style={{ maxWidth: "850px" }} className="mx-auto">
            <div className="flex items-center mb-5 sm:hidden">
              {tags.map((tag) => (
                <ShowTags tagname={tag.tagname} color={tag.color} key={tag.tagname} />
              ))}
            </div>

            <h1 className="lg:text-6xl md:text-5xl text-4xl font-raleway font-black md:leading-tight text-center">
              {title}
            </h1>

            <div
              style={{ maxWidth: "800px" }}
              className="lg:my-10 md:my-8 my-7 mx-auto"
            >
              <div className="clearfix relative">
                <a
                  href="https://www.linkedin.com/in/visheshdvn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    style={{
                      background: `center url(${getValidImageURL(dp.url)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="md:h-11 md:w-11 h-10 w-10 rounded-full relative float-left"
                  />
                </a>
                <div className="flex flex-col pl-2 justify-around float-left">
                  <a
                    href="https://www.linkedin.com/in/visheshdvn"
                    target="_blank"
                    rel="noreferrer"
                    className="md:text-base text-sm font-roboto font-bold"
                  >
                    {firstname} {lastname}
                  </a>
                  <div className="flex items-center h-3 text-grayText dark:text-gray-400 overflow-hidden">
                    <span className="text-sm font-roboto">
                      <FormattedDate date={date} />
                    </span>
                    <span className="mx-2">|</span>
                    <span className="text-sm font-roboto">
                      {minutes} min read
                    </span>
                  </div>
                </div>

                <div className="h-full sm:flex items-center absolute right-0 hidden">
                  <div className="flex">
                    {tags.map((tag) => (
                      <ShowTags tagname={tag.tagname} color={tag.color} key={tag.tagname} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="mb-8 relative lg:h-100 md:h-96 sm:h-80 h-60">
            <Image
              src={getValidImageURL(banner.url)}
              alt={banner.alternativeText}
              // width={1300}
              // height={780}
              layout="fill"
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL={getValidImageURL(banner.url)}
            />
          </div>

          <section className="grid gap-1 grid-cols-12 mb-5">
            <div className="col-span-1 flex lg:flex-col items-center order-2 lg:order-1 pt-2 lg:pt-0">
              <h3 className="font-open-sans font-bold text-2xl lg:mb-5 mr-5 lg:mr-0">
                Share
              </h3>

              <ul className="flex lg:block pt-2">
                <li className="lg:mb-5 mr-5 lg:mr-0">
                  <TwitterShareButton
                    title={title}
                    url={`https://lumbytes.com/post/${slug}`}
                    className="focus:outline-none border-none"
                  >
                    <svg
                      style={{ color: "#00aced" }}
                      xmlns="https://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="md:h-6 md:w-6 h-5 w-5"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </TwitterShareButton>
                </li>

                <li className="lg:mb-5 mr-5 lg:mr-0">
                  <FacebookShareButton
                    style={{ color: "#3A5794" }}
                    quote={title}
                    url={`https://lumbytes.com/post/${slug}`}
                    className="focus:outline-none border-none"
                  >
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="md:h-6 md:w-6 h-5 w-5"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </FacebookShareButton>
                </li>

                <li className="lg:mb-5 mr-5 lg:mr-0">
                  <LinkedinShareButton
                    style={{ color: "#0A66C2" }}
                    title={title}
                    url={`https://lumbytes.com/post/${slug}`}
                    className="focus:outline-none border-none"
                  >
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
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
            <div className="lg:col-span-8 col-span-12 order-1 lg:order-2">
              <main key={id} className="pr-0 xl:pr-12 lg:pr-8">
                <div
                  id="toSpeech"
                  className="font-serif leading-7.5 text-lg mx-auto"
                >
                  <MDXRemote {...content} components={components} />
                </div>
                {/* author data */}
                <div className="flex py-3 border-t-4 border-b-4 border-grayMain">
                  <div className="flex items-center">
                    <div className="rounded-full lg:h-36 lg:w-36 h-28 w-28 relative overflow-hidden">
                      <a href="https://www.linkedin.com/in/visheshdvn" target="_blank">
                        <Image
                          src={getValidImageURL(dp.url)}
                          alt={dp.alternativeText}
                          layout="fill"
                          className="object-cover object-center transform transition-all duration-700 hover:scale-125 cursor-pointer"
                          placeholder="blur"
                          blurDataURL={dp.url}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 px-4 py-3">
                    <a
                      href="https://www.linkedin.com/in/visheshdvn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h1 className="lg:text-4xl text-3xl font-raleway font-black leading-8">
                        {firstname} {lastname}
                      </h1>
                      <p className="mt-3 pr-3 font-medium sm:text-base text-sm">
                        {about}
                      </p>
                    </a>
                  </div>
                </div>
              </main>
            </div>
          </section>

          {/* similar here */}
          {/* <p className="border">Henlo!</p> */}
        </div>
      </div>

      {/* {similar.length > 0 ? (
        <section className="py-3 mb-14">
          <div className="container mx-auto horizontal-spacing">
            <h1 className="font-bold font-open-sans lg:text-4xl sm:text-3xl text-4xl mb-2 pl-2 dark:text-gray-200">
              Extra bytes
            </h1>
            <div className="flex sm:flex-row flex-col flex-wrap">
              {similar.map((data) => (
                <SimilarArticles key={data.slug} data={data} />
              ))}
            </div>
          </div>
        </section>
      ) : null} */}
    </>
  );
};

function BroadHeading({ text }) {
  return (
    <h1 className="font-antonio font-bold xl:text-4.75xl lg:text-4.5xl md:text-4xl sm:text-4.5xl text-3xl tracking-custom uppercase text-center -mr-3 xl:mb-20 lg:mb-18 md:mb-16 mb-16 leading-none">
      {text}
    </h1>
  );
}

function SimilarArticles({ data }) {
  return (
    <a
      href={`/post/${data.slug}`}
      style={{ minWidth: "x" }}
      className="px-2 col-span-2 lg:col-auto sm:w-1/3 w-full sm:h-auto h-auto mb-5 sm:mb-0"
    >
      <div className="scale-parent relative h-44 sm:h-64 md:h-72 w-full rounded-lg overflow-hidden">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 98%)",
          }}
          className="gradient-div absolute top-0 right-0 left-0 bottom-0 z-10"
        />

        <Image
          className="object-cover object-center"
          src={getValidImageURL(data.banner.url)}
          alt={data.banner.alternativeText}
          layout="fill"
          placeholder="blur"
          blurDataURL={getValidImageURL(data.banner.url)}
        />

        <h3 className="absolute bottom-2 right-2 left-2 font-roboto font-bold text-white text-2xl sm:text-2xl lg:text-3xl leading-7 z-20 pointer-events-none">
          {data.title}
        </h3>
      </div>
    </a>
  );
}

export async function getStaticProps(context) {
  console.log("Re-Generating...");
  const { params } = context;
  const { slug } = params;
  const {
    data: { blogposts },
  } = await getPostBySlug(slug);

  if (blogposts.length === 0) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(blogposts[0].content);
  const {
    title,
    published_at,
    author,
    banner,
    id,
    metadescription,
    minuteRead,
    date,
    tags,
  } = blogposts[0];

  // const {
  //   data: { similar },
  // } = await getSimilarPosts(topic.topicname, slug);

  return {
    props: {
      postData: {
        title,
        published_at,
        author,
        banner,
        id,
        date,
        content: mdxSource,
        metadescription,
        minutes: minuteRead,
        slug,
        tags,
      },
      // similar,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const { data } = await getSlugs();

  return {
    paths: data.blogposts.map((item) => ({ params: { slug: item.slug } })),
    fallback: true,
  };
}

export default Post;
