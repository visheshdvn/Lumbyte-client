import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Sidebar from "../../../components/adminPanel/leftSideBar";
// elements
import {
  PublishButton,
  SaveButton,
} from "../../../components/elements/buttons/buttons";

const update = ({ initialTagData }) => {
  const router = useRouter();
  console.log(initialTagData);

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
    } else {
      const { data } = await axios.patch(
        `/tags/update/${router.query.id}`,
        tagData
      );
      console.log(data);
      settagData({ ...tagData, ...data.content });
      toast.success("Updated");
    }
  };

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
      <div className="flex bg-offWhite h-screen">
        <Sidebar />
        <div className="admin-primary-layout">
          <div className="flow-root mb-10">
            <h1 className="text-2xl font-adminPrimary font-bold mb-1">
              Edit tag
            </h1>
            <div className="float-left font-adminPrimary text-sm font-semibold">
              {/* Last edited: <FormattedDate date={updatedContent.updated_at} /> */}
            </div>
            <div className="float-right">
              <PublishButton
                text="Publish"
                onClickHandler={() => toast.info("No action assigned.")}
              />
              <SaveButton text="Save" onClickHandler={saveTagData} />
            </div>
          </div>
          <div
            style={{ maxWidth: "1044px" }}
            className="bg-white border border-black-10 p-8"
          >
            <div className="flex">
              <div className="mb-8 flex-1 pr-8">
                <label className="font-adminPrimary text-base font-semibold required-field">
                  Tag Name
                </label>
                <input
                  type="text"
                  placeholder="enter slug"
                  className="bg-white w-full h-10 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-medium text-sm"
                  name="tagname"
                  value={tagData.tagname}
                  onChange={(e) => updateTagdata(e)}
                />
              </div>
              <div className="mb-8 flex-1 pr-8">
                <label className="font-adminPrimary text-base font-semibold required-field">
                  Color
                </label>
                <input
                  type="text"
                  placeholder="#000000"
                  className="bg-white w-full h-10 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-medium text-sm"
                  name="color"
                  value={tagData.color}
                  onChange={(e) => updateTagdata(e)}
                  maxLength={7}
                />
              </div>
            </div>
            <div className="">
              <div style={{ maxWidth: "450px" }} className="mb-8 pr-8">
                <label className="font-adminPrimary text-base font-semibold required-field">
                  Meta Description
                </label>
                <textarea
                  type="text"
                  placeholder="write under 150 characters..."
                  className="bg-white w-full h-28 focus:outline-0 border border-black-10 px-1 mt-1 font-raleway font-normal text-sm"
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

export default update;

export async function getServerSideProps({ params }) {
  const id = params.id;
  const { data } = await axios.get(`/tags?_where[id]=${id}`);

  if (data.length < 1) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  console.log(data);

  return {
    props: {
      initialTagData: data[0],
    },
  };
}
