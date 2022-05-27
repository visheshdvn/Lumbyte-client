import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
// third party libraries
import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
// components
import EditBanner from "../../../components/uploaders/editBanner";
import ImageTool from "../../../components/editor-tools/image/index";
import Quote from "../../../components/editor-tools/quote/quote";
import PageLink from "../../../components/editor-tools/page-link/link";
import CreateEditBlogpostLayout, {
  MetadataFields,
} from "../../../components/layouts/createEditBlogpost";
// elements
import {
  PublishButton,
  SaveButton,
  UnPublishButton,
} from "../../../components/elements/buttons/buttons";
// utilities
import { optionsToTags, tagIdFromTags } from "../../../utils/mutateTags";
import {
  publishBlogpost,
  unPublishBlogpost,
} from "../../../utils/togglePublish";
import HeadStories from "../../../components/headTags/public/me/stories/index"; 
import axios from "../../../utils/axios";
import uploadImage from "../../../utils/uploadImage/uploader";

let editor;
// const prisma = new PrismaClient();
// const { blogposts, tags } = prisma;
import prisma from "../../../utils/prisma";

const update = ({ initialContent, allTags }) => {
  const router = useRouter();
  const titleRef = useRef(null);
  const { theme } = useTheme();

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
      readOnly: false,
      logLevel: "ERROR",
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
      <HeadStories title="Edit Story." />

      {/* Body */}
      <CreateEditBlogpostLayout
        title="Edit Blogpost"
        updated_at={updatedContent.updated_at}
      >
        <div className="mb-10 flow-root">
          <div className="float-right">
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
                className="unstyled-input font-primary mb-10 w-full bg-white text-center text-5xl font-bold leading-tight"
                suppressContentEditableWarning={true}
              >
                {updatedContent.title}
              </div>
            </div>

            {/* Image uploader / Management */}
            <div style={{ maxWidth: "720px" }} className="mx-auto mb-8">
              <EditBanner setFile={setFile} bannerUrl={updatedContent.banner} />
            </div>

            {/* editor holder */}
            <div
              id="content-editor"
              className="editorjs-editable col-span-2 font-serif"
            ></div>
          </div>

          {/* metadata column */}
          <MetadataFields
            blogdata={updatedContent}
            updateblogdata={updateblogdata}
            allTags={allTags}
            setBlogdata={setUpdateContent}
            updateTagHandler={updateTagHandler}
          />
        </div>
      </CreateEditBlogpostLayout>
    </>
  );
};

update.auth = {
  roles: ["SUPERUSER", "ADMIN", "CREATOR"],
};

export default update;

export async function getServerSideProps({ params }) {
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

  await prisma.$disconnect();

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
      allTags,
    },
  };
}
