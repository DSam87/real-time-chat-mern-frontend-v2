import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewUserMutation } from "../../app/api/apiSlice";
import { motion } from "framer-motion";
import SpinComponent from "../../utilComponents/SpinComponent";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [canSave, setCanSave] = useState(false);

  useEffect(() => {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let passwordGood =
      password === passwordConfirmation &&
      password.length > 2 &&
      passwordConfirmation.length > 2;
    let usernameGood = !(username.indexOf(" ") >= 0) && username.length >= 3;
    let emailGood = regex.test(email);

    setCanSave(passwordGood && usernameGood && emailGood);
  }, [username, email, password, passwordConfirmation]);

  const [singup, { isLoading, isSuccess, isFetching }] =
    useAddNewUserMutation();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isFetching) {
      const prom = await singup({ username, email, password });
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
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "passwordConfirmation":
        setPasswordConfirmation(value);
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
      <h2 className="text-white text-center text-4xl tracking-[14px] uppercase pb-8 opacity-80 align-middle">
        Signup
      </h2>
      {isFetching || isLoading ? (
        <SpinComponent />
      ) : null}
      <form className={`${isFetching ? "opacity-60" : "opacity-100"}`}>
        <label
          className="tracking-[4px] text-l text-white uppercase"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          autoComplete="off"
          id="username"
          name="username"
          className=" mb-4 bg-purple-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleOnChange}
          value={username}
          required
        />

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
          className=" mb-4 bg-purple-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleOnChange}
          required
          value={email}
        />

        <label
          htmlFor="password"
          className="tracking-[4px] text-l	 text-white uppercase"
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

        <label
          htmlFor="password-confirmation"
          className="tracking-[4px] text-l	 text-white uppercase"
        >
          Password Confirmation
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password-confirmation"
          name="passwordConfirmation"
          className=" mb-4 bg-purple-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleOnChange}
          value={passwordConfirmation}
          required
        />

        <div className={`flex flex-col flex-auto gap-3 `}>
          <button
            onClick={(e) => {
              if (!isFetching && !isLoading && canSave) {
                handleSubmit(e);
              }
            }}
            className={`${
              !canSave && "opacity-50 cursor-not-allowed"
            } hover:scale-105 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 w-80 h-16 tracking-[7px] text-xl	 text-white uppercase `}
          >
            Signup
          </button>

          <button
            onClick={(e) => {
              if (!isFetching) {
                navigate("/");
              }
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

export default Signup;
