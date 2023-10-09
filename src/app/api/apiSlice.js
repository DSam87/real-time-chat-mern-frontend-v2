import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reduxerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState();
    //   console.log("token in prepareHeaders api slice");
    //   console.log(token);

    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  tagTypes: ["User", "Post"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
