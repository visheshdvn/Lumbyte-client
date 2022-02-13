import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const prisma = new PrismaClient();
const { blogposts, user } = prisma;

// middlewares
import { sanitizeRequest } from "../../../../middleware/sanitizeRequest";
import { updateblogpostvalidations } from "../../../../middleware/blogposts/createBlogpost";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

// middlewares
handler.use(sanitizeRequest());
handler.use((req, res, next) => {
  req.params = {};
  req.params.postId = req.query.postId;
  next();
});
// handler.use(resolveQueryParams());
handler.use(updateblogpostvalidations());

handler.patch(async (req, res) => {
  console.log("inside edit")
  const { postId } = req.params;
  // implement express validator
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
    author,
    tags,
  } = req.body;

  const currData = await blogposts.findUnique({
    select: {
      authorId: true,
      topicsId: true,
    },
    where: {
      id: +postId,
    },
  });

  let lumbytesUID;
  if (!author) {
    lumbytesUID = await user.findUnique({
      select: {
        id: true,
      },
      where: {
        username: "lumbytes",
      },
    });
  }

  const updated_post = await blogposts.update({
    where: {
      id: +postId,
    },
    data: {
      title,
      slug,
      excerpt,
      content,
      featured,
      topPick,
      date,
      banner,
      banneralt,
      metaDescription,
      minuteRead,
      author: {
        connect: {
          id: !author.id ? currData.authorId || lumbytesUID.id : author.id,
        },
      },
      tags: {
        set: tags,
      },
    },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      metaDescription: true,
      content: true,
      minuteRead: true,
      topPick: true,
      featured: true,
      date: true,
      tags: {
        select: {
          id: true,
          tagname: true,
        },
      },
      author: true,
      banner: true,
      banneralt: true,
      updated_at: true,
      published: true,
    },
  });
  res.status(200).json({ blogpost: updated_post, msg: "updated" });
});

export default handler;
