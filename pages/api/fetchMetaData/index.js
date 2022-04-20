import nc from "next-connect";
const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-title")(),
]);
import got from "got";

// middlewares
// import { resolveQueryParams } from "../../../middleware/sanitizeRequest";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error", success: 0 });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).json({ success: 0 });
  },
});

handler.get(async (req, res) => {
  //   const { url } = req.query;
  console.log("req.query", req.query);

  //   console.log("url", url);
  //   const { body: html } = await got(url);
  //   const metadata = await metascraper({ html, url });
  //   console.log("metadata", metadata);

  //   res.status(200).json({
  //     success: 1,
  //     link: url,
  //     meta: { ...metadata, image: { url: metadata.image } },
  //   });

  res.status(200).json({
    success: 1,
    meta: {
      title: "CodeX Team",
      description:
        "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
      image: {
        url: "https://codex.so/public/app/img/meta_img.png",
      },
    },
  });
});

export default handler;
