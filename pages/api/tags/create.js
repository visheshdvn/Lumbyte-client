import nc from "next-connect";
import prisma from "../../../lib/prisma";
const { tags } = prisma;

// middlewares
import {
  sanitizeRequest,
  resolveQueryParams,
} from "../../../middleware/sanitizeRequest";
import { createtagsvalidations } from "../../../middleware/tags/createUpdateTag";

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
handler.use(resolveQueryParams());
handler.use(createtagsvalidations());

handler.post(async (req, res) => {
  const { tagname, color, metaDescription, ogImg, ogTitle, ogAlt } = req.body;

  BigInt.prototype.toJSON = function () {
    return Number(this);
  };

  const tag = await tags.create({
    data: {
      tagname,
      color: color || undefined,
      metaDescription: metaDescription || `All about ${tagname}.`,
      ogImg: ogImg || undefined,
      ogTitle,
      ogAlt,
    },
    select: {
      id: true,
    },
  });

  res.status(200).json({ data: { ...tag }, status: "created" });
});

export default handler;
