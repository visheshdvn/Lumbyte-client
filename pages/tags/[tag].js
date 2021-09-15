import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import WidePeek from "../../components/PostPeek/wide";
import SmallPeek from "../../components/PostPeek/smaller";
import BroadPeek from "../../components/PostPeek/broad";
import { getAllTags, getTagPageData } from "../../graphql/topicPageQueries";

import { isValidURL } from "../../utils/checkValidURL";
import { hexToRGB } from "../../utils/colorConversions";

const Topic = ({ posts, theme, metaDescription, ogImg }) => {
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

      <header className="flex items-center justify-center horizontal-spacing xl:pt-10 lg:pt-3 md:pt-1 pt-4 xl:mb-16 lg:mb-14 md:mb-12 mb-10">
        <div className="container horizontal-spacing mx-auto my-auto relative lg:h-48 md:h-40 sm:h-32 h-28 bg-grayMain dark:bg-gray-800 overflow-hidden">
          <h1
            style={{ color: `${theme}` }}
            className="font-raleway-dot select-none between-rel-parent uppercase tracking-widest opacity-20 lg:text-10xl md:text-9xl sm:text-8xl text-8xl"
          >
            {tag}
          </h1>
          <h1
            style={{ color: `${theme}` }}
            className="between-rel-parent select-none font-mono lowercase font-bold tracking-custom xl:text-6xl md:text-5xl sm:text-4.5xl text-3xl text-center"
          >
            {"#" + tag}
          </h1>
        </div>
      </header>
      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
          {posts.map((post) => (
            <BroadPeek data={post} key={post.slug} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Topic;

export async function getStaticProps(context) {
  console.log("Re-Generating...");
  const {
    params: { tag },
  } = context;

  const {
    data: { buildData, posts },
  } = await getTagPageData(tag, 0, 10);

  if (posts.length === 0 && buildData.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      theme: buildData[0].color,
      metaDescription: buildData[0].metaDescription,
      ogImg: buildData[0].ogImg,
      posts,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const { data } = await getAllTags();

  return {
    paths: data.tags.map((item) => ({ params: { tag: item.tagname } })),
    fallback: true,
  };
}
