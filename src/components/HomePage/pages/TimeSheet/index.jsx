import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
const Timesheet = () => {
  return (
    <div className="p-3">
      <p className="text-[12px] text-gray-400">Monday, April 18</p>
      <div className="flex flex-col">
        <p className="text-gray-700 text-2xl">Task Timesheets</p>
      </div>
      <div className="bg-white shadow-md dark:bg-gray-800 mb-8 rounded-md p-2 h">
        <table className="min-w-full  border-collapse w-full border-none">
          <thead className="sticky top-0 z-30  dark:bg-[#2D3746]">
            <tr>
              <th
                scope="col"
                className="md:px-3 lg:px-3 pl-3 py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider  bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tl-md"
              >
                Task Name
              </th>
              <th
                scope="col"
                className="rounded-tr-md md:rounded-none lg:rounded-none py-3 md:pr-3 lg:pr-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider  bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Ticket No.
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell  py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Start Date Time
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell px-5 py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                End Date Time
              </th>

              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Spent
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Status
              </th>
              <th
                scope="col"
                className="rounded-tr-md hidden md:table-cell lg:table-cell py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              ></th>
            </tr>
          </thead>
          <tbody className="text-[11px] divide-y divide-gray-100 overflow-auto text-gray-600">
            <tr className="border-none ">
              <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell pl-3">
                FE | BE | Todo App
              </td>
              <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
                0903000000001395
              </td>
              <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
                <span className="font-semibold text-[9px] uppercase text-blue-400">
                  View link
                </span>
              </td>
              <td className="dark:text-gray-400  px-5  py-2 hidden md:table-cell lg:table-cell ">
                <span>8hrs14m</span>
              </td>
              <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
                <div className="flex bg-gray-100 rounded items-center max-w-max px-2 py-1 gap-2">
                  <div className="w-2 h-2 bg-green-300 "></div>
                  <span className=" text-green-500   text-[9px]">
                    Completed
                  </span>
                </div>
              </td>
              <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
                <div className="text-gray-500 pr-2">
                  <FiMoreHorizontal className="text-lg" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timesheet;
