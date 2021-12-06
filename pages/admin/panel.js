import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";
const { blogposts } = new PrismaClient();

const Panel = ({ countBlogposts }) => {
  console.log(countBlogposts);
  const [skipTake, setSkipTake] = useState({
    skip: 0,
    take: 5,
  });
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      `/api/blogposts?skip=${skipTake.skip}&take=${skipTake.take}`
    );
    const bposts = await res.json();
    setArticles([...bposts]);
    setSkipTake({
      ...skipTake,
      skip: skipTake.skip++,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div>
        <div className="grid gap-4 grid-cols-6">
          <aside className="col-span-1">Lumbytes CMS</aside>
          <div className="col-span-5">
            {articles.map((blog) => (
              <BlogpostPeek title={blog.title} key={blog.id} id={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

function BlogpostPeek({ id, title }) {
  return (
    <Link href={`/admin/blogposts/${id}`}>
      <div className="border rounded p-3 mb-3 cursor-pointer">
        <h1>{title}</h1>
      </div>
    </Link>
  );
}

export async function getServerSideProps(context) {
  // const { req } = context;
  // const session = await getSession({ req });

  // if (session) {
  //   return {
  //     redirect: { destination: "/" },
  //   };
  // }

  return {
    props: {
      countBlogposts: await blogposts.count(),
    },
  };
}

export default Panel;
