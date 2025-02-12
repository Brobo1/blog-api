import { createUserQuery } from "../queries/user.js";

export const userGetController = async (req, res) => {};

export const userPostController = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await createUserQuery(username, password);
  res.json("created");
};
