import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ChatBox from "./ChatBox";
import SideNav from "./SideNav";
import { useVerifyUserMutation } from "../../app/api/apiSlice";
import SpinComponent from "../../utilComponents/SpinComponent";

function Dashboard() {
  const navigate = useNavigate();
  const [cookies, removeCookies] = useCookies([]);
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [cookieVerified, setCookieVarified] = useState(false);

  const [verifyUser, { isLoading, isSuccess, isError, error, isFetching }] =
    useVerifyUserMutation();

  useEffect(() => {
    console.log("RUN");
    const verifyCookie = async () => {
      console.log("cookies");
      console.log(cookies);

      if (!cookies.token || cookies.token === "undefined") {
        navigate("/");
      }

      const { data } = await verifyUser();
      console.log("data");
      console.log(data);
      setUserId(data.id);
      setUsername(data.username);
      setCookieVarified(true);
    };
    verifyCookie();
  }, [cookies, navigate, removeCookies]);

  const Logout = () => {
    setUserId();
    removeCookies("token");
    navigate("/");
  };

  return (
    <div className="dashboard flex flex-row justify-center items-center  w-[95%] h-[95%] max-h-[95%] ">
      {cookieVerified ? (
        <>
          {" "}
          <SideNav logoutHandler={Logout} userId={userId} username={username} />
          <ChatBox userId={userId} username={username} />
        </>
      ) : (
        <div role="status" className="absolute !z-50 !opacity-100">
  <SpinComponent/>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
