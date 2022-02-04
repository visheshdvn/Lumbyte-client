import React from "react";
import Head from "next/head";

// custom components
import Sidebar from "../../components/adminPanel/leftSideBar";
import FormattedDate from "../../components/micro/formattedDate";
import UppyMedia from "../../components/uploaders/uppyMedia";

const media = () => {
  return (
    <>
      <Head>
        <link
          href="https://releases.transloadit.com/uppy/v2.4.1/uppy.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-12 px-5 pl-96">
          <h1 className="text-2.75xl font-adminPrimary font-bold">Media</h1>

          <div className="flex justify-center">
            <div className="w-[550px] border-red-900">
              <UppyMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

media.auth = {
  roles: ["SUPERUSER"],
};

export default media;