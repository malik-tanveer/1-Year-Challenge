import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../controller/userController.js";

const router = express.Router();

// CRUD routes
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
