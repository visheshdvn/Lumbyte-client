import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";

// custom components
import FormattedDate from "../../components/micro/formattedDate";
import ShowTags from "../../components/micro/showTags";
import { getValidImageURL } from "../../utils/checkValidURL";
import ReadOnlyEditor from "../../components/elements/editor/readOnlyEditor";
import Navbar from "../../components/elements/navbar/Navbar-client";
import Footer from "../../components/elements/footer/Footer";
import HeadBlogpost from "../../utils/headTags/public/headBlogpost";

// prisma
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Post = ({ postData, readMore }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const {
    id,
    title,
    banner,
    banneralt,
    slug,
    tags,
    published_at,
    created_at,
    author: { firstname, lastname, username, dp, dpalt, about },
    minuteRead,
    metaDescription,
    content,
  } = postData;

  return (
    <>
      <HeadBlogpost
        slug={slug}
        title={title}
        metaDescription={metaDescription}
        banner={banner}
        banneralt={banneralt}
      />
      
      <Navbar />

      <div className="horizontal-spacing container mx-auto pt-5 md:pt-4 lg:pt-6 xl:pt-8">
        <header style={{ maxWidth: "850px" }} className="mx-auto">
          <div className="mb-5 flex items-center sm:hidden">
            {tags.map((tag) => (
              <ShowTags
                tagname={tag.tagname}
                color={tag.color}
                key={tag.tagname}
              />
            ))}
          </div>

          <h1 className="font-primary lg:text-5.5xl text-center text-3xl font-black md:text-5xl md:leading-tight lg:leading-tight">
            {title}
          </h1>

          <div
            style={{ maxWidth: "800px" }}
            className="my-7 mx-auto md:my-8 lg:my-10"
          >
            <div className="clearfix relative">
              <a
                href="https://www.linkedin.com/in/visheshdvn"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    background: `center url(${
                      dp || getValidImageURL("/me.jpg")
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="relative float-left h-10 w-10 rounded-full md:h-11 md:w-11"
                />
              </a>
              <div className="float-left flex flex-col justify-around pl-2">
                <a
                  href="https://www.linkedin.com/in/visheshdvn"
                  target="_blank"
                  rel="noreferrer"
                  className="font-roboto text-sm font-bold md:text-base"
                >
                  {firstname} {lastname || ""}
                </a>
                <div className="text-grayText flex h-3 items-center overflow-hidden dark:text-gray-400">
                  <span className="font-roboto text-sm">
                    <FormattedDate date={published_at || created_at} />
                  </span>
                  <span className="mx-2">|</span>
                  <span className="font-roboto text-sm">
                    {minuteRead} min read
                  </span>
                </div>
              </div>

              <div className="absolute right-0 hidden h-full items-center sm:flex">
                <div className="flex">
                  {tags.map((tag) => (
                    <ShowTags
                      tagname={tag.tagname}
                      color={tag.color}
                      key={tag.tagname}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="lg:h-100 relative mb-8 h-60 sm:h-80 md:h-96">
          <Image
            src={banner}
            alt={banneralt}
            layout="fill"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={banner}
          />
        </div>

        <section className="mb-5 grid grid-cols-12 gap-1">
          <div className="order-2 col-span-1 flex items-center pt-2 lg:order-1 lg:flex-col lg:pt-0">
            <ul className="flex pt-2 lg:sticky lg:top-36 lg:block">
              <li className="mr-5 lg:mb-8 lg:mr-0">
                <TwitterShareButton
                  title={title}
                  url={`https://lumbytes.com/post/${slug}`}
                  className="border-none focus:outline-none"
                >
                  <svg
                    style={{ color: "#00aced" }}
                    xmlns="https://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-5 w-5 md:h-6 md:w-6"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </TwitterShareButton>
              </li>

              <li className="mr-5 lg:mb-8 lg:mr-0">
                <FacebookShareButton
                  style={{ color: "#3A5794" }}
                  quote={title}
                  url={`https://lumbytes.com/post/${slug}`}
                  className="border-none focus:outline-none"
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-5 w-5 md:h-6 md:w-6"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </FacebookShareButton>
              </li>

              <li className="mr-5 lg:mr-0">
                <LinkedinShareButton
                  style={{ color: "#0A66C2" }}
                  title={title}
                  url={`https://lumbytes.com/post/${slug}`}
                  className="border-none focus:outline-none"
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-5 w-5 md:h-6 md:w-6"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </LinkedinShareButton>
              </li>
            </ul>
          </div>
          <div className="order-1 col-span-12 lg:order-2 lg:col-span-8">
            <main key={id} className="pr-0 lg:pr-8 xl:pr-12">
              <div
                id="toSpeech"
                className="mx-auto font-serif text-lg md:text-xl md:leading-8"
              >
                <ReadOnlyEditor content={JSON.parse(content)} />
              </div>
              {/* author data */}
              <div className="border-grayMain flex border-t-4 border-b-4 py-3 dark:border-gray-400">
                <div className="flex items-center">
                  <div className="bg-yellow-75 relative h-24 w-24 overflow-hidden rounded-full lg:h-36 lg:w-36">
                    <a
                      href="https://www.linkedin.com/in/visheshdvn"
                      target="_blank"
                    >
                      <Image
                        src={dp || getValidImageURL("/me.jpg")}
                        alt={dpalt}
                        layout="fill"
                        className="transform cursor-pointer object-cover object-center transition-all duration-1000 hover:scale-110"
                        placeholder="blur"
                        blurDataURL={dp || getValidImageURL("/me.jpg")}
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
                    <h1 className="font-raleway rounded-md text-3xl font-black leading-8 lg:text-4xl">
                      {firstname} {lastname}
                    </h1>
                    <p className="mt-3 pr-3 text-sm font-medium sm:text-base">
                      {about}
                    </p>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </section>

        {/* similar here */}
        {/* {readMore.length > 0 ? (
          <section className="mb-14 py-3">
            <div className="horizontal-spacing container mx-auto">
              <h1 className="wide-head xl:mt-18 lg:mt-18 mt-16">Read more</h1>
              <div className="flex flex-col flex-wrap sm:flex-row">
                {readMore.map((data) => (
                  <SimilarArticles key={data.slug} data={data} />
                ))}
              </div>
            </div>
          </section>
        ) : null} */}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

function SimilarArticles({ data }) {
  const { slug, banner, title, tags } = data;
  return (
    <a
      href={`/post/${slug}`}
      style={{ minWidth: "x" }}
      className="col-span-2 mb-5 h-auto w-full px-2 sm:mb-0 sm:h-auto sm:w-1/3 lg:col-auto"
    >
      <div className="scale-parent relative h-44 w-full overflow-hidden rounded-md sm:h-64 md:h-72">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 98%)",
          }}
          className="gradient-div absolute top-0 right-0 left-0 bottom-0 z-10"
        />

        <Image
          className="object-cover object-center transition-all duration-1000"
          src={getValidImageURL(banner.url)}
          alt={banner.alternativeText}
          layout="fill"
          placeholder="blur"
          blurDataURL={getValidImageURL(banner.url)}
        />

        <h3 className="font-raleway pointer-events-none absolute bottom-2 right-2 left-2 z-20 text-2xl font-black leading-7 text-white sm:text-2xl lg:text-3xl">
          {title}
        </h3>
      </div>
    </a>
  );
}

