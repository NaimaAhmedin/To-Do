import React from 'react';

function SignInPage() {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      <div className="bg-gray-800 text-gray-200 rounded-lg shadow-2xl p-8 w-full max-w-md relative">
        {/* Decorative Glow */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Sign in to manage your tasks and stay productive.
        </p>

        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
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

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="grow border-t border-gray-600"></div>
        </div>

        {/* Google Button */}
        <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 transition transform hover:scale-105">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-purple-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;