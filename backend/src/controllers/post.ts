import { Request, Response } from "express";
import { createPostQuery } from "../queries/post";

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
  const userId = res.locals.user.id;
  const { title, text, visibility } = req.body;

  await createPostQuery(title, text, visibility, userId);

  res.status(200).json({ message: "Post created", title, text, visibility });
};
