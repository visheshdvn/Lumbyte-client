import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Sidebar from "../../../components/adminPanel/leftSideBar";
// elements
import {
  PublishButton,
  SaveButton,
  UnPublishButton,
} from "../../../components/elements/buttons/buttons";
import { AdminInlineTextInput } from "../../../components/elements/input/text";
// utilities
import NoIndex from "../../../utils/noIndex";

const createTag = ({}) => {
  const [tagData, settagData] = useState({
    tagname: "",
    color: "",
    metaDescription: "",
    ogimg: "",
    ogTitle: "",
  });

  function updateTagdata(e) {
    settagData({
      ...tagData,
      [e.target.name]: e.target.value,
    });
  }

  const updateTagData = async () => {
    // TODO - validate client side data

    if (!tagData.tagname) {
      toast.info("tagname invalid");
      return;
    }

    let reqObj = { ...tagData };

    if (!tagData.color) {
      settagData({ ...tagData, color: "#3B82F6" });
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
      <div className="bg-offWhite flex h-screen">
        <Sidebar />
        <div className="admin-primary-layout">
          <div className="mb-10 flow-root">
            <h1 className="font-adminPrimary mb-1 text-2xl font-bold">
              Create a new tag
            </h1>
            <div className="font-adminPrimary float-left text-sm font-semibold">
              {/* Last edited: <FormattedDate date={updatedContent.updated_at} /> */}
            </div>
            <div className="float-right">
              {/* <PublishButton
                text="Publish"
                onClickHandler={() => toast.info("No action assigned.")}
              /> */}
              <SaveButton text="Save" onClickHandler={updateTagData} />
            </div>
          </div>
          <div
            style={{ maxWidth: "1044px" }}
            className="border-black-10 border bg-white p-8"
          >
            <div className="flex">
              <AdminInlineTextInput
                label="Tag Name"
                name="tagname"
                value={tagData.tagname}
                onChangeHandler={updateTagdata}
                placeholder="Enter tag name"
                required
              />
              <AdminInlineTextInput
                label="Color"
                name="color"
                value={tagData.color}
                onChangeHandler={updateTagdata}
                placeholder="default: #3B82F6"
                maxLength={7}
              />
            </div>
            <div className="flex">
              <AdminInlineTextInput
                label="Og Image"
                name="ogimg"
                value={tagData.ogimg}
                onChangeHandler={updateTagdata}
                placeholder="Enter opengraph image url"
              />
              <AdminInlineTextInput
                label="Og Title"
                name="ogTitle"
                value={tagData.ogTitle}
                onChangeHandler={updateTagdata}
                placeholder="Enter opengraph Title"
              />
            </div>
            <div className="">
              <div style={{ maxWidth: "450px" }} className="mb-8 pr-8">
                <label className="font-adminPrimary text-base font-semibold">
                  Meta Description
                </label>
                <textarea
                  type="text"
                  placeholder="write under 150 characters..."
                  className="border-black-10 font-raleway mt-1 h-28 w-full border bg-white px-1 text-sm font-normal focus:outline-0"
                  name="metaDescription"
                  value={tagData.metaDescription}
                  onChange={(e) => updateTagdata(e)}
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
  roles: ["SUPERUSER", "ADMIN"],
};

export default createTag;
