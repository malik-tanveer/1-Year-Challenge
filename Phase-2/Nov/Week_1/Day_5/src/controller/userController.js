// Fake in-memory data
let tasks = [
  { id: 1, title: "Learn Express", done: false },
  { id: 2, title: "Practice CRUD", done: true },
];

// GET all tasks
export const getTasks = (req, res) => {
  res.json(tasks);
};

// POST new task
export const createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    done: false,
  };
  tasks.push(newTask);
  res.status(201).json({ message: "Task added", data: newTask });
};

// PUT update task
export const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, done } = req.body;
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (title) task.title = title;
  if (done !== undefined) task.done = done;

  res.json({ message: "Task updated", data: task });
};

// DELETE task
export const deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id !== Number(id));
  res.json({ message: "Task deleted", remaining: tasks });
};
