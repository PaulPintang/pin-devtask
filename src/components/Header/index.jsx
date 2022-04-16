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
