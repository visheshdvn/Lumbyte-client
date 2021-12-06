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
      created_at: new Date().toISOString(),
      upadted_at: new Date().toISOString(),
      published: false,
      author: {
        connect: {
          id: "caa11e37-4321-47ae-a2a6-3b7db97c9533",
        },
      },
    },
  });

  res.status(200).json({ blogpost: blog, status: "created" });
});

export default handler;
