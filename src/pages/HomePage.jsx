import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Navbar from "../components/HomePage/Navbar";
import AdminNavbar from "../components/HomePage/admin/Navbar";

// homepage pages
const HomePage = () => {
  return (
    <div className="">
      <div className="shadow-sm px-7">
        <Header />
      </div>
      <div className="h-[calc(100vh-4rem)] flex">
        <div className="w-[280px] px-7">
          {/* add conditon base on account type / admin or intern */}
          {/* <Navbar /> */}
          <AdminNavbar />
        </div>
        <div className="bg-slate-50 bg-opacity-30 h-full w-full border-t border-l border-gray-100 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
