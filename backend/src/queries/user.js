import { prisma } from "../../config/prismaConfig.js";

export const createUserQuery = async (username, password) => {
  return prisma.users.create({
    data: {
      username,
      password,
    },
  });
};

export const getUserQuery = async (userId) => {
  return prisma.users.findFirst({
    where: { id: userId },
  });
};
