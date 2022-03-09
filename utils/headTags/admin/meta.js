import Head from "next/head";

import React from "react";
import NoIndex from "./noIndex";

export const HeadBlogposts = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title && `Admin | ${title}` || "Admin | Blogposts"}</title>
      </Head>
      <NoIndex />
    </>
  );
};

export const HeadTags = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title && `Admin | ${title}` || "Admin | Tags"}</title>
      </Head>
      <NoIndex />
    </>
  );
};
