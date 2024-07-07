import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.send({ get: "This is our get request." });
});

server.post("/", (req, res) => {
  res.send({ post: "This is our post request." });
});

server.put("/", (req, res) => {
  res.send({ put: "This is our put request." });
});

server.patch("/", (req, res) => {
  res.send({ patch: "This is our patch request." });
});

server.delete("/", (req, res) => {
  res.send({ delete: "This is our delete request." });
});

server.listen(port, () => {
  console.log("Server is running");
});
