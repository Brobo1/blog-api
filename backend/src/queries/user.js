import { prisma } from "../../config/prismaConfig.js";

export const createUser = async (username, password) => {
  prisma.users.create({
    data: {
      username,
      password,
    },
  });
};
