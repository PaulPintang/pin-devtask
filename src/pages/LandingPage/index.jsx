import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Container } from "@mantine/core";
import Header from "../../components/Header";
import Welcome from "./components/Welcome";
import LoggedIn from "./components/LoggedIn";
const LandingPage = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Container size={1200} px={18}>
      <Header />
      <div className="h-[calc(100vh-10rem)] max-w-[1100px] mx-auto">
        {isAuth ? <LoggedIn /> : <Welcome />}
      </div>
    </Container>
  );
};

export default LandingPage;
