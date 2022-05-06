import React from "react";
import Head from "next/head";

const HeadBlogpost = ({
  title,
  metaDescription,
  banner,
  banneralt,
  slug,
  author,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link
        rel="canonical"
        href={`https://lumbytes.com/story/${author}/${slug}`}
      />

      {/* opengraph */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:type" content="blog" />
      <meta
        property="og:url"
        content={`https://lumbytes.com/story/${author}/${slug}`}
      />
      <meta property="og:description" content={metaDescription} key="ogdesc" />
      <meta property="og:image" content={banner} key="ogimage" />
      <meta property="og:image:alt" content={banneralt} />
      <meta property="og:site_name" content="Lumbytes" />

      {/* twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lumbytes" />
      <meta name="twitter:creator" content="@visheshdvn" />
      <meta name="twitter:image:src" content={banner} />
      <meta name="twitter:image:alt" content={banneralt} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  );
};

export default HeadBlogpost;
