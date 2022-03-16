import React from "react";
import Head from "next/head";

const HeadTags = ({ ogImg, ogAlt, tagname, metaDescription, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />

      {/* opengraph */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:type" content="blog" />
      <meta property="og:description" content={metaDescription} key="ogdesc" />
      <meta property="og:image" content={ogImg} key="ogimage" />
      <meta property="og:image:alt" content={ogAlt || "LumBytes Default"} />
      <meta property="og:site_name" content="Lumbytes" />
      <meta
        property="og:url"
        content={`https://lumbytes.com/tags/${encodeURIComponent(tagname)}`}
      />

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

export default HeadTags;
