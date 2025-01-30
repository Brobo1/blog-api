import "dotenv/config";
import cors from "cors";
import express from "express";
import { v4 as uuid4 } from "uuid";

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  req.me = users[1];
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

app.get("/users", (req, res) => {
  return res.send(Object.values(users));
});
app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
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
  return res.send(Object.values(messages));
});
app.get("/messages/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});
app.post("/messages", (req, res) => {
  const id = uuid4();
  const message = { id, text: req.body.text, userId: req.me.id };
  messages[id] = message;

  return res.send(message);
});
app.put("/messages/:messageId", (req, res) => {});

app.delete("/messages/:messageId", (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } = messages;
  messages = otherMessages;
  return res.send(message);
});

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
