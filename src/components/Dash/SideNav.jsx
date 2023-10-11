import React from "react";
import { useNavigate } from "react-router-dom";
function SideNav(props) {
  const navigate = useNavigate();
  const { userId, logoutHandler } = props;
  return (
    <div className=" fixed w-[100%] flex flex-row md:w-[25%] md:static md:flex-row p-3 justify-between top-0  h-auto  md:h-[100%] md:max-h-[100%] md:flex-col overflow-none flex-grow-0 drop-shadow-md text-white z-50 ">
      <button className="w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[12px] text-xl font-thin">
        Real Time Chat
      </button>
      <div className="w-[100%]">
        <button
          onClick={() => navigate(`/user/${userId}`)}
          className="w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[6px] text-l font-thin "
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
