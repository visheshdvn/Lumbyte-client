import nc from "next-connect";
import prisma from "../../../../lib/prisma";
const { tags } = prisma;

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

// let tagId;
handler.use((req, res, next) => {
  req.params = {};
  req.params.tagId = req.query.tagId;
  next();
});

// controller
handler.post(async (req, res) => {
  const { tagId } = req.params;

  const tag_exist = await tags.findUnique({
    where: {
      id: +tagId,
    },
  });

  if (!tag_exist) {
    return res.status(404).json({ msg: "no such tag", status: "error" });
  }

  const tag = await tags.delete({
    where: {
      id: +tagId,
    },
  });

  res.status(200).json({ tag, msg: "deleted" });
});

export default handler;
