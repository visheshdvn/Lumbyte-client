import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/adminPanel/leftSideBar";
import Link from "next/link";
import { useRouter } from "next/router";
import _ from "lodash";
// editorjs tools

let editor;
const update = ({ initialContent }) => {
  const router = useRouter();

  const {
    id,
    slug,
    title,
    excerpt,
    metaDescription,
    content,
    banner,
    banneralt,
    minuteRead,
    featured,
    topPick,
    date,
    tags,
    author,
    upadted_at,
    created_at,
  } = initialContent;
  const initialContentBody = JSON.parse(content);

  let stateUpdated = false;
  const [updatedContent, setUpdateContent] = useState({
    ...initialContent,
    content: initialContentBody,
  });

  // initialize editor
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
      data: initialContentBody,
    });
    console.log(editor);
    return () => {
      editor.destroy();
    };
  }, []);

  function updateblogdata(e) {
    stateUpdated = true;
    setUpdateContent({
      ...updatedContent,
      [e.target.name]: e.target.value,
    });
  }

  async function saveBlogpost() {
    let content = await editor.save();
    let payload = {
      ...updatedContent,
      content: JSON.stringify(content),
    };

    const noChange =
      _.isEqual(content.blocks, initialContentBody.blocks) &&
      _.isEqual(
        { ...payload, content: null },
        { ...initialContent, content: null }
      );

    if (noChange) {
      alert("No Change in the content");
      return;
    }
    
    payload.date = payload.created_at

    console.log(payload);
    try {
      let res = await axios.patch(
        `/blogposts/update/${router.query.id}`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res);
    } catch (err) {
      console.error("error", err.toJSON());
    }
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
          {/* content body */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="px-10 flex justify-center">
                <input
                  style={{ maxWidth: "720px" }}
                  className="unstyled-input bg-white w-full text-5xl font-raleway font-black mb-10 text-center"
                  placeholder="Enter title..."
                  value={updatedContent.title}
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
                  value={updatedContent.metaDescription}
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
                  value={updatedContent.excerpt}
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
                  value={updatedContent.minuteRead}
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
                  value={updatedContent.slug}
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
                        updatedContent.topPick
                          ? "text-white bg-green-600"
                          : "bg-white"
                      } `}
                      onClick={() =>
                        setUpdateContent({ ...updatedContent, topPick: true })
                      }
                    >
                      True
                    </button>
                    <button
                      className={`admin-bool-btn ${
                        !updatedContent.topPick
                          ? "text-white bg-red-600"
                          : "bg-white"
                      }`}
                      onClick={() =>
                        setUpdateContent({ ...updatedContent, topPick: false })
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
                        updatedContent.featured
                          ? "text-white bg-green-600"
                          : "bg-white"
                      }`}
                      onClick={() =>
                        setUpdateContent({ ...updatedContent, featured: true })
                      }
                    >
                      True
                    </button>
                    <button
                      className={`admin-bool-btn ${
                        !updatedContent.featured
                          ? "text-white bg-red-600"
                          : "bg-white"
                      }`}
                      onClick={() =>
                        setUpdateContent({ ...updatedContent, featured: false })
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

export default update;

export async function getServerSideProps({ params }) {
  const id = params.id;
  const { data } = await axios.get(`/blogposts?_where[id]=${id}`);

  if (data.length < 1) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialContent: data[0],
    },
  };
}
