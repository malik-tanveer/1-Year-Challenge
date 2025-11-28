import express from "express";
const router = express.Router();

let tasks = []; 

router.post("/tasks", (req, res) => {
  const { title, desc } = req.body;

  const task = {
    id: tasks.length + 1,
    title,
    desc: desc || "",
  };

  tasks.push(task);
  res.status(201).json({ message: "Task Created", task });
});

router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

router.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, desc, completed } = req.body;

  const task = tasks.find(t => t.id === taskId);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (title !== undefined) task.title = title;
  if (desc !== undefined) task.desc = desc;

  res.status(200).json({ message: "Task Updated", task });
});

router.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === taskId);

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const deletedTask = tasks.splice(index, 1);
  res.status(200).json({ message: "Task Deleted", task: deletedTask[0] });
});

export default router;
