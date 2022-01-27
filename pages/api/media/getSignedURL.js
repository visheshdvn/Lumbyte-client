import { PrismaClient } from "@prisma/client";
import nc from "next-connect";
import aws from "aws-sdk";

const { images } = new PrismaClient();

const AWS_REGION = process.env.AWS_REGION;
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
  signatureVersion: "v4",
});

let s3 = new aws.S3();
const myBucket = process.env.AWS_S3_BUCKET;

// middlewares
import {
  sanitizeRequest,
  resolveQueryParams,
} from "../../../middleware/sanitizeRequest";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

handler.use(sanitizeRequest());
// handler.use(resolveQueryParams());
// handler.use(createblogpostvalidations());

handler.post(async (req, res) => {
  console.log("here");
  console.log(req.body);
  const { contentType, filename } = req.body;

  const s3params = {
    ContentType: contentType,
    Key: filename,
    Bucket: myBucket,
  };

  s3.getSignedUrl("putObject", s3params, async (err, url) => {
    if (err) {
      return res.status(500).send("Error while signing the url");
    }

    try {
      const imageURL = `https://${myBucket}.s3.${AWS_REGION}.amazonaws.com/${filename}`;
      const recordedImage = await images.create({
        data: {
          url: imageURL,
          name: filename,
        },
        select: {
          url: true,
          name: true,
        },
      });

      console.log("Recorded image", recordedImage);
      res.status(200).json({
        accessData: {
          accessurl: recordedImage.url,
          filename: recordedImage.name,
        },
        // IMPORTANT!! do not alter the uploader object
        uploader: {
          method: "put",
          url,
          fields: {},
        },
      });
    } catch (error) {
      res.status(500).send("Error while uploading image");
    }
  });

  // try {
  //   const recordedImage = await images.create({
  //     data: {
  //       url: req.body.url,
  //     },
  //     select: {
  //       id: true,
  //       url: true,
  //       created_at: true,
  //     },
  //   });
  //   console.log(recordedImage);
  //   return res.status(200).json({ data: recordedImage, status: "success" });
  // } catch (err) {
  //   return res.status(500).json({ data: {}, status: "failure" });
  // }
  // return res.status(200).json({ data: {}, status: "success" });
});

export default handler;
