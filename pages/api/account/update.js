import nc from "next-connect";
import prisma from "../../../utils/prisma";
import { getSession } from "next-auth/react";

// middlewares
import { sanitizeUser } from "../../../middleware/sanitizeRequest";
import { editUserValidations } from "../../../middleware/userAndProfile/checks";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

// middlewares
handler.use(sanitizeUser());
handler.use(editUserValidations());

handler.patch(async (req, res) => {
  const { username, firstname, lastname, email, about, id } = req.body;
  const { user } = prisma;
  const session = await getSession({ req });
  
  if (!session) {
    return res.status(401).json({ success: 0, msg: "Unauthorized", data: {} });
  }
  if (session.user.id !== id) {
    return res.status(401).json({ success: 0, msg: "Unauthorized", data: {} });
  }

  const data = await user.update({
    where: {
      id: session.user.id,
    },
    data: {
      firstname,
      lastname,
      username,
      email,
      about,
    },
    select: {
      firstname: true,
      lastname: true,
      username: true,
      email: true,
      about: true,
    },
  });
  res.status(200).json({ success: 1, data, msg: "success" });
});

export default handler;
