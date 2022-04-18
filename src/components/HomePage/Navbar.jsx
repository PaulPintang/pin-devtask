import React from "react";
import me from "../../assets/me.png";
import { BiMessageRounded, BiGitRepoForked } from "react-icons/bi";
import {
  MdOutlineAutoGraph,
  MdOutlineAddTask,
  MdTimelapse,
} from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { VscTasklist } from "react-icons/vsc";
// import
const Navbar = () => {
  const members = [
    {
      id: 1,
      name: "Maria Clara",
      pic: "../../assets/members/img1.png",
    },
    {
      id: 2,
      name: "Maria Clara",
      pic: "../../assets/members/img1.png",
    },
    {
      id: 3,
      name: "Maria Clara",
      pic: "../../assets/members/img1.png",
    },
    {
      id: 4,
      name: "Maria Clara",
      pic: "../../assets/members/img1.png",
    },
    {
      id: 5,
      name: "Maria Clara",
      pic: "../../assets/members/img1.png",
    },
    {
      id: 6,
      name: "Maria Clara",
      pic: "../../assets/members/img1.png",
    },
    {
      id: 7,
      name: "Maria Clara",
      pic: "../../assets/members/img1.png",
    },
  ];
  return (
    <div className="py-2 flex flex-col justify-between h-full ">
      <div>
        <div className="py-5">
          <div className="flex items-center gap-2 pb-6">
            <div className="w-[50px]">
              <img src={me} alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-[13px]">Paul Justine Pintang</p>
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
          <div className="space-y-1">
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <p className="text-gray-400 text-[10px]">MENU</p>
            </div>
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <VscTasklist className="text-gray-400" />
              <p className="text-gray-700 text-[12.2px]">Your Task</p>
            </div>
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <MdOutlineAutoGraph className="text-gray-400" />
              <p className="text-gray-700 text-[12.2px]">Performance</p>
            </div>
            <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-1">
              <BiMessageRounded className="text-gray-400 text-lg" />
              <p className="text-gray-700 text-[12.2px]">Messages</p>
            </div>

            <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-1">
              <MdOutlineAddTask className="text-gray-400" />
              <p className="text-gray-700 text-[12.2px]">QA'sToComply</p>
            </div>
            <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-1">
              {/* <i class="fa-regular fa-message text-gray-400"></i> */}
              <MdTimelapse className="text-gray-400 " />
              <p className="text-gray-700 text-[12.2px]">TimeSheets</p>
            </div>
            <div className="flex items-center h-full gap-3 w-full bg -gray-100 px-2 py-1">
              <BsCardChecklist className="text-gray-400 text-lg pb-1" />
              <p className="text-gray-700 text-[12.2px]">Records</p>
            </div>
          </div>
          <div className="space-y-1 ">
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <p className="text-gray-400 text-[10px]">MEMBERS</p>
            </div>
            <div className="h-[190px] overflow-y-scroll" id="scrollbar">
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
              <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
                <div className="w-8 h-8">
                  <img src={me} alt="" className="w-full" />
                </div>
                <p className="text-gray-500 text-xs font-semibold">
                  Paul Justine Pintang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2"></div>
    </div>
  );
};

export default Navbar;
