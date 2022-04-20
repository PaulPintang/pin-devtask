import React from "react";
import { Grid } from "@mantine/core";
const Task = () => {
  return (
    <div className="p-3">
      <div>
        <p className="text-[12px] text-gray-400">Monday, April 18</p>
        <div className="flex flex-col">
          <p className="text-gray-700 text-2xl">Your Task</p>
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
        </div>
        {/* <div className="w-full flex justify-between items-center gap-2">
          <div className=" bg-opacity-60 rounded-md shadow-md w-full">
            <div className="h-[80px] text-center p-4">
              <div className="bg-indigo-300 w-8 h-1"></div>
              <div className="h-full flex items-center justify-between">
                <div className="bg-gray-100 rounded-full p-2"></div>
                <p className="text-[11px] text-gray-400">New Task</p>
                <p className="text-[25px]">07</p>
              </div>
            </div>
          </div>
          <div className=" bg-opacity-60 rounded-md shadow-md w-full">
            <div className="h-[80px] text-center p-4">
              <div className="bg-blue-300 w-8 h-1"></div>
              <div className="h-full flex items-center justify-between">
                <div className="bg-gray-100 rounded-full p-2"></div>
                <p className="text-[11px] text-gray-400">In Progress</p>
                <p className="text-[25px]">01</p>
              </div>
            </div>
          </div>
          <div className=" bg-opacity-60 rounded-md shadow-md w-full">
            <div className="h-[80px] text-center p-4">
              <div className="bg-red-300 w-8 h-1"></div>
              <div className="h-full flex items-center justify-between">
                <div className="bg-gray-100 rounded-full p-2"></div>
                <p className="text-[11px] text-gray-400">For QA</p>
                <p className="text-[25px]">03</p>
              </div>
            </div>
          </div>
          <div className=" bg-opacity-60 rounded-md shadow-md w-full">
            <div className="h-[80px] text-center p-4">
              <div className="bg-red-300 w-8 h-1"></div>
              <div className="h-full flex items-center justify-between">
                <div className="bg-gray-100 rounded-full p-2"></div>
                <p className="text-[11px] text-gray-400">For QA</p>
                <p className="text-[25px]">03</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Grid>
        <Grid.Col span={3}>
          <div className="flex flex-col gap-3">
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-indigo-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2"></div>
                  <p className="text-[11px] text-gray-400">New Task</p>
                  <p className="text-[25px]">07</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-indigo-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2"></div>
                  <p className="text-[11px] text-gray-400">New Task</p>
                  <p className="text-[25px]">07</p>
                </div>
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>2</Grid.Col>
        <Grid.Col span={3}>3</Grid.Col>
        <Grid.Col span={3}>4</Grid.Col>
      </Grid>
    </div>
  );
};

export default Task;
