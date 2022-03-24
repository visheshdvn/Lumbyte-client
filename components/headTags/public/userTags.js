import React from "react";
import Head from "next/head";

const metaDescription = "Read the latest articles from";

const HeadTags = ({ ogImg, ogAlt, username, firstname, lastname, about }) => {
  return (
    <Head>
      <title>
        {firstname} {lastname || ""} - LumBytes
      </title>
      <meta
        name="description"
        content={`${metaDescription} ${firstname} ${lastname || ""}. ${
          "\n" + about
        }`}
      />

      {/* opengraph */}
      <meta
        property="og:title"
        content={`${firstname} ${lastname || ""} - LumBytes`}
        key="ogtitle"
      />
      <meta property="og:type" content="blog" />
      <meta
        property="og:description"
        content={`${metaDescription} ${firstname} ${lastname || ""}. ${
          "\n" + about
        }`}
        key="ogdesc"
      />
      <meta property="og:image" content={ogImg} key="ogimage" />
      <meta
        property="og:image:alt"
        content={ogAlt || `${firstname} ${lastname || ""}`}
      />
      <meta property="og:site_name" content="LumBytes" />
      <meta
        property="og:url"
        content={`https://lumbytes.com/${encodeURIComponent(username)}`}
      />

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@lumbytes" />
      <meta
        name="twitter:title"
        content={`${firstname} ${lastname || ""} - LumBytes`}
      />
      <meta name="twitter:image:src" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content={ogAlt || `${firstname} ${lastname || ""}`}
      />
      <meta
        name="twitter:description"
        content={`${metaDescription} ${firstname} ${lastname || ""}. ${
          "\n" + about
        }`}
      />
    </Head>
  );
};

export default HeadTags;
