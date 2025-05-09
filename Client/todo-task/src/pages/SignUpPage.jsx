import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignUpPage() {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black flex items-center justify-center text-white overflow-hidden">
      <div className="bg-gray-800 text-gray-200 rounded-lg shadow-2xl p-6 w-full max-w-md relative">
        {/* Decorative Glow  */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-4 text-purple-400">
          Create an Account
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Sign up to start managing your tasks and stay productive.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>
          {/* Email Input */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Google Button */}
        <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 transition transform hover:scale-105">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-3">
          Already have an account?{' '}
          <a href="/signin" className="text-purple-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;