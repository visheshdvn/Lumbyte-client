import { hash } from "bcrypt";

export const hashPassword = () => {
  return async (req, res, next) => {
    const hashedPassword = await hash(req.body.password, 12);
    req.body.password = hashedPassword;
    next();
  };
};
