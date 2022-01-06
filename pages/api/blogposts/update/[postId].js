import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts } = new PrismaClient();

// middlewares
import { sanitizeRequest } from "../../../../middleware/sanitizeRequest";
import { updateblogpostvalidations } from "../../../../middleware/blogposts/createBlogpost";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
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
    topicsId,
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

  console.log("currdata: ", currData);

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
          id: !author.id ? currData.authorId : author.id,
        },
      },
      // topics: {
      //   connect: {
      //     id: !topicsId ? currData.topicsId || undefined : topicsId,
      //   },
      // },
      tags: {
        set: tags,
      },
    },
  });
  res.status(200).json({ blogpost: updated_post, msg: "updated" });
});

export default handler;
