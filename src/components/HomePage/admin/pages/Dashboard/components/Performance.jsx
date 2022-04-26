import React from "react";
const Performance = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md h-full space-y-3 relative">
      <div className="space-y-2 ">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-blue-300"></div>
          <small className="text-gray-800 font-semibold uppercase text-[12px]">
            SoftWare Department
          </small>
        </div>

        <div className="space-y-1 pl-5">
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              Trainees:
            </small>
            <small className="text-gray-500">54</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              Intern:
            </small>
            <small className="text-gray-500">Paul Justine Pintang</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              School/University
            </small>
            <small className="text-gray-500">
              Bicol University Polangui Campus
            </small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              OJT Required Hours:
            </small>
            <small className="text-gray-500">486 hours</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              Started:
            </small>
            <small className="text-gray-500">February 17, 2022</small>
          </div>
        </div>
      </div>
      <div className="space-y-2 ">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-yellow-300"></div>
          <small className="text-gray-800 font-semibold uppercase text-[12px]">
            Daily Summary
          </small>
        </div>
        <div className="space-y-1 pl-5">
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              No. of in-progress task:
            </small>
            <small className="text-gray-500">66 tasks</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              Today Completed Task:
            </small>
            <small className="text-gray-500">08 tasks</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-500 uppercase">
              Today For-qa task:
            </small>
            <small className="text-gray-500">110 task</small>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center text-[13px] ">
        <div className="w-1 h-3 bg-green-300"></div>
        <small className="font-semibold text-gray-800 uppercase">Today:</small>
        <small className="text-gray-500 ">Monday, April 18</small>
      </div>
    </div>
  );
};

export default Performance;
