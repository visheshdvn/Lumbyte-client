import nc from "next-connect";
import prisma from "../../../../lib/prisma";
import { getSession } from "next-auth/react";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

handler.get(async (req, res) => {
  let { skip, take, username, includePublishStatus, status } = req.query;
  includePublishStatus = includePublishStatus === "true";

  if (!username) {
    return res
      .status(404)
      .json({ success: 0, msg: "Invalid request", data: {} });
  }

  let allowed = false;
  if (includePublishStatus) {
    const session = await getSession({ req });
    allowed = session && session.user.username === username;
  }

  let publishedStatus = undefined;
  if (status === "draft") {
    publishedStatus = false;
  } else if (status === "live") {
    publishedStatus = true;
  }

  const { blogposts } = prisma;
  const posts = await blogposts.findMany({
    where: {
      author: {
        username,
      },
      published: allowed ? publishedStatus : true,
    },
    select: {
      id: allowed,
      banner: true,
      banneralt: true,
      published_at: true,
      updated_at: true,
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
      published: allowed,
      author: {
        select: {
          username: true,
        },
      },
    },
    skip: +skip || 0,
    take: +take || 20,
    orderBy: {
      n: "desc",
    },
  });

  return res.status(200).json({ msg: "hello", success: 1, data: posts });
});

export default handler;
