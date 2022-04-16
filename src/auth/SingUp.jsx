import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Input, Button, Checkbox, PasswordInput } from "@mantine/core";
const Signup = () => {
  const [value, setValue] = useState("");
  return (
    <div className="h-screen flex items-center flex-col justify-around">
      <h1 className="font-bold text-3xl text-[#293856s]">
        <span className="text-[#4263EB]">iDEV</span>Task
      </h1>
      <div className="w-[340px] mx-auto">
        <Card shadow="sm" p="lg" className="space-y-3">
          <div>
            <h1 className="text-gray-700 text-lg">Get Started</h1>
            <p className="text-[11px] text-gray-500">
              Welcome, Please signup to continue
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="space-y-1">
              <p className="text-gray-600 text-sm">Firstname</p>
              <Input
                variant="default"
                placeholder="Firstname"
                className="w-full"
                size="xs"
              />
            </div>
            <div className="space-y-1">
              <p className="text-gray-600 text-sm">Lastname</p>
              <Input
                variant="default"
                placeholder="Lastname"
                className="w-full"
                size="xs"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-gray-600 text-sm">Email address</p>
            <Input
              variant="default"
              placeholder="Email"
              className="w-full"
              size="xs"
            />
          </div>

          <div className="space-y-1">
            <p className="text-gray-600 text-sm ">
              Password <span className="text-red-500">*</span>
            </p>
            <PasswordInput
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              defaultValue="secret"
              variant="default"
              placeholder="Password"
              type="password"
              className="w-full"
              required
              size="xs"
            />
          </div>
          <div className="space-y-1">
            <p className="text-gray-600 text-sm ">
              Confirm Password <span className="text-red-500">*</span>
            </p>
            <PasswordInput
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              defaultValue="secret"
              variant="default"
              placeholder="Confirm password"
              type="password"
              className="w-full"
              required
              size="xs"
            />
          </div>
          <Checkbox
            label="I agree with Terms and Privacy"
            size="xs"
            color="indigo"
          />

          <Button color="indigo" fullWidth>
            Create an account
          </Button>
          <p className="text-gray-500 text-xs text-center">OR</p>
          <div>
            <Button variant="light" color="" fullWidth>
              <div className="flex">
                <p className="text-gray-500">Continue with Google</p>
              </div>
            </Button>
          </div>
        </Card>
      </div>
      <div>
        <p className="text-[12px] text-gray-500">
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="text-blue-500"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
