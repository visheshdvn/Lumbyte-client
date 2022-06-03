import nc from "next-connect";
import prisma from "../../../../lib/prisma";
const { blogposts } = prisma;

// middlewares

const handler = nc({
  onError: (err, req, res) => {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

handler.use((req, res, next) => {
  req.params = {};
  req.params.id = req.query.id;
  next();
});

handler.put(async (req, res) => {
  const { id } = req.params;

  // if (isNaN(id)) {
  //   return res.status(400).json({ msg: "Invalid id" });
  // }

  const post = await blogposts.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      slug: true,
      metaDescription: true,
      excerpt: true,
      banner: true,
      banneralt: true,
      tags: true,
      authorId: true,
    },
  });
  // console.log(post);

  const { metaDescription, excerpt, banner, banneralt, tags } = post;
  // validations
  let errors = [];

  if (!metaDescription || !metaDescription.trim()) {
    errors.push({
      field: "metaDescription",
      msg: "metaDescription is required",
    });
  }
  if (!excerpt || !excerpt.trim()) {
    errors.push({
      field: "excerpt",
      msg: "excerpt is required",
    });
  }
  if (!banner || !banner.trim()) {
    errors.push({
      field: "banner",
      msg: "banner is required",
    });
  }
  if (!banneralt || !banneralt.trim()) {
    errors.push({
      field: "banneralt",
      msg: "banneralt is required",
    });
  }

  if (tags.length === 0) {
    errors.push({
      field: "tags",
      msg: "tags are required",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ status: "ERR", errors });
  }

  await blogposts.update({
    where: { id: id },
    data: {
      published: true,
      published_at: new Date().toISOString(),
    },
  });

  return res.json({ msg: "blogpost published", status: "OK" });
});

export default handler;
