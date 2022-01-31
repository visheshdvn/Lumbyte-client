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

// handler.use(sanitizeRequest());
// handler.use(resolveQueryParams());
// handler.use(createblogpostvalidations());

handler.post(async (req, res) => {
  console.log(req.body);
  const { url, name } = req.body;

  const recordedImage = await images.create({
    data: {
      url,
      name: name,
    },
    select: {
      url: true,
      name: true,
    },
  });

  return res.status(200).json({ data: recordedImage, status: "OK" });
});

export default handler;
