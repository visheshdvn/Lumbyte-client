import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { tags } = new PrismaClient();

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
  let { skip, take, _select, _where } = req.query;

  if (typeof _select === "string") {
    _select = [_select];
  } else if (!Array.isArray(_select)) {
    _select = null;
  }
  const tag = await tags.findMany({
    select: {
      id: true,
      tagname: true,
      color: true,
      metaDescription:
        _select && Array.isArray(_select)
          ? _select.includes("metaDescription")
            ? true
            : false
          : true,
      ogImg:
        _select && Array.isArray(_select)
          ? _select.includes("ogImg")
            ? true
            : false
          : true,
      ogAlt:
        _select && Array.isArray(_select)
          ? _select.includes("ogAlt")
            ? true
            : false
          : true,
      blogposts:
        _select && Array.isArray(_select)
          ? _select.includes("blogposts")
            ? {
                select: {
                  id: true,
                  slug: true,
                  excerpt: true,
                  title: true,
                  banner: true,
                  banneralt: true,
                  minuteRead: true,
                  featured: true,
                  topPick: true,
                  date: true,
                  author: {
                    select: {
                      id: true,
                      firstname: true,
                      lastname: true,
                      about: true,
                      dp: true,
                      dpalt: true,
                    },
                  },
                },
                where: {
                  published: true,
                  blocked: false,
                },
              }
            : false
          : false,
      published:
        _select && Array.isArray(_select)
          ? _select.includes("published")
            ? true
            : false
          : false,
    },
    where: {
      published: true,
      id: _where && _where.id ? +_where.id || undefined : undefined,
      tagname: _where && _where.tagname ? _where.tagname : undefined,
    },
    skip: +skip || undefined,
    take: +take || undefined,
    orderBy: {
      id: "desc",
    },
  });

  res.status("200").json(tag);
});

export default handler;
