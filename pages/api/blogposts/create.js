import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts } = new PrismaClient();

// middlewares
import {
  sanitizeRequest,
  resolveQueryParams,
} from "../../../middleware/sanitizeRequest";
import { createblogpostvalidations } from "../../../middleware/blogposts/createBlogpost";

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
handler.use(createblogpostvalidations());

handler.post(async (req, res) => {
  const {
    title,
    slug,
    metaDescription,
    excerpt,
    content,
    banner,
    banneralt,
    minuteRead,
    featured,
    topPick,
    date,
    authorId,
    tags,
    topicsId,
  } = req.body;

  BigInt.prototype.toJSON = function () {
    return Number(this);
  };

  const blog = await blogposts.create({
    data: {
      title,
      slug,
      metaDescription,
      excerpt,
      content,
      banner,
      banneralt,
      minuteRead,
      featured,
      topPick,
      date,
      author: authorId && {
        connect: {
          id: authorId,
        },
      },
      topics: topicsId && {
        connect: {
          id: topicsId,
        },
      },
      tags: tags && {
        connect: tags,
      },
      published: false,
    },
  });

  res.status(200).json({ blogpost: blog, status: "created" });
});

export default handler;
