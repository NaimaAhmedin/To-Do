const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../Controller/Task.controller");

// Route to fetch tasks
router.get("/", authMiddleware, getTasks);

// Route to create a new task
router.post("/", authMiddleware, createTask);

// Route to update a task
router.put("/:id", authMiddleware, updateTask);

// Route to delete a task
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
