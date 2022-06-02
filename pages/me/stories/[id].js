import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
// third party libraries
import _ from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import Router from "next/router";
// components
import Select from "../../../components/elements/dropdownSelect/creatorDashboard";
import EditBanner from "../../../components/elements/dropzone/image";
import ImageTool from "../../../components/editor-tools/image/index";
import Quote from "../../../components/editor-tools/quote/quote";
import PageLink from "../../../components/editor-tools/page-link/link";
import { cross } from "../../../components/icons/creatorPanel";
import ShowTags from "../../../components/micro/showTags";
// elements
import {
  PublishButton,
  SaveButton,
  UnPublishButton,
} from "../../../components/elements/buttons/buttons";
// utilities
import {
  optionsToTags,
  tagIdFromTags,
  tagsToOptions,
} from "../../../utils/mutateTags";
import {
  publishBlogpost,
  unPublishBlogpost,
} from "../../../utils/togglePublish";
import HeadStories from "../../../components/headTags/unIndexed/creator/stories";
import axios from "../../../utils/axios";
import uploadImage from "../../../utils/uploadImage/uploader";

let editor;
import prisma from "../../../lib/prisma";
import FormattedDate from "../../../components/micro/formattedDate";

const update = ({ initialContent, allTags }) => {
  const router = useRouter();
  const titleRef = useRef(null);
  const excerptRef = useRef(null);
  const { theme } = useTheme();

  const { data: session, status } = useSession();

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
    const Tooltip = require("editorjs-tooltip");
    const Underline = require("@editorjs/underline");
    const Marker = require("@editorjs/marker");

    // configs
    editor = new EditorJS({
      holder: "content-editor",
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
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        pagelink: PageLink,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            preserveBlank: false,
            placeholder: "Click here to write something amazing 🔥",
          },
        },
        tooltip: {
          class: Tooltip,
          config: {
            location: "top",
            backgroundColor: "#262611",
            textColor: "#FDFEFE",
            holder: "content-editor",
            underline: true,
          },
        },
        underline: Underline,
        quote: Quote,
      },
      data: updatedContent.content,
      readOnly: updatedContent.published,
      logLevel: "ERROR",
    });
    return () => {
      editor.destroy();
    };
  }, [updatedContent.published]);

  function updateblogdata(e) {
    setUpdateContent({
      ...updatedContent,
      [e.target.name]: e.target.value,
    });
  }

  function updateTagHandler(option) {
    console.log(option);
    const newTags = [...optionsToTags(option)];
    setUpdateContent({
      ...updatedContent,
      tags: newTags,
    });
  }

  async function saveBlogpost() {
    let uploadedUrl = null;
    if (file) {
      const { status, responseData } = await uploadImage(file);

      if (status === "OK") {
        uploadedUrl = responseData.url;
      } else {
        toast.error("could not upload banner Image", { theme });
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
      excerpt: excerptRef.current.textContent,
    };

    const noChange =
      _.isEqual(content.blocks, initialContentBody.blocks) &&
      _.isEqual(
        { ...payload, content: null },
        { ...initialContent, content: null }
      );

    if (noChange) {
      toast.info("No Change in the content", { theme });
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
      toast.success("Changes saved Successfully ⭐", { theme });
    } catch (err) {
      console.error("error", err);
      toast.error("Error", { theme });
    }
  }

  return (
    <>
      <HeadStories title={`Edit Story - ${updatedContent.title}`} />

      {/* Body */}
      <div className="horizontal-spacing container mx-auto mt-5 text-neutral-400">
        <header className="font-primary flex items-center justify-between">
          <div>
            <div className="mb-1 text-xl font-medium">
              Post: <span>{updatedContent.slug}</span>
            </div>
            <div className="text-sm font-medium italic">
              Last edited:{" "}
              <time>
                <FormattedDate date={updatedContent.updated_at} />
              </time>
            </div>
          </div>
          <div>
            <button className="aspect-1 w-3.5" onClick={() => Router.back()}>
              {cross}
            </button>
          </div>
        </header>

        {/* primary groups */}
        <div className="mt-10 grid grid-cols-11 gap-4">
          <div className="col-span-8 pb-40">
            <div className="mb-5 flex items-center text-black">
              {updatedContent.tags.map((tag) => (
                <ShowTags
                  tagname={tag.tagname}
                  color={tag.color}
                  key={tag.tagname}
                />
              ))}
            </div>

            {/* title */}
            <div
              className={
                "need-placeholder unstyled-input mb-2 w-full text-4xl font-bold leading-tight text-black"
              }
              ref={titleRef}
              contentEditable={!updatedContent.published}
              suppressContentEditableWarning={true}
              placeholder="Enter Title"
              onPaste={(e) => {
                e.preventDefault();
                var text = (e.originalEvent || e).clipboardData.getData(
                  "text/plain"
                );
                document.execCommand("insertHTML", false, text);
              }}
            >
              {updatedContent.title}
            </div>

            {/* Excerpt */}
            <div
              ref={excerptRef}
              className="need-placeholder unstyled-input mt-3 text-base font-medium text-neutral-600 dark:text-zinc-300 md:mt-0 md:text-lg"
              contentEditable={!updatedContent.published}
              suppressContentEditableWarning={true}
              placeholder="Write excerpt"
              onPaste={(e) => {
                e.preventDefault();
                var text = (e.originalEvent || e).clipboardData.getData(
                  "text/plain"
                );
                document.execCommand("insertHTML", false, text);
              }}
            >
              {updatedContent.excerpt}
            </div>

            <div className="mt-7 mb-8 flex items-center text-black">
              <div className="aspect-1 overflow-hidden rounded-full">
                <Image
                  src={session.user?.dp || getValidImageURL("/me.jpg")}
                  alt={session.user?.dpalt}
                  width={24}
                  height={24}
                />
              </div>
              <div className="font-primary ml-2 flex items-center text-xs">
                <h3 className="font-semibold">
                  {session.user?.firstname} {session.user?.lastname || ""}
                </h3>
                <div className="ml-4 flex h-3 items-center font-medium dark:text-zinc-100">
                  <span className="">
                    <FormattedDate date={updatedContent.updated_at} />
                  </span>
                  <span className="mx-2">•</span>
                  <span className="">{updatedContent.minuteRead} min read</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-w-16 aspect-h-10 mb-8 w-full border">
              <div className="bg-[#D9D9D9]">
                <EditBanner
                  setFile={setFile}
                  bannerUrl={updatedContent.banner}
                />
              </div>
            </div>

            {/* editor holder */}
            <div
              id="content-editor"
              className="editorjs-editable col-span-2 font-serif text-black"
            ></div>
          </div>
          <div className="col-span-3 flex">
            {/* vertical border */}
            <div
              style={{ width: "1px" }}
              className="text h-full bg-neutral-200"
            ></div>

            <div className="flex-1 pl-2">
              {/* Publish/Unpublish, save button */}
              <div className="mb-10 flex h-24 items-center justify-around border-b border-neutral-200">
                <SaveButton text="Save" onClickHandler={saveBlogpost} />

                {updatedContent.published ? (
                  <UnPublishButton
                    text={`UnPublish`}
                    onClickHandler={() =>
                      unPublishBlogpost(
                        router.query.id,
                        updatedContent,
                        setUpdateContent,
                        theme
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
                        setUpdateContent,
                        theme
                      )
                    }
                  />
                )}
              </div>

              {/* banner url */}
              <InlineInput
                type={"text"}
                placeholder={"Banner URL"}
                name={"banner"}
                value={updatedContent.banner}
                onChangeHandler={updateblogdata}
                label={"Banner URL"}
                disabled={updatedContent.published}
              />

              {/* banner alt */}
              <InlineInput
                type={"text"}
                placeholder={"Banner alt text"}
                name={"banneralt"}
                value={updatedContent.banneralt}
                onChangeHandler={updateblogdata}
                label={"Banner alt text"}
                disabled={updatedContent.published}
              />

              {/* Meta description */}
              <div className="mb-14">
                <textarea
                  placeholder="Write a description of the story in under 150 characters."
                  style={{ height: "90px" }}
                  className="creator-dashboard-input font-primary mt-1 w-full border-b border-neutral-300 bg-white px-1 text-sm valid:text-black focus:outline-0"
                  name="metaDescription"
                  value={updatedContent.metaDescription}
                  onChange={updateblogdata}
                  maxLength={150}
                  disabled={updatedContent.published}
                />
                <label className="dark-on-valid-label transform text-sm font-medium opacity-0 transition-all duration-300">
                  Meta Description
                </label>
              </div>

              {/* minute read */}
              <InlineInput
                type={"number"}
                placeholder={"Minute read"}
                value={updatedContent.minuteRead}
                name="minuteRead"
                onChangeHandler={updateblogdata}
                label={"Minute Read"}
                disabled={updatedContent.published}
              />

              {/* Tags */}
              <div className="mb-14">
                <Select
                  allOptions={tagsToOptions(allTags)}
                  preSelected={tagsToOptions(updatedContent.tags || [])}
                  onChangeHandler={updateTagHandler}
                  disabled={updatedContent.published}
                />
                <label
                  className={`transform text-sm font-medium transition-all duration-300 ${
                    !!updatedContent.tags.length
                      ? `opacity-100 ${
                          updatedContent.published
                            ? "text-neutral-400"
                            : "text-neutral-600"
                        }`
                      : "opacity-0"
                  }`}
                >
                  Tags
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
update.auth = {
  roles: ["CREATOR"],
};

export default update;

function InlineInput({
  placeholder,
  name,
  label,
  onChangeHandler,
  value,
  type,
  disabled,
}) {
  return (
    <div className="mb-14">
      <input
        type={type}
        placeholder={placeholder}
        className="creator-dashboard-input font-primary mt-1 h-10 w-full border-b border-neutral-300 bg-white px-1 text-sm font-medium valid:text-neutral-600 focus:outline-0"
        name={name}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      <label
        className={`dark-on-valid-label transform text-sm font-medium opacity-0 transition-all duration-300`}
      >
        {label}
      </label>
    </div>
  );
}

export async function getServerSideProps({ params, req }) {
  // const session = await getSession({ req });

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth/signin",
  //       permanent: true,
  //     },
  //   };
  // }

  const { blogposts, tags } = prisma;
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
          color: true,
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
      color: true,
    },
  });

  await prisma.$disconnect();

  if (!data) {
    return {
      notFound: true,
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
