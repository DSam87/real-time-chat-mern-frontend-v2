import React, {useEffect} from "react";
import Ball from "./Ball";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { useCookies } from "react-cookie";
// import { useVerifyUserMutation } from "../../app/api/apiSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const [cookies, removeCookies] = useCookies([]);

  return (
    <div className="flex flex-col justify-center items-center align-middle w-[70%]">
      <motion.div className=" w-0 h-0 md:w-full md:h-[600px]" 
        initial={{ opacity: 0, translateY: -400  }}
        animate={{ translateY: 150 , opacity:100}} 
        transition={{ delay: 1, duration: 1 }}
      >

      <Ball />

      </motion.div>
      <motion.div className="w-full h-auto" 
        initial={{ opacity: 0, translateY: 200  }}
        animate={{ translateY: 0 , opacity:100, translateY: 0 }} 
        transition={{ delay: 0.5, duration: .8 }}
      >
      <h1 className="text-white text-center text-4xl tracking-[16px] uppercase opacity-90 pb-[40px] md:w-full ">
        Real Time Chat
      </h1>
      <p className="text-white text-xl tracking-[12px] text-center uppercase opacity-90 pb-[50px]">
        A quick and responsive full stack application for messageing, and making friends.
      </p>
      <div className="flex flex-col justify-center gap-8  w-full md:flex-row">
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className="hover:scale-105 flex-auto flex-grow-0 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 sm:w-full md:w-80 h-16 tracking-[7px] text-xl text-white uppercase "
        >
          Start Posting
        </button>
      </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
