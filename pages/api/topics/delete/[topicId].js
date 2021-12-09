import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { topics } = new PrismaClient();

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

// let topicId;
handler.use((req, res, next) => {
  req.params = {};
  req.params.topicId = req.query.topicId;
  next();
});

// controller
handler.post(async (req, res) => {
  const { topicId } = req.params;

  const topic_exist = await topics.findUnique({
    where: {
      id: +topicId,
    },
  });

  if (!topic_exist) {
    return res.status(404).json({ msg: "no such topic", status: "error" });
  }

  const topic = await topics.delete({
    where: {
      id: +topicId,
    },
  });

  res.status(200).json({ topic, msg: "deleted" });
});

export default handler;
