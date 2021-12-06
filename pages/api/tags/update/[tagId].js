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

  const curr_tag = await tags.findUnique({
    select: {
      tagname: true,
      color: true,
      metaDescription: true,
      ogimg: true,
      ogalt: true,
    },
    where: {
      id: +tagId,
    },
  });

  // console.log("current post", curr_tag);
  const updated_tag = await tags.update({
    where: {
      id: +tagId,
    },
    data: {
      tagname: tagname === undefined ? curr_tag.tagname : tagname,
      color: color === undefined ? curr_tag.color : color,
      ogimg: ogimg === undefined ? curr_tag.ogimg : ogimg,
      ogalt: ogalt === undefined ? curr_tag.ogalt : ogalt,
      metaDescription:
        metaDescription === undefined
          ? curr_tag.metaDescription
          : metaDescription,
      upadted_at: new Date().toISOString(),
    },
  });
  res.status(200).json({ tag: updated_tag, msg: "updated" });
});

export default handler;
