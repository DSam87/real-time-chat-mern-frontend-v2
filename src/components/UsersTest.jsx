import React from "react";

import { useGetUsersQuery } from "../features/user/userSlice";

export default function UsersTest() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    fetch,
    error,
  } = useGetUsersQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <h1>apislice test for get all users</h1>
    </div>
  );
}
