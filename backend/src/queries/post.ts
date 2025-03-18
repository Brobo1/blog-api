import { prisma } from "../../config/prismaConfig";

export async function getPostQuery(postId) {
  try {
    return prisma.posts.findFirst({
      where: { id: postId },
    });
  } catch (err) {
    console.error("error getting post", err);
  }
}

export async function getPostsQuery() {
  try {
    return prisma.posts.findMany();
  } catch (err) {
    console.error("error getting posts", err);
  }
}
