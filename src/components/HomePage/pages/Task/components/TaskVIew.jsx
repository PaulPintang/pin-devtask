import React from "react";

const TaskView = () => {
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
              <div className="bg-green-300 w-2 h-2"></div>
              <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                Frontend
              </small>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-indigo-300 w-2 h-2"></div>
              <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                Backend
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
