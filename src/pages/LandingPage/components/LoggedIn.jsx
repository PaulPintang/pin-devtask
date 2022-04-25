import React, { useState } from "react";
import { Input, Button } from "@mantine/core";

import webdev from "../../../assets/webdev.png";

const LoggedIn = () => {
  const [codeInput, setCodeInput] = useState(false);
  const [inputVal, setInputVal] = useState();

  const handleInput = (e) => {
    setInputVal(e.target.value);
    if (inputVal.length >= 2) {
      setCodeInput(true);
    } else {
      setCodeInput(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="space-y-1">
        <div className="w-96 mx-auto ">
          <img src={webdev} alt="" className="w-full" />
        </div>
        {/* <p className="text-cent text-s">Choose to get started</p> */}
        <div className="flex gap-2 px-12">
          <Button color="indigo" size="xs">
            Create team
          </Button>
          <Input
            onChange={handleInput}
            value={inputVal}
            variant="default"
            size="xs"
            placeholder="Enter a code"
          />
          {codeInput ? (
            <Button variant="subtle" color="indigo" size="xs">
              Join
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
