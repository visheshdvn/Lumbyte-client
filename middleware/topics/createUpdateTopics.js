import { PrismaClient } from "@prisma/client";
const { topics } = new PrismaClient();

import { check, validationResult } from "express-validator";

const notEmpty = (value) => {
  if (value.trim() === "") {
    return Promise.reject("value cannot be empty or only spaces ");
  } else {
    return Promise.resolve("value is valid.");
  }
};

// checks
const common = [
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
];

const createTopicsValidationChecks = [
  check("topicname", "topicname should be a unique string with max length 20")
    .isString()
    .isLength({ max: 20 })
    .withMessage("length should be max 20")
    .custom((topicname) => {
      return topics.findMany({ where: { topicname } }).then((topic) => {
        if (topic.length > 0) {
          return Promise.reject("topicname should be unique");
        } else {
          return Promise.resolve("allowed");
        }
      });
    }),
  ...common,
];

// update topics
const updateTopicsChecks = [
  check("topicname", "topicname should be a unique string with max length 50")
    .optional()
    .isString()
    .isLength({ max: 50 })
    .withMessage("length should be max 50")
    .custom((topicname, { req }) => {
      return topics
        .findMany({
          where: {
            topicname,
            id: {
              not: +req.params.topicId,
            },
          },
        })
        .then((topic) => {
          if (topic.length > 0) {
            return Promise.reject("topicname should be unique");
          } else {
            return Promise.resolve("allowed");
          }
        });
    }),
  ...common,
];

// validation results
export const createTopicsValidations = () => {
  return async (req, res, next) => {
    await Promise.all(
      createTopicsValidationChecks.map((validation) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};

export const updateTopicsValidations = () => {
  return async (req, res, next) => {
    await Promise.all(updateTopicsChecks.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};
