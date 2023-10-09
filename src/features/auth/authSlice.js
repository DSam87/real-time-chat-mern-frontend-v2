import apiSlice from "../../app/api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyUser: builder.mutation({
      query: (userData) => ({
        url: "/",
        method: "POST",
        body: { ...userData },
      }),
    }),
  }),
});

export const { useVerifyUserMutation } = authSlice;
