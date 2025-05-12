const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/User.route");
const taskRoutes = require("./Routes/Task.route");
//const authRoutes = require("./routes/Auth.routes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the To-Do App Backend!");
});

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
//app.use("/api/tasks", taskRoutes);
//app.use("/api/auth", authRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
