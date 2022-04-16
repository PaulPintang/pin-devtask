import React from "react";
import { Input, Button } from "@mantine/core";
import webdev from "../assets/webdev.png";
const LandingPage = () => {
  return (
    <div className="h-[calc(100vh-10rem)] max-w-[1100px] mx-auto">
      <div className="flex items-center h-full w-full">
        <div className="flex justify-between items-center w-full">
          <section className="w-[50%]">
            <div className="pb-7">
              <h1 className="text-[35px]">
                PINTask helps teams move work forward.
              </h1>
              <p className="text-[18px] text-gray-600">
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with PINTask.
              </p>
            </div>
            <div className="flex items-center gap-3 pr-2">
              <Input
                variant="default"
                size="md"
                placeholder="Email"
                className="w-full"
              />
              <Button color="indigo" size="md">
                Sign up-it's free
              </Button>
            </div>
          </section>
          <section>
            <img src={webdev} alt="" className="w-[500px]" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
