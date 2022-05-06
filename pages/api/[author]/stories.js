import nc from "next-connect";
import prisma from "../../../utils/prisma";
// import { resolveQueryParams } from "../../../middleware/sanitizeRequest";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

// handler.use((req, res, next) => {
//   console.log(req.query);
//   return res.status(200).json({ msg: "Hello World" });
// });

// handler.use(resolveQueryParams());

handler.get(async (req, res) => {
  const { skip, take, author } = req.query;
  if (!author) {
    return res
      .status(404)
      .json({ success: 0, msg: "Invalid request", data: {} });
  }
  const { blogposts } = prisma;
  const posts = await blogposts.findMany({
    where: {
      author: {
        username: author,
      },
    },
    select: {
      banner: true,
      banneralt: true,
      published_at: true,
      minuteRead: true,
      slug: true,
      title: true,
      tags: {
        select: {
          tagname: true,
          color: true,
        },
      },
      excerpt: true,
      author: {
        select: {
          username: true,
        },
      },
    },
    skip: +skip || 0,
    take: +take || 20,
  });
  return res.status(200).json({ msg: "hello", success: 1, data: posts });
});

export default handler;
