import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { blogposts } = new PrismaClient();

// middlewares
import {
  sanitizeRequest,
  resolveQueryParams,
} from "../../../../middleware/sanitizeRequest";
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
    authorId,
  } = req.body;

  const curr_blogpost = await blogposts.findUnique({
    select: {
      title: true,
      slug: true,
      metaDescription: true,
      excerpt: true,
      content: true,
      banner: true,
      banneralt: true,
      minuteRead: true,
      featured: true,
      topPick: true,
      date: true,
      authorId: true,
    },
    where: {
      id: +postId,
    },
  });

  // console.log("current post", curr_blogpost);
  const updated_post = await blogposts.update({
    where: {
      id: +postId,
    },
    data: {
      title: title === undefined ? curr_blogpost.title : title,
      slug: slug === undefined ? curr_blogpost.slug : slug,
      excerpt: excerpt === undefined ? curr_blogpost.excerpt : excerpt,
      content: content === undefined ? curr_blogpost.content : content,
      featured: featured === undefined ? curr_blogpost.featured : featured,
      topPick: topPick === undefined ? curr_blogpost.topPick : topPick,
      date: date === undefined ? curr_blogpost.date : date,
      banner: banner === undefined ? curr_blogpost.banner : banner,
      banneralt: banneralt === undefined ? curr_blogpost.banneralt : banneralt,
      metaDescription:
        metaDescription === undefined
          ? curr_blogpost.metaDescription
          : metaDescription,
      minuteRead:
        minuteRead === undefined ? curr_blogpost.minuteRead : minuteRead,
      upadted_at: new Date().toISOString(),
      authorId: authorId === undefined ? curr_blogpost.authorId : authorId,
    },
  });
  res.status(200).json({ blogpost: updated_post, msg: "updated" });
});

export default handler;
