import Head from "next/head";
import React from "react";

const metaDescription =
  "LumBytes is a top-notch blog to stay updated on the latest trends in blockchain and web technologies.";
const title = "LumBytes - Luminous bytes for luminous minds.";
const ogImg =
  "https://lumbytes-general.s3.eu-west-1.amazonaws.com/defaultOG-medium.png";
const ogAlt = "LumBytes logo.";

const metaIndex = () => {
  return (
    <Head>
      <title>LumBytes</title>
      <meta name="description" content={metaDescription} />
      {/* opengraph */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={`https://lumbytes.com`} />
      <meta property="og:description" content={metaDescription} key="ogdesc" />
      <meta property="og:image" content={ogImg} key="ogimage" />
      <meta property="og:image:alt" content={ogAlt} />
      <meta property="og:site_name" content="LumBytes" />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lumbytes" />
      <meta name="twitter:creator" content="@visheshdvn" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image:src" content={ogImg} />
      <meta name="twitter:image:alt" content={ogAlt || "LumBytes Default"} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  );
};

export default metaIndex;
