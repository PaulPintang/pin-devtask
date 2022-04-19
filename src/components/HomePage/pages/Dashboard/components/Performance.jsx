import React from "react";

const Performance = () => {
  return (
    <div className="p-4 shadow-md rounded-md h-full space-y-3">
      <div className="space-y-2 ">
        <small className="text-gray-800 font-semibold uppercase text-[12px]">
          Pixel8 Web Solutions & Consultancy Inc
        </small>
        <div className="space-y-1 pl-3">
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              Department:
            </small>
            <small className="text-gray-600">Software Development</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              Intern:
            </small>
            <small className="text-gray-600">Paul Justine Pintang</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              School:
            </small>
            <small className="text-gray-600">
              Bicol University Polangui Campus
            </small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              OJT Required Hours:
            </small>
            <small className="text-gray-600">486 hours</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              Started:
            </small>
            <small className="text-gray-600">February 17, 2022</small>
          </div>
        </div>
      </div>
      <div className="space-y-2 ">
        <small className="text-gray-800 font-semibold uppercase text-[12px]">
          Daily Summary
        </small>
        <div className="space-y-1 pl-3">
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              No. of Tasks Today:
            </small>
            <small className="text-gray-600">01</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              Total Hours in Timesheets:
            </small>
            <small className="text-gray-600">08 hours</small>
          </div>
          <div className="flex gap-2 items-center text-[13px] ">
            <small className="font-semibold text-gray-700 uppercase">
              Total Pending:
            </small>
            <small className="text-gray-600">110 hours</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
