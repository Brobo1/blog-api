import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";
import { prisma } from "../config/prismaConfig";
import passport from "passport";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

app.use((req, res, next) => {
  next();
});

app.use("/user", routes.user);
app.use("/auth", routes.auth);
app.use("/post", routes.post);
app.use("/comment", routes.comment);

process.on("SIGINT", async () => {
  prisma.$disconnect();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  prisma.$disconnect();
  process.exit(0);
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
