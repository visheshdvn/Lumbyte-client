import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { tags } = new PrismaClient();

// middlewares
import {
  sanitizeRequest,
  // resolveQueryParams,
} from "../../../../middleware/sanitizeRequest";
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
  console.log(tagId);
  console.log(req.body);
  const { tagname, color, metaDescription, ogimg, ogalt } = req.body;

  const updated_tag = await tags.update({
    where: {
      id: +tagId,
    },
    data: {
      tagname,
      color,
      metaDescription,
      ogimg,
      ogalt,
    },
  });
  res.status(200).json({ content: updated_tag, msg: "updated" });
});

export default handler;
