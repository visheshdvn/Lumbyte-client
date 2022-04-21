import nc from "next-connect";
const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-title")(),
]);
import got from "got";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error", success: 0 });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).json({ success: 0 });
  },
});

handler.post(async (req, res) => {
  const { url } = req.body;

  const { body: html } = await got(url);
  const metadata = await metascraper({ html, url });
  console.log("metadata", metadata);

  res.status(200).json({
    success: 1,
    meta: {
      url,
      imageURL: metadata.image,
      title: metadata.title,
      description: metadata.description,
    },
  });
});

export default handler;
