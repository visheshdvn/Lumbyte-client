import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { tags } = new PrismaClient();

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
  console.log("id", id);

  if (isNaN(id)) {
    return res.status(400).json({ msg: "Invalid id" });
  }

  const post = await tags.findUnique({
    where: { id: +id },
    select: {
      tagname: true,
    },
  });
  console.log(post);

  const { tagname } = post;
  // // validations
  let errors = [];

  if (!tagname || !tagname.trim()) {
    errors.push({
      field: "tagname",
      msg: "Tag name is required",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ status: "ERR", errors });
  }

  await tags.update({
    where: { id: +id },
    data: {
      published: true,
    },
  });

  return res.json({ msg: "blogpost published", status: "OK" });
});

export default handler;
