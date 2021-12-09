import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { topics } = new PrismaClient();

// middlewares
import {
  sanitizeRequest,
} from "../../../middleware/sanitizeRequest";
import { createTopicsValidations } from "../../../middleware/topics/createUpdateTopics";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

handler.use(sanitizeRequest());
handler.use(createTopicsValidations());

handler.post(async (req, res) => {
  console.log("here");
  const { topicname, metaDescription, ogimg, ogalt } = req.body;

  BigInt.prototype.toJSON = function () {
    return Number(this);
  };

  const topic = await topics.create({
    data: {
      topicname,
      metaDescription,
      ogimg,
      ogalt,
    },
  });

  res.status(200).json({ topic, status: "created" });
});

export default handler;
