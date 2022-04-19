import React from "react";

const Performance = () => {
  return (
    <div className="p-4 shadow-md rounded-md h-full">
      <div className="space-y-2 ">
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
    </div>
  );
};

export default Performance;
