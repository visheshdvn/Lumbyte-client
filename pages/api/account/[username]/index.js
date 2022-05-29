import nc from "next-connect";
import prisma from "../../../../lib/prisma";
// import { getToken } from "next-auth/jwt";
// import { getSession } from "next-auth/react";

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
  //   const token = await getToken({ req, secret });
  //   const session = await getSession({ req, secret });
  //   if (!session) {
  //     return res.status(401).json({ msg: "Unauthorized" });
  //   } else {
  //     return res.status(200).json({ msg: "hello", success: 1, token, session });
  //   }
  const { user } = prisma;

  const user_data = await user.findUnique({
    where: {
      username: req.query.username,
    },
    select: {
      firstname: true,
      lastname: true,
      email: true,
      username: true,
      about: true,
      account: {
        select: {
          twitter: true,
          linkedin: true,
          github: true,
        },
      },
    },
  });

  if (user_data) {
    res.status(200).json({ success: 1, msg: "User Found", data: user_data });
  } else {
    res.status(404).json({ success: 0, msg: "User not found", data: {} });
  }
});

export default handler;
