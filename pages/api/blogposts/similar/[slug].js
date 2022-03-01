import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts } = new PrismaClient();

// middlewares
import {
  sanitizeRequest,
  resolveQueryParams,
} from "../../../../middleware/sanitizeRequest";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

let slug;
handler.use(sanitizeRequest());
handler.use((req, res, next) => {
  slug = req.query.slug;
  next();
});
handler.use(resolveQueryParams());

handler.get(async (req, res) => {
  let { skip, take, _select, _where } = req.query;

  if (typeof _select === "string") {
    _select = [_select];
  } else if (!Array.isArray(_select)) {
    _select = null;
  }

  const { tags } = await blogposts.findUnique({
    select: {
      tags: {
        select: {
          tagname: true,
        },
      },
    },
    where: {
      slug,
    },
  });

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
      author:
        _select && Array.isArray(_select)
          ? _select.includes("author")
            ? true
            : false
          : true,
    },
    where: {
      published: false,
      slug: {
        not: slug,
      },
      featured:
        _where && _where.featured ? _where.featured === "true" : undefined,
      tags: {
        some: { OR: tags, published: true },
      },
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
