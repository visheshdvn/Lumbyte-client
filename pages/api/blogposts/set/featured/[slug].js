import nc from "next-connect";
import { getSession } from "next-auth/react";
import prisma from "../../../../../lib/prisma";

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
//   req.params = {};
//   req.params.id = req.query.id;
//   next();
// });

handler.patch(async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ success: 0, data: {} });
  }

  const roles = session?.user.roles || [];
  if (!(roles.includes("ADMIN") || roles.includes("SUPERUSER"))) {
    return res.status(401).json({ success: 0, data: {} });
  }

  const { blogposts } = prisma;
  const { slug } = req.query;
  const updatedData = await blogposts.update({
    where: {
      slug,
    },
    data: {
      featured: req.body?.featured,
    },
    select: {
      slug: true,
      featured: true,
    },
  });

  return res.status(200).json({ success: 1, data: updatedData });
});

export default handler;
