import Head from "next/head";
import { PrismaClient } from "@prisma/client";
// components
import BroadPeek from "../components/PostPeek/broad";
import Latest from "../components/PostPeek/latest";
import Navbar from "../components/elements/navbar/Navbar-client";
// utilities
import axios from "../utils/axios";
const MAX_RESPONSE = 20;

export default function Home({ latest, latestSide, readMore }) {
  return (
    <>
      <Head>
        <title>Lumbytes | Home</title>
        <meta
          name="description"
          content="Lumbytes is a technology and programming website. We publish content related to latest happenings in tech industry."
        />
        {/* opengraph */}
        <meta
          property="og:title"
          content="Lumbytes - Luminous bytes for luminous minds."
          key="ogtitle"
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={`https://lumbytes.com`} />
        <meta
          property="og:description"
          content="Lumbytes is a technology and programming website. We publish content related to latest happenings in tech industry."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://lumbytes.com/logo/ogImage.png"
          key="ogimage"
        />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lumbytes" />
        <meta
          name="twitter:title"
          content="Lumbytes - Luminous bytes for luminous minds."
        />
        <meta
          name="twitter:description"
          content="Lumbytes is a technology and programming website. We publish content related to latest happenings in tech industry."
        />
        <meta name="twitter:creator" content="@visheshdvn" />
        <meta
          name="twitter:image:src"
          content="https://lumbytes.com/logo/ogImage.png"
        />
      </Head>

      <Navbar />

      <Latest big={latest} side={latestSide} />

      <section className="body-font">
        <div className="horizontal-spacing container mx-auto">
          <h1 className="wide-head">Read more</h1>
          {readMore.map((item) => {
            return <BroadPeek data={item} key={item.slug} />;
          })}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const { blogposts } = prisma;
  console.log("Re-Generating...");

  let data = await blogposts.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      banner: true,
      banneralt: true,
      metaDescription: true,
      content: true,
      minuteRead: true,
      featured: true,
      topPick: true,
      published_at: true,
      updated_at: true,
      author: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
          username: true,
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
    },
    skip: 0,
    take: MAX_RESPONSE,
    orderBy: {
      n: "desc",
    },
    where: {
      published: true,
    },
  });

  data = JSON.parse(JSON.stringify(data));
  const latest = data.slice(0, 1);
  const latestSide = data.slice(1, 4);
  const readMore = data.slice(4, 20);

  return {
    props: {
      latest: latest[0],
      latestSide,
      readMore,
    },
    revalidate: 14400,
  };
}
