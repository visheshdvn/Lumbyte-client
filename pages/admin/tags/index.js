import React from "react";
import Sidebar from "../../../components/adminPanel/leftSideBar";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
// utilities
import NoIndex from "../../../utils/noIndex";

const { tags } = new PrismaClient();

const Tags = ({ tags }) => {
  return (
    <>
      <NoIndex />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 px-5 pt-12 pl-80">
          <div className="text-gray-800">
            <h1 className="text-2.75xl font-adminPrimary font-bold">Tags</h1>
            <h2 className="font-adminPrimary text-base font-semibold">
              {tags.length} tags found.
            </h2>
          </div>
          {/* add new button */}
          <div className="mt-24 flex justify-end">
            <Link passHref href="/admin/tags/create">
              <a className="font-adminPrimary rounded bg-green-600 px-3 py-1 text-base font-semibold text-white ring-green-600 ring-opacity-50 hover:ring-2 focus:ring-2">
                + Create new tag
              </a>
            </Link>
          </div>
          {/* all tags grid */}
          <div className="mt-5">
            <table className="w-full table-auto border">
              <thead>
                <tr className="font-adminPrimary bg-gray-100 text-left text-sm font-semibold text-gray-800">
                  <td className="opacity-0">S</td>
                  <th className="py-4">Id</th>
                  <th>Tagname</th>
                  <th>Color</th>
                  <th>Status</th>
                  <th className="opacity-0">controls</th>
                </tr>
              </thead>
              <tbody>
                {tags.map((tag) => (
                  <TableContents tag={tag} key={tag.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

function TableContents({ tag }) {
  const { id, tagname, color, published } = tag;
  return (
    <Link passHref href={`/admin/tags/${id}`}>
      <tr
        className="font-raleway cursor-pointer border-b bg-white text-xs font-medium text-gray-800"
        key={tag.id}
      >
        <td className="opacity-0">S</td>
        <td className="py-4">{id}</td>
        <td>{tagname}</td>
        <td>{color}</td>
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
    </Link>
  );
}

Tags.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

export default Tags;

export async function getServerSideProps(context) {
  const data = await tags.findMany({
    select: {
      id: true,
      tagname: true,
      color: true,
      published: true,
    },
    orderBy: {
      tagname: "asc",
    },
  });

  return {
    props: { tags: data },
  };
}
