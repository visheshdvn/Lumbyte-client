import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { user } = new PrismaClient();
import { signupValidations } from "../../../middleware/auth/checks";
import { hashPassword } from "../../../middleware/auth/encryptDecryptPassword";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

handler.use(signupValidations());
handler.use(hashPassword());

handler.post(async (req, res) => {
  const { email, password, username, firstname, lastname } = req.body;

  const now = new Date().toISOString();
  const newuser = await user.create({
    data: {
      email,
      username,
      firstname,
      lastname,
      upadted_at: now,
      role: username === "lumbytes" ? "superuser" : "public",
      publicAccount: {
        // connectOrCreate: {}
        create: {
          password,
          created_at: now,
          upadted_at: now,
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
      role: true,
      publicAccount: {
        select: {
          password: true,
        },
      },
    },
  });
  console.log(newuser);
  res.status(200).send("Success");
});

export default handler;
