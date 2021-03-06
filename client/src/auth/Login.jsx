import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Card, Input, Button, Checkbox, PasswordInput } from "@mantine/core";
const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const [value, setValue] = useState("");
  return (
    <div className="h-screen flex items-center flex-col justify-around">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="font-bold text-3xl text-[#293856]">
          <span className="text-[#4263EB]">iDEV</span>Task
        </h1>
      </Link>
      <div className="w-[340px] mx-auto">
        <Card shadow="sm" p="lg" className="space-y-5">
          <div>
            <h1 className="text-gray-700 text-lg">Welcome back!</h1>
            <p className="text-[11px] text-gray-500">
              Please login your account to continue
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-600 text-sm">Email address</p>
            <Input variant="default" placeholder="Email" className="w-full" />
          </div>

          <div className="space-y-1">
            <p className="text-gray-600 text-sm ">
              Password <span className="text-red-500">*</span>
            </p>
            <PasswordInput
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              variant="default"
              placeholder="Password"
              type="password"
              className="w-full"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" size="xs" color="indigo" />
            <p className="text-[12px]">Forgot Password?</p>
          </div>
          <Button uppercase color="indigo" fullWidth>
            Login
          </Button>
          <p className="text-gray-500 text-xs text-center">OR</p>
          <div>
            <Button
              onClick={signInWithGoogle}
              variant="light"
              color=""
              fullWidth
            >
              <div className="flex">
                <p className="text-gray-500">Continue with Google</p>
              </div>
            </Button>
          </div>
        </Card>
      </div>
      <div>
        <p className="text-[12px] text-gray-500">
          Don't have an account?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span className="text-blue-500"> Sign up for free</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
