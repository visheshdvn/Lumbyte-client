import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/adminPanel/leftSideBar";
import Link from "next/link";

const Tags = ({ tags }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-12 px-5 pl-80">
          <div className="text-gray-800">
            <h1 className="text-2.75xl font-adminPrimary font-bold">
              Tags
            </h1>
            <h2 className="font-adminPrimary text-base font-semibold">
              {tags.length} tags found.
            </h2>
          </div>
          {/* add new button */}
          <div className="flex justify-end mt-24">
            <Link passHref href="/admin/tags/create">
              <a className="bg-green-600 px-3 py-1 rounded text-white font-adminPrimary font-semibold text-base hover:ring-2 focus:ring-2 ring-green-600 ring-opacity-50">
                + Create new tag
              </a>
            </Link>
          </div>
          {/* all tags grid */}
          <div className="mt-5">
            <table className="table-auto border w-full">
              <thead>
                <tr className="bg-gray-100 font-adminPrimary text-sm font-semibold text-left text-gray-800">
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
  console.log(tag)
  const { id, tagname, color, published } =
    tag;
  return (
    <Link passHref href={`/admin/tags/${id}`}>
      {/* <a> */}
      <tr
        className="border-b font-raleway font-medium text-xs bg-white cursor-pointer text-gray-800"
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
      {/* </a> */}
    </Link>
  );
}

export default Tags;

export async function getServerSideProps(context) {
  const {data} = await axios.get("/tags?_select=published");
  // console.log(data);

  return {
    props: { tags: data },
  };
}
