import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center h-16">
      <div>
        <h1 className="font-bold text-2xl text-[#293856s]">
          <span className="text-[#4263EB]">PIN</span>Task
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" color="indigo" size="xs">
          <Link
            to="/login"
            className="text-[#4263EB]"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
        </Button>
        <Button color="indigo" size="xs" px={25}>
          <Link
            to="/signup"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Sign up
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
