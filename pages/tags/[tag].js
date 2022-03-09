import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";

// components
import BroadPeek from "../../components/PostPeek/broad";
import Navbar from "../../components/elements/navbar/Navbar-client";
import Footer from "../../components/elements/footer/Footer";

// utility functions
import { isValidURL } from "../../utils/checkValidURL";

const { tags, blogposts } = new PrismaClient();

const Topic = ({ posts, theme, metaDescription, ogImg, ogAlt }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!posts || !theme) {
    return <div>Loading</div>;
  }

  const { tag } = router.query;

  if (!metaDescription) {
    metaDescription = `Posts tagged ${tag}.`;
  }

  let headImg;
  if (ogImg !== null) {
    headImg = isValidURL(ogImg.url)
      ? ogImg.url
      : `${process.env.PROTOCOL}://${process.env.HOSTNAME}${ogImg.url}`;
  } else {
    headImg = "https://lumbytes.com/topicbg/bg.jpg";
  }

  return (
    <>
      <Head>
        <title>Lumbytes | {tag.toUpperCase()}</title>
        <meta name="description" content={metaDescription} />
        {/* opengraph */}
        <meta property="og:type" content="blog" />
        <meta property="og:image" content={headImg} key="ogimage" />
        <meta
          property="og:title"
          content={`Lumbytes | ${tag.toUpperCase()}`}
          key="ogtitle"
        />
        <meta
          property="og:url"
          content={`https://lumbytes.com/tag/${encodeURI(tag)}`}
        />
        <meta
          property="og:description"
          content={metaDescription}
          key="ogdesc"
        />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lumbytes" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content="@lumbytes" />
        <meta name="twitter:image:src" content={headImg} />
        <meta
          name="twitter:title"
          content={`Lumbytes | ${tag.toUpperCase()}`}
        />
      </Head>

      {/* <div className="body-top-spacing"> */}
      <Navbar />
      {/* </div> */}

      <header className="horizontal-spacing mb-10 flex items-center justify-center pt-4 md:mb-12 md:pt-1 lg:mb-14 lg:pt-3 xl:mb-16 xl:pt-10">
        <div className="horizontal-spacing bg-grayMain container relative mx-auto my-auto h-28 overflow-hidden dark:bg-gray-800 sm:h-32 md:h-40 lg:h-48">
          <h1
            style={{ color: `${theme}` }}
            className="font-raleway-dot lg:text-10xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform select-none text-8xl uppercase tracking-widest opacity-20 sm:text-8xl md:text-9xl"
          >
            {tag}
          </h1>
          <h1
            style={{ color: `${theme}` }}
            className="tracking-custom sm:text-4.5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform select-none text-center font-mono text-3xl font-bold lowercase md:text-5xl xl:text-6xl"
          >
            {"#" + tag}
          </h1>
        </div>
      </header>
      <section className="body-font">
        <div className="horizontal-spacing container mx-auto">
          {posts.map((post) => {
            return <BroadPeek data={post} key={post.slug} />;
          })}
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Topic;

export async function getStaticProps(context) {
  console.log("Re-Generating...");
  const {
    params: { tag },
  } = context;

  const pageBuildData = await tags.findUnique({
    select: {
      color: true,
      ogimg: true,
      ogAlt: true,
      metaDescription: true,
    },
    where: {
      tagname: tag,
    },
  });

  let posts = await blogposts.findMany({
    where: {
      tags: {
        some: {
          tagname: tag,
        },
      },
    },
    select: {
      title: true,
      excerpt: true,
      slug: true,
      published_at: true,
      banner: true,
      banneralt: true,
      tags: {
        select: {
          tagname: true,
          color: true,
        },
      },
      author: {
        select: {
          firstname: true,
          lastname: true,
          dp: true,
          dpalt: true,
          username: true,
        },
      },
      created_at: true,
      published_at: true,
    },
  });

  posts = JSON.parse(JSON.stringify(posts));

  if (posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      theme: pageBuildData.color,
      ogImg: pageBuildData.ogimg,
      ogAlt: pageBuildData.ogAlt,
      metaDescription: pageBuildData.metaDescription,
      posts,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const data = await tags.findMany({
    select: {
      tagname: true,
    },
  });

  return {
    paths: data.map((item) => ({ params: { tag: item.tagname } })),
    fallback: true,
  };
}
