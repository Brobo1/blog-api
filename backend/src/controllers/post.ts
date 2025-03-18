import { Request, Response } from "express";

export const getPostController = async (req: Request, res: Response) => {
  const userId = req.params.postId;
  // const user = await getUserQuery(userId);
  res.json("return");
};

export const createPostController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  // const user = await createUserQuery(username, password);
  res.json("created");
};
