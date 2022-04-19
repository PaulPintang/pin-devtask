import React from "react";
const Performance = () => {
  return (
    <div className="p-2">
      <div className="space-y-2">
        <small className="text-gray-800 font-semibold uppercase text-[12px]">
          Pixel8 Web Solutions & Consultancy Inc
        </small>
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
      </div>
      <div className="py-3">
        <p>Daily Performance Stats</p>
        <div className="py-1 mt-2 bg-opacity-60 rounded-md shadow-sm w-full">
          <div className="h-[80px] text-center p-4">
            <div className="h-full flex items-center justify-between">
              <div>
                <p className="text-[25px]">376</p>
                <span className="text-[11px] text-gray-400">Total Hours</span>
              </div>
              <div>
                <p className="text-[25px]">110</p>
                <span className="text-[11px] text-gray-400">Total Pending</span>
              </div>
              <div>
                <p className="text-[25px]">08</p>
                <span className="text-[11px] text-gray-400">Total Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
