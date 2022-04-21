import React from "react";
import { Route, Routes } from "react-router-dom";
// Mantine Components
import { MantineProvider } from "@mantine/core";
// Components
// import LandingPage from "./pages/LandingPage";
import Login from "./auth/Login";
import Signup from "./auth/SingUp";
// Logged in page
import HomePage from "./pages/HomePage";
import Dashboard from "./components/HomePage/pages/Dashboard";
import Task from "./components/HomePage/pages/Task";
import TaskView from "./components/HomePage/pages/Task/components/TaskVIew";
import Timesheet from "./components/HomePage/pages/TimeSheet";

function App() {
  return (
    <MantineProvider emotionOptions={{ key: "mantine", prepend: false }}>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/taskview" element={<TaskView />} />
          <Route path="/timesheet" element={<Timesheet />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
