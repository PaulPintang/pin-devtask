import React, { useContext, useState } from "react";
import { Button } from "@mantine/core";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Header = () => {
  const [show, setShow] = useState(false);

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
            <div className="pr-3 cursor-pointer">
              <BsBell className="text-gray-400 opacity-70" />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <div className="w-[30px]">
                <img src={userPic} alt="" className="w-full rounded-full" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 cursor-pointer">
                  {show ? (
                    <RiArrowUpSLine className="text-gray-300  text-[18px]" />
                  ) : (
                    <RiArrowDownSLine className="text-gray-300 text-[18px]" />
                  )}
                </div>
                {show && (
                  <div className="absolute z-50 right-[-6px] top-6 ">
                    <div className="shadow-md bg-white p-3 flex flex-col justify-center items-center rounded">
                      <div className="">
                        <button
                          onClick={signOutUser}
                          className="text-[10px] font-semibold text-gray-500 uppercase hover:text-blue-300 transition-all"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
