// returned data format
//  {
//   link: "";
//   title: ""
//   imageURL: ""
//   description: ""
// };

import React, { useState } from "react";
import { KeyPressEventHandler, PasteEventHandler } from "./handlers";

const Ui = ({
  api,
  data,
  config,
  readOnly,
  linkRef,
  updateLink,
  updateTitle,
  updateDescription,
  updateImageURL,
}) => {
  const [link, setLink] = useState(data.url || "");
  const [fetchStatus, setFetchStatus] = useState("neutral");
  const [displayPreview, setDsiplayPreview] = useState(
    !!Object.keys(data).length || false
  );
  const [errorMsg, setErrorMsg] = useState("Error");

  let responseClasses;
  if (fetchStatus === "neutral") {
    responseClasses = "border-gray-300 text-black";
  } else {
    responseClasses = "border-red-600 text-red-600";
  }

  function handleData(data) {
    if (data.success !== 1) {
      setFetchStatus("failure");
      setErrorMsg(data.msg);
      return;
    }

    const {
      meta: { title, description, url, imageURL },
    } = data;

    updateLink(url);
    updateTitle(title);
    updateDescription(description);
    updateImageURL(imageURL);
    setDsiplayPreview(true);
  }

  const editableMarkup = (
    <>
      <form onSubmit={() => {}} className="w-full text-center">
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          ref={linkRef}
          className={`mb-1 w-full rounded border px-2 py-3 text-base outline-none ${responseClasses}`}
          onKeyDown={async (e) => {
            if (e.key !== "Enter") {
              return;
            }
            const data = await KeyPressEventHandler(e);
            handleData(data);
          }}
          // onPaste={async (e) => {
          //   const data = await PasteEventHandler(e, link);
          // }}
          placeholder='enter the link then press "Enter"'
        />
        <p
          className={`text-sm text-red-600 ${
            fetchStatus === "failure" ? "block" : "hidden"
          }`}
        >
          {errorMsg}
        </p>
      </form>
    </>
  );

  const readOnlyMarkup = (
    <a
      href={data.url}
      rel="nofollow noindex noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <div className="mb-10 flex overflow-hidden rounded border shadow dark:border-zinc-700 dark:bg-black">
        <div className="flex-1 p-6">
          <div className="flex h-full flex-col justify-between">
            <h3 className="font-primary remove-decoration mb-2 text-xl font-bold text-black decoration-white dark:text-white lg:text-xl">
              {data.title}
            </h3>
            <p
              style={{ fontSize: "15px" }}
              className="md:line-clamp-2 line-clamp-1 leading-normal text-black dark:text-zinc-300"
            >
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex items-center py-2 pr-2">
          <div
            style={{ backgroundImage: `url(${data.imageURL})` }}
            className="aspect-1 hidden rounded bg-cover bg-center sm:block sm:h-28 md:h-32"
          ></div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="mb-8 dark:bg-zinc-800">
      {!readOnly && !displayPreview && editableMarkup}
      {!readOnly && displayPreview && readOnlyMarkup}
      {readOnly && readOnlyMarkup}
    </div>
  );
};

export default Ui;
