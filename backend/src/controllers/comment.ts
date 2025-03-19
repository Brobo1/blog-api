//using function instead of const in this controller just to learn the difference
import { Request, Response } from "express";
import { createCommentQuery, getCommentsQuery } from "../queries/comment";
import { createPostQuery } from "../queries/post";

export async function getCommentsController(req: Request, res: Response) {
  const postId = req.params.postId;
  const comments = getCommentsQuery(postId);
  res.json(comments);
}

export async function postCommentController(req: Request, res: Response) {
  const postId = req.params.postId;
  const { name, text } = req.body;

  await createCommentQuery(name, text, postId);

  res.status(200).json({ message: "Post successfully created" });
}
