import React, { useContext } from "react";
import { Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Header = () => {
  const { signOutUser, isAuth, userPic } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center h-16">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="font-bold text-2xl text-[#293856]">
          <span className="text-[#4263EB]">iDEV</span>Task
        </h1>
      </Link>
      <div className="flex items-center gap-3">
        {!isAuth ? (
          <>
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
          </>
        ) : (
          <>
            <div className="w-[30px]">
              <img src={userPic} alt="" className="w-full rounded-full" />
            </div>
            <p
              onClick={signOutUser}
              className="cursor-pointer hover:text-blue-500"
            >
              Logout
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
