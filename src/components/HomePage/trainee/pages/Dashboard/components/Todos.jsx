import React from "react";
import todo from "../../../../../../assets/task.png";
import { Button } from "@mantine/core";
import { MdAdd } from "react-icons/md";
const Todos = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md h-full ">
      <div className="h-full w-full p-2 flex flex-col justify-center items-center  border-dashed border border-gray-200 rounded-md">
        <div className="w-[140px]">
          <img src={todo} alt="" />
        </div>
        <div className="flex flex-col gap-2 items-center justify-centerw-full py-3 h-full">
          <h1 className="max-w-[130px] text-center text-[15px] text-gray-700 leading-5">
            Don't have any new todo ?
          </h1>
          <Button radius="xl" rightIcon={<MdAdd size={16} />} compact>
            <span className="font-normal text-[10px]">Add todo</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
