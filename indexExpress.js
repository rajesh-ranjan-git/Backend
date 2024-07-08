import express from "express";

const server = express();
const port = 3000;

//Middleware
// server.use((req, res, next) => {
//   // This will get applied on all the routes (Application Level Middleware).
//   console.log("I am a middleware");
//   if (req.query.password == "123") {
//     next();
//   } else {
//     res.json({ response: false });
//   }
// });

const auth = (req, res, next) => {
  // This will only be applied on specific routes (Router Level or Custom Middleware).
  console.log("I am a middleware");
  if (req.query.password == "123") {
    next();
  } else {
    res.json({ response: false });
  }
};

server.use(express.json()); // This is used to read the data of body (In-Built middleware like body parser). It is used because Express cannot read body of the request.

server.get("/", (req, res) => {
  res.send({ get: "This is our get request." });
});

server.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send({
    get: `This is our get request and id of product is ${req.params.id}`,
  });
});

server.post("/", (req, res) => {
  res.send({ post: "This is our post request." });
});

server.put("/", auth, (req, res) => {
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
