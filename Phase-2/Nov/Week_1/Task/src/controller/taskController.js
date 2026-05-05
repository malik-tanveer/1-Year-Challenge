let tasks = [
  { id: 1, title: "Learn Express", done: false },
  { id: 2, title: "Practice CRUD", done: true },
];

// Get all tasks
export const getTasks = (req, res) => {
  res.json(tasks);
};

// Add new task
export const addTask = (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update task
export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  Object.assign(task, req.body);
  res.json(task);
};

// Delete task
export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
};
