import { Request, Response } from "express";

export const getPostController = async (req: Request, res: Response) => {
  const postId = req.params.postId;
  // const user = await getUserQuery(userId);
  res.json("return");
};

export const getPostsController = async (req: Request, res: Response) => {
  const userId = req.params.postId;
  // const user = await getUserQuery(userId);
  res.json("return");
};

export const createPostController = async (req: Request, res: Response) => {
  const userId = res.locals;
  res.json(userId);
};
