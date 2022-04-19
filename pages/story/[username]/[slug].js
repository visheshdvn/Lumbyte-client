import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";

// custom components
import FormattedDate from "../../../components/micro/formattedDate";
import ShowTags from "../../../components/micro/showTags";
import { getValidImageURL } from "../../../utils/checkValidURL";
import ReadOnlyEditor from "../../../components/elements/editor/readOnlyEditor";
import Navbar from "../../../components/elements/navbar/Navbar-client";
import Footer from "../../../components/elements/footer/Footer";
import HeadBlogpost from "../../../utils/headTags/public/headBlogpost";
import {
  facebook as fbSVG,
  twitter as twSVG,
  linkedIn as linkedInSVG,
} from "../../../components/icons/social/contentPage";

// prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Post = ({ postData, similar }) => {
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
    excerpt,
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
        <header className="mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-11 xl:col-span-9">
            <div className="mb-5 flex items-center">
              {tags.map((tag) => (
                <ShowTags
                  tagname={tag.tagname}
                  color={tag.color}
                  key={tag.tagname}
                />
              ))}
            </div>

            <h1 className="font-primary mb-2 text-4xl font-bold leading-tight">
              {title}
            </h1>
            <p className="font-primary mt-3 text-base font-medium text-neutral-600 dark:text-zinc-300 md:mt-0 md:text-lg">
              {excerpt}
            </p>

            <div className="mt-7 mb-8 flex items-center">
              <a href={`/${username}`} rel="noreferrer">
                <div className="aspect-1 overflow-hidden rounded-full">
                  <Image
                    src={dp || getValidImageURL("/me.jpg")}
                    alt={dpalt}
                    width={24}
                    height={24}
                  />
                </div>
              </a>
              <div className="font-primary ml-2 flex items-center text-xs">
                <a
                  href={`/${username}`}
                  rel="noreferrer"
                  className="font-semibold underline"
                >
                  {firstname} {lastname || ""}
                </a>
                <div className="ml-4 flex h-3 items-center font-medium text-neutral-600 dark:text-zinc-100">
                  <span className="">
                    <FormattedDate date={published_at || created_at} />
                  </span>
                  <span className="mx-2">•</span>
                  <span className="">{minuteRead} min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* banner Image */}
        <div className="lg:h-100 relative mb-8 h-60 sm:h-80 md:h-96">
          <Image
            src={banner}
            alt={banneralt}
            layout="fill"
            className="object-cover object-center"
            priority
          />
        </div>

        <section className="mb-5 grid grid-cols-12 gap-1">
          <div className="order-2 col-span-1 flex items-center pt-2 lg:order-1 lg:flex-col lg:pt-0">
            <ul className="flex items-center justify-center pt-2 lg:sticky lg:top-36 lg:block lg:flex-col">
              <h3 className="mr-5 text-xl font-bold lg:mb-5 lg:mr-0 lg:text-lg flex font-primary">
                Share
              </h3>
              <li className="mr-3 flex items-center justify-center lg:mb-8 lg:mr-0">
                <TwitterShareButton
                  title={title}
                  url={`https://lumbytes.com/post/${slug}`}
                  className="border-none focus:outline-none"
                >
                  {twSVG}
                </TwitterShareButton>
              </li>

              <li className="mr-3 flex items-center justify-center lg:mb-8 lg:mr-0">
                <FacebookShareButton
                  style={{ color: "#3A5794" }}
                  quote={title}
                  url={`https://lumbytes.com/post/${slug}`}
                  className="border-none focus:outline-none"
                >
                  {fbSVG}
                </FacebookShareButton>
              </li>

              <li className="mr-3 flex items-center justify-center lg:mr-0">
                <LinkedinShareButton
                  style={{ color: "#0A66C2" }}
                  title={title}
                  url={`https://lumbytes.com/post/${slug}`}
                  className="border-none focus:outline-none"
                >
                  {linkedInSVG}
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
                  <div className="border-grayMain aspect-1 h-24 overflow-hidden rounded-full border-4 dark:border-gray-400 lg:h-36">
                    <a href={`/${username}`}>
                      <Image
                        src={dp || getValidImageURL("/me.jpg")}
                        alt={dpalt}
                        height={144}
                        width={144}
                        className="transform cursor-pointer transition-all duration-1000 hover:scale-105"
                        placeholder="blur"
                        blurDataURL={dp || getValidImageURL("/me.jpg")}
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-1 px-4 py-3">
                  <a href={`/${username}`} rel="noreferrer">
                    <h1 className="font-primary rounded-md text-2xl font-bold leading-8 lg:text-3xl">
                      {firstname} {lastname}
                    </h1>
                    <p className="mt-2 pr-3 text-sm font-medium sm:text-base lg:mt-3">
                      {about}
                    </p>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </section>

        {/* similar here */}
        {similar.length > 0 ? (
          <section className="mb-20 pt-3">
            <div className="horizontal-spacing container mx-auto">
              <h1 className="wide-head xl:mt-18 lg:mt-18 mt-12">Read more</h1>
              <div className="flex flex-col flex-wrap md:flex-row">
                {similar.map((data) => (
                  <SimilarArticles key={data.slug} data={data} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

function SimilarArticles({ data }) {
  const { slug, banner, title, banneralt, author, minuteRead, published_at } =
    data;
  return (
    <div className="col-span-2 mb-10 h-auto w-full px-3 sm:h-auto md:mb-0 md:w-1/3 lg:col-auto">
      <Link href={`/post/${slug}`} passHref>
        <a>
          <div className="relative h-44 w-full overflow-hidden sm:h-64 md:h-44 xl:h-60">
            <Image
              className="object-cover object-center transition-all duration-1000"
              src={banner}
              alt={banneralt}
              layout="fill"
              placeholder="blur"
              blurDataURL={banner}
            />
          </div>
        </a>
      </Link>
      {/* author */}
      <div className="my-4 flex">
        <a href={`/${author.username}`} rel="noreferrer">
          <div className="aspect-1 overflow-hidden rounded-full">
            <Image
              src={author.dp || getValidImageURL("/me.jpg")}
              alt={author.dpalt}
              width={32}
              height={32}
            />
          </div>
        </a>
        <div className="font-primary float-left flex flex-col justify-around pl-2">
          <a
            href={`/${author.username}`}
            rel="noreferrer"
            className="text-sm font-bold"
          >
            {author.firstname} {author.lastname || ""}
          </a>
          <div className="text-grayText flex h-3 items-center text-xs dark:text-gray-400">
            <span className="">
              <FormattedDate date={published_at || created_at} />
            </span>
            <span className="mx-2">•</span>
            <span className="">{minuteRead} min read</span>
          </div>
        </div>
      </div>
      <Link href={`/story/${author.username}/${slug}`} passHref>
        <a>
          <h3 className="font-primary xl:text-2.75xl font-bold hover:underline sm:text-2xl sm:leading-7 xl:leading-8">
            {title}
          </h3>
        </a>
      </Link>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const { blogposts } = prisma;
  const { params } = ctx;
  const { slug, username } = params;

  let blogpost = await blogposts.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      metaDescription: true,
      minuteRead: true,
      excerpt: true,
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
      published: true,
      published_at: true,
      created_at: true,
    },
  });

  blogpost = JSON.parse(JSON.stringify(blogpost));

  if (!blogpost || !blogpost.published) {
    return {
      notFound: true,
    };
  }

  let similar = await blogposts.findMany({
    select: {
      title: true,
      slug: true,
      banner: true,
      banneralt: true,
      author: {
        select: {
          firstname: true,
          lastname: true,
          username: true,
          dp: true,
          dpalt: true,
        },
      },
      published_at: true,
      minuteRead: true,
    },
    where: {
      published: true,
      slug: {
        not: slug,
      },
      tags: {
        some: {
          OR: blogpost.tags,
          published: true,
        },
      },
    },
    take: 3,
    orderBy: {
      n: "desc",
    },
  });

  similar = JSON.parse(JSON.stringify(similar));

  prisma.$disconnect();

  return {
    props: {
      postData: {
        id: blogpost.id,
        slug,
        title: blogpost.title,
        author: blogpost.author,
        banner: blogpost.banner,
        banneralt: blogpost.banneralt,
        tags: blogpost.tags,
        published_at: blogpost.published_at,
        created_at: blogpost.created_at,
        metaDescription: blogpost.metaDescription,
        minuteRead: blogpost.minuteRead,
        content: blogpost.content,
        excerpt: blogpost.excerpt,
      },
      similar,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const { blogposts } = prisma;

  const slugs = await blogposts.findMany({
    select: {
      slug: true,
      author: {
        select: {
          username: true,
        },
      },
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
        username: s.author.username,
      },
    })),
    fallback: true,
  };
}

export default Post;
