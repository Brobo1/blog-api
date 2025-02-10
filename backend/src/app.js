import "dotenv/config";
import cors from "cors";
import express from "express";
import { v4 as uuid4 } from "uuid";
import models from "./models";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  req.context = { models, me: models.users[1] };
  next();
});

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});
app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});
app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});
app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

app.get("/session", (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

app.get("/users", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});
app.get("/users/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});
app.post("/users", (req, res) => {
  return res.send("POST HTTP method on user resource");
});
app.put("/users/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId}`);
});
app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});
app.get("/messages/:messageId", (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});
app.post("/messages", (req, res) => {
  const id = uuid4();
  const message = { id, text: req.body.text, userId: req.context.me.id };
  req.context.models.messages[id] = message;
  return res.send(message);
});
app.put("/messages/:messageId", (req, res) => {
  const message = {
    ...req.context.models.messages[req.params.messageId],
    text: req.body.text,
  };
  req.context.models.messages[req.params.messageId] = message;
  res.send(message);
});
app.delete("/messages/:messageId", (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } =
    req.context.models.messages;
  req.context.models.messages = otherMessages;
  return res.send(message);
});

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
