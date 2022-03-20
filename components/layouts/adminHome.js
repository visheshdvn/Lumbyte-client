import React from "react";
import Link from "next/link";
import SideBar from "../elements/sideBar/leftSideBar";

const AdminHome = ({ children, title, count, addNewHref }) => {
  return (
    <div className="flex min-h-screen dark:bg-white">
      <SideBar />
      <div className="flex-1 px-5 pt-12">
        {/* heading */}
        <div className="font-primary text-gray-800">
          <h1 className="text-2.75xl  font-bold">{title + "s"}</h1>
          <h2 className="text-base font-normal">{count} items found.</h2>
        </div>

        {/* add new button */}
        <div className="mt-20 flex justify-end">
          <Link passHref href={addNewHref}>
            <a className="font-adminPrimary rounded bg-green-600 px-3 py-1 text-base font-semibold text-white ring-green-600 ring-opacity-50 hover:ring-2 focus:ring-2">
              + Add new {title.toLowerCase()}
            </a>
          </Link>
        </div>

        <>{children}</>
      </div>
    </div>
  );
};

export default AdminHome;
