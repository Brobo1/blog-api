//using function instead of const in this controller just to learn the difference

export async function getCommentController(req, res) {
  const commentId = req.params.commentId;
  return res.json(commentId);
}

export async function getCommentsController(req, res) {
  const postId = req.params.postId;
  return res.json(postId);
}
