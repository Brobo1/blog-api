import { createUserQuery, getUserQuery } from "../queries/user";
import { Request, Response } from "express";

export const getUserController = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await getUserQuery(userId);
  res.json(user);
};

export const createUserController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await createUserQuery(username, password);
  res.json(user);
};
