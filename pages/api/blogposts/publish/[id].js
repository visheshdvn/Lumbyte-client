import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts, user } = new PrismaClient();

// middlewares

const handler = nc({
  onError: (err, req, res) => {
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
  console.log(req.params);
  const { id } = req.params;
  console.log("id", id);

  if (isNaN(id)) {
    return res.status(400).json({ msg: "Invalid id" });
  }

  const post = await blogposts.findUnique({
    where: { id: +id },
  });
  console.log(post);
  return res.json({ msg: "blogpost published" });
});

export default handler;
