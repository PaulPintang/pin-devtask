import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Grid, Badge, Modal, Button } from "@mantine/core";
const Task = () => {
  const [opened, setOpened] = useState(false);
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

      <Grid className="h-[calc(100vh- 180px)] overfl ow-y-scroll">
        <Grid.Col span={3}>
          <div className="pb-2 sticky top-0 bg-white">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              New Task
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" bg-opacity-60 rounded-md shadow-md w-full hover:-translate-y-0.5 transition-all">
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
                  <Button mt={3} color="indigo" size="xs">
                    Start the task
                  </Button>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full  hover:-translate-y-0.5 transition-all">
              <div className="p-4 space-y-2">
                <div className="bg-indigo-300 w-8 h-1"></div>
                <div>
                  <p className="text-[13px] ">FE | Store Voucher Page </p>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Ticket:</p>
                    <span>0903000000001598</span>
                  </div>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Added:</p>
                    <span>April 20, 11:50 AM</span>
                  </div>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Deliverable Link:</p>
                    <span className="text-blue-400 font-semibold">View</span>
                  </div>
                  <Button mt={3} color="indigo" size="xs">
                    Start the task
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className="pb-2 sticky top-0 bg-white">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              In-Progress
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <div
              onClick={() => setOpened(true)}
              className=" bg-opacity-60 rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all"
            >
              <div className="p-4 space-y-2">
                <div className="bg-blue-300 w-8 h-1"></div>
                <div>
                  <p className="text-[13px] ">FE | Store Voucher Page </p>
                  <div className="py-1 flex gap-2">
                    <Badge variant="filled" color="teal" size="xs">
                      front-end
                    </Badge>
                    <Badge variant="light" color="indigo" size="xs">
                      backend
                    </Badge>
                    <Badge variant="light" color="red" size="xs">
                      for qa
                    </Badge>
                  </div>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Ticket:</p>
                    <span>0903000000001598</span>
                  </div>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Added:</p>
                    <span>April 20, 11:50 AM</span>
                  </div>
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Started:</p>
                    <span>April 20, 12:00 PM</span>
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
          <div className="pb-2 sticky top-0 bg-white">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              For QA
            </small>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div className=" bg-opacity-60 rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
                <div className="p-4 space-y-2">
                  <div className="bg-red-300 w-8 h-1"></div>
                  <div>
                    <p className="text-[13px] ">FE | Store Voucher Page </p>
                    <div className="py-1 flex gap-2">
                      <Badge variant="light" color="teal" size="xs">
                        front-end
                      </Badge>
                      <Badge variant="light" color="indigo" size="xs">
                        backend
                      </Badge>
                      <Badge variant="filled" color="red" size="xs">
                        for qa
                      </Badge>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Ticket:</p>
                      <span>0903000000001598</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Added:</p>
                      <span>April 20, 11:50 AM</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Started:</p>
                      <span>April 20, 12:00 PM</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Deliverable Link:</p>
                      <span className="text-blue-400 font-semibold">View</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>QA Personnel:</p>
                      <span>Juan Dela Cruz</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Spent:</p>
                      <span>8hrs34m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-opacity-60 rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
                <div className="p-4 space-y-2">
                  <div className="bg-red-300 w-8 h-1"></div>
                  <div>
                    <p className="text-[13px] ">FE | Store Voucher Page </p>
                    <div className="py-1 flex gap-2">
                      <Badge variant="light" color="teal" size="xs">
                        front-end
                      </Badge>
                      <Badge variant="light" color="indigo" size="xs">
                        backend
                      </Badge>
                      <Badge variant="filled" color="red" size="xs">
                        for qa
                      </Badge>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Ticket:</p>
                      <span>0903000000001598</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Added:</p>
                      <span>April 20, 11:50 AM</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Started:</p>
                      <span>April 20, 12:00 PM</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Deliverable Link:</p>
                      <span className="text-blue-400 font-semibold">View</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>QA Personnel:</p>
                      <span>Juan Dela Cruz</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Spent:</p>
                      <span>8hrs34m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={3}>
          <div className="pb-2 sticky top-0 bg-white">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              Completed
            </small>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className=" bg-opacity-60 rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
                  <div className="p-4 space-y-2">
                    <div className="bg-green-300 w-8 h-1"></div>
                    <div>
                      <p className="text-[13px] ">FE | Store Voucher Page </p>
                      <div className="py-1 flex gap-2">
                        <Badge variant="filled" color="green" size="xs">
                          Completed
                        </Badge>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Ticket:</p>
                        <span>0903000000001598</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Added:</p>
                        <span>April 20, 11:50 AM</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Started:</p>
                        <span>April 20, 12:00 PM</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Deliverable Link:</p>
                        <span className="text-blue-400 font-semibold">
                          View
                        </span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>QA Personnel:</p>
                        <span>Juan Dela Cruz</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Spent:</p>
                        <span>8hrs34m</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-opacity-60 rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
                  <div className="p-4 space-y-2">
                    <div className="bg-green-300 w-8 h-1"></div>
                    <div>
                      <p className="text-[13px] ">FE | Store Voucher Page </p>
                      <div className="py-1 flex gap-2">
                        <Badge variant="filled" color="green" size="xs">
                          Completed
                        </Badge>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Ticket:</p>
                        <span>0903000000001598</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Added:</p>
                        <span>April 20, 11:50 AM</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Started:</p>
                        <span>April 20, 12:00 PM</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Deliverable Link:</p>
                        <span className="text-blue-400 font-semibold">
                          View
                        </span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>QA Personnel:</p>
                        <span>Juan Dela Cruz</span>
                      </div>
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Spent:</p>
                        <span>8hrs34m</span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </Grid.Col>
      </Grid>

      {/* ModalView */}
      <div>
        <Modal
          size="sm"
          opened={opened}
          onClose={() => setOpened(false)}
          title="Task: FE | Store Voucher Page"
        >
          <div>
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
            <div className="space-y-3 pl-3">
              <div>
                <p className="text-gray-700 text-[14px]">
                  Date: Thursday, April 21, 2022
                </p>
                <small className="text-gray-500 pl-3">Today Stats:</small>
                <div className="pl-6">
                  <div className="flex gap-2 items-center text-[12px] text-gray-500">
                    <div className="bg-yellow-300 w-2 h-2"></div>
                    <p className=" uppercase font-semibold">Spent:</p>
                    <span>4</span>
                  </div>
                  <div className="flex gap-2 items-center text-[12px] text-gray-500">
                    <div className="bg-indigo-300 w-2 h-2"></div>
                    <p className=" uppercase font-semibold">Spent:</p>
                    <span>0</span>
                  </div>
                  <div className="flex gap-2 items-center text-[12px] text-gray-500">
                    <div className="bg-green-300 w-2 h-2"></div>
                    <p className=" uppercase font-semibold">Recorded:</p>
                    <span>4</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex gap-2 items-center text-[13px] text-gray-500">
                    <p>Ticket:</p>
                    <span>0903000000001598</span>
                  </div>
                  <div className="flex gap-2 items-center text-[13px] text-gray-500">
                    <p>Added:</p>
                    <span>April 20, 11:50 AM</span>
                  </div>
                  <div className="flex gap-2 items-center text-[13px] text-gray-500">
                    <p>Started:</p>
                    <span>April 23, 08:50 AM</span>
                  </div>

                  <div className="flex gap-2 items-center text-[13px] text-gray-500">
                    <p>Deliverable Link:</p>
                    <span className="text-blue-400 font-semibold">View</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 flex gap-2 items-center text-[12px] text-gray-500">
              <div className="bg-green-300 w-2 h-2"></div>
              <p className=" uppercase font-semibold">Total Spent Recorded:</p>
              <span>23 hours</span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Task;
