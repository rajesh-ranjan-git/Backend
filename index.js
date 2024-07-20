import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import productsRouter from "./Routes/products.routes.js";
import usersRouter from "./Routes/users.routes.js";

// We will include this line in .env file and should not upload it to git or anywhere for security purposes.
// let mongoDbURI =
//   "mongodb+srv://rajesh-mongo:rajesh@getkart.1j7n22q.mongodb.net/?retryWrites=true&w=majority&appName=GetKart";

console.log(process.env.MONGODB_URI);

const server = express();
let port = process.env.PORT; // We should use let because port may be busy on server do server will modify/assign a different port and may cause trouble if we are using const here.

server.use(express.json());

const dbConnect = async () => {
  return await mongoose.connect(process.env.MONGODB_URI);
};

dbConnect()
  .then(() => {
    console.log("DB Connected");
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Unable to connect to DB.");
  });

//CRUD in REST

// Create
// server.post("/products", createProduct); // This is chainable so can also be written as below.

// // Read
// server.get("/products", allProducts);

// server.get("/products/:id", singleProduct);

// // Update
// server.put("/products/:id", replaceProduct);

// server.patch("/products/:id", updateProduct);

// // Delete
// server.delete("/products/:id", deleteProduct);

// CRUD using chaining
// server
//   .post("/products", createProduct)
//   .get("/products", allProducts)
//   .get("/products/:id", singleProduct)
//   .put("/products/:id", replaceProduct)
//   .patch("/products/:id", updateProduct)
//   .delete("/products/:id", deleteProduct);

server.use("/products", productsRouter);
server.use("/users", usersRouter);

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
