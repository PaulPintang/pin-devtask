import React from "react";
import { Route, Routes } from "react-router-dom";
// Mantine Components
import { MantineProvider } from "@mantine/core";
// Components
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Login from "./auth/Login";
import Signup from "./auth/SingUp";
function App() {
  return (
    <MantineProvider emotionOptions={{ key: "mantine", prepend: false }}>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
