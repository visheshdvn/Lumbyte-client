import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "./uploader";

const Ui = ({ api, data, config, readOnly, updateData }) => {
  const [files, setFiles] = useState([]);
  const [uiData, setUiData] = useState({ ...data });

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      // console.log("Accepted files", acceptedFiles);
      const file = acceptedFiles[0];
      const {
        responseData: { url },
      } = await uploadFile(file);

      setUiData({ ...data, file: { url } });
      updateData({ ...data, file: { url } });

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const editAltCaption = (e) => {
    setUiData({ ...uiData, [e.target.name]: e.target.value });
    updateData({ ...uiData, [e.target.name]: e.target.value });
  };

  const editableControls = (
    <>
      <div className="">
        <input
          value={uiData.alt}
          placeholder="enter alt text"
          name="alt"
          className="mb-2 w-full rounded-sm border border-zinc-200 py-1 text-center outline-none"
          onChange={editAltCaption}
        />
      </div>
      <div>
        <input
          value={uiData.caption}
          placeholder="Enter Image caption"
          name="caption"
          className="w-full rounded-sm border border-zinc-200 py-1 text-center outline-none"
          onChange={editAltCaption}
        />
      </div>
    </>
  );

  const readOnlyControls = (
    <>
      <div className="pt-1 text-center text-zinc-600">{uiData.caption}</div>
    </>
  );

  return (
    <div className="mb-8">
      {!readOnly && !uiData.file && (
        <div className="mb-4 h-44 w-full rounded-sm bg-zinc-50 p-1 text-center">
          <div
            {...getRootProps({ className: "dropzone" })}
            className="flex h-full items-center justify-center rounded-sm border text-zinc-400"
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      )}
      {uiData.file ? (
        <div className="mb-4 flex justify-center">
          <img src={uiData.file.url} alt={uiData.alt} className="" />
        </div>
      ) : null}

      {/* editable elements */}
      {!readOnly && editableControls}

      {/* readonly elements */}
      {readOnly && readOnlyControls}
    </div>
  );
};

export default Ui;
