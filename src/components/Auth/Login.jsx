import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../app/api/apiSlice";
import { motion } from "framer-motion"
import SpinComponent from "../../utilComponents/SpinComponent";

function Login() {
  const navigate = useNavigate();
  const [canSave, setCanSave] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  useEffect(() => {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let passwordGood = password.length > 2;
    let emailGood = regex.test(email);

    setCanSave(passwordGood && emailGood);
  }, [email, password]);

  const [login, { isSuccess, isLoading, error, isError, isFetching }] =
    useLoginUserMutation();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isFetching && canSave) {
      const prom = await login({ email, password });
      console.log(prom);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
    }
  }, [isSuccess, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        console.log("What did you change?!?");
    }
  };

  return (
    <motion.div className="" 
    initial={{ opacity: 0 }}
    animate={{ opacity:100}} 
    transition={{ duration: 1 }}
  >
      <h2 className="text-white text-4xl text-center tracking-[14px] uppercase pb-8 opacity-80 align-middle">
        Login
      </h2>
      {isFetching || isLoading ? <SpinComponent /> : null}
      <form className={``} onSubmit={(e) => e.preventDefault()}>
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
          onChange={handleOnChange}
          value={email}
          required
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
          onChange={handleOnChange}
          value={password}
          required
        />

        <div className="flex flex-col flex-auto gap-3">
          <button
            onClick={(e) => {
              if (!isFetching && !isLoading && canSave) {
                handleSubmit(e);
              }
            }}
            className={` ${
              !canSave && "opacity-50 cursor-not-allowed"
            } hover:scale-105 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 w-80 h-16 tracking-[7px] text-xl	 text-white uppercase `}
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
    </motion.div>
  );
}

export default Login;
