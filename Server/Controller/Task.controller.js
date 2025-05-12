const Task = require("../Model/Task.model");

exports.createTask = async (req, res) => {
  try {
    const { title, completed } = req.body;
    console.log("Request Body:", req.body); // Debug log
    console.log("User ID from req.user:", req.user); // Debug log

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.user.id;
    const newTask = new Task({
      title,
      completed,
      userId,
    });
    const savedTask = await newTask.save();
    console.log("Task saved to database:", savedTask); // Debug log

    res
      .status(201)
      .json({ message: "Task created successfully", task: savedTask });
  } catch (error) {
    console.error("Error creating task:", error); // Debug log
    res.status(500).json({ message: "Server error", error });
  }
  console.log("Task routes registered at /api/tasks");

  console.log("Request Body:", req.body);
  console.log("User ID from req.user:", req.user);
};

exports.getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const userId = req.user.id;

    const task = await Task.findOne({ _id: id, userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.title = title;
    task.completed = completed;
    await task.save();
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await Task.findOneAndDelete({ _id: id, userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
