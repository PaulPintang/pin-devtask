import React from "react";
import { Button } from "@mantine/core";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-16">
      <div>
        <h1 className="font-bold text-2xl text-[#293856s]">
          <span className="text-[#4263EB]">DEV</span>Task
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" color="indigo" size="xs">
          Login
        </Button>
        <Button color="indigo" size="xs">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Header;
