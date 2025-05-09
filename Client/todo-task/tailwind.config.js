module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "pulse-fast": "pulse 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
