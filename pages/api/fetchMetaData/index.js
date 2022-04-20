import nc from "next-connect";
const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-title")(),
]);
import got from "got";

// middlewares;
import { resolveQueryParams } from "../../../middleware/sanitizeRequest";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error", success: 0 });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).json({ success: 0 });
  },
});

handler.use(resolveQueryParams());

handler.get(async (req, res) => {
  const { url } = req.query;

  const { body: html } = await got(url);
  const metadata = await metascraper({ html, url });

  res.status(200).json({
    success: 1,
    link: url,
    meta: { ...metadata, image: { url: metadata.image } },
  });
});

export default handler;
