import React, { useContext, useState } from "react";
import pic from "../../../../../../assets/members/img1.png";
import { Grid, Button, Badge } from "@mantine/core";
import { FiStar } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { BiGitMerge } from "react-icons/bi";
import {
  MdOutlineMoreTime,
  MdPendingActions,
  MdOutlineCalendarToday,
} from "react-icons/md";

import { useParams } from "react-router-dom";
import InternContext from "../../../../../../context/InternContext";

const ViewProfile = () => {
  const [opened, setOpened] = useState(false);

  const { interns } = useContext(InternContext);
  let { cname } = useParams();
  const filtered = interns.filter((codename) => codename.cname === cname);
  console.log(filtered);
  return (
    <div className="p-3">
      <div className="flex gap-8 w-full pb-8">
        <div>
          <div className="w-[190px]">
            <img src={pic} alt="" />
          </div>
          <div className="text-center pt-3 leading-none">
            <p className="text-[13px]">Paul Justine Pintang</p>
            <small className="text-gray-500 text-xs">Bicol University</small>
          </div>
        </div>
        <div className="w-full">
          <div className="py-3">
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

          <div className="w-full flex justify-between items-center gap-2 pb-4">
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-indigo-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <FiStar className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">New Task</p>
                  <p className="text-[25px]">07</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-blue-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <GiProgression className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">In Progress</p>
                  <p className="text-[25px]">01</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-red-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <BiGitMerge className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">For QA</p>
                  <p className="text-[25px]">03</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2">
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-yellow-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <MdOutlineMoreTime className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">Total Hours</p>
                  <p className="text-[25px]">376</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-blue-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <MdPendingActions className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">Total Pending</p>
                  <p className="text-[25px]">110</p>
                </div>
              </div>
            </div>
            <div className=" bg-opacity-60 rounded-md shadow-md w-full">
              <div className="h-[80px] text-center p-4">
                <div className="bg-green-300 w-8 h-1"></div>
                <div className="h-full flex items-center justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <MdOutlineCalendarToday className="text-sm text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400">Total Today</p>
                  <p className="text-[25px]">08</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-25" />
      <div className="flex justify-between">
        <p className="text-gray-700">Task Progress</p>
        <Button mt={3} color="teal" size="xs" compact>
          Assign new task
        </Button>
      </div>
      <Grid className="h-[calc(100vh- 180px)] overfl ow-y-scroll">
        <Grid.Col span={3}>
          <div className="pb-2 sticky top-0 bg-white">
            <small className="text-gray-400  text-[10px] uppercase font-semibold">
              New Task
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-md shadow-md w-full hover:-translate-y-0.5 transition-all">
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
            <div className=" bg-white rounded-md shadow-md w-full  hover:-translate-y-0.5 transition-all">
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
              className=" bg-white rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all"
            >
              <div className="p-4 space-y-2">
                <div className="bg-blue-300 w-8 h-1"></div>
                <div>
                  <p className="text-[13px] ">FE | Store Voucher Page </p>
                  <div className="py-1 flex gap-2">
                    <Badge variant="filled" color="teal" size="xs">
                      front-end
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
              <div className=" bg-white rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
                <div className="p-4 space-y-2">
                  <div className="bg-red-300 w-8 h-1"></div>
                  <div>
                    <p className="text-[13px] ">BE | Store Voucher</p>
                    <div className="py-1 flex gap-2">
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
              <div className=" bg-white rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
                <div className="p-4 space-y-2">
                  <div className="bg-red-300 w-8 h-1"></div>
                  <div>
                    <p className="text-[13px] ">FE | Store Voucher Page </p>
                    <div className="py-1 flex gap-2">
                      <Badge variant="light" color="teal" size="xs">
                        front-end
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
                <div className=" bg-white rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
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
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Comment:</p>
                        <span>Very good!</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-white rounded-md shadow-md w-full cursor-pointer hover:-translate-y-0.5 transition-all">
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
                      <div className="flex gap-2 items-center text-[10px] text-gray-500">
                        <p>Comment:</p>
                        <span>Very good!</span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ViewProfile;
