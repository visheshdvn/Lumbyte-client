import Head from "next/head";

import BroadPeek from "../components/PostPeek/broad";
import Latest from "../components/PostPeek/latest";

import { getIndexPageData } from "../graphql/Queries";

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

      <Latest big={latest} side={latestSide} />

      <section className="body-font">
        <div className="container mx-auto horizontal-spacing">
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
  const {
    data: { latest, latestSide, featured, readMore },
  } = await getIndexPageData(0, 10);

  return {
    props: {
      latest: latest[0],
      latestSide,
      featured,
      readMore,
    },
    revalidate: 14400,
  };
}
