import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import Router from "next/router";
// components
import Sidebar from "../../../components/elements/sideBar/leftSideBar";
import Select from "../../../components/elements/dropdownSelect/adminSelect";
import EditBanner from "../../../components/uploaders/editBanner";
// utils
import axios from "../../../utils/axios";
import { MetaBlogposts } from "../../../utils/metaTags/admin/meta";
import {
  tagsToOptions,
  optionsToTags,
  tagIdFromTags,
} from "../../../utils/mutateTags";
import uploadImage from "../../../utils/uploadImage/uploader";

// editorjs tools
let editor;
const create = () => {
  const { theme } = useTheme();
  const { data: session, status } = useSession();

  // initialoze editor
  useEffect(() => {
    // imports
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Paragraph = require("@editorjs/paragraph");
    const List = require("@editorjs/list");
    const Delimiter = require("@editorjs/delimiter");
    // const ImageTool = require("@editorjs/image");
    // configs
    editor = new EditorJS({
      holder: "editorjs",
      tools: {
        delimiter: Delimiter,
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter the heading..",
            levels: [2, 3, 4],
          },
        },
        // image: {
        //   class: ImageTool,
        //   config: {
        //     endpoints: {
        //       byUrl: "http://localhost:3000/api/media/fetchURL", // Your endpoint that provides uploading by Url
        //     },
        //     types: "image/*",
        //   },
        // },
        list: {
          class: List,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            preserveBlank: false,
            placeholder: "Let's write something amazing 🔥",
          },
        },
      },
      readOnly: false,
    });

    return () => {
      editor.destroy();
    };
  }, []);

  // tags display
  const [allTags, setAllTags] = useState([]);
  useEffect(async () => {
    let { data } = await axios.get("/tags?_select=tagname");
    setAllTags(data);
  }, [allTags]);

  const [file, setFile] = useState(null);
  const titleRef = useRef(null);

  const [blogdata, setBlogdata] = useState({
    title: "",
    slug: "",
    metaDescription: "",
    excerpt: "",
    minuteRead: 1,
    topPick: false,
    featured: false,
    banner: "",
    banneralt: "",
  });

  function updateTagHandler(option) {
    const newTags = tagIdFromTags([...optionsToTags(option)]);
    setBlogdata({
      ...blogdata,
      tags: newTags,
    });
  }

  function updateblogdata(e) {
    setBlogdata({
      ...blogdata,
      [e.target.name]: e.target.value,
    });
  }

  async function saveBlogpost() {
    let uploadedUrl = null;
    if (file) {
      const { status, responseData } = await uploadImage(file);

      if (status === "OK") {
        uploadedUrl = responseData.url;
      } else {
        toast.error("could not upload banner Image");
        return;
      }
    }
    //
    let payload = {};
    let content = await editor.save();
    payload = {
      ...blogdata,
      content: JSON.stringify(content),
      minuteRead: +blogdata.minuteRead,
      authorId: session.user.id,
      banner: uploadedUrl || "",
      title: titleRef.current.textContent,
    };

    if (!payload.slug || !payload.title) {
      toast.warn("Slug and Title cannot be null ⚠️", { theme });
      return;
    }

    try {
      const {
        data: {
          blogpost: { id },
        },
      } = await axios.post("/blogposts/create", payload, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Post created 🌟", { theme });
      Router.push(`/admin/blogposts/${id}`);
    } catch (err) {
      toast.error("Could not create post", { theme });
      // err.response.data.errors.map((error) => {
      //   toast.error(error.msg);
      // });
    }
  }

  return (
    <>
      <MetaBlogposts title="Create Blogpost" />

      {/* body */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-12 pr-5 pl-80">
          <div className="mb-10 flow-root">
            <h1 className="font-adminPrimary text-2xl font-bold">
              Create new blogpost
            </h1>
            <div className="float-right mb-3">
              <button
                type="button"
                className="font-raleway w-28 rounded border bg-[#1da1f2] py-1 text-base font-semibold text-white"
              >
                Publish
              </button>
              <button
                type="button"
                className="font-raleway ml-4 w-28 rounded border bg-[#16A34A] py-1 text-base font-semibold text-white"
                onClick={saveBlogpost}
              >
                Save
              </button>
            </div>
          </div>
          {/* body */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="flex justify-center px-10">
                <div
                  ref={titleRef}
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{ maxWidth: "720px" }}
                  className="unstyled-input font-raleway mb-10 w-full bg-white text-center text-5xl font-black"
                  onInput={(e) => console.log(e)}
                >
                  {blogdata.title}
                </div>
              </div>
              {/* Image uploader / Management */}
              <div style={{ maxWidth: "720px" }} className="mx-auto mb-8">
                <EditBanner setFile={setFile} />
              </div>

              {/* editor */}
              <div
                id="editorjs"
                className="editorjs-editable col-span-2 font-serif"
              ></div>
            </div>

            {/* metadata column */}
            <div className="border-black-10 col-span-1 bg-[#fafafa] px-5 py-6">
              <h2 className="font-adminPrimary mb-8 text-center text-xl font-bold">
                Metadata
              </h2>
              <InlineTextField
                label="Banner URL"
                name="banner"
                value={blogdata.banner}
                onChangeHandler={updateblogdata}
              />
              <InlineTextField
                label="Banner alt"
                name="banneralt"
                value={blogdata.banneralt}
                onChangeHandler={updateblogdata}
              />
              <InlineTextField
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
                  className="border-black-10 mt-1 h-20 w-full border bg-white px-1 focus:outline-0"
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
                  className="border-black-10 mt-1 h-20 w-full border bg-white px-1 focus:outline-0"
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
                  className="border-black-10 mt-1 h-8 w-full border bg-white px-1 focus:outline-0"
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
                        blogdata.topPick
                          ? "bg-green-600 text-white"
                          : "bg-white"
                      } `}
                      onClick={() =>
                        setBlogdata({ ...blogdata, topPick: true })
                      }
                    >
                      True
                    </button>
                    <button
                      className={`admin-bool-btn ${
                        !blogdata.topPick ? "bg-red-600 text-white" : "bg-white"
                      }`}
                      onClick={() =>
                        setBlogdata({ ...blogdata, topPick: false })
                      }
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
                        blogdata.featured
                          ? "bg-green-600 text-white"
                          : "bg-white"
                      }`}
                      onClick={() =>
                        setBlogdata({ ...blogdata, featured: true })
                      }
                    >
                      True
                    </button>
                    <button
                      className={`admin-bool-btn ${
                        !blogdata.featured
                          ? "bg-red-600 text-white"
                          : "bg-white"
                      }`}
                      onClick={() =>
                        setBlogdata({ ...blogdata, featured: false })
                      }
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
                  onChangeHandler={updateTagHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

create.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

function InlineTextField({ label, name, value, onChangeHandler }) {
  return (
    <div className="mb-8">
      <label className="font-adminPrimary required-field text-base font-semibold">
        {label || ""}
      </label>
      <input
        type="text"
        placeholder={`enter ${label.toLowerCase()}`}
        className="border-black-10 font-raleway mt-1 h-10 w-full border bg-white px-1 text-sm font-medium focus:outline-0"
        name={name}
        value={decodeURIComponent(value || "")}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default create;
