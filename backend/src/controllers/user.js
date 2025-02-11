import { createUser } from "../queries/user.js";

export const userGet = async (req, res) => {};

export const userPost = async (req, res) => {
  const username = "ofiwjregoiergj";
  const password = "123";
  await createUser(username, password);
};
