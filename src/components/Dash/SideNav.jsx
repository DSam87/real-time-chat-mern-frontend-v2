import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function SideNav(props) {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{opacity: 0, translateX: -100}}
      animate={{ opacity: 100, translateX: 0}}
      transition={{
        duration: 2,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className=" fixed w-[100%] flex flex-row md:w-[25%] md:static md:flex-row p-3 justify-between top-0  h-auto  md:h-[100%] md:max-h-[100%] md:flex-col overflow-none flex-grow-0 drop-shadow-md text-white z-50 "
    >
      <button className="w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[12px] text-xl font-thin">
        Real Time Chat
      </button>
      <div>
        <a
          href="https://github.com/DSam87/real-time-chat-mern-frontend-v2"
          className="flex justify-center items-center align-middle w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[6px] text-l font-thin "
        >
          <p>GitHub</p>
        </a>
      </div>

      <button
        onClick={()=> navigate("/")}
        className="w-[100%] rounded-md bg-indigo-950 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl hover:bg-indigo-900 h-[100px] drop-shadow-xl uppercase tracking-[6px] text-l font-thin"
      >
        Logout
      </button>
    </motion.div>
  );
}

export default SideNav;
