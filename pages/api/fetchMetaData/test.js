import nc from "next-connect";
const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-title")(),
]);
// import got from "got";

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
  console.log("url", url);

  res.status(200).json({
    success: 1,
    meta: {
      url: "https://www.google.com",
      imageURL: "https://codex.so/public/app/img/meta_img.png",
      title: "Test Title",
      description: "I am the description.",
    },
  });
});

export default handler;
