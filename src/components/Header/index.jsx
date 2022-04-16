import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center h-16">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="font-bold text-2xl text-[#293856]">
          <span className="text-[#4263EB]">iDEV</span>Task
        </h1>
      </Link>
      <div className="flex items-center gap-3">
        <Link to="/login">
          <Button variant="outline" color="indigo" size="xs">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button color="indigo" size="xs" px={25}>
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
