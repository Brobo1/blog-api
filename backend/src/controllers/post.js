export const getPostController = async (req, res) => {
  const userId = req.params.postId;
  // const user = await getUserQuery(userId);
  res.json("return");
};

export const createPostController = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // const user = await createUserQuery(username, password);
  res.json("created");
};
