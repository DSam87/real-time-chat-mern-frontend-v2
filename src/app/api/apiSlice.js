import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-chat-api-b8kz.onrender.com",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),

    addPost: builder.mutation({
      query: (postData) => ({
        url: "/post",
        method: "POST",
        body: { ...postData },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
} = apiSlice;
