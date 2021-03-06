import prisma from "../../lib/prisma"
const { blogposts } = prisma;

import { check, validationResult } from "express-validator";

const notEmpty = (value) => {
  if (value.trim() === "") {
    return false;
  } else {
    return true;
  }
};

const commoncheks = [
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
  check("excerpt", "excerpt should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 150 })
    .withMessage("excerpt should be under 150 characters"),
  check("minuteRead", "minute read should be an Integer")
    .optional()
    .not()
    .isString()
    .isInt({ min: 1 })
    .withMessage("minute read should be greater tham 0"),
  check("topPick", "topPick should be boolean")
    .optional()
    .not()
    .isString()
    .not()
    .isFloat()
    .isBoolean(),
  check("featured", "featured should be boolean")
    .optional()
    .not()
    .isString()
    .not()
    .isFloat()
    .isBoolean(),
  check("date", "date should be iso string")
    .optional()
    .isISO8601()
    .custom((date) => /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(date)),
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
  check("excerpt", "excerpt should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 150 })
    .withMessage("excerpt should be under 150 characters"),
  check("minuteRead", "minute read should be an Integer")
    .optional()
    .not()
    .isString()
    .isInt({ min: 1 })
    .withMessage("minute read should be greater tham 0"),
  check("topPick", "topPick should be boolean")
    .optional()
    .not()
    .isString()
    .not()
    .isFloat()
    .isBoolean(),
  check("featured", "featured should be boolean")
    .optional()
    .not()
    .isString()
    .not()
    .isFloat()
    .isBoolean(),
  check("date", "date should be iso string")
    .optional()
    .isISO8601()
    .custom((date) => /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(date)),
];

// checks
const createBlogpostValidationChecks = [
  check("title", "Title should be a non empty string")
    .isString()
    .custom((title) => notEmpty(title)),
  check("slug", "slug should be a valid string")
    .isString()
    .custom((slug) => notEmpty(slug))
    .custom((slug, { req }) => {
      return blogposts
        .findMany({
          where: {
            slug,
          },
        })
        .then((blogpost) => {
          if (blogpost.length > 0) {
            return Promise.reject("slug should be unique");
          } else {
            return Promise.resolve("slug valid");
          }
        });
    }),
  ...commoncheks,
];

const updateBlogpostValidationChecks = [
  check("title", "Title should be a string")
    .optional()
    .isString()
    .custom((title) => notEmpty(title)),
  check("slug", "slug should be a valid string")
    .optional()
    .isString()
    .custom((slug) => notEmpty(slug))
    .custom((slug, { req }) => {
      return blogposts
        .findMany({
          where: {
            slug,
            id: {
              not: req.params.postId,
            },
          },
        })
        .then((blogpost) => {
          if (blogpost.length > 0) {
            return Promise.reject("Slug should be unique");
          } else {
            return Promise.resolve("Slug valid");
          }
        });
    }),
  ...commoncheks,
];

// validation results
export const createblogpostvalidations = () => {
  return async (req, res, next) => {
    await Promise.all(
      createBlogpostValidationChecks.map((validation) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};

export const updateblogpostvalidations = () => {
  return async (req, res, next) => {
    await Promise.all(
      updateBlogpostValidationChecks.map((validation) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};
