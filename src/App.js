import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
// Mantine Components
import { Container, MantineProvider } from "@mantine/core";
// Components
import LandingPage from "./pages/LandingPage";
import Login from "./auth/Login";
import Signup from "./auth/SingUp";
function App() {
  return (
    <MantineProvider emotionOptions={{ key: "mantine", prepend: false }}>
      <Container size={1200} px={18}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </MantineProvider>
  );
}

export default App;
