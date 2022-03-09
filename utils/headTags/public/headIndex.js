import Head from "next/head";
import React from "react";

const metaIndex = () => {
  return (
    <Head>
      <title>LumBytes</title>
      <meta
        name="description"
        content="LumBytes is a top-notch blog to stay updated on the latest trends in blockchain and web technologies."
      />
      {/* opengraph */}
      <meta
        property="og:title"
        content="LumBytes - Luminous bytes for luminous minds."
        key="ogtitle"
      />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={`https://lumbytes.com`} />
      <meta
        property="og:description"
        content="LumBytes is a top-notch blog to stay updated on the latest trends in blockchain and web technologies."
        key="ogdesc"
      />
      <meta
        property="og:image"
        content="https://lumbytes.com/logo/ogImage.png"
        key="ogimage"
      />
      <meta property="og:image:alt" content="LumBytes logo." />
      <meta property="og:site_name" content="LumBytes" />
      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lumbytes" />
      <meta
        name="twitter:title"
        content="LumBytes - Luminous bytes for luminous minds."
      />
      <meta
        name="twitter:description"
        content="LumBytes is a top-notch blog to stay updated on the latest trends in blockchain and web technologies."
      />
      <meta name="twitter:creator" content="@visheshdvn" />
      <meta
        name="twitter:image:src"
        content="https://lumbytes.com/logo/ogImage.png"
      />
    </Head>
  );
};

export default metaIndex;
