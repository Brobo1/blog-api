import { Request, Response } from "express";
import { createPostQuery, getPostQuery, getPostsQuery } from "../queries/post";

export const getPostController = async (req: Request, res: Response) => {
  const postId = req.params.postId;
  const post = getPostQuery(postId);
  res.json(post);
};

export const getPostsController = async (req: Request, res: Response) => {
  const posts = await getPostsQuery();
  res.json(posts);
};

export const createPostController = async (req: Request, res: Response) => {
  const userId = res.locals.user.id;
  const { title, text, visibility } = req.body;

  await createPostQuery(title, text, visibility, userId);

  res.status(200).json({ message: "Post created", title, text, visibility });
};
