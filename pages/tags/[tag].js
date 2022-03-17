import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";

// components
import BroadPeek from "../../components/PostPeek/broad";
import Navbar from "../../components/elements/navbar/Navbar-client";
import Footer from "../../components/elements/footer/Footer";
import HeadTags from "../../components/headTags/public/headTags";

const { tags, blogposts } = new PrismaClient();

const Tag = ({ posts, theme, metaDescription, ogImg, ogAlt, ogTitle }) => {
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

  return (
    <>
      <HeadTags
        ogImg={ogImg}
        ogAlt={ogAlt}
        metaDescription={metaDescription}
        tagname={tag}
        title={ogTitle}
      />

      {/* <div className="body-top-spacing"> */}
      <Navbar />
      {/* </div> */}

      <header className="horizontal-spacing mb-10 flex items-center justify-center pt-4 md:mb-12 md:pt-1 lg:mb-14 lg:pt-3 xl:mb-16 xl:pt-10">
        <div className="horizontal-spacing bg-grayMain dark:bg-darkGray container relative mx-auto my-auto h-28 overflow-hidden sm:h-32 md:h-40 lg:h-48">
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

export default Tag;

export async function getStaticProps(context) {
  console.log("Re-Generating...");
  const {
    params: { tag },
  } = context;

  const pageBuildData = await tags.findUnique({
    select: {
      color: true,
      ogImg: true,
      ogAlt: true,
      ogTitle: true,
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
      published: true,
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
    orderBy: {
      n: "desc",
    }
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
      ogImg: pageBuildData.ogImg,
      ogAlt: pageBuildData.ogAlt,
      metaDescription: pageBuildData.metaDescription,
      ogTitle: pageBuildData.ogTitle,
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
