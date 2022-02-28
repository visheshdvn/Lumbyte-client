import React from "react";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Head from "next/head";
// custom components
import Sidebar from "../../../components/adminPanel/leftSideBar";
import FormattedDate from "../../../components/micro/formattedDate";

const { blogposts } = new PrismaClient();

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Blogposts = ({ blogposts }) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading</p>;
  }

  return (
    <>
      <Head>
        <title>Admin | Blogposts</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 px-5 pt-12 pl-80">
          <div className="text-gray-800">
            <h1 className="text-2.75xl font-adminPrimary font-bold">
              Blogposts
            </h1>
            <h2 className="font-adminPrimary text-base font-semibold">
              {blogposts.length} stories found.
            </h2>
          </div>
          {/* add new button */}
          <div className="mt-24 flex justify-end">
            <Link passHref href="/admin/blogposts/create">
              <a className="font-adminPrimary rounded bg-green-600 px-3 py-1 text-base font-semibold text-white ring-green-600 ring-opacity-50 hover:ring-2 focus:ring-2">
                + Add new blogpost
              </a>
            </Link>
          </div>
          {/* alll blogpost grid */}
          <div className="mt-5">
            <table className="w-full table-auto border">
              <thead>
                <tr className="font-adminPrimary bg-gray-100 text-left text-sm font-semibold text-gray-800">
                  <td className="opacity-0">S</td>
                  {/* <th className="py-4">Id</th> */}
                  <th>Slug</th>
                  <th rowSpan={2}>Title</th>
                  <th>Featured</th>
                  <th>Top Pick</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Controls</th>
                  <th className="opacity-0">controls</th>
                </tr>
              </thead>
              <tbody>
                {blogposts.map((data) => (
                  <TableContents data={data} key={data.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

function TableContents({ data }) {
  const { id, slug, title, featured, topPick, date, published, created_at } =
    data;

  return (
    <Link passHref href={`/admin/blogposts/${id}`}>
      {/* <a> */}
      <tr
        className="font-raleway cursor-pointer border-b bg-white text-xs font-medium text-gray-800"
        key={data.id}
      >
        <td className="opacity-0">S</td>
        {/* <td className="py-4">{id}</td> */}
        <td className="py-4">{decodeURIComponent(slug)}</td>
        <td rowSpan={2}>{title}</td>
        <td className={data.featured ? "text-green-600" : "text-red-600"}>
          {capitalize(featured.toString())}
        </td>
        <td className={topPick ? "text-green-600" : "text-red-600"}>
          {capitalize(topPick.toString())}
        </td>
        <td>
          <FormattedDate date={created_at} />
        </td>
        <td className={published ? "text-green-600" : "text-red-600"}>
          <div className="flex">
            <h5
              className={`border px-2 py-1 ${
                published
                  ? "border-green-600 bg-green-600 bg-opacity-5"
                  : "border-red-600 bg-red-600 bg-opacity-5"
              }`}
            >
              {published ? "Published" : "UnPublished"}
            </h5>
          </div>
        </td>
        <td className="opacity-0">controls</td>
      </tr>
      {/* </a> */}
    </Link>
  );
}

Blogposts.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

export default Blogposts;

export async function getServerSideProps(context) {
  const data = await blogposts.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      featured: true,
      topPick: true,
      date: true,
      published: true,
      author: true,
      updated_at: true,
      created_at: true,
    },
    orderBy: {
      n: "desc",
    },
  });
  let json = JSON.stringify(data);
  json = JSON.parse(json);

  return {
    props: { blogposts: json },
  };
}
