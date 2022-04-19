import React from "react";
import { Grid } from "@mantine/core";
import { FiStar } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { BiGitMerge } from "react-icons/bi";
import Table from "./components/Table";
import Performance from "./components/Performance";
const Dashboard = () => {
  return (
    <Grid justify="space-between" className="h-full ">
      <Grid.Col span={8} className="h-2/4 ">
        <div className=" w-full h-full p-3">
          <div>
            <p className="text-[12px] text-gray-400">Monday, April 18</p>
            <div className="flex flex-col">
              <p className="text-gray-700 text-2xl">Good Morning, Paul</p>
              <small className="text-gray-700 text-[11px]">
                You have a total of
                <span className="font-semibold text-gray-700 px-1">
                  9 completed tasks
                </span>
                as of now.
              </small>
            </div>
          </div>
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
                  New
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-2 h-2 bg-blue-300"></div>
                <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                  In-Progress
                </small>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-green-300 w-2 h-2"></div>
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
            <div className="w-full flex justify-between items-center gap-2">
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
                      <FiStar className="text-sm text-gray-400" />
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
                      <GiProgression className="text-sm text-gray-400" />
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
                      <BiGitMerge className="text-sm text-gray-400" />
                    </div>
                    <p className="text-[11px] text-gray-400">Total Today</p>
                    <p className="text-[25px]">08</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div className="w-full h-full">
          <Performance />
        </div>
      </Grid.Col>
      <Grid.Col span={8} className="h-2/4">
        <div className="w-full h-full p-3">
          <Table />
        </div>
      </Grid.Col>
      <Grid.Col span={4}>
        <div className="bg-gray-300 w-full h-full"></div>
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
