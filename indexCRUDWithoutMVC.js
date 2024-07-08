import express from "express";
import fs from "fs";

const server = express();
const port = 3000;

const data = JSON.parse(fs.readFileSync("./JSON/Data.json", "utf-8"));
const productsData = data.products;

server.use(express.json());

//CRUD in REST

// Create
server.post("/products", (req, res) => {
  let data = req.body;
  productsData.push(data);
  res.json(data);
});

// Read
server.get("/products", (req, res) => {
  res.json(productsData);
});

server.get("/products/:id", (req, res) => {
  let idx = req.params.id;
  let data = productsData.find((obj) => obj.id == idx);
  res.json(data);
});

// Update
server.put("/products/:id", (req, res) => {
  let idx = req.params.id;
  let dataIdx = productsData.findIndex((obj) => obj.id == idx);
  productsData.splice(dataIdx, 1, { ...req.body, id: idx });
  res.json(req.body);
});

server.patch("/products/:id", (req, res) => {
  let idx = req.params.id;
  let dataIdx = productsData.findIndex((obj) => obj.id == idx);
  let dataObj = productsData[dataIdx];
  let modifiedData = { ...dataObj, ...req.body };
  productsData.splice(dataIdx, 1, modifiedData);
  res.json(modifiedData);
});

// Delete
server.delete("/products/:id", (req, res) => {
  let idx = req.params.id;
  let dataIdx = productsData.findIndex((obj) => obj.id == idx);
  let dataObj = productsData[dataIdx];
  productsData.splice(dataIdx, 1);
  res.json(dataObj);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
