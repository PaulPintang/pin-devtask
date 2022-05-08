import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
// Mantine Components
import { MantineProvider } from "@mantine/core";
// Components
import LandingPage from "./pages/LandingPage";
import Login from "./auth/Login";
import Signup from "./auth/SingUp";
// Logged in page / ADMIN
// components to render if the account type is admin
import AdminDashboard from "./components/HomePage/admin/pages/Dashboard/";
import AdminTask from "./components/HomePage/admin/pages/Task";
import AdminIntern from "./components/HomePage/admin/pages/Intern";
// Logged in page / USER
import HomePage from "./pages/HomePage";
import Dashboard from "./components/HomePage/trainee/pages/Dashboard";
import Task from "./components/HomePage/trainee/pages/Task";
import TaskView from "./components/HomePage/trainee/pages/Task/components/TaskVIew";
import Timesheet from "./components/HomePage/trainee/pages/TimeSheet";

function App() {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return (
    <MantineProvider emotionOptions={{ key: "mantine", prepend: false }}>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        >
          {/* add condition here base on account type/ use the Navigate in router */}
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/task" element={<AdminTask />} />
          <Route path="/manage-intern" element={<AdminIntern />} />
          <Route path="/view-profile:id" element={<AdminIntern />}>
            <Route path="/taskview" element={<TaskView />} />
          </Route>

          {/* student */}
          {/* <Route path="/" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/taskview" element={<TaskView />} />
          <Route path="/timesheet" element={<Timesheet />} /> */}
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
