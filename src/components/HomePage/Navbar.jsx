import React from "react";
import me from "../../assets/me.png";
const Navbar = () => {
  return (
    <div className="py-2 flex flex-col justify-between h-full ">
      <div>
        <div className="py-5">
          <div className="flex items-center gap-2 pb-6">
            <div className="w-[50px]">
              <img src={me} alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-[13px]">Paul Justine Pintang</p>
              <small className="text-xs text-gray-400 font-extralight">
                @paulpintang
              </small>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
              <i class="fa-solid fa-list-check text-gray-400"></i>
              <p className="text-gray-700 text-[12.2px]">Your Task</p>
            </div>
            <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-1">
              <i class="fa-regular fa-message text-gray-400"></i>
              <p className="text-gray-700 text-[12.2px]">Messages</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="space-y-1">
          <div className="flex items-center gap-3 w-full bg- gray-100 px-2 py-1">
            <i class="fa-solid fa-list-check text-gray-400"></i>
            <p className="text-gray-700 text-[12.2px]">Dark Mode</p>
          </div>
          <div className="flex items-center gap-3 w-full bg -gray-100 px-2 py-1">
            <i class="fa-regular fa-message text-gray-400"></i>
            <p className="text-gray-700 text-[12.2px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
