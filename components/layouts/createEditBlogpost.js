import React from "react";
import Sidebar from "../elements/sideBar/leftSideBar";
import FormattedDate from "../micro/formattedDate";
import Select from "../elements/dropdownSelect/adminSelect";
import { AdminInlineTextInput } from "../elements/input/text";

import { tagsToOptions } from "../../utils/mutateTags";

const createEditBlogpost = ({ children, title, updated_at }) => {
  return (
    <div className="flex dark:bg-white dark:text-gray-900">
      <Sidebar />
      <div className="font-primary flex-1 pt-12 pr-5 ">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          {updated_at && (
            <div className="mt-2 text-sm font-medium">
              Last edited: <FormattedDate date={updated_at} />
            </div>
          )}
        </div>
        <>{children}</>
      </div>
    </div>
  );
};

export function MetadataFields({
  blogdata,
  updateblogdata,
  setBlogdata,
  allTags,
  updateTagHandler,
}) {
  return (
    <div className="border-black-10 col-span-1 bg-[#fafafa] px-5 py-6">
      <h2 className="mb-8 text-center text-lg font-semibold">
        Metadata
      </h2>
      <AdminInlineTextInput
        label="Banner URL"
        name="banner"
        value={blogdata.banner}
        onChangeHandler={updateblogdata}
      />
      <AdminInlineTextInput
        label="Banner alt"
        name="banneralt"
        value={blogdata.banneralt}
        onChangeHandler={updateblogdata}
      />
      <AdminInlineTextInput
        label="Slug"
        name="slug"
        value={blogdata.slug}
        onChangeHandler={updateblogdata}
      />
      <div className="mb-8">
        <label className="font-adminPrimary text-base font-semibold">
          Meta Description
        </label>
        <textarea
          type="text"
          placeholder="write under 150 characters..."
          className="border-black-10 mt-1 h-24 w-full border bg-white px-1 text-sm focus:outline-0"
          name="metaDescription"
          value={blogdata.metaDescription}
          onChange={(e) => updateblogdata(e)}
          maxLength={150}
        />
      </div>
      <div className="mb-8">
        <label className="font-adminPrimary text-base font-semibold">
          Excerpt
        </label>
        <textarea
          type="text"
          placeholder="write under 150 characters..."
          className="border-black-10 mt-1 h-24 w-full border bg-white px-1 text-sm focus:outline-0"
          name="excerpt"
          value={blogdata.excerpt}
          onChange={(e) => updateblogdata(e)}
          maxLength={150}
        />
      </div>
      <div className="mb-8">
        <label className="font-adminPrimary text-base font-semibold">
          Minute Read
        </label>
        <input
          type="number"
          className="border-black-10 mt-1 h-8 w-full border bg-white px-1 text-sm focus:outline-0"
          name="minuteRead"
          value={blogdata.minuteRead}
          onChange={(e) => updateblogdata(e)}
          min={1}
          max={30}
        />
      </div>

      <div className="mb-8 flex">
        <div className="flex-1">
          <label className="font-adminPrimary text-base font-semibold">
            Top Pick
          </label>
          <div className="mt-1">
            <button
              className={`admin-bool-btn ${
                blogdata.topPick ? "bg-green-600 text-white" : "bg-white"
              } `}
              onClick={() => setBlogdata({ ...blogdata, topPick: true })}
            >
              True
            </button>
            <button
              className={`admin-bool-btn ${
                !blogdata.topPick ? "bg-red-600 text-white" : "bg-white"
              }`}
              onClick={() => setBlogdata({ ...blogdata, topPick: false })}
            >
              False
            </button>
          </div>
        </div>
        <div className="flex-1">
          <label className="font-adminPrimary text-base font-semibold">
            Featured
          </label>
          <div className="mt-1">
            <button
              className={`admin-bool-btn ${
                blogdata.featured ? "bg-green-600 text-white" : "bg-white"
              }`}
              onClick={() => setBlogdata({ ...blogdata, featured: true })}
            >
              True
            </button>
            <button
              className={`admin-bool-btn ${
                !blogdata.featured ? "bg-red-600 text-white" : "bg-white"
              }`}
              onClick={() => setBlogdata({ ...blogdata, featured: false })}
            >
              False
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <label className="font-adminPrimary mb-4 text-base font-semibold">
          Tags
        </label>
        <Select
          allOptions={tagsToOptions(allTags)}
          preSelected={tagsToOptions(blogdata.tags || [])}
          onChangeHandler={updateTagHandler}
        />
      </div>
    </div>
  );
}

export default createEditBlogpost;
