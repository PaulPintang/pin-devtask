import React from "react";
import Header from "../components/Header";
import Navbar from "../components/HomePage/Navbar";
// homepage pages
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/HomePage/pages/Dashboard";
import Timesheet from "../components/HomePage/pages/TimeSheet";
import Task from "../components/HomePage/pages/Task";

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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task" element={<Task />} />
            <Route path="/timesheet" element={<Timesheet />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
