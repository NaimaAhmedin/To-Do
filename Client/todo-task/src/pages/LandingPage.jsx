import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 bg-gray-900 bg-opacity-80 shadow-lg z-10">
        <h1 className="text-4xl font-extrabold tracking-wide text-purple-400 glow">
          To-Do App
        </h1>
        <Link to="/signup">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105">
            Sign Up
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center mt-20 px-4 z-10 relative">
        <h2 className="text-6xl font-extrabold mb-6 text-purple-400 drop-shadow-lg animate-pulse">
          Organize Your Life, One Task at a Time
        </h2>
        <p className="text-lg font-medium mb-10 text-gray-300 max-w-2xl">
          Experience the ultimate task management app designed to help you stay
          productive and stress-free. Sign up now and take control of your
          daily tasks with ease.
        </p>
        <Link to="/signup">
          <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-purple-700 transition transform hover:scale-110">
            Get Started
          </button>
        </Link>
      </main>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4 bg-gray-900 bg-opacity-80 z-10">
        <p className="text-sm font-light text-gray-400">
          © 2025 To-Do App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;