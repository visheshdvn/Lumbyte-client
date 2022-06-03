import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Image from "next/image";
// components
import EditBanner from "../../../components/elements/dropzone/image";
import FormattedDate from "../../../components/micro/formattedDate";
import { cross } from "../../../components/icons/creatorPanel";
import ShowTags from "../../../components/micro/showTags";
import { SaveButton } from "../../../components/elements/buttons/buttons";
import Select from "../../../components/elements/dropdownSelect/creatorDashboard";
// utils
import {
  optionsToTags,
  tagIdFromTags,
  tagsToOptions,
} from "../../../utils/mutateTags";
import axios from "../../../lib/axios";
import HeadStories from "../../../components/headTags/unIndexed/creator/stories";
import uploadImage from "../../../utils/uploadImage/uploader";

// editorjs tools
let editor;
const create = () => {
  const { theme } = useTheme();
  const { data: session, status } = useSession();

  // initialize editor
  useEffect(() => {
    // imports
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Paragraph = require("@editorjs/paragraph");
    const List = require("@editorjs/list");
    const Delimiter = require("@editorjs/delimiter");
    const Tooltip = require("editorjs-tooltip");

    // configs
    editor = new EditorJS({
      holder: "content-editor",
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
        tooltip: {
          class: Tooltip,
        },
      },
      readOnly: false,
      logLevel: "ERROR",
    });

    return () => {
      editor.destroy();
    };
  }, []);

  // tags display
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  useEffect(async () => {
    let { data } = await axios.get("/tags?_select=tagname&_select=color");
    setAllTags(data);
  }, []);

  const [file, setFile] = useState(null);
  const titleRef = useRef(null);
  const excerptRef = useRef(null);

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
    tags: [],
  });

  function updateTagHandler(option) {
    // const newTags = tagIdFromTags([...optionsToTags(option)]);
    const newTags = [...optionsToTags(option)];
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
      // authorId: session.user.id,
      banner: uploadedUrl || "",
      title: titleRef.current.textContent,
      excerpt: excerptRef.current.textContent,
    };

    if (!payload.slug || !payload.title) {
      toast.warn("Slug and Title cannot be null ⚠️", { theme });
      return;
    }

    try {
      const res = await axios.post("/blogposts/create", payload, {
        headers: { "Content-Type": "application/json" },
      });

      const {
        data: {
          blogpost: { id },
        },
      } = res;

      toast.success("Post created 🌟", { theme });
      Router.push(`/me/stories/${id}`);
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error("Unauthorized", { theme });
        return;
      }
      toast.error("Could not create post", { theme });
    }
  }

  return (
    <>
      {/* head tags */}
      <HeadStories title={`Edit Story - ${blogdata.title}`} />

      {/* Body */}
      <div className="horizontal-spacing container mx-auto mt-5 text-neutral-400">
        <header className="font-primary flex items-center justify-between">
          <div>
            <div className="mb-1 text-xl font-medium">New Story</div>
            <div className="text-sm font-medium italic">
              Last edited:{" "}
              <time>
                <FormattedDate date={new Date().toISOString()} />
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
              {blogdata.tags.map((tag) => (
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
              contentEditable={!blogdata.published}
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
              {blogdata.title}
            </div>

            {/* Excerpt */}
            <div
              ref={excerptRef}
              className="need-placeholder unstyled-input mt-3 text-base font-medium text-neutral-600 dark:text-zinc-300 md:mt-0 md:text-lg"
              contentEditable={!blogdata.published}
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
              {blogdata.excerpt}
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
                    <FormattedDate date={new Date().toISOString()} />
                  </span>
                  <span className="mx-2">•</span>
                  <span className="">{blogdata.minuteRead} min read</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-w-16 aspect-h-10 mb-8 w-full border">
              <div className="bg-[#D9D9D9]">
                <EditBanner setFile={setFile} bannerUrl={blogdata.banner} />
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
              </div>

              {/* slug */}
              <InlineInput
                type={"text"}
                placeholder={"enter slug"}
                name={"slug"}
                value={blogdata.slug}
                onChangeHandler={updateblogdata}
                label={"Slug"}
                disabled={blogdata.published}
              />

              {/* banner url */}
              <InlineInput
                type={"text"}
                placeholder={"Banner URL"}
                name={"banner"}
                value={blogdata.banner}
                onChangeHandler={updateblogdata}
                label={"Banner URL"}
                disabled={blogdata.published}
              />

              {/* banner alt */}
              <InlineInput
                type={"text"}
                placeholder={"Banner alt text"}
                name={"banneralt"}
                value={blogdata.banneralt}
                onChangeHandler={updateblogdata}
                label={"Banner alt text"}
                disabled={blogdata.published}
              />

              {/* Meta description */}
              <div className="mb-14">
                <textarea
                  placeholder="Write a description of the story in under 150 characters."
                  style={{ height: "90px" }}
                  className="creator-dashboard-input font-primary mt-1 w-full border-b border-neutral-300 bg-white px-1 text-sm valid:text-black focus:outline-0"
                  name="metaDescription"
                  value={blogdata.metaDescription}
                  onChange={updateblogdata}
                  maxLength={150}
                  disabled={blogdata.published}
                />
                <label className="dark-on-valid-label transform text-sm font-medium opacity-0 transition-all duration-300">
                  Meta Description
                </label>
              </div>

              {/* minute read */}
              <InlineInput
                type={"number"}
                placeholder={"Minute read"}
                value={blogdata.minuteRead}
                name="minuteRead"
                onChangeHandler={updateblogdata}
                label={"Minute Read"}
                disabled={blogdata.published}
              />

              {/* Tags */}
              <div className="mb-14">
                <Select
                  allOptions={tagsToOptions(allTags)}
                  preSelected={tagsToOptions(blogdata.tags || [])}
                  onChangeHandler={updateTagHandler}
                  disabled={blogdata.published}
                />
                <label
                  className={`transform text-sm font-medium transition-all duration-300 ${
                    !!blogdata.tags.length
                      ? `opacity-100 ${
                          blogdata.published
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

create.auth = {
  roles: ["CREATOR"],
};

export default create;
