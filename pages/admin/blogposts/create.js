import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/adminPanel/leftSideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BannerUploader from "../../../components/uploaders/createBlogUploader";
import { useTheme } from "next-themes";
// editorjs tools
let editor;
const create = () => {
  const { theme } = useTheme();
  console.log("theme", theme);
  useEffect(() => {
    // imports
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Paragraph = require("@editorjs/paragraph");
    const List = require("@editorjs/list");
    const Delimiter = require("@editorjs/delimiter");
    const ImageTool = require("@editorjs/image");
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
        image: ImageTool,
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

  const [blogdata, setBlogdata] = useState({
    title: "",
    slug: "",
    metaDescription: "",
    excerpt: "",
    minuteRead: 1,
    topPick: false,
    featured: false,
    banner: "",
  });

  function updateblogdata(e) {
    // stateUpdated = true;
    setBlogdata({
      ...blogdata,
      [e.target.name]: e.target.value,
    });
  }

  async function saveBlogpost() {
    let payload = {};
    let content = await editor.save();
    payload = {
      ...blogdata,
      content: JSON.stringify(content),
      minuteRead: +blogdata.minuteRead,
    };

    if (!payload.slug || !payload.title) {
      toast.warn("Slug and Title cannot be null ⚠️", { theme });
      return;
    }

    try {
      await axios.post("/blogposts/create", payload, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Post created 🌟", { theme });
    } catch (err) {
      err.response.data.errors.map((error) => {
        toast.error(error.msg);
      });
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-12 pr-5 pl-80">
          <div className="flow-root mb-10">
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
                onClick={saveBlogpost}
              >
                Save
              </button>
            </div>
          </div>
          {/* body */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="px-10 flex justify-center">
                <input
                  style={{ maxWidth: "720px" }}
                  className="unstyled-input bg-white w-full text-5xl font-raleway font-black mb-10 text-center"
                  placeholder="Enter title..."
                  value={blogdata.title}
                  name="title"
                  onChange={(e) => updateblogdata(e)}
                />
              </div>
              {/* Image uploader / Management */}
              <div style={{ maxWidth: "720px" }} className="mx-auto mb-8">
                {!blogdata.banner ? (
                  <BannerUploader state={blogdata} setState={setBlogdata} />
                ) : (
                  <div className="bg-zinc-100 w-full h-96 relative rounded-md flex justify-center">
                    <img src={blogdata.banner} className="absolute h-full" />
                  </div>
                )}
              </div>
              {/* editor */}
              <div
                id="editorjs"
                className="col-span-2 editorjs-editable font-serif"
              ></div>
            </div>

            {/* metadata column */}
            <div className="col-span-1 bg-[#fafafa] px-5 py-6 border-black-10">
              <h2 className="font-adminPrimary font-bold text-xl text-center mb-8">
                Metadata
              </h2>
              <div className="mb-8">
                <label className="font-adminPrimary text-base font-semibold required-field">
                  Slug
                </label>
                <input
                  type="text"
                  placeholder="enter slug"
                  className="bg-white w-full h-8 focus:outline-0 border border-black-10 px-1 mt-1"
                  name="slug"
                  value={blogdata.slug}
                  onChange={(e) => updateblogdata(e)}
                />
              </div>
              <div className="mb-8">
                <label className="font-adminPrimary text-base font-semibold">
                  Meta Description
                </label>
                <textarea
                  type="text"
                  placeholder="write under 150 characters..."
                  className="bg-white w-full h-20 focus:outline-0 border border-black-10 px-1 mt-1"
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
                  className="bg-white w-full h-20 focus:outline-0 border border-black-10 px-1 mt-1"
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
                  className="bg-white w-full h-8 focus:outline-0 border border-black-10 px-1 mt-1"
                  name="minuteRead"
                  value={blogdata.minuteRead}
                  onChange={(e) => updateblogdata(e)}
                  min={1}
                  max={30}
                />
              </div>

              <div className="flex">
                <div className="flex-1">
                  <label className="font-adminPrimary text-base font-semibold">
                    Top Pick
                  </label>
                  <div className="mt-1">
                    <button
                      className={`admin-bool-btn ${
                        blogdata.topPick
                          ? "text-white bg-green-600"
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
                        !blogdata.topPick ? "text-white bg-red-600" : "bg-white"
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
                          ? "text-white bg-green-600"
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
                          ? "text-white bg-red-600"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

create.auth = {
  roles: ["SUPERUSER"],
};

export default create;
