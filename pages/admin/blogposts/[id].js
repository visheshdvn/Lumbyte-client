import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
// third party libraries
import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Select from "../../../components/elements/dropdownSelect/adminSelect";
import Sidebar from "../../../components/elements/sideBar/leftSideBar";
import FormattedDate from "../../../components/micro/formattedDate";
import EditBanner from "../../../components/uploaders/editBanner";
import ImageTool from "../../../components/editor-tools/image/index";
import Quote from "../../../components/editor-tools/quote/quote";
// elements
import {
  PublishButton,
  SaveButton,
  UnPublishButton,
} from "../../../components/elements/buttons/buttons";
// utilities
import {
  tagsToOptions,
  optionsToTags,
  tagIdFromTags,
} from "../../../utils/mutateTags";
import {
  publishBlogpost,
  unPublishBlogpost,
} from "../../../utils/togglePublish";
import { HeadBlogposts } from "../../../utils/headTags/admin/meta";
// utils
import axios from "../../../utils/axios";
import uploadImage from "../../../utils/uploadImage/uploader";

let editor;
const prisma = new PrismaClient();
const { blogposts, tags } = prisma;

const update = ({ initialContent, allTags }) => {
  const router = useRouter();
  const titleRef = useRef(null);

  const { content } = initialContent;
  const initialContentBody = JSON.parse(content);

  const [file, setFile] = useState(null);

  const [updatedContent, setUpdateContent] = useState({
    ...initialContent,
    content: { ...initialContentBody },
  });

  // initialize editor
  useEffect(() => {
    // imports
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Paragraph = require("@editorjs/paragraph");
    const List = require("@editorjs/list");
    const Delimiter = require("@editorjs/delimiter");
    const InlineCode = require("@editorjs/inline-code");
    const CodeTool = require("@editorjs/code");
    // const ImageTool = require('@editorjs/image');
    // configs
    editor = new EditorJS({
      holder: "editorjs",
      tools: {
        code: CodeTool,
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
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            preserveBlank: false,
            placeholder: "Click here to write something amazing 🔥",
          },
        },
        quote: Quote,
      },
      data: updatedContent.content,
      readOnly: false,
    });
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

  function updateTagHandler(option) {
    const newTags = [...optionsToTags(option)];
    setUpdateContent({
      ...updatedContent,
      tags: newTags,
    });
  }

  async function saveBlogpost() {
    console.log("saving");
    let uploadedUrl = null;
    if (file) {
      const { status, responseData } = await uploadImage(file);

      if (status === "OK") {
        uploadedUrl = responseData.url;
      } else {
        toast.error("could not upload banner Image");
        return;
      }

      setFile(null);
    }

    let content = await editor.save();
    let payload = {
      ...updatedContent,
      content: JSON.stringify(content),
      title: titleRef.current.textContent,
      banner: uploadedUrl || updatedContent.banner,
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
    payload.tags = tagIdFromTags(payload.tags);

    try {
      console.log("sending request");
      const { data } = await axios.patch(
        `/blogposts/update/${router.query.id}`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      initialContent = data.blogpost;
      setUpdateContent({ ...data.blogpost });
      toast.success("Changes saved Successfully ⭐");
    } catch (err) {
      console.error("error", err);
      toast.error("Error");
    }
  }

  return (
    <>
      <HeadBlogposts title="Edit Blogpost" />

      {/* Body */}
      <div className="flex">
        <Sidebar />
        <div className="admin-primary-layout">
          <div className="mb-10 flow-root">
            <h1 className="font-adminPrimary mb-1 text-2xl font-bold">
              Edit blogpost
            </h1>
            <div className="font-adminPrimary float-left text-sm font-semibold">
              Last edited: <FormattedDate date={updatedContent.updated_at} />
            </div>
            <div className="float-right">
              {updatedContent.published ? (
                <UnPublishButton
                  text={`UnPublish`}
                  onClickHandler={() =>
                    unPublishBlogpost(
                      router.query.id,
                      updatedContent,
                      setUpdateContent
                    )
                  }
                />
              ) : (
                <PublishButton
                  text="Publish"
                  onClickHandler={() =>
                    publishBlogpost(
                      router.query.id,
                      updatedContent,
                      setUpdateContent
                    )
                  }
                />
              )}
              <SaveButton text="Save" onClickHandler={saveBlogpost} />
            </div>
          </div>
          {/* content body */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="flex justify-center px-10">
                <div
                  ref={titleRef}
                  contentEditable="true"
                  style={{ maxWidth: "720px" }}
                  className="unstyled-input font-raleway mb-10 w-full bg-white text-center text-5xl font-black"
                  suppressContentEditableWarning={true}
                >
                  {updatedContent.title}
                </div>
              </div>

              {/* Image uploader / Management */}
              <div style={{ maxWidth: "720px" }} className="mx-auto mb-8">
                <EditBanner
                  setFile={setFile}
                  bannerUrl={updatedContent.banner}
                />
              </div>

              {/* editor holder */}
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
                value={updatedContent.banner}
                onChangeHandler={updateblogdata}
              />
              <InlineTextField
                label="Banner alt"
                name="banneralt"
                value={updatedContent.banneralt}
                onChangeHandler={updateblogdata}
              />
              <InlineTextField
                label="Slug"
                name="slug"
                value={updatedContent.slug}
                onChangeHandler={updateblogdata}
              />
              <div className="mb-8">
                <label className="font-adminPrimary required-field text-base font-semibold">
                  Meta Description
                </label>
                <textarea
                  type="text"
                  placeholder="write under 150 characters..."
                  className="border-black-10 font-raleway mt-1 h-28 w-full border bg-white px-1 text-sm font-normal focus:outline-0"
                  name="metaDescription"
                  value={updatedContent.metaDescription}
                  onChange={(e) => updateblogdata(e)}
                  maxLength={150}
                />
              </div>
              <div className="mb-8">
                <label className="font-adminPrimary required-field text-base font-semibold">
                  Excerpt
                </label>
                <textarea
                  type="text"
                  placeholder="write under 150 characters..."
                  className="border-black-10 font-raleway mt-1 h-28 w-full border bg-white px-1 text-sm font-normal focus:outline-0"
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
                  className="border-black-10 font-raleway mt-1 h-10 w-full border bg-white px-1 text-sm font-normal focus:outline-0"
                  name="minuteRead"
                  value={updatedContent.minuteRead}
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
                        updatedContent.topPick
                          ? "bg-green-600 text-white"
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
                          ? "bg-red-600 text-white"
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
                          ? "bg-green-600 text-white"
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
                          ? "bg-red-600 text-white"
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
              <div className="mb-8">
                <label className="font-adminPrimary mb-4 text-base font-semibold">
                  Tags
                </label>
                <Select
                  allOptions={tagsToOptions(allTags)}
                  preSelected={tagsToOptions(initialContent.tags)}
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

update.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

export default update;

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

export async function getServerSideProps({ params }) {
  const id = params.id;

  let data = await blogposts.findUnique({
    where: { id },
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
      tags: {
        select: {
          id: true,
          tagname: true,
        },
      },
      author: true,
      banner: true,
      banneralt: true,
      updated_at: true,
      published: true,
    },
  });

  let allTags = await tags.findMany({
    select: {
      id: true,
      tagname: true,
    },
  });

  if (!data) {
    prisma.$disconnect();
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
      allTags,
    },
  };
}
