import { createUser } from "../queries/user.js";

export const userGet = async (req, res) => {};

export const userPost = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await createUser(username, password);
  res.json("created");
};
