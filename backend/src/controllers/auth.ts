import { Request, Response } from "express";
import { getUserByIdQuery, getUserByUsernameQuery } from "../queries/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Username or password missing" });
    return;
  }

  const isUser = await getUserByUsernameQuery(username);
  console.log(req.body.username);
  // Check if user with that username exists
  if (!isUser) {
    res.status(400).json({ message: "User does not exist" });
    return;
  }

  // Compare passwords
  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    isUser.password,
  );

  // Check if passwords match
  if (!isPasswordMatch) {
    res.status(400).json({ message: "Incorrect password" });
    return;
  }

  //Generate token
  const accessToken = jwt.sign(
    {
      id: isUser.id,
    },
    "secret",
    {
      expiresIn: "1d",
    },
  );

  res.status(200).json({ message: "User logged in", accessToken });
};

export const authTestController = async (req: Request, res: Response) => {
  let userId = res.locals.user.id;

  let user = await getUserByIdQuery(userId);

  console.log(user);

  res.json({ user });
};
