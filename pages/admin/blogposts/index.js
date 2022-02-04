import React from "react";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
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
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-12 px-5 pl-80">
          <div className="text-gray-800">
            <h1 className="text-2.75xl font-adminPrimary font-bold">
              Blogposts
            </h1>
            <h2 className="font-adminPrimary text-base font-semibold">
              {blogposts.length} stories found.
            </h2>
          </div>
          {/* add new button */}
          <div className="flex justify-end mt-24">
            <Link passHref href="/admin/blogposts/create">
              <a className="bg-green-600 px-3 py-1 rounded text-white font-adminPrimary font-semibold text-base hover:ring-2 focus:ring-2 ring-green-600 ring-opacity-50">
                + Add new blogpost
              </a>
            </Link>
          </div>
          {/* alll blogpost grid */}
          <div className="mt-5">
            <table className="table-auto border w-full">
              <thead>
                <tr className="bg-gray-100 font-adminPrimary text-sm font-semibold text-left text-gray-800">
                  <td className="opacity-0">S</td>
                  <th className="py-4">Id</th>
                  <th>Slug</th>
                  <th>Title</th>
                  <th>Featured</th>
                  <th>Top Pick</th>
                  <th>Date</th>
                  <th>Status</th>
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
        className="border-b font-raleway font-medium text-xs bg-white cursor-pointer text-gray-800"
        key={data.id}
      >
        <td className="opacity-0">S</td>
        <td className="py-4">{id}</td>
        <td>{decodeURIComponent(slug)}</td>
        <td>{title}</td>
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
  roles: ["SUPERUSER"],
};

export default Blogposts;

export async function getServerSideProps(context) {
  // const { data } = await axios.get(
  //   "/blogposts?_select=featured&_select=published&_select=date&_select=topPick"
  // );

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
      id: "desc",
    },
  });
  let json = JSON.stringify(data);
  json = JSON.parse(json);

  return {
    props: { blogposts: json },
  };
}
