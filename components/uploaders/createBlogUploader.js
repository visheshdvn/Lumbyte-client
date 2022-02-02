import React from "react";
import Uppy from "@uppy/core";
import { Dashboard, useUppy } from "@uppy/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AwsS3 from "@uppy/aws-s3";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { developmentInstance } from "../../utils/axios";

const axios = developmentInstance;

const createUploader = ({ state, setState }) => {
  const uppy = useUppy(() => {
    return new Uppy({
      restrictions: {
        maxNumberOfFiles: 1,
        maxFileSize: 1048576 * 1, // 1048576 * n = n MB
        allowedFileTypes: [".jpg", ".jpeg", ".png", ".gif"],
      },
      autoProceed: false,
    })
      .use(AwsS3, {
        getUploadParameters: (file) => {
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
              const { data } = res;

              return {
                method: data.method,
                url: data.url,
                fields: data.fields,
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
      })
      .on("upload-success", async (file, data) => {
        const payload = {
          url: data.body.location,
          name: file.name,
        };

        try {
          await axios.post("/media/recordImage", payload, {
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
          });
          toast.success("Image successfully recorded!");
          setState({ ...state, banner: data.body.location });
        } catch (error) {
          toast.error("Error recording image");
        }
      })
      .on("upload-error", () => toast.error("Upload failed!"));
  }, []);

  return (
    <>
      <div id="MyWebcam">
        <Dashboard
          uppy={uppy}
          height={450}
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

export default createUploader;
