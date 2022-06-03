import React from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
// components
import AdminHomeLayout from "../../../components/layouts/adminHome";
// utils
import { HeadTags } from "../../../utils/headTags/admin/meta";
import prisma from "../../../lib/prisma";

const Tags = ({ tags }) => {
  return (
    <>
      {/* head */}
      <HeadTags />

      {/* body */}
      <AdminHomeLayout
        title="Tag"
        count={tags.length}
        addNewHref="/admin/tags/create"
      >
        {/* all tags grid */}
        <div className="mt-5">
          <table className="w-full table-auto border">
            <thead>
              <tr className="font-primary bg-gray-100 text-left text-sm font-bold text-gray-800">
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
      </AdminHomeLayout>
    </>
  );
};

function TableContents({ tag }) {
  const { id, tagname, color, published } = tag;
  return (
    <Link passHref href={`/admin/tags/${id}`}>
      <tr
        className="font-primary cursor-pointer border-b bg-white text-xs font-medium text-gray-800"
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
  const { tags } = prisma;
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
