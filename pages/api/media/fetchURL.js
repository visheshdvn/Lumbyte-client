import nc from "next-connect";

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
  const { url } = req.body;

  return res.status(200).json({
    success: 1,
    file: {
      url,
    },
  });
});

export default handler;
