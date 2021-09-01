import Head from "next/head";

import WidePeek from "../components/PostPeek/wide";
import SmallPeek from "../components/PostPeek/smaller";
import Latest from "../components/PostPeek/latest";

import { getIndexPageData } from "../graphql/Queries";

export default function Home({ latest, latestSide, featured, readMore }) {
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
          <div className="grid gap-1 grid-cols-12 mt-2 border-t dark:border-gray-700 pt-5">
            <div className="md:col-span-8 col-span-12 md:order-1 order-2">
              <div className="md:border-r dark:border-gray-700">
                <h1 className="bungee-head-style">latest</h1>
                {/* <div className="pt-3">
                  {latestPosts.map((postData) => (
                    <WidePeek key={postData.slug} populateData={postData} />
                  ))}
                </div> */}
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 md:order-2 order-1">
              {/* {featuredPosts.length > 0 ? (
                <aside className="md:pl-3 pb-1">
                  <h1 className="bungee-head-style">featured</h1>
                  <div className="pt-3">
                    {featuredPosts.map((postData) => (
                      <SmallPeek key={postData.slug} populateData={postData} />
                    ))}
                  </div>
                </aside>
              ) : null} */}
            </div>
          </div>
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
