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
    res
      .status(500)
      .json({ msg: "Server Error! Please try again.", success: 0 });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).json({ success: 0, msg: "Not Found" });
  },
});

handler.post(async (req, res) => {
  const { url } = req.body;

  let metadata;
  try {
    const { body: html } = await got(url);
    metadata = await metascraper({ html, url });
  } catch (error) {
    return res.status(500).json({ success: 0, msg: "Invalid URL" });
  }

  if (!metadata.title) {
    return res.status(404).json({ success: 0, msg: "URL data not found." });
  }

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
