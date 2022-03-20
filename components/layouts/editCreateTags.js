import React from "react";
import Link from "next/link";
import SideBar from "../elements/sideBar/leftSideBar";
import { AdminInlineTextInput } from "../elements/input/text";

const EditCreateTags = ({ children, title }) => {
  return (
    <div className="font-primary flex min-h-screen dark:bg-gray-50 dark:text-gray-800">
      <SideBar />
      <div className="flex-1 px-5 pt-12">
        <div className="mb-10 flow-root">
          <h1 className="mb-1 text-2xl font-bold ">{title}</h1>
          <div className="float-left text-sm font-medium">
            {/* Last edited: <FormattedDate date={updatedContent.updated_at} /> */}
          </div>
        </div>
        <>{children}</>
      </div>
    </div>
  );
};

export function DataEntryCard({ tagData, updateTagdata }) {
  return (
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
          name="ogImg"
          value={tagData.ogImg}
          onChangeHandler={updateTagdata}
          placeholder="Enter opengraph image url"
        />
        <AdminInlineTextInput
          label="OG alt text"
          name="ogAlt"
          value={tagData.ogAlt}
          onChangeHandler={updateTagdata}
          placeholder="Enter opengraph image alternate text"
        />
      </div>
      <div className="flex">
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
          <label className="text-base font-medium">Meta Description</label>
          <textarea
            type="text"
            placeholder="write under 150 characters..."
            className="border-black-10 font-primary mt-1 h-28 w-full border bg-white px-1 text-sm font-normal focus:outline-0"
            name="metaDescription"
            value={tagData.metaDescription}
            onChange={(e) => updateTagdata(e)}
            maxLength={150}
          />
        </div>
      </div>
    </div>
  );
}

export default EditCreateTags;
