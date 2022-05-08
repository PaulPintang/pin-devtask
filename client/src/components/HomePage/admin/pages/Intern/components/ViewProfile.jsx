import React, { useContext } from "react";
import pic from "../../../../../../assets/members/img1.png";

import { FiStar } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { BiGitMerge } from "react-icons/bi";
import {
  MdOutlineMoreTime,
  MdPendingActions,
  MdOutlineCalendarToday,
} from "react-icons/md";

import { useParams } from "react-router-dom";
import InternContext from "../../../../../../context/InternContext";

const ViewProfile = () => {
  const { interns } = useContext(InternContext);
  let { cname } = useParams();
  const filtered = interns.filter((codename) => codename.cname === cname);
  console.log(filtered);
  return (
    <div className="p-3">
      <div className="flex gap-8 w-full">
        <div>
          <div className="w-[190px]">
            <img src={pic} alt="" />
          </div>
          <div className="text-center pt-3 leading-none">
            <p className="text-[13px]">Paul Justine Pintang</p>
            <small className="text-gray-500 text-xs">Bicol University</small>
          </div>
        </div>
        <div className="w-full">
          <div className="py-3">
            <div className="flex flex-col md:flex-row lg:flex-row lg:justify-start lg:items-center gap-2 md:gap-4 lg:gap-4 pb-3">
              <div className="flex gap-3 items-center">
                <div className="bg-yellow-300 w-2 h-2"></div>
                <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                  All
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-indigo-300 w-2 h-2"></div>
                <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                  Remaining
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-2 h-2 bg-green-300"></div>
                <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                  Completed
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-red-300 w-2 h-2"></div>
                <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                  For QA
                </small>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2 pb-4">
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-indigo-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <FiStar className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">New Task</p>
                  <p className="text-[25px]">07</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-blue-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <GiProgression className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">In Progress</p>
                  <p className="text-[25px]">01</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-red-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <BiGitMerge className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">For QA</p>
                  <p className="text-[25px]">03</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-yellow-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <MdOutlineMoreTime className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">Total Hours</p>
                  <p className="text-[25px]">376</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-blue-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <MdPendingActions className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">Total Pending</p>
                  <p className="text-[25px]">110</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-green-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <MdOutlineCalendarToday className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">Total Today</p>
                  <p className="text-[25px]">08</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
