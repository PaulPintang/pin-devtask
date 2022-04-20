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
        <div className="pt-3">
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
      </div>
      <Grid>
        <Grid.Col span={3}>
          <div className="pb-2">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              New Task
            </small>
          </div>

          <div className="flex flex-col gap-3">
            <div className=" bg-opacity-60 rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
              <div className="p-4 space-y-2">
                <div className="bg-indigo-300 w-8 h-1"></div>
                <div>
                  <p className="text-[13px] ">FE | OKR Card Component</p>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Ticket:</p>
                    <span>0903000000001395</span>
                  </div>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Added:</p>
                    <span>April 20, 08:50 AM</span>
                  </div>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Deliverable Link:</p>
                    <span className="text-blue-400 font-semibold">View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className="pb-2">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              In-Progress
            </small>
          </div>

          <div className="flex flex-col gap-3"></div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className="pb-2">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              For QA
            </small>
          </div>

          <div className="flex flex-col gap-3"></div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className="pb-2">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              Completed
            </small>
          </div>

          <div className="flex flex-col gap-3"></div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Task;
