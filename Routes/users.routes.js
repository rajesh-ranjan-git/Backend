import express from "express";
import {
  createUser,
  updateUser,
  replaceUser,
  deleteUser,
  singleUser,
  allUsers,
  signUp,
  login,
} from "../Controllers/users.controllers.js";

const usersRouter = express.Router();

usersRouter
  .post("/", createUser)
  .patch("/", updateUser)
  .put("/", replaceUser)
  .delete("/", deleteUser)
  .get("/1", singleUser)
  .get("/", allUsers)
  .post("/signup", signUp)
  .post("/login", login);

export default usersRouter;
