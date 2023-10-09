import apiSlice from "../../app/api/apiSlice";

import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      validateStatus: (response, result) =>
        response.status === 200 && !result.isError,
      transformResponse: (responseData) => {
        const loadedUsers = responseData.map((user) => {
          user.id = user._id;
          return user;
        });
        return usersAdapter.setAll(initialState, loadedUsers);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" },
            ...result.ids.map((id) => ({ type: "User", id })),
          ];
        } else {
          return [{ type: "User", id: "List" }];
        }
      },
    }),
    addNewUser: builder.mutation({
      query: (newUserData) => ({
        url: "/signup",
        method: "POST",
        body: { ...newUserData },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

export const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => {
    return usersResult.data;
  }
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
);

export const { useGetUsersQuery, useAddNewUserMutation } = usersApiSlice;
