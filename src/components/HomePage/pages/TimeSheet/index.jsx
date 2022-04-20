import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Grid, Input, Button } from "@mantine/core";
import { TimeInput, DatePicker } from "@mantine/dates";
const Timesheet = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="p-3">
      <p className="text-[12px] text-gray-400">Monday, April 18</p>
      <div className="flex flex-col">
        <p className="text-gray-700 text-2xl">Task Timesheets</p>
      </div>
      <div className="pt-3">
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-start lg:items-center gap-2 md:gap-4 lg:gap-4 pb-3">
          <div className="flex gap-3 items-center">
            <div className="bg-yellow-300 w-2 h-2"></div>
            <small className="text-gray-400  text-[10px] uppercase font-semibold ">
              AM
            </small>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-indigo-300 w-2 h-2"></div>
            <small className="text-gray-400  text-[10px] uppercase font-semibold ">
              PM
            </small>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-green-300 w-2 h-2"></div>
            <small className="text-gray-400  text-[10px] uppercase font-semibold ">
              Recorded
            </small>
          </div>
        </div>
      </div>
      <Grid grow gutter="sm" className="h-[calc(100vh-190px)]">
        <Grid.Col span={8}>
          <div className="h-full w-full bg-white shadow-md dark:bg-gray-800 mb-8 rounded-md p-2 h">
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
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="rounded-tr-md hidden md:table-cell lg:table-cell py-3 text-left text-[9px] font-[600] text-gray-400 dark:text-gray-50  tracking-wider bg-gray-100 dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
                  >
                    Expand
                  </th>
                </tr>
              </thead>
              <tbody className="text-[11px] divide-y divide-gray-100 overflow-auto text-gray-600 relative">
                <tr className="border-none ">
                  <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell pl-3">
                    FE | BE | Todo App
                  </td>
                  <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
                    0903000000001395
                  </td>
                  <td className="dark:text-gray-400  px-5  py-2 hidden md:table-cell lg:table-cell ">
                    <span>4</span>
                  </td>
                  <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
                    <div className="flex bg-gray-100 rounded items-center max-w-max px-2 py-1 gap-2">
                      <div className="w-2 h-2 bg-green-300 "></div>
                      <span className=" text-green-500   text-[9px]">
                        Recording
                      </span>
                    </div>
                  </td>
                  <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
                    <div className="text-gray-500 pr-2">
                      <span className="text-[9px] text-blue-400 font-semibold">
                        UPDATE
                      </span>
                    </div>
                  </td>
                  <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpand(!expand)}
                    >
                      {expand ? (
                        <IoMdArrowDropup className="text-lg" />
                      ) : (
                        <div>
                          <IoMdArrowDropdown className="text-lg" />
                          <div className="absolute right-0">
                            <div className="shadow-md rounded-md">
                              <div className="p-3">
                                <div className="py-2">
                                  <div className=" text-[10px] text-gray-500">
                                    <div className="flex gap-2 items-center">
                                      <div className="bg-yellow-300 w-2 h-2"></div>
                                      <p className=" uppercase font-semibold">
                                        Start Date Time:
                                      </p>
                                    </div>
                                    <span>April 20, 2022 | 08:00 AM</span>
                                  </div>
                                  <div className=" text-[10px] text-gray-500">
                                    <div className="flex gap-2 items-center">
                                      <div className="bg-yellow-300 w-2 h-2"></div>
                                      <p className=" uppercase font-semibold">
                                        End Date Time:
                                      </p>
                                    </div>
                                    <span>April 20, 2022 | 08:00 AM</span>
                                  </div>
                                </div>
                                {/* <div className="py-2">
                                  <div className=" text-[10px] text-gray-500">
                                    <div className="flex gap-2 items-center">
                                      <div className="bg-indigo-300 w-2 h-2"></div>
                                      <p className=" uppercase font-semibold">
                                        Start Date Time:
                                      </p>
                                    </div>
                                    <span>April 20, 2022 | 08:00 AM</span>
                                  </div>
                                  <div className=" text-[10px] text-gray-500">
                                    <div className="flex gap-2 items-center">
                                      <div className="bg-indigo-300 w-2 h-2"></div>
                                      <p className=" uppercase font-semibold">
                                        End Date Time:
                                      </p>
                                    </div>
                                    <span>April 20, 2022 | 08:00 AM</span>
                                  </div>
                                </div> */}
                                <div className="flex gap-2 items-center text-[10px] text-gray-500">
                                  <div className="bg-green-300 w-2 h-2"></div>
                                  <p className=" uppercase font-semibold">
                                    Recorded:
                                  </p>
                                  <span>8hrs</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid.Col>

        <Grid.Col span={4}>
          <div className="w-full h-full p-2 shadow-md rounded-md">
            <div className="p-3">
              <p className="text-gray-700">What need's to be done today ?</p>
              <span className="text-[11px] text-gray-400 ">
                Note: Task here is based on your on-progress task
              </span>
              <div className="py-3">
                <div className="flex gap-2 items-center text-[10px] text-gray-500">
                  <div className="bg-yellow-300 w-2 h-2"></div>
                  <p className=" uppercase font-semibold">Spent:</p>
                  <span>4hrs</span>
                </div>
                <div className="flex gap-2 items-center text-[10px] text-gray-500">
                  <div className="bg-indigo-300 w-2 h-2"></div>
                  <p className=" uppercase font-semibold">Spent:</p>
                  <span>4hrs</span>
                </div>
                <div className="flex gap-2 items-center text-[10px] text-gray-500">
                  <div className="bg-green-300 w-2 h-2"></div>
                  <p className=" uppercase font-semibold">Recorded:</p>
                  <span>8hrs</span>
                </div>
              </div>

              <div className="py-2 space-y-3">
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold">
                    Task name
                  </p>
                  <Input placeholder="Task name" size="xs" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold">
                    Ticket No.
                  </p>
                  <Input placeholder="Ticket number" size="xs" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold">
                    Start Date Time
                  </p>
                  <div className="flex justify-between gap-2">
                    <DatePicker
                      className="w-2/4"
                      size="xs"
                      placeholder="Pick date"
                      defaultValue={new Date()}
                      disabled
                    />
                    <TimeInput
                      className="w-2/4"
                      size="xs"
                      format="12"
                      defaultValue={new Date()}
                      disabled
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold">
                    End Date Time
                  </p>
                  <div className="flex justify-between gap-2">
                    <DatePicker
                      className="w-2/4"
                      size="xs"
                      placeholder="Pick date"
                      defaultValue={new Date()}
                      disabled
                    />
                    <TimeInput className="w-2/4" size="xs" format="12" />
                  </div>
                </div>
              </div>

              <Button mt={3} color="indigo" fullWidth>
                Start the task
              </Button>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Timesheet;
