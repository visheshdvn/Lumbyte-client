import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts, tags } = new PrismaClient();

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
  req.params = {};
  req.params.id = req.query.id;
  next();
});

handler.put(async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ msg: "Invalid id" });
  }

  const tag = await tags.findUnique({
    where: { id: +id },
  });

  if (!tag) {
    return res.status(400).json({ msg: "No Blogpost found", status: "ERR" });
  }

  await tags.update({
    where: { id: +id },
    data: {
      published: false,
    },
  });

  return res.json({ msg: "blogpost unPublished", status: "OK" });
});

export default handler;
