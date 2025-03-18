import { Request, Response, NextFunction } from "express";
import passport from "passport";

export const authJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  console.log(authHeader);
};
