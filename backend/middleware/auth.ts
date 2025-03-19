import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

export const authJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secret");

    // req.locals = req.locals || {};
    res.locals.user = decoded;

    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
