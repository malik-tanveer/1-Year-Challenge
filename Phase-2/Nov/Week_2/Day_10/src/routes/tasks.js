import express from "express";

const router = express.Router();

// Local array to store tasks
let tasks = [];

// Create new Task
router.post("/tasks", (req, res) => {
  const { title, desc } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = {
    id: tasks.length + 1, // simple id
    title,
    desc: desc || "",
    completed
  };

  tasks.push(task);
  res.status(201).json({ message: "Task Created", task });
});

// Get all Tasks
router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

export default router;
