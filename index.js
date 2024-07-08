import express from "express";
import productsRouter from "./Routes/products.routes.js";
import usersRouter from "./Routes/users.routes.js";

const server = express();
const port = 3000;

server.use(express.json());

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

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
