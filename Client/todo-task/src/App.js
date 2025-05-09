import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage key="signup" />} />
        <Route path="/signin" element={<SignInPage key="signin" />} />
        <Route path="/tasks" element={<TaskListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
