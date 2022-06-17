import React from "react";
import Link from "next/link";
import SideBar from "../elements/sideBar/adminSidebar";

const AdminHome = ({ children, title, count, addNewHref }) => {
  return (
    <div className="font-primary dark:bg-darkGray flex min-h-screen">
      <SideBar />
      <div className="flex-1 px-5 pt-12">
        {/* heading */}
        <div className="text-gray-800 dark:text-white">
          <h1 className="text-2.75xl  font-bold">{title + "s"}</h1>
          <h2 className="text-base font-normal">{count} items found.</h2>
        </div>

        <>{children}</>
      </div>
    </div>
  );
};

export default AdminHome;
