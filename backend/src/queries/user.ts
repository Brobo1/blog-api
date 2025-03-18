import { prisma } from "../../config/prismaConfig";
import bcrypt from "bcrypt";

export const createUserQuery = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.users.create({
    data: {
      username,
      password: hashedPassword,
    },
  });
};

export const getUserByUsernameQuery = async (username: string) => {
  return prisma.users.findFirst({
    where: { username },
  });
};

export const getUserByIdQuery = async (username: string) => {
  return prisma.users.findFirst({
    where: { username },
  });
};
