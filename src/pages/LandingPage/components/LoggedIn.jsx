import React, { useState } from "react";
import { Input, Button } from "@mantine/core";

import webdev from "../../../assets/webdev.png";

const LoggedIn = () => {
  const [codeInput, setCodeInput] = useState(false);
  const [inputVal, setInputVal] = useState();

  const handleInput = (e) => {
    setInputVal(e.target.value);
    console.log(inputVal.length);
    if (inputVal.length >= 1) {
      setCodeInput(true);
    } else if (inputVal.length === 0) {
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
          <Button color="indigo" size="md">
            Create team
          </Button>
          <Input
            onChange={handleInput}
            value={inputVal}
            variant="default"
            size="md"
            placeholder="Enter a code"
          />
          {codeInput ? (
            <Button
              className="transition-all"
              variant="subtle"
              color=""
              size="md"
            >
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
