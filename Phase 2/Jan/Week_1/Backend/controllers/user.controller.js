import User from "../models/User.model.js";

// GET users
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// CREATE user
export const createUser = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({ name, email });

  res.status(201).json(user);
};
