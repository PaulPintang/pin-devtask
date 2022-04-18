import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/HomePage/Navbar";
// homepage pages
const HomePage = () => {
  return (
    <div className="">
      <div className="shadow-sm px-7">
        <Header />
      </div>
      <div className="h-[calc(100vh-4rem)] flex">
        <div className="w-[280px] px-7">
          <Navbar />
        </div>
        <div className="bg-gray-50 h-full w-full border-t border-l border-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
