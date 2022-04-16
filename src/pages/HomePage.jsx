import React from "react";
import Header from "../components/Header";
import Navbar from "../components/HomePage/Navbar";
const HomePage = () => {
  return (
    <div className="px-7">
      <Header />
      <div className="h-[calc(100vh-6rem)] flex">
        <div className="w-[250px] bg-gr ay-50">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
