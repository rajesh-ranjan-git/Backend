import http from "http";
import fs from "fs";

const indexFile = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("Data.json", "utf-8");
const productsData = JSON.parse(data).products;

const server = http.createServer((req, res) => {
  console.log("Server has started!");
  if (req.url == "/") {
    res.end(indexFile);
  } else if (req.url == "/api") {
    res.end(data);
  } else if (req.url == "/profile") {
    res.end("I am Profile Page.");
  } else if (req.url.startsWith("/products")) {
    let idx = req.url.split("/")[2];
    let product = productsData.find((obj) => obj.id == idx);
    let { title, rating, price, description } = product;
    let modifiedHTML = indexFile
      .replace("**title**", title)
      .replace("**rating**", rating)
      .replace("**price**", price)
      .replace("**description**", description);
    res.end(modifiedHTML);
  }
});

server.listen(8080);
