import { prisma } from "../../config/prismaConfig.js";

export const createUser = async (username, password) => {
  return prisma.users.create({
    data: {
      username,
      password,
    },
  });
};
