import express from "express";
import {
  createUser,
  updateUser,
  replaceUser,
  deleteUser,
  allUsers,
} from "../Controllers/users.controllers.js";

const usersRouter = express.Router();

usersRouter
  .post("/", createUser)
  .patch("/", updateUser)
  .put("/", replaceUser)
  .delete("/", deleteUser)
  .get("/", allUsers);
// .get("/", singleUser);

export default usersRouter;
