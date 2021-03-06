import React, { useState } from "react";
import pic from "../../../../../../assets/members/img1.png";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
const Table = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 mb-8 rounded-md p-2 h">
      <div className="flex justify-between items-center py-2">
        <div>
          <p className="text-gray-700">All Tasks</p>
        </div>
        <div className="relative ">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <div className="w-10 h-2 bg-yellow-300 "></div>
            {showFilter ? (
              <RiArrowDownSLine className="text-gray-400" />
            ) : (
              <RiArrowUpSLine className="text-gray-400" />
            )}
          </div>
          {showFilter && (
            <div className="absolute z-50 ">
              <div className="shadow-md bg-white p-3 flex flex-col justify-center items-center rounded">
                <div className="">
                  <button>
                    <div className="w-10 h-2 bg-yellow-300 "></div>
                  </button>
                </div>
                <div className="">
                  <button>
                    <div className="w-10 h-2 bg-green-300 "></div>
                  </button>
                </div>
                <div className="">
                  <button>
                    <div className="w-10 h-2 bg-blue-300 "></div>
                  </button>
                </div>
                <div className="">
                  <button>
                    <div className="w-10 h-2 bg-red-300 "></div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <table className="min-w-full  border-collapse w-full border-none">
        <thead className="sticky top-0 z-30  dark:bg-[#2D3746]">
          <tr>
            <th
              scope="col"
              className="md:px-3 lg:px-3 pl-3 py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider  bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tl-md"
            >
              Intern
            </th>
            <th
              scope="col"
              className="rounded-tr-md md:rounded-none lg:rounded-none py-3 md:pr-3 lg:pr-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider  bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
            >
              Required hours
            </th>
            <th
              scope="col"
              className="hidden md:table-cell lg:table-cell  py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
            >
              Pending hours
            </th>
            <th
              scope="col"
              className="hidden md:table-cell lg:table-cell px-5 py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
            >
              Total hours
            </th>

            <th
              scope="col"
              className=" hidden md:table-cell lg:table-cell py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
            >
              Completed task
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
              <div className="flex items-center gap-2">
                <div className="w-[30px]">
                  <img src={pic} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p>Paul Justine Pintang</p>
                  <small className="text-gray-500">
                    Code name: PaulPintang-023
                  </small>
                </div>
              </div>
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              386hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
              68hrs
            </td>
            <td className="dark:text-gray-400  px-5  py-2 hidden md:table-cell lg:table-cell ">
              223hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              13 task
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              <div className="text-gray-500 pr-2">
                <FiMoreHorizontal className="text-lg" />
              </div>
            </td>
          </tr>
          <tr className="border-none ">
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell pl-3">
              <div className="flex items-center gap-2">
                <div className="w-[30px]">
                  <img src={pic} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p>Paul Justine Pintang</p>
                  <small className="text-gray-500">
                    Code name: PaulPintang-023
                  </small>
                </div>
              </div>
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              386hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
              68hrs
            </td>
            <td className="dark:text-gray-400  px-5  py-2 hidden md:table-cell lg:table-cell ">
              223hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              13 task
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              <div className="text-gray-500 pr-2">
                <FiMoreHorizontal className="text-lg" />
              </div>
            </td>
          </tr>
          <tr className="border-none ">
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell pl-3">
              <div className="flex items-center gap-2">
                <div className="w-[30px]">
                  <img src={pic} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p>Paul Justine Pintang</p>
                  <small className="text-gray-500">
                    Code name: PaulPintang-023
                  </small>
                </div>
              </div>
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              386hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
              68hrs
            </td>
            <td className="dark:text-gray-400  px-5  py-2 hidden md:table-cell lg:table-cell ">
              223hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              13 task
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              <div className="text-gray-500 pr-2">
                <FiMoreHorizontal className="text-lg" />
              </div>
            </td>
          </tr>
          <tr className="border-none ">
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell pl-3">
              <div className="flex items-center gap-2">
                <div className="w-[30px]">
                  <img src={pic} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p>Paul Justine Pintang</p>
                  <small className="text-gray-500">
                    Code name: PaulPintang-023
                  </small>
                </div>
              </div>
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              386hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
              68hrs
            </td>
            <td className="dark:text-gray-400  px-5  py-2 hidden md:table-cell lg:table-cell ">
              223hrs
            </td>
            <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
              13 task
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
  );
};

export default Table;
