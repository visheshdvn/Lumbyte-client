import React from "react";
import Uppy from "@uppy/core";
import { Dashboard, useUppy } from "@uppy/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AwsS3 from "@uppy/aws-s3";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import axios from "../../utils/axios";

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
          return axios
            .post(
              "/media/getSignedUrlUppy",
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
              console.log("data", data);

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
          const res = await axios.post("/media/recordImage", payload, {
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
          });

          toast.success("Image successfully recorded!");
        } catch (error) {
          toast.error("Error recording image");
        }
      });
  }, []);

  uppy.on("upload-error", () => toast.error("Upload failed!"));

  return (
    <>
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
