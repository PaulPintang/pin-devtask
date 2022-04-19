import React from 'react';
import todo from "../../../../../assets/task.png";
import { Button } from "@mantine/core";
import { MdAdd } from "react-icons/md";
const Todos = () => {
    return (
      <div className="py-2">
        <div className="flex justify-between items-center">
          <p className="text-gray-800 text-sm">Todo List</p>
        </div>
        <div className="h-full w-full p-2 flex flex-col justify-center items-center">
          <div className="w-20">
            <img src={todo} alt="" />
          </div>
          <div className="flex flex-col items-center border-dashed border border-gray-200 w-full py-3">
            <h1 className="max-w-[130px] text-center text-[15px] text-gray-600">
              Don't have any new todo ?
            </h1>
            <Button radius="xl" rightIcon={<MdAdd size={16} />} compact>
              <span className="font-normal text-[10px]">Add todo</span>
            </Button>
          </div>
        </div>
      </div>
    );
}
 
export default Todos;