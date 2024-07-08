import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(
    "D:/Study/Web Development/GFG_Study/Practice/Backend/JSON/Data.json",
    "utf-8"
  )
);
const productsData = data.products;

const allProducts = (req, res) => {
  res.json(productsData);
};

const singleProduct = (req, res) => {
  let idx = req.params.id;
  let data = productsData.find((obj) => obj.id == idx);
  res.json(data);
};

const createProduct = (req, res) => {
  let data = req.body;
  productsData.push(data);
  res.json(data);
};

const replaceProduct = (req, res) => {
  let idx = req.params.id;
  let dataIdx = productsData.findIndex((obj) => obj.id == idx);
  productsData.splice(dataIdx, 1, { ...req.body, id: idx });
  res.json(req.body);
};

const updateProduct = (req, res) => {
  let idx = req.params.id;
  let dataIdx = productsData.findIndex((obj) => obj.id == idx);
  let dataObj = productsData[dataIdx];
  let modifiedData = { ...dataObj, ...req.body };
  productsData.splice(dataIdx, 1, modifiedData);
  res.json(modifiedData);
};

const deleteProduct = (req, res) => {
  let idx = req.params.id;
  let dataIdx = productsData.findIndex((obj) => obj.id == idx);
  let dataObj = productsData[dataIdx];
  productsData.splice(dataIdx, 1);
  res.json(dataObj);
};

export {
  allProducts,
  singleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
