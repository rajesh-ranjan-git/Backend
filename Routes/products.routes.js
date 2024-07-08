import express from "express";
import {
  allProducts,
  singleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/products.controllers.js";

const productsRouter = express.Router();

productsRouter
  .post("", createProduct)
  .get("", allProducts)
  .get("/:id", singleProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default productsRouter;
