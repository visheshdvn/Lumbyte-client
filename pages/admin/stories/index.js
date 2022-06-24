import React, { useState } from "react";
import { useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
// custom components
import AdminHomeLayout from "../../../components/layouts/adminHome";
import { tick, cross } from "../../../components/icons/admin/booleans";
// utils
import { HeadBlogposts } from "../../../utils/headTags/admin/meta";
import errorHandler from "../../../utils/errorHandler";
// lib
import axios from "../../../lib/axios";
import prisma from "../../../lib/prisma";

const Blogposts = ({ blogposts }) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading</p>;
  }

  return (
    <>
      {/* head */}
      <HeadBlogposts />

      {/* body */}
      <AdminHomeLayout
        title="Blogpost"
        count={blogposts.length}
        addNewHref="/admin/stories/create"
      >
        {/* all blogpost grid */}
        <div className="mt-5">
          <div>
            {/* headings */}
            <div className="font-primary grid grid-cols-8 gap-4 pb-1 text-base font-semibold">
              <h3 className="col-span-3">Title</h3>
              <h3>Top Pick</h3>
              <h3>Featured</h3>
              <h3>Published</h3>
              <h3>Manage</h3>
            </div>

            <div className="pb-52">
              {blogposts.map((data) => (
                <Peek data={data} key={data.title} />
              ))}
            </div>
          </div>
        </div>
      </AdminHomeLayout>
    </>
  );
};

function Peek({ data }) {
  const { title, featured, topPick, published, slug } = data;
  const [topPickStatus, setTopPickStatus] = useState(topPick);
  const [featuredStatus, setFeaturedStatus] = useState(topPick);

  const topPickToggler = async () => {
    try {
      const { data } = await axios.patch(`/blogposts/set/topPick/${slug}`, {
        topPick: !topPickStatus,
      });

      setTopPickStatus(data.data.topPick);
    } catch (error) {
      console.log(error);
      errorHandler(error);
    }
  };

  const featuredToggler = async () => {
    try {
      const { data } = await axios.patch(`/blogposts/set/featured/${slug}`, {
        featured: !featuredStatus,
      });

      setFeaturedStatus(data.data.featured);
    } catch (error) {
      console.log(error);
      errorHandler(error);
    }
  };

  return (
    <article className="font-primary grid h-20 grid-cols-8 gap-4 border-t dark:border-zinc-700">
      <div className="col-span-3 flex h-full flex-col justify-center">
        <h1 className="font-primary line-clamp-2 mb-2 pr-8 text-base font-semibold leading-tight">
          {title}
        </h1>
      </div>
      <div className="col-span-1 flex items-center text-sm font-medium">
        {/* {published_at ? <FormattedDate date={published_at} /> : <p>--</p>} */}
        {topPickStatus ? (
          <TrueButton name={tick} onClickHandler={topPickToggler} />
        ) : (
          <CrossButton name={cross} onClickHandler={topPickToggler} />
        )}
      </div>
      <div className="col-span-1 flex items-center text-sm font-medium">
        {featuredStatus ? (
          <TrueButton name={tick} onClickHandler={featuredToggler} />
        ) : (
          <CrossButton name={cross} onClickHandler={featuredToggler} />
        )}
      </div>
      <div className="flex items-center">
        {published ? (
          <div className="flex">
            <div className="flex items-center">
              <span className="aspect-1 w-1 rounded-full bg-green-600"></span>
            </div>
            <span className="pl-1 text-sm font-semibold text-green-600">
              Live
            </span>
          </div>
        ) : (
          <div className="flex">
            <div className="flex items-center">
              <span className="aspect-1 w-1 rounded-full bg-red-600"></span>
            </div>
            <span className="pl-1 text-sm font-semibold text-red-600">
              Draft
            </span>
          </div>
        )}
      </div>
      <div className="col-span-1 flex items-center">--</div>
    </article>
  );
}

function TrueButton({ name, onClickHandler }) {
  return (
    <button
      className="admin-tickgreen dark:border-darkGray flex h-6 w-6 transform items-center justify-center rounded-full border border-white transition-all duration-200 hover:border-green-600 active:bg-green-600 dark:hover:border-green-600"
      onClick={onClickHandler}
    >
      <div className="stroke-green-60 m-0 h-4 w-4 p-0">{name}</div>
    </button>
  );
}

function CrossButton({ name, onClickHandler }) {
  return (
    <button
      className="admin-tickgreen dark:border-darkGray flex h-6 w-6 transform items-center justify-center rounded-full border border-white transition-all duration-200 hover:border-red-600 active:bg-red-600 dark:hover:border-red-600"
      onClick={onClickHandler}
    >
      <div className="stroke-green-60 m-0 h-4 w-4 p-0">{name}</div>
    </button>
  );
}

Blogposts.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

export default Blogposts;

export async function getServerSideProps(context) {
  const { blogposts } = prisma;

  BigInt.prototype.toJSON = function () {
    return Number(this);
  };

  const data = await blogposts.findMany({
    select: {
      title: true,
      featured: true,
      topPick: true,
      published: true,
      slug: true,
    },
    orderBy: {
      n: "desc",
    },
  });

  await prisma.$disconnect();
  let json = JSON.stringify(data);
  json = JSON.parse(json);

  return {
    props: { blogposts: json, success: 1 },
  };
}
