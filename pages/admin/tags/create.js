import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
// components
import Sidebar from "../../../components/elements/sideBar/leftSideBar";
import EditCreateTags, {
  DataEntryCard,
} from "../../../components/layouts/editCreateTags";
// elements
import {
  PublishButton,
  SaveButton,
  UnPublishButton,
} from "../../../components/elements/buttons/buttons";
import { AdminInlineTextInput } from "../../../components/elements/input/text";
// utilities
import axios from "../../../utils/axios";
import { HeadTags } from "../../../utils/headTags/admin/meta";

const createTag = ({}) => {
  const [tagData, settagData] = useState({
    tagname: "",
    color: "",
    metaDescription: "",
    ogImg: "",
    ogTitle: "",
  });

  function updateTagdata(e) {
    settagData({
      ...tagData,
      [e.target.name]: e.target.value,
    });
  }

  const createTag = async () => {
    // TODO - validate client side data

    if (!tagData.tagname) {
      toast.info("tagname invalid");
      return;
    }

    let reqObj = { ...tagData };

    if (!tagData.color) {
      settagData({ ...tagData, color: "#3B82F6" });
    }

    try {
      const {
        data: { data },
      } = await axios.post("/tags/create", reqObj);
      // settagData({ ...tagData, ...data.data });
      toast.success("Created successfully.");
      Router.push(`/admin/tags/${data.id}`);
    } catch (err) {
      console.log(err.toJSON());
      toast.error("some error.");
    }
  };

  return (
    <>
      {/* head */}
      <HeadTags title="Create Tag" />

      {/* body */}
      <EditCreateTags title="Create new tag.">
        <div className="flow-root">
          <div className="float-right">
            <SaveButton text="Save" onClickHandler={createTag} />
          </div>
        </div>

        {/* data entry card */}
        <DataEntryCard tagData={tagData} updateTagdata={updateTagdata} />
      </EditCreateTags>
    </>
  );
};

createTag.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

export default createTag;
