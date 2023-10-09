import React from "react";
import { useNavigate } from "react-router-dom";
function SideNav(props) {
  const navigate = useNavigate();
  const { userId, logoutHandler } = props;
  return (
    <div className="flex flex-col p-3 justify-between w-[25%] h-[100%] max-h-[100%]  overflow-none flex-grow-0 drop-shadow-md text-white z-50 ">
      <button className="w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[12px] text-xl font-thin">
        Real Time Chat
      </button>
      <div className="">
        <button
          onClick={() => navigate(`/user/${userId}`)}
          className="w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[6px] text-l font-thin my-4"
        >
          Account
        </button>
      </div>

      <button
        onClick={props.logoutHandler}
        className="w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[6px] text-l font-thin"
      >
        Logout
      </button>
    </div>
  );
}

export default SideNav;
