import React from "react";
import ChatBox from "./ChatBox";
import SideNav from "./SideNav";

function Dashboard() {

  return (
    <div className="dashboard flex flex-row justify-center items-center  w-[95%] h-[95%] max-h-[95%] ">
      <SideNav />
      <ChatBox />
    </div>
  );
}

export default Dashboard;
