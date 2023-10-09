import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-white text-4xl text-center tracking-[14px] uppercase pb-8 opacity-80 align-middle">
        Login
      </h2>
      <form
        className={``}
        // onSubmit={handleSubmit}
      >
        <label
          htmlFor="email"
          className="tracking-[4px] text-l	 text-white uppercase"
        >
          Email
        </label>
        <input
          type="email"
          autoComplete="off"
          id="email"
          name="email"
          className="mb-4 bg-purple-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // onChange={handleOnChange}
          // value={email}
        />

        <label
          htmlFor="password"
          className="tracking-[4px] text-l text-white uppercase"
        >
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          name="password"
          className=" mb-4 bg-purple-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // onChange={handleOnChange}
          // value={password}
        />

        <div className="flex flex-col flex-auto gap-3">
          <button
            onClick={() => {
              // navigate("/");
            }}
            className="hover:scale-105 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 w-80 h-16 tracking-[7px] text-xl	 text-white uppercase "
          >
            Login
          </button>

          <button
            onClick={() => {
              navigate("/");
            }}
            className="hover:scale-105 hover:bg-red-800 duration-300 transform transition rounded-full bg-red-700 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 w-80 h-16 tracking-[7px] text-xl	 text-white uppercase "
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
