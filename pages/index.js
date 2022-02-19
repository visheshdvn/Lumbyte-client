import Head from "next/head";

import BroadPeek from "../components/PostPeek/broad";
import Latest from "../components/PostPeek/latest";
import axios from "../utils/axios";
import { getIndexPageData } from "../graphql/Queries";

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
      <div className="body-top-spacing">
        <Latest big={latest} side={latestSide} />
      </div>

      <section className="body-font">
        <div className="horizontal-spacing container mx-auto">
          <h1 className="wide-head">Read more</h1>
          {readMore.map((item) => (
            <BroadPeek data={item} key={item.slug} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  console.log("Re-Generating...");

  // const {
  //   data: { latest, latestSide, featured, readMore },
  // } = await getIndexPageData(0, 10);

  const {
    data: { data },
    status,
  } = await axios.get(`/blogposts?take=${MAX_RESPONSE}`);

  const latest = data.slice(0, 1);
  const latestSide = data.slice(1, 4);
  // const featured = data.slice(4, 6);
  const readMore = data.slice(4, 20);

  return {
    props: {
      latest: latest[0],
      latestSide,
      // featured,
      readMore,
    },
    revalidate: 14400,
  };
}
