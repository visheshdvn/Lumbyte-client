import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Sidebar from "../../../components/adminPanel/leftSideBar";
// elements
import {
  PublishButton,
  SaveButton,
} from "../../../components/elements/buttons/buttons";
// utilities
import NoIndex from "../../../utils/noIndex";

const createTag = ({}) => {
  const [tagData, settagData] = useState({
    tagname: "",
    color: "",
    metaDescription: "",
  });

  function updateblogdata(e) {
    settagData({
      ...tagData,
      [e.target.name]: e.target.value,
    });
  }

  const updateTagData = async () => {
    // TODO - validate client side data

    if (!tagData.tagname || !tagData.metaDescription) {
      toast.info("tagname or meta description invalid");
      return;
    }

    let reqObj = { ...tagData };

    if (!tagData.color) {
      reqObj.color = "#000000";
      settagData({ ...tagData, color: "#000000" });
    }

    try {
      const { data } = await axios.post("/tags/create", reqObj);
      settagData({ ...tagData, ...data.data });
      toast.success("Created successfully.");
    } catch (err) {
      console.log(err.toJSON());
      toast.error("some error.");
    }
  };

  return (
    <>
      <NoIndex />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
      <div className="flex bg-offWhite h-screen">
        <Sidebar />
        <div className="admin-primary-layout">
          <div className="flow-root mb-10">
            <h1 className="text-2xl font-adminPrimary font-bold mb-1">
              Create a new tag
            </h1>
            <div className="float-left font-adminPrimary text-sm font-semibold">
              {/* Last edited: <FormattedDate date={updatedContent.updated_at} /> */}
            </div>
            <div className="float-right">
              <PublishButton
                text="Publish"
                onClickHandler={() => toast.info("No action assigned.")}
              />
              <SaveButton text="Save" onClickHandler={updateTagData} />
            </div>
          </div>
          <div
            style={{ maxWidth: "1044px" }}
            className="bg-white border border-black-10 p-8"
          >
            <div className="flex">
              <div className="mb-8 flex-1 pr-8">
                <label className="font-adminPrimary text-base font-semibold required-field">
                  Tag Name
                </label>
                <input
                  type="text"
                  placeholder="enter tag name"
                  className="bg-white w-full h-10 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-medium text-sm"
                  name="tagname"
                  value={tagData.tagname}
                  onChange={(e) => updateblogdata(e)}
                />
              </div>
              <div className="mb-8 flex-1 pr-8">
                <label className="font-adminPrimary text-base font-semibold">
                  Color
                </label>
                <input
                  type="text"
                  placeholder="default: #000000"
                  className="bg-white w-full h-10 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-medium text-sm"
                  name="color"
                  value={tagData.color}
                  onChange={(e) => updateblogdata(e)}
                  maxLength={7}
                />
              </div>
            </div>
            <div className="">
              <div style={{ maxWidth: "450px" }} className="mb-8 pr-8">
                <label className="font-adminPrimary text-base font-semibold required-field">
                  Meta Description
                </label>
                <textarea
                  type="text"
                  placeholder="write under 150 characters..."
                  className="bg-white w-full h-28 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-normal text-sm"
                  name="metaDescription"
                  value={tagData.metaDescription}
                  onChange={(e) => updateblogdata(e)}
                  maxLength={150}
                />
              </div>
            </div>
            <div className="mb-8 flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

createTag.auth = {
  roles: ["SUPERUSER"],
};
export default createTag;
