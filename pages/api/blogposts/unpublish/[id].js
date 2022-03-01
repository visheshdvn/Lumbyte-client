import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts } = new PrismaClient();

// middlewares

const handler = nc({
  onError: (err, req, res) => {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

handler.use((req, res, next) => {
  console.log("req.query", req.query);
  req.params = {};
  req.params.id = req.query.id;
  next();
});

handler.put(async (req, res) => {
  const { id } = req.params;

  await blogposts.update({
    where: { id },
    data: {
      published: false,
    },
  });

  return res.json({ msg: "blogpost unPublished", status: "OK" });
});

export default handler;
