import express from "express";
import {
  allUsers,
  singleUser,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
} from "../Controllers/users.controllers.js";

const usersRouter = express.Router();

usersRouter
  .post("", createUser)
  .get("", allUsers)
  .get("/:id", singleUser)
  .put("/:id", replaceUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

export default usersRouter;
