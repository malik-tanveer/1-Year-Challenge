import User from "../models/User.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY || "7d",
  });
};

// Login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  // clean compare
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = generateToken(user._id);

  res.status(200).json({
    success: true,
    token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
});

// Register
export const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  // ROLE LOGIC
  let userRole = "user";
  if (role === "admin") {
    userRole = "admin";
  }

  const user = await User.create({
  name: name.trim(),
  email: email.trim().toLowerCase(),
  password: password.trim(),
  role: userRole,
});
  const token = generateToken(user._id);

  res.status(201).json({
    success: true,
    token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
});


// Get Profile middleware/controller
export const getProfile = asyncHandler(async (req, res) => {
  // Expect Authorization: Bearer <token>
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }

  const user = await User.findById(decoded.id).select("name email role createdAt");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Do NOT expose password
  res.status(200).json({
    success: true,
    user,
  });
});