export async function getStaticProps(context) {
  console.log("Re-Generating...");
  const { blogposts } = prisma;
  const { params } = context;
  const { slug } = params;

  let blogpost = await blogposts.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      metaDescription: true,
      minuteRead: true,
      published_at: true,
      author: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
          username: true,
          about: true,
          dp: true,
          dpalt: true,
        },
      },
      tags: {
        select: {
          tagname: true,
          color: true,
        },
      },
      title: true,
      banner: true,
      banneralt: true,
      content: true,
      published_at: true,
      created_at: true,
    },
  });

  blogpost = JSON.parse(JSON.stringify(blogpost));

  if (!blogpost) {
    return {
      notFound: true,
    };
  }

  const {
    id,
    minuteRead,
    published_at,
    tags,
    title,
    metaDescription,
    author,
    banner,
    banneralt,
    content,
    created_at,
  } = blogpost;

  // let readMore;
  // if (tags.length > 1) {
  //   const {
  //     data: { similar },
  //   } = await getSimilarPosts(slug, tags[0].tagname, tags[1].tagname);
  //   readMore = similar;
  // } else {
  //   const {
  //     data: { similar },
  //   } = await getSimilarPosts(slug, tags[0].tagname, undefined);
  //   readMore = similar;
  // }

  return {
    props: {
      postData: {
        id,
        slug,
        title,
        author,
        banner,
        banneralt,
        tags,
        published_at,
        created_at,
        metaDescription,
        minuteRead,
        content,
      },
      // readMore,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const { blogposts } = prisma;

  const slugs = await blogposts.findMany({
    select: {
      slug: true,
    },
    where: {
      published: true,
      blocked: false,
    },
  });

  return {
    paths: slugs.map((s) => ({
      params: {
        slug: s.slug,
      },
    })),
    fallback: true,
  };
}

export default Post;
