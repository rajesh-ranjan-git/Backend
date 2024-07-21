import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(
    "D:/Study/Web Development/GFG_Study/Practice/Backend/JSON/Users.json",
    "utf-8"
  )
);
const usersData = data.users;

const allUsers = (req, res) => {
  res.json(usersData);
};

const singleUser = (req, res) => {
  let idx = req.params.id;
  let data = usersData.find((obj) => obj.id == idx);
  res.json(data);
};

const createUser = (req, res) => {
  let data = req.body;
  usersData.push(data);
  res.json(data);
};

const replaceUser = (req, res) => {
  let idx = req.params.id;
  let dataIdx = usersData.findIndex((obj) => obj.id == idx);
  usersData.splice(dataIdx, 1, { ...req.body, id: idx });
  res.json(req.body);
};

const updateUser = (req, res) => {
  let idx = req.params.id;
  let dataIdx = usersData.findIndex((obj) => obj.id == idx);
  let dataObj = usersData[dataIdx];
  let modifiedData = { ...dataObj, ...req.body };
  usersData.splice(dataIdx, 1, modifiedData);
  res.json(modifiedData);
};

const deleteUser = (req, res) => {
  let idx = req.params.id;
  let dataIdx = usersData.findIndex((obj) => obj.id == idx);
  let dataObj = usersData[dataIdx];
  usersData.splice(dataIdx, 1);
  res.json(dataObj);
};

export {
  allUsers,
  singleUser,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
};
