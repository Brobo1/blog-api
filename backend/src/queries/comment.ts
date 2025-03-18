import { prisma } from "../../config/prismaConfig";

export async function getCommentQuery(commentId: string) {
  try {
    return prisma.comments.findFirst({
      where: { id: commentId },
    });
  } catch (err) {
    console.error("error getting comment", err);
  }
}

export async function getCommentsQuery() {
  try {
    return prisma.comments.findMany();
  } catch (err) {
    console.error("error getting comments", err);
  }
}
