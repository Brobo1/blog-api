import { Request, Response } from "express";
import { getUserByUsernameQuery } from "../queries/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginController = async (req: Request, res: Response) => {
  //CHANGE TO USERNAME WHEN GOING LIVE
  const isUser = await getUserByUsernameQuery(req.body.username);

  if (!isUser) {
    res.status(400).json({ message: "User does not exist" });
    return;
  }

  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    isUser.password,
  );

  console.log(isPasswordMatch);

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
