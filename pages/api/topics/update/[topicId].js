import { PrismaClient } from "@prisma/client";
import nc from "next-connect";

const { topics } = new PrismaClient();

// middlewares
import { sanitizeRequest } from "../../../../middleware/sanitizeRequest";
import { updateTopicsValidations } from "../../../../middleware/topics/createUpdateTopics";

const handler = nc({
  onError: (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({ msg: "Server Error" });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Invalid request");
  },
});

// let topicId;
handler.use(sanitizeRequest());
handler.use((req, res, next) => {
  req.params = {};
  req.params.topicId = req.query.topicId;
  next();
});
// handler.use(resolveQueryParams());
handler.use(updateTopicsValidations());

// controller
handler.patch(async (req, res) => {
  const { topicId } = req.params;
  console.log(topicId);
  console.log(req.body);
  const { topicname, metaDescription, ogimg, ogalt } = req.body;

  const updated_tag = await topics.update({
    where: {
      id: +topicId,
    },
    data: {
      topicname,
      metaDescription,
      ogimg,
      ogalt,
    },
  });
  res.status(200).json({ tag: updated_tag, msg: "updated" });
});

export default handler;
