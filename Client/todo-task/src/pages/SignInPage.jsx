import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/signin", formData);
      console.log("Response:", response.data); // Debug log
      setMessage(response.data.message);

      // Redirect to tasks page on successful login
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/tasks");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message); // Debug log
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      <div className="bg-gray-800 text-gray-200 rounded-lg shadow-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Sign In
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Sign in to manage your tasks and stay productive.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center text-sm text-gray-400 mt-4">{message}</p>
        )}

        {/* Footer */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-purple-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;