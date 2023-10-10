import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../app/api/apiSlice";
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
    <>
      <h2 className="text-white text-4xl text-center tracking-[14px] uppercase pb-8 opacity-80 align-middle">
        Login
      </h2>
      {isFetching || isLoading ? (
        <div role="status" className="absolute !z-50 !opacity-100">
          <svg
            aria-hidden="true"
            class="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      ) : null}
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
    </>
  );
}

export default Login;
