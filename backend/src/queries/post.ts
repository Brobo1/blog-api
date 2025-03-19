import { prisma } from "../../config/prismaConfig";

export async function getPostQuery(postId: string) {
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

export async function createPostQuery(
  title: string,
  text: string,
  visibility: boolean,
  userId: string,
) {
  try {
    return prisma.posts.create({
      data: {
        title,
        text,
        public: visibility,
        userId,
      },
    });
  } catch (err) {
    console.error("error creating post", err);
  }
}
