import React from "react";
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import Tus from "@uppy/tus";
import { Dashboard, useUppy } from "@uppy/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AwsS3 from "@uppy/aws-s3";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
// import axios from "axios";
import { developmentInstance } from "../../utils/axios";

const axios = developmentInstance;

const uppyMedia = () => {
  const uppy = useUppy(() => {
    return new Uppy({
      restrictions: {
        maxNumberOfFiles: 10,
        maxFileSize: 1048576 * 1.5 * 10,
        allowedFileTypes: [".jpg", ".jpeg", ".png", ".gif"],
      },
      autoProceed: false,
    })
      .use(AwsS3, {
        getUploadParameters: (file) => {
          // return fetch("/api/media/upload", {
          //   method: "POST",
          //   headers: {
          //     accept: "application/json",
          //     "content-type": "application/json",
          //   },
          //   body: {
          //     filename: file.name,
          //     contentType: file.type,
          //     metadata: {
          //       name: file.meta["name"],
          //       caption: file.meta["caption"],
          //     },
          //   },
          // })
          return axios
            .post(
              "/media/getSignedURL",
              {
                filename: file.name,
                contentType: file.type,
                metadata: {
                  name: file.meta["name"],
                  caption: file.meta["caption"],
                },
              },
              {
                headers: {
                  accept: "application/json",
                  "content-type": "application/json",
                },
              }
            )
            .then((res) => {
              console.log("data", res);
              const {
                data: { uploader },
              } = res;

              return {
                method: uploader.method,
                url: uploader.url,
                fields: uploader.fields,
                headers: {
                  "Content-Type": file.type,
                },
              };
            });
        },
      })
      .on("complete", (result) => {
        if (result.successful.length === 0) {
          return toast.error("Upload failed");
        }
        toast.success("Upload complete!");
      });
  }, []);

  uppy.on("upload-error", () => toast.error("Upload failed!"));

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
      <div id="MyWebcam">
        <Dashboard
          uppy={uppy}
          height={430}
          showProgressDetails={true}
          closeModalOnClickOutside={true}
          proudlyDisplayPoweredByUppy={false}
          metaFields={[
            {
              id: "caption",
              name: "Caption",
              placeholder: "Briefly describe what the file contains",
            },
          ]}
        />
      </div>
    </>
  );
};

export default uppyMedia;
