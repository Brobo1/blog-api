import { createUserQuery, getUserQuery } from "../queries/user.js";

export const getUserController = async (req, res) => {
  const userId = req.params.userId;
  const user = await getUserQuery(userId);
  res.json(user);
};

export const createUserController = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await createUserQuery(username, password);
  res.json(user);
};
