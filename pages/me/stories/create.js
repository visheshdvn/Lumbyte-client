import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import Router from "next/router";
// components
import EditBanner from "../../../components/uploaders/editBanner";
import CreateEditBlogpostLayout, {
  MetadataFields,
} from "../../../components/layouts/createEditBlogpost";
import { SaveButton } from "../../../components/elements/buttons/buttons";
// utils
import axios from "../../../utils/axios";
import HeadStories from "../../../components/headTags/public/me/stories";
import { optionsToTags, tagIdFromTags } from "../../../utils/mutateTags";
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
    const Tooltip = require("editorjs-tooltip");

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
  const [allTags, setAllTags] = useState([]);
  useEffect(async () => {
    let { data } = await axios.get("/tags?_select=tagname");
    setAllTags(data);
  }, []);

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
      // authorId: session.user.id,
      banner: uploadedUrl || "",
      title: titleRef.current.textContent,
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
    {/* head */}
    <HeadStories title="New Story" />

      {/* body */}
      <CreateEditBlogpostLayout title="Create new blogpost">
        <div className="flow-root">
          <div className="float-right mb-10">
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
                suppressContentEditableWarning={true}
                style={{ maxWidth: "720px" }}
                className="unstyled-input font-primary mb-10 w-full bg-white text-center text-5xl font-bold"
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
          <MetadataFields
            blogdata={blogdata}
            updateblogdata={updateblogdata}
            setBlogdata={setBlogdata}
            allTags={allTags}
            updateTagHandler={updateTagHandler}
          />
        </div>
      </CreateEditBlogpostLayout>
    </>
  );
};

create.auth = {
  roles: ["SUPERUSER", "ADMIN", "CREATOR"],
};

export default create;