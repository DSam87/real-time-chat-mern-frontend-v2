import React from "react";
import Ball from "./Ball";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center align-middle w-[70%] ">
      <Ball />
      <h1 className="text-white text-center text-4xl tracking-[16px] uppercase opacity-90 pb-[40px] md:w-full ">
        Real Time Chat
      </h1>
      <p className="text-white text-xl tracking-[12px] text-center uppercase opacity-90 pb-[50px]">
        A quick and responsive full stack application for messageing, liking
        posts and making friends.
      </p>
      <div className="flex flex-col justify-center gap-8  w-full md:flex-row">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="hover:scale-105 flex-auto flex-grow-0 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 sm:w-full md:w-80 h-16 tracking-[7px] text-xl text-white uppercase "
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="hover:scale-105 flex-auto flex-grow-0 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700  sm:w-full md:w-80 h-16 tracking-[7px] text-xl	 text-white uppercase "
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default HomePage;
