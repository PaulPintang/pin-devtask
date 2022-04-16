import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
// Mantine Components
import { Container, MantineProvider } from "@mantine/core";
// Components
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
function App() {
  return (
    <MantineProvider emotionOptions={{ key: "mantine", prepend: false }}>
      <Header />
      <Routes>
        <Route path="./" element={<LandingPage />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
