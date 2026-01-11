import express from "express";
import users from "../users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(users);
});

export default router;
