import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Sidebar from "../../../components/adminPanel/leftSideBar";
import FormattedDate from "../../../components/micro/formattedDate";
// elements
import {
  PublishButton,
  SaveButton,
} from "../../../components/elements/buttons/buttons";

let editor;
const { blogposts } = new PrismaClient();

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
    updated_at,
    created_at,
  } = initialContent;
  const initialContentBody = JSON.parse(content);

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
    setUpdateContent({
      ...updatedContent,
      [e.target.name]: e.target.value,
    });
  }

  async function saveBlogpost() {
    console.log("saving");
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
      toast.info("No Change in the content");
      return;
    }

    payload.date = payload.created_at;
    if (!payload.author) {
      payload.author = {};
    }

    try {
      let res = await axios.patch(
        `/blogposts/update/${router.query.id}`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res);
      toast.success("Changes saved Successfully ⭐");
    } catch (err) {
      console.error("error", err.toJSON());
      toast.error("Error");
    }
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex"></meta>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
      <div className="flex">
        <Sidebar />
        <div className="admin-primary-layout">
          <div className="flow-root mb-10">
            <h1 className="text-2xl font-adminPrimary font-bold mb-1">
              Edit blogpost
            </h1>
            <div className="float-left font-adminPrimary text-sm font-semibold">
              Last edited: <FormattedDate date={updatedContent.updated_at} />
            </div>
            <div className="float-right">
              <PublishButton
                text="Publish"
                onClickHandler={() => console.log("clicked")}
              />
              <SaveButton text="Save" onClickHandler={saveBlogpost} />
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
              {/* banner */}
              <div style={{ maxWidth: "720px" }} className="mx-auto mb-8">
                {console.log("updatedContent.banner", updatedContent.banner)}
                <div
                  style={{
                    backgroundImage: `url(${updatedContent.banner})`,
                  }}
                  className="bg-zinc-100 w-full h-96 relative rounded-md flex justify-center bg-cover bg-center"
                >
                  {/* <img
                    src={updatedContent.banner}
                    className="absolute h-full"
                  /> */}
                </div>
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
                  className="bg-white w-full h-10 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-medium text-sm"
                  name="slug"
                  value={updatedContent.slug}
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
                  className="bg-white w-full h-28 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-normal text-sm"
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
                  className="bg-white w-full h-28 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-normal text-sm"
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
                  className="bg-white w-full h-10 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-normal text-sm"
                  name="minuteRead"
                  value={updatedContent.minuteRead}
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

update.auth = {
  roles: ["SUPERUSER"],
};
export default update;

export async function getServerSideProps({ params }) {
  const id = params.id;
  console.log("id", id);

  if (!parseInt(id)) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  let data = await blogposts.findUnique({
    where: { id: +id },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      metaDescription: true,
      content: true,
      minuteRead: true,
      topPick: true,
      featured: true,
      date: true,
      tags: true,
      author: true,
      banner: true,
    },
  });

  if (!data) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      initialContent: data,
    },
  };
}
