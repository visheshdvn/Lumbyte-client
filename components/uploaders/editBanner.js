import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const EditBanner = ({ setFile }) => {
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
    <div className="absolute inset-0 overflow-hidden rounded">
      <div className="aspect-w-16 aspect-h-10">
        <div className="">
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
    </div>
  ));

  const dropzone = (
    <div className="flex items-center justify-center rounded border">
      <input {...getInputProps()} />
      <p className="cursor-pointer text-lg font-semibold lg:text-xl lg:font-normal xl:text-2xl">
        Drop image here, or click to browse.
      </p>
    </div>
  );

  return (
    <section
      style={{ maxWidth: "720px" }}
      className="relative mx-auto overflow-hidden rounded bg-zinc-50 p-2"
    >
      <div
        {...getRootProps({ className: "dropzone" })}
        className="aspect-w-16 aspect-h-10"
      >
        {!displayEditOptions && dropzone}
      </div>
      {/* preview */}
      {displayEditOptions && thumbs[0]}
    </section>
  );
};

export default EditBanner;
