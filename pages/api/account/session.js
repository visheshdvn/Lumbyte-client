import nc from "next-connect";
// import { getToken } from "next-auth/jwt";
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
  //   const token = await getToken({ req, secret });
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ msg: "Unauthorized" });
  } else {
    return res.status(200).json({ msg: "hello", success: 1, session });
  }
});

export default handler;
