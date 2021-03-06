import nc from "next-connect";
import prisma from "../../../../lib/prisma";
const { tags } = prisma;

// middlewares
import { sanitizeRequest } from "../../../../middleware/sanitizeRequest";
import { updatetagsvalidations } from "../../../../middleware/tags/createUpdateTag";

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
handler.use(sanitizeRequest());
handler.use((req, res, next) => {
  req.params = {};
  req.params.tagId = req.query.tagId;
  next();
});
// handler.use(resolveQueryParams());
handler.use(updatetagsvalidations());

// controller
handler.patch(async (req, res) => {
  const { tagId } = req.params;
  const { tagname, color, metaDescription, ogImg, ogAlt } = req.body;

  const updated_tag = await tags.update({
    where: {
      id: +tagId,
    },
    data: {
      tagname,
      color,
      metaDescription,
      ogImg,
      ogAlt,
    },
  });
  res.status(200).json({ content: updated_tag, msg: "updated" });
});

export default handler;
