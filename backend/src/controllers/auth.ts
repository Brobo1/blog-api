import { Request, Response } from "express";
import { getUserQuery } from "../queries/user";

export const loginController = async (req: Request, res: Response) => {
  const isUser = await getUserQuery(req.body.userId);
  res.json(isUser);
};
