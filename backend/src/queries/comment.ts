import { prisma } from "../../config/prismaConfig";

export async function getCommentsQuery(postId: string) {
  try {
    return prisma.comments.findMany({ where: { postId } });
  } catch (err) {
    console.error("error getting comments", err);
  }
}

export async function createCommentQuery(
  name: string,
  text: string,
  postId: string,
) {
  try {
    return prisma.comments.create({ data: { name, text, postId } });
  } catch (err) {
    console.error("error creating comment", err);
  }
}
