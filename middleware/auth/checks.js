import { PrismaClient } from "@prisma/client";
const { user } = new PrismaClient();

import { check, validationResult } from "express-validator";

const notEmpty = (value) => {
  if (value.trim() === "") {
    return Promise.reject("value cannot be empty.");
  } else {
    return Promise.resolve("value is valid.");
  }
};

// checks
const checkEmailPassword = [
  check("email", "Invalid email")
    .isEmail()
    .custom((email) => notEmpty(email))
    .custom((email) => {
      return user
        .findMany({
          where: {
            email,
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
  check("password", "password should be a string of min 8 characters long")
    .isString()
    .custom((pass) => notEmpty(pass))
    .isLength({ min: 8 })
    .withMessage("password should be minimum 8 charecters long."),
  check("username", "username should be a non empty string")
    .isString()
    .custom((username) => {
      return user
        .findMany({
          where: {
            username,
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
    .isString()
    .custom((name) => notEmpty(name)),
];

// validation results
export const signupValidations = () => {
  return async (req, res, next) => {
    await Promise.all(
      checkEmailPassword.map((validation) => validation.run(req))
    );

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ errors: errors.array() });
  };
};
