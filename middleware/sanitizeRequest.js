import qs from "qs";

export const sanitizeRequest = () => {
  return (req, res, next) => {
    //
    if (req.body.title) {
      req.body.title = req.body.title.trim();
    }
    if (req.body.minuteRead) {
      req.body.minuteRead = +req.body.minuteRead;
    }
    if (req.body.slug) {
      req.body.slug = req.body.slug.trim();
    }
    if (
      req.body.metaDescription &&
      typeof req.body.metaDescription === "string"
    ) {
      req.body.metaDescription = req.body.metaDescription.trim();
    }
    if (req.body.excerpt) {
      req.body.excerpt = req.body.excerpt.trim();
    }
    if (req.body.tagname) {
      req.body.tagname = req.body.tagname.trim();
    }
    if (req.body.topicname) {
      req.body.topicname = encodeURIComponent(req.body.topicname.trim());
    }
    next();
  };
};

export const resolveQueryParams = () => {
  return (req, res, next) => {
    let query = /\?(.*)/.exec(req.url);
    query = query && query[1];
    req.query = qs.parse(query);
    next();
  };
};

// export default sanitizeRequest;
