import nc from "next-connect";
import prisma from "../../../lib/prisma";
const { user } = prisma;
import { signupValidations } from "../../../middleware/auth/checks";
import { hashPassword } from "../../../middleware/auth/encryptDecryptPassword";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ status: "Error", new_user: {} });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

handler.use(signupValidations());
handler.use(hashPassword());

handler.post(async (req, res) => {
  const { email, password, username, firstname, lastname } = req.body;

  const newuser = await user.create({
    data: {
      email,
      username,
      firstname,
      lastname,
      roles: username === "lumbytes" ? "SUPERUSER" : "PUBLIC",
      account: {
        create: {
          password,
        },
      },
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      username: true,
      dp: true,
      dpalt: true,
      about: true,
      email: true,
      roles: true,
      account: {
        select: {
          password: true,
        },
      },
    },
  });
  res.status(200).json({ status: "Success", new_user: newuser });
});

export default handler;
