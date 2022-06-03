import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const EditBanner = ({ setFile, bannerUrl }) => {
  const [files, setFiles] = useState([]);
  const [displayEditOptions, setDisplayEditOptions] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setDisplayEditOptions(true);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setFile(acceptedFiles[0]);
    },
    maxFiles: 1,
    noKeyboard: true,
  });

  const thumbs = files.map((file) => (
    <div className="aspect-w-16 aspect-h-10">
      <div className="absolute inset-0 overflow-hidden rounded">
        <div
          style={{
            backgroundImage: `url(${file.preview})`,
          }}
          className="banner-overlay-parent relative z-0 h-full w-full bg-cover bg-center"
        >
          <div
            onMouseEnter={(e) => (e.target.style.display = "block")}
            className="banner-overlay z-10 h-full w-full"
          >
            <div className="relative h-full w-full">
              <button
                className="absolute top-1/2 left-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 transform"
                onClick={() => {
                  setFile(null);
                  setDisplayEditOptions(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const dropzone = (
    <div className="h-full w-full p-2">
      <div
        {...getRootProps({ className: "dropzone" })}
        className=" h-full w-full"
      >
        <div className="flex h-full w-full items-center justify-center rounded border border-zinc-600 dark:border-neutral-300">
          <input {...getInputProps()} />
          <p className="font-primary cursor-pointer text-lg font-semibold text-zinc-600 dark:text-neutral-300 lg:text-xl">
            Drop image here, or click to browse.
          </p>
        </div>
      </div>
    </div>
  );

  const preview = (
    <div className="aspect-w-16 aspect-h-10">
      <div className="absolute inset-0 overflow-hidden rounded">
        <div
          style={{
            backgroundImage: `url(${bannerUrl})`,
          }}
          className="banner-overlay-parent relative z-0 h-full w-full bg-cover bg-center"
        ></div>
      </div>
    </div>
  );

  let ui;
  if (bannerUrl) {
    ui = preview;
  } else if (displayEditOptions) {
    ui = thumbs[0];
  } else {
    ui = dropzone;
  }

  return (
    <section className="relative mb-10 h-full w-full overflow-hidden rounded">
      {ui}
    </section>
  );
};

export default EditBanner;
