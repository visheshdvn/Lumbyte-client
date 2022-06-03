import nc from "next-connect";
import prisma from "../../../lib/prisma";
const { topics } = prisma;

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
  console.log(req.query);
  let { skip, take, _select, _where } = req.query;

  if (typeof _select === "string") {
    _select = [_select];
  } else if (!Array.isArray(_select)) {
    _select = null;
  }

  const topic = await topics.findMany({
    select: {
      id: true,
      topicname: true,
      metaDescription:
        _select && Array.isArray(_select)
          ? _select.includes("metaDescription")
            ? true
            : false
          : true,
      ogimg:
        _select && Array.isArray(_select)
          ? _select.includes("ogimg")
            ? true
            : false
          : true,
      ogalt:
        _select && Array.isArray(_select)
          ? _select.includes("ogalt")
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
    },
    where: {
      //   published: true,
      id: _where && _where.id ? +_where.id || undefined : undefined,
      topicname:
        _where && _where.topicname
          ? encodeURIComponent(_where.topicname)
          : undefined,
    },
    skip: +skip || undefined,
    take: +take || undefined,
    orderBy: {
      id: "desc",
    },
  });

  res.status("200").json({ topic, status: "success" });
});

export default handler;
