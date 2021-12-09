import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts } = new PrismaClient();

// middlewares
import {
  sanitizeRequest,
  resolveQueryParams,
} from "../../../middleware/sanitizeRequest";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

handler.use(sanitizeRequest());
handler.use(resolveQueryParams());

handler.get(async (req, res) => {
  console.log("inside get blogposts");
  let { skip, take, _select, _where } = req.query;

  if (typeof _select === "string") {
    _select = [_select];
  } else if (!Array.isArray(_select)) {
    _select = null;
  }

  const blog = await blogposts.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt:
        _select && Array.isArray(_select)
          ? _select.includes("excerpt")
            ? true
            : false
          : true,
      metaDescription:
        _select && Array.isArray(_select)
          ? _select.includes("metaDescription")
            ? true
            : false
          : true,
      content:
        _select && Array.isArray(_select)
          ? _select.includes("content")
            ? true
            : false
          : true,
      banner:
        _select && Array.isArray(_select)
          ? _select.includes("banner")
            ? true
            : false
          : true,
      banneralt:
        _select && Array.isArray(_select)
          ? _select.includes("banneralt")
            ? true
            : false
          : true,
      minuteRead:
        _select && Array.isArray(_select)
          ? _select.includes("minuteRead")
            ? true
            : false
          : true,
      featured:
        _select && Array.isArray(_select)
          ? _select.includes("featured")
            ? true
            : false
          : true,
      topPick:
        _select && Array.isArray(_select)
          ? _select.includes("topPick")
            ? true
            : false
          : true,
      date:
        _select && Array.isArray(_select)
          ? _select.includes("date")
            ? true
            : false
          : true,
      tags:
        _select && Array.isArray(_select)
          ? _select.includes("tags")
            ? {
                select: {
                  tagname: true,
                  color: true,
                },
                where: {
                  published: true,
                },
              }
            : false
          : {
              select: {
                tagname: true,
                color: true,
              },
              where: {
                published: true,
              },
            },
      author: true,
    },
    where: {
      // published: true,
      id: _where && _where.id ? +_where.id || undefined : undefined,
      slug: _where && _where.slug ? encodeURIComponent(_where.slug) : undefined,
      featured:
        _where && _where.featured ? _where.featured === "true" : undefined,
      topPick: _where && _where.topPick ? _where.topPick === "true" : undefined,
      tags:
        _where && _where.tags
          ? { some: { OR: _where.tags, published: true } }
          : undefined,
    },
    skip: +skip || undefined,
    take: +take || undefined,
    orderBy: {
      id: "desc",
    },
  });

  res.status("200").json(blog);
});

export default handler;
