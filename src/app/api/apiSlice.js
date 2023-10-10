import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fullstack-chat-api.onrender.com",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    verifyUser: builder.mutation({
      query: (userData) => ({
        url: "/",
        method: "POST",
        body: { ...userData },
      }),
    }),
    addPost: builder.mutation({
      query: (postData) => ({
        url: "/post",
        method: "POST",
        body: { ...postData },
      }),
      invalidatesTags: ["Post"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: "/delete-user",
        method: "POST",
        body: { ...userId },
      }),
    }),
    addNewUser: builder.mutation({
      query: (newUserData) => ({
        url: "/signup",
        method: "POST",
        body: { ...newUserData },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: "LIST" }],
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: { ...loginData },
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useVerifyUserMutation,
  useAddPostMutation,
  useDeleteUserMutation,
  useAddNewUserMutation,
  useLoginUserMutation,
} = apiSlice;
