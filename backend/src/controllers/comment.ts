//using function instead of const in this controller just to learn the difference
import { Request, Response } from "express";

export async function getCommentController(req: Request, res: Response) {
  const commentId = req.params.commentId;
  return res.json(commentId);
}

export async function getCommentsController(req: Request, res: Response) {
  const postId = req.params.postId;
  return res.json(postId);
}
