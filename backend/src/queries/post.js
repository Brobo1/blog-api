import { prisma } from "../../config/prismaConfig.js";

export async function getPostQuery(postId) {
  try {
    return prisma.posts.findFirst({
      where: { id: postId },
    });
  } catch (err) {
    console.error("error getting post", err);
  }
}
