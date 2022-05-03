import prisma from "../../utils/prisma";
const { user } = prisma;

import { check, validationResult } from "express-validator";

const notEmpty = (value) => {
  return value.trim() !== "";
};

// checks
const editUserDataValidations = [
  check("email", "Invalid email")
    .optional({ nullable: true })
    .isEmail()
    .custom((email) => notEmpty(email))
    .custom((email, { req }) => {
      return user
        .findMany({
          where: {
            email,
            id: {
              not: req.body.id,
            },
          },
        })
        .then((user) => {
          if (user.length > 0) {
            return Promise.reject("Email already registered");
          } else {
            return Promise.resolve("email valid");
          }
        });
    }),
  check("oldPassword", "password should be a string of min 8 characters long")
    .optional({ nullable: true })
    .isString()
    .custom((pass) => notEmpty(pass))
    .isLength({ min: 8 })
    .withMessage("password should be minimum 8 charecters long."),
  check("password", "password should be a string of min 8 characters long")
    .optional({ nullable: true })
    .isString()
    .custom((pass) => notEmpty(pass))
    .isLength({ min: 8 })
    .withMessage("password should be minimum 8 charecters long."),
  check(
    "confirmPassword",
    "password should be a string of min 8 characters long"
  )
    .optional({ nullable: true })
    .isString()
    .custom((pass) => notEmpty(pass))
    .isLength({ min: 8 })
    .withMessage("password should be minimum 8 charecters long.")
    .custom((pass, { req }) => {
      console.log("req body", req.body);
      console.log("con pass", pass === req.body.password);
      return pass === req.body.password;
    })
    .withMessage("new pass and conf pass don't match"),
  check("username", "username should be a non empty string")
    .optional({ nullable: true })
    .isString()
    .custom((username, { req }) => {
      return user
        .findMany({
          where: {
            username,
            id: {
              not: req.body.id,
            },
          },
        })
        .then((user) => {
          if (user.length > 0) {
            if (user.length > 0) {
              return Promise.reject("Username already exists");
            } else {
              return Promise.resolve("Success");
            }
          }
        });
    })
    .custom((username) => notEmpty(username)),
  check("firstname", "First name cannot be empty")
    .optional({ nullable: true })
    .isString()
    .custom((name) => notEmpty(name)),
  check("lastname", "Invalid lastname")
    .optional({ checkFalsy: true })
    .isString()
    .custom((name) => notEmpty(name)),
  check("about", "Bio should be a string")
    .optional({ checkFalsy: true })
    .isString()
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
];

// validation results
export const editUserValidations = () => {
  return async (req, res, next) => {
    await Promise.all(
      editUserDataValidations.map((validation) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};
