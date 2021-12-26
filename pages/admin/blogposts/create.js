import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Sidebar from "../../../components/adminPanel/leftSideBar";
import Link from "next/link";
import { Switch } from "@headlessui/react";
// editorjs tools

const data = {
  time: 1640296308461,
  blocks: [
    {
      id: "AVHRqOpxjp",
      type: "header",
      data: {
        text: "Editor.js",
        level: 2,
      },
    },
    {
      id: "kjEFj2fkqz",
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
      },
    },
    {
      id: "rk5ELN8DL1",
      type: "header",
      data: {
        text: "Key features",
        level: 3,
      },
    },
    {
      id: "M47ywr3NqQ",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "It is a block-styled editor",
          "It returns clean data output in JSON",
          "Designed to be extendable and pluggable with a simple API",
        ],
      },
    },
    {
      id: "7zlc95DBQ-",
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 2,
      },
    },
    {
      id: "xKdaLRNuRZ",
      type: "paragraph",
      data: {
        text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
      },
    },
    {
      id: "DNJZRbjOAt",
      type: "paragraph",
      data: {
        text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
      },
    },
    {
      id: "38JODi44ep",
      type: "header",
      data: {
        text: "What does it mean clean data output",
        level: 3,
      },
    },
    {
      id: "urm5eq56Ie",
      type: "paragraph",
      data: {
        text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
      },
    },
    {
      id: "ZnjiS3NyF3",
      type: "paragraph",
      data: {
        text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
      },
    },
    {
      id: "ANo0rXCNS5",
      type: "paragraph",
      data: {
        text: "Clean data is useful to sanitize, validate and process on the backend.",
      },
    },
    {
      id: "NQyWJ5x5Qj",
      type: "delimiter",
      data: {},
    },
    {
      id: "fTt-RHIe0U",
      type: "paragraph",
      data: {
        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
      },
    },
    {
      id: "vENiyLEPb9",
      type: "image",
      data: {
        file: {
          url: "/me.jpg",
        },
        caption: "Roadster // tesla.com",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
  ],
  version: "2.22.2",
};

let editor;
const create = () => {
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
      data,
    });
    console.log(editor);
    return () => {
      editor.destroy();
    };
  }, []);

  let stateUpdated = false;
  const [blogdata, setBlogdata] = useState({
    title: "",
    slug: "",
    metaDescription: "",
    excerpt: "",
    minuteRead: 1,
    topPick: false,
    featured: false,
  });

  function updateblogdata(e) {
    stateUpdated = true;
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
    console.log(payload);

    const res = await axios.post("/blogposts/create", payload);
    console.log(res);
  }
  return (
    <>
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
              <div className="mb-8">
                <label className="font-adminPrimary text-base font-semibold">
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

export default create;
