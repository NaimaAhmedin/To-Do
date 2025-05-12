import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import { FaRegCircleUser } from "react-icons/fa6";
import axios from "axios";

function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null); // Track the task being edited
  const [editingText, setEditingText] = useState(""); // Track the new text for the task
  const [profile, setProfile] = useState({ name: "", email: "" }); // Track the user's profile
  const navigate = useNavigate();

  const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [token]);

  // Fetch user profile from the backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data); // Update profile state with user data
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [token]);
  // Add a new task
  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/tasks/",
          { title: newTask, completed: false },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTasks([...tasks, response.data]);
        setNewTask("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Update a task
  const updateTask = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { title: editingText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, title: response.data.title } : task
        )
      );
      setEditingTaskId(null);
      setEditingText("");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { completed: !completed },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks(
        tasks.map((task) =>
          task._id === id
            ? { ...task, completed: response.data.completed }
            : task
        )
      );
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate("/"); // Redirect to the LandingPage
  };

  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditingText(text);
  };

  const saveEdit = () => {
    if (editingTaskId) {
      updateTask(editingTaskId);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-8">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-purple-400">To-Do App</h1>

        {/* Profile Section */}
        <div className="relative ml-auto">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="w-10 h-10 rounded-full">
              <FaRegCircleUser className="w-full h-full" />
            </div>

            <div>
              <span className="text-lg font-medium block">{profile.name}</span>
              <span className="text-sm text-gray-400 block">
                {profile.email}
              </span>
            </div>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-35 bg-gray-800 rounded-lg shadow-lg">
              <ul className="py-2 px-4">
                <li
                  className="plx-6 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => console.log("Profile clicked")}
                >
                  Profile
                </li>
                <li
                  className="plx-6 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Task Input */}
      <div className="w-full max-w-4xl flex items-center my-8">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="ml-4 bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="w-full max-w-4xl space-y-4">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task._id, task.completed)}
                className="mr-4 w-5 h-5 text-purple-600 focus:ring-purple-500"
              />
              {editingTaskId === task._id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ) : (
                <span
                  className={`${
                    task.completed ? "line-through text-gray-500" : ""
                  } text-lg`}
                >
                  {task.title}
                </span>
              )}
            </div>
            <div className="flex space-x-4">
              {editingTaskId === task._id ? (
                <button
                  onClick={saveEdit}
                  className="text-green-500 hover:text-green-600 transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(task._id, task.title)}
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  <FaEdit />
                </button>
              )}
              <button
                onClick={() => deleteTask(task._id)}
                className="text-red-600 hover:text-red-700 transition"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* No Tasks Message */}
      {tasks.length === 0 && (
        <p className="text-gray-400 mt-6">You have no tasks. Add one above!</p>
      )}
    </div>
  );
}

export default TaskListPage;
