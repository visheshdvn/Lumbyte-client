import React from "react";
import axios from "axios";
import Sidebar from "../../../components/adminPanel/leftSideBar";
import Link from "next/link";

const create = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pt-12 px-5">
        <div className="flow-root">
          <h1 className="text-2xl font-adminPrimary font-bold">
            Create new blogpost
          </h1>
          <div className="float-right mb-3">
            <button
              type="button"
              className="bg-[#1da1f2] border w-28 py-1 font-raleway font-semibold text-base text-white rounded"
            >
              Publish
            </button>
            <button
              type="button"
              className="bg-[#16A34A] border w-28 py-1 ml-4 font-raleway font-semibold text-base text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
        {/* body */}
        <div className="border">
            aebfib
        </div>
      </div>
    </div>
  );
};

export default create;
