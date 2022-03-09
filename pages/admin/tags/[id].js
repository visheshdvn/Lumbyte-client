import React, { useState } from "react";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import _ from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Sidebar from "../../../components/elements/sideBar/leftSideBar";
// elements
import {
  PublishButton,
  SaveButton,
  UnPublishButton,
} from "../../../components/elements/buttons/buttons";
import { AdminInlineTextInput } from "../../../components/elements/input/text";
// utils
import { HeadTags } from "../../../utils/headTags/admin/meta";
import axios from "../../../utils/axios";

const { tags } = new PrismaClient();

const Update = ({ initialTagData }) => {
  const router = useRouter();

  const [tagData, settagData] = useState({
    ...initialTagData,
  });

  function updateTagdata(e) {
    settagData({
      ...tagData,
      [e.target.name]: e.target.value,
    });
  }

  const saveTagData = async () => {
    const noChange = _.isEqual(initialTagData, tagData);

    // TODO - validate client side data

    if (noChange) {
      toast.info("no change in the content");
      return;
    }

    const { data } = await axios.patch(
      `/tags/update/${router.query.id}`,
      tagData
    );

    settagData({ ...tagData, ...data.content });
    toast.success("Updated");
  };

  return (
    <>
      {/* head */}
      <HeadTags title="Edit tag" />

      {/* body */}
      <div className="bg-offWhite flex h-screen">
        <Sidebar />
        <div className="admin-primary-layout">
          <div className="mb-10 flow-root">
            <h1 className="font-adminPrimary mb-1 text-2xl font-bold">
              Edit tag
            </h1>
            <div className="font-adminPrimary float-left text-sm font-semibold">
              {/* Last edited: <FormattedDate date={updatedContent.updated_at} /> */}
            </div>
            <div className="float-right">
              {!tagData.published ? (
                <PublishButton
                  text="Publish"
                  onClickHandler={() => toast.info("No action assigned.")}
                />
              ) : (
                <UnPublishButton
                  text="unPublish"
                  onClickHandler={() => toast.info("No action assigned")}
                />
              )}

              <SaveButton text="Save" onClickHandler={saveTagData} />
            </div>
          </div>
          <div
            style={{ maxWidth: "1044px" }}
            className="border-black-10 border bg-white p-8"
          >
            <div className="flex">
              <AdminInlineTextInput
                label="Tag Name"
                name="tagname"
                value={tagData.tagname}
                onChangeHandler={updateTagdata}
                placeholder="Enter tag name"
                required
              />
              <AdminInlineTextInput
                label="Color"
                name="color"
                value={tagData.color}
                onChangeHandler={updateTagdata}
                placeholder="default: #3B82F6"
                maxLength={7}
              />
            </div>
            <div className="flex">
              <AdminInlineTextInput
                label="Og Image"
                name="ogimg"
                value={tagData.ogimg}
                onChangeHandler={updateTagdata}
                placeholder="Enter opengraph image url"
              />
              <AdminInlineTextInput
                label="Og Alt text"
                name="ogAlt"
                value={tagData.ogAlt}
                onChangeHandler={updateTagdata}
                placeholder="Enter opengraph alt text"
              />
            </div>
            <div className="flex">
              <AdminInlineTextInput
                label="Og Title"
                name="ogTitle"
                value={tagData.ogTitle}
                onChangeHandler={updateTagdata}
                placeholder="Enter opengraph Title"
              />
            </div>
            <div className="">
              <div style={{ maxWidth: "450px" }} className="mb-8 pr-8">
                <label className="font-adminPrimary required-field text-base font-semibold">
                  Meta Description
                </label>
                <textarea
                  type="text"
                  placeholder="write under 150 characters..."
                  className="border-black-10 font-raleway mt-1 h-28 w-full border bg-white px-1 text-sm font-normal focus:outline-0"
                  name="metaDescription"
                  value={tagData.metaDescription}
                  onChange={(e) => updateTagdata(e)}
                  maxLength={150}
                />
              </div>
            </div>
            <div className="mb-8 flex"></div>
          </div>
        </div>
      </div>
    </>
  );
};

Update.auth = {
  roles: ["SUPERUSER", "ADMIN"],
};

export default Update;

export async function getServerSideProps({ params }) {
  const id = params.id;
  if (!parseInt(id)) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const data = await tags.findUnique({
    where: { id: +id },
    select: {
      id: true,
      tagname: true,
      color: true,
      metaDescription: true,
      ogimg: true,
      ogTitle: true,
      published: true,
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

  return {
    props: {
      initialTagData: data,
    },
  };
}
