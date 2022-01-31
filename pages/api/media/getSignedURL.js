import nc from "next-connect";
import aws from "aws-sdk";

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
import { sanitizeRequest } from "../../../middleware/sanitizeRequest";

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

handler.post(async (req, res) => {
  const { contentType, filename } = req.body;
  let nameparts = filename.split(".");
  const extension = nameparts.pop();

  let name = nameparts.join(".") + "-" + Date.now() + "." + extension;

  const s3params = {
    ContentType: contentType,
    Key: name,
    Bucket: myBucket,
  };

  s3.getSignedUrl("putObject", s3params, async (err, url) => {
    if (err) {
      return res.status(500).send("Error while signing the url");
    }

    res.status(200).json({
      method: "put",
      url,
      fields: {},
    });
  });
});

export default handler;
