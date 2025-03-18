import { prisma } from "../../config/prismaConfig";
import bcrypt from "bcrypt";

export const createUserQuery = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.users.create({
    data: {
      username,
      password: hashedPassword,
    },
  });
};

export const getUserQuery = async (userId) => {
  return prisma.users.findFirst({
    where: { id: userId },
  });
};
