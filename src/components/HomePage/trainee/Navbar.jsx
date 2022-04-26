import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContextext";
import me from "../../assets/me.png";
import img1 from "../../assets/members/img1.png";

import { Link } from "react-router-dom";
import { BiMessageRounded, BiGitRepoForked } from "react-icons/bi";
import { MdSpaceDashboard, MdTimelapse } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";
const Navbar = () => {
  const { userPic, user } = useContext(AuthContext);
  return (
    <div className="py-2 flex flex-col justify-between h-full ">
      <div>
        <div className="py-3">
          <div className="flex items-center gap-2 pb-6">
            <div className="w-[50px]">
              <img src={userPic} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <p className="text-[13px]">{user}</p>
              <small className="text-xs text-gray-400 font-extralight">
                @paulpintang
              </small>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <p className="text-gray-400 text-[10px]">REPOSITORY</p>
            </div>
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <BiGitRepoForked className="text-gray-400" />
              <p className="text-gray-700 text-[12.2px]">Components</p>
            </div>
          </div>
          <div className="space-y-">
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <p className="text-gray-400 text-[10px]">MENU</p>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-2 hover:bg-gray-100 cursor-pointer transition-all rounded-md">
                <MdSpaceDashboard className="text-gray-400 text-lg" />
                <p className="text-gray-700 text-[12.2px]">Dashboard</p>
              </div>
            </Link>
            <Link to="/task">
              <div
                className="flex items-center gap-3 w-full bg- gray-100 px-2 py-2 hover:bg-gray-100 cursor-pointer transition-all rounded-md 
                "
              >
                <VscTasklist className="text-gray-400" />
                <p className="text-gray-700 text-[12.2px]">Your Task</p>
              </div>
            </Link>
            {/* <Link to="/performance" style={{ textDecoration: "none" }}>
              <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-2 hover:bg-gray-100 cursor-pointer transition-all rounded-md">
                <BiMessageRounded className="text-gray-400 text-lg" />
                <p className="text-gray-700 text-[12.2px]">Chat</p>
              </div>
            </Link> */}

            <Link to="/timesheet" style={{ textDecoration: "none" }}>
              <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-2 hover:bg-gray-100 cursor-pointer transition-all rounded-md">
                <MdTimelapse className="text-gray-400 " />
                <p className="text-gray-700 text-[12.2px]">TimeSheets</p>
              </div>
            </Link>
          </div>
          <div className="space-y-1 ">
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1 hover:bg-gray-100 cursor-pointer transition-all rounded-md">
              <p className="text-gray-400 text-[10px]">MEMBERS</p>
            </div>
            <div className="h-[190px] overflow-y-scroll" id="scrollbar">
              <div className=" w-full bg- gray-100 px-2 py-1 hover:bg-gray-100 cursor-pointer transition-all rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img src={me} alt="" className="w-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500 text-[11px]">Juan Dela Cruz</p>
                    <p className="text-gray-500 text-[9px] bg-gray-00 rounded">
                      <span className="font-semibold text-gray-600">184</span>{" "}
                      hours pending
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full bg- gray-100 px-2 py-1 hover:bg-gray-100 cursor-pointer transition-all rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img src={img1} alt="" className="w-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500 text-[11px]">
                      Maria Juana De Puta
                    </p>
                    <p className="text-gray-500 text-[9px] bg-gray-00 rounded">
                      <span className="font-semibold text-gray-600">356</span>{" "}
                      hours pending
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full bg- gray-100 px-2 py-1 hover:bg-gray-100 cursor-pointer transition-all rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img src={me} alt="" className="w-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500 text-[11px]">Oscar Hidalgo</p>
                    <p className="text-gray-500 text-[9px] bg-gray-00 rounded">
                      <span className="font-semibold text-gray-600">97</span>{" "}
                      hours pending
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <MdDarkMode className="text-gray-500" />
          </div> */}
        </div>
      </div>
      <div className="py-2"></div>
    </div>
  );
};

export default Navbar;
