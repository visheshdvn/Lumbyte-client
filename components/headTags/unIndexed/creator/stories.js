import Head from "next/head";
import NoIndex from "../../noIndex";

const HeadStories = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        {/* opengraph */}
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content="LumBytes" />

        {/* twitter */}
        <meta
          data-rh="true"
          content="LumBytes"
          name="twitter:app:name:iphone"
        />
      </Head>
      <NoIndex />
    </>
  );
};

export default HeadStories;
