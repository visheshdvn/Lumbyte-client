import qs from "qs";

export const sanitizeRequest = () => {
  return (req, res, next) => {
    //
    if (req.body.title) {
      req.body.title = req.body.title.trim();
    }
    if (req.body.slug) {
      req.body.slug = encodeURIComponent(req.body.slug.trim());
    }
    if (req.body.metaDescription) {
      req.body.metaDescription = req.body.metaDescription.trim();
    }
    if (req.body.excerpt) {
      req.body.excerpt = req.body.excerpt.trim();
    }
    if (req.body.tagname) {
      req.body.excerpt = encodeURIComponent(req.body.tagname.trim());
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
