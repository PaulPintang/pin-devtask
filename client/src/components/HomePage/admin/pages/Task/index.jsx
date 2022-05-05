import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../../../../context/AuthContext";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Grid, Badge, Modal, Button, Input } from "@mantine/core";
const Task = () => {
  const { user, userPic } = useContext(AuthContext);
  const [opened, setOpened] = useState(false);
  const [addTaskModal, setAddTaskModal] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState();
  const [taskTicketNo, setTicketNo] = useState();
  const [taskLink, setTaskLink] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  useEffect(() => {
    setAddTaskModal(false);
  }, [tasks]);

  const handleTaskname = (e) => {
    setTaskName(e.target.value);
  };
  const handleTicketNo = (e) => {
    setTicketNo(e.target.value);
  };
  const handleTaskLink = (e) => {
    setTaskLink(e.target.value);
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/api/tasks", {
        // addd to database
        taskname: taskName,
        ticketno: taskTicketNo,
        deliverable: taskLink,
      })
      .then(() => {
        setTasks([
          // ...spread initial data, show data without refresh
          ...tasks,
          // add to state
          {
            taskname: taskName,
            ticketno: taskTicketNo,
            deliverable: taskLink,
          },
        ]);
      });
    // // empty/null the input value after submit
    // setTask("");
  };

  return (
    <div className="p-3">
      <div>
        <p className="text-[12px] text-gray-400">Monday, April 18</p>
        <div className="flex flex-col">
          <p className="text-gray-700 text-2xl">Manage Task</p>
        </div>
        <div className="flex justify-between items-center bg-slate-50 p-2 rounded-sm">
          <div className="flex flex-col md:flex-row lg:flex-row lg:justify-start lg:items-center gap-2 md:gap-4 lg:gap-4">
            <div className="flex gap-3 items-center">
              <div className="bg-indigo-300 w-2 h-2"></div>
              <small className="text-gray-400  text-[10px] uppercase font-semibold ">
                New
              </small>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-2 h-2 bg-yellow-300"></div>
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
          <Button onClick={() => setAddTaskModal(true)} color="teal" size="xs">
            Add new task
          </Button>
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
            {tasks.map((task) => (
              <div className="bg-white rounded-md shadow-md w-full hover:-translate-y-0.5 transition-all">
                <div className="p-4 space-y-2">
                  <div className="bg-indigo-300 w-8 h-1"></div>
                  <div>
                    <p className="text-[13px] ">{task.taskname}</p>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500">
                      <p>Ticket:</p>
                      <span>{task.ticketno}</span>
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
                      Assign
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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
                <div className="bg-yellow-300 w-8 h-1"></div>
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
                  <div className="flex gap-2 items-center text-[10px] text-gray-500">
                    <p>Assigned to:</p>
                    <span className="font-semibold">Paul Justine Pintang</span>
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

      {/* ModalView */}
      {/* View Task In-progress */}
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
            <div className="flex items-center gap-2  pb-3">
              <div className="w-[45px]">
                <img src={userPic} alt="" className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-[13px]">{user}</p>
                <small className="text-xs text-gray-400 font-extralight">
                  @paulpintang
                </small>
              </div>
            </div>
            <div className="space-y-3 pl-3">
              <div>
                <p className="text-gray-700 text-[14px]">
                  Thursday, April 21, 2022
                </p>
                <small className="text-gray-500 pl-3">
                  Today stats as of 11:23 AM
                </small>
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

            <div className="leading-none">
              <p className="pt-4 text-gray-700">Task Status</p>
              <small className="text-[10px] text-gray-400">
                Note: The task must be done before changing it's status!
              </small>
            </div>
            <div className="flex gap-2 items-center text-[12px] text-gray-500">
              <div className="bg-green-300 w-2 h-2"></div>
              <p className="font-semibold">Total Spent Recorded:</p>
              <span>23 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center text-[12px] text-gray-500">
                <p className="font-semibold">Status:</p>
                {/* <span className="bg-green-300 px-2 rounded-md uppercase text-[9px] font-semibold">
                  In-Progress
                </span> */}
                <Badge variant="filled" color="red" size="xs">
                  for qa
                </Badge>
              </div>
              {/* <Button size="xs" color="violet" compact>
                Mark as done
              </Button> */}
            </div>
          </div>
          <Button size="xs" color="cyan" mt="md" fullWidth>
            Notify the QA Personnel
          </Button>
        </Modal>
      </div>

      {/* Add task */}
      <div>
        <Modal
          size="sm"
          opened={addTaskModal}
          onClose={() => setAddTaskModal(false)}
          title="Add new task"
        >
          <div>
            <div className="py-2 space-y-3">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Task name
                </p>
                <Input
                  placeholder="Task name"
                  size="xs"
                  onChange={handleTaskname}
                  value={taskName}
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Ticket No.
                </p>
                <Input
                  placeholder="Ticket number"
                  size="xs"
                  onChange={handleTicketNo}
                  value={taskTicketNo}
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">
                  Deliverable Link
                </p>
                <Input
                  placeholder="Task link"
                  size="xs"
                  onChange={handleTaskLink}
                  value={taskLink}
                />
              </div>
            </div>
          </div>

          <Button
            size="xs"
            color="cyan"
            mt="md"
            onClick={handleSubmit}
            fullWidth
          >
            Add new task
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Task;
