// returned data format
//  {
//   link: "",
// };
import React, { useState } from "react";
import Image from "next/image";

const Ui = ({
  api,
  data,
  config,
  readOnly,
  updateLink,
  linkRef,
  titlupdateTitle,
  titleRef,
  updateDescription,
  descriptionRef,
  updateImageURL,
  imageURLRef,
  updateImageAlt,
  imageAltRef,
}) => {
  const [link, setLink] = useState(data.link);
  const [previewMode, setPreviewMode] = useState(false);

  const editableMarkup = (
    <>
      <div className="flex h-48 w-full flex-col items-center justify-center bg-zinc-50">
        <input
          value={link}
          ref={linkRef}
          onChange={() => {
            setLink(linkRef.current.value);
            updateLink();
          }}
          className="mb-1 w-4/5 rounded px-2 py-3 text-base outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={() => setPreviewMode(true)}
          className="font-primary mt-2 transform rounded-sm border-2 border-black px-1 text-sm font-bold transition-all duration-300 hover:bg-black hover:text-white"
        >
          Preview
        </button>
      </div>
    </>
  );

  const previewModeMarkup = (
    <div className="flex h-44 w-full border">
      <div className="flex-1 border">Title</div>
    </div>
  );

  const readOnlyMarkup = (
    <>
      <q className="mb-0 font-serif text-lg italic outline-none md:text-xl md:leading-8">
        {data.link}
      </q>
    </>
  );

  return (
    <div className="mb-8 dark:bg-zinc-800">
      {!readOnly && !previewMode && editableMarkup}
      {!readOnly && previewMode && previewModeMarkup}
      {readOnly && readOnlyMarkup}
    </div>
  );
};

export default Ui;
