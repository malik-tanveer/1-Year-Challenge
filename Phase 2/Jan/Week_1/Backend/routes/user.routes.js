import express from "express";
import users from "../data/users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(users);
});

export default router;
