import prisma from "../../lib/prisma";
const { tags } = prisma;

import { check, validationResult } from "express-validator";

const notEmpty = (value) => {
  if (value.trim() === "") {
    return Promise.reject("value cannot be empty or only spaces ");
  } else {
    return Promise.resolve("value is valid.");
  }
};

// checks
const createTagsValidationChecks = [
  check("tagname", "tagname should be a unique string with max length 20")
    .isString()
    .isLength({ max: 20 })
    .withMessage("length should be max 20")
    .custom((tagname) => {
      return tags.findMany({ where: { tagname } }).then((tag) => {
        if (tag.length > 0) {
          return Promise.reject("tagname should be unique");
        } else {
          return Promise.resolve("allowed");
        }
      });
    }),
  check("color", "should be hex color")
    .optional({ checkFalsy: true })
    .isHexColor(),
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
];

// update tags
const updateTagChecks = [
  check("tagname", "tagname should be a unique string with max length 20")
    .optional()
    .isString()
    .isLength({ max: 20 })
    .withMessage("length should be max 20")
    .custom((tagname, { req }) => {
      return tags
        .findMany({
          where: {
            tagname,
            id: {
              not: +req.params.tagId,
            },
          },
        })
        .then((tag) => {
          if (tag.length > 0) {
            return Promise.reject("tagname should be unique");
          } else {
            return Promise.resolve("allowed");
          }
        });
    }),
  check("color", "should be hex color")
    .optional({ checkFalsy: true })
    .isHexColor(),
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
];

// validation results
export const createtagsvalidations = () => {
  return async (req, res, next) => {
    await Promise.all(
      createTagsValidationChecks.map((validation) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};

export const updatetagsvalidations = () => {
  return async (req, res, next) => {
    await Promise.all(updateTagChecks.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};
