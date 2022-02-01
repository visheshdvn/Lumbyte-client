import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { images } = new PrismaClient();

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});

handler.post(async (req, res) => {
  console.log(req.body);
  const { url, name } = req.body;

  const recordedImage = await images.create({
    data: {
      url,
      name: name,
    },
    select: {
      url: true,
      name: true,
    },
  });

  return res.status(200).json({ data: recordedImage, status: "OK" });
});

export default handler;
