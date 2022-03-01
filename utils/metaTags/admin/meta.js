import Head from "next/head";

import React from "react";
import NoIndex from "./noIndex";

export const MetaBlogposts = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title && `Admin | ${title}` || "Admin | Blogposts"}</title>
      </Head>
      <NoIndex />
    </>
  );
};

export const MetaTags = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title && `Admin | ${title}` || "Admin | Tags"}</title>
      </Head>
      <NoIndex />
    </>
  );
};
