import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteUserMutation } from "../../app/api/apiSlice";
import SpinComponent from "../../utilComponents/SpinComponent";
import { useCookies } from "react-cookie";

function UserPage() {
  const navigate = useNavigate();
  const [cookies, removeCookies] = useCookies([]);
  const { id } = useParams();

  const [deleteUser, { isLoading, isSuccess, isFetching }] =
    useDeleteUserMutation();

  async function handleDelete() {
    try {
      await deleteUser({ id }).unwrap();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      removeCookies("token");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex flex-col justify-center items-center align-middle w-[70%] ">
      {isFetching || isLoading ? <SpinComponent /> : null}
      <h1 className="text-white text-center text-4xl tracking-[16px] uppercase opacity-90 pb-[40px] md:w-full ">
        Delete your account?
      </h1>
      <p className="text-white text-xl tracking-[12px] text-center uppercase opacity-90 pb-[50px]">
        Thanks for trying out my app.
      </p>
      <div className="flex flex-col justify-center gap-8  w-full md:flex-row">
        <button
          onClick={() => {
            handleDelete();
          }}
          className="hover:scale-105 flex-auto flex-grow-0 hover:bg-red-500 duration-300 transform transition rounded-full bg-red-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700 sm:w-full md:w-80 h-16 tracking-[7px] text-xl text-white uppercase "
        >
          Delete Account
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className="hover:scale-105 flex-auto flex-grow-0 hover:bg-emerald-500 duration-300 transform transition rounded-full bg-emerald-400 bg-opacity-100 opacity-90 border-solid border-0 border-emerald-700  sm:w-full md:w-80 h-16 tracking-[7px] text-xl	 text-white uppercase "
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UserPage;
